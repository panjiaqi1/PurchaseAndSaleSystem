package com.example.demo.service;

import com.example.demo.entity.Good;
import com.example.demo.entity.GoodExtendedField;
import com.example.demo.mapper.*;
import org.redisson.api.RLock;
import org.redisson.api.RedissonClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class GoodServiceImpl implements GoodService {
    private final static Logger logger = LoggerFactory.getLogger(GoodServiceImpl.class);

    private final GoodMapper goodMapper;
    private final UnitMapper unitMapper;
    private final GoodExtendedFieldMapper goodExtendedFieldMapper;
    private final ExtendedFieldMapper extendedFieldMapper;
    private final RedissonClient redissonClient;

    public GoodServiceImpl(GoodMapper goodMapper, UnitMapper unitMapper, GoodExtendedFieldMapper goodExtendedFieldMapper, ExtendedFieldMapper extendedFieldMapper, RedissonClient redissonClient) {
        this.goodMapper = goodMapper;
        this.unitMapper = unitMapper;
        this.goodExtendedFieldMapper = goodExtendedFieldMapper;
        this.extendedFieldMapper = extendedFieldMapper;
        this.redissonClient = redissonClient;
    }

    @Override
    public void save(Good good) {
        Assert.notNull(good, "null");
        Assert.notNull(good.getUnit(), "null");
        Assert.notNull(good.getUnit().getId(), "null");
        goodMapper.save(good);

        List<GoodExtendedField> goodExtendedFields = good.getGoodExtendedFieldList();
        for (GoodExtendedField goodExtendedField : goodExtendedFields) {
            goodExtendedField.setGood(good);
            goodExtendedFieldMapper.save(goodExtendedField);
        }

    }

    @Override
    public List<Good> findAll() {
        return goodMapper.findAll();
    }

    @Override
    public void update(Long id, Good good) {
        Good oldGood = goodMapper.findById(id).orElseThrow(() -> new EntityNotFoundException("未找到"));
        oldGood.setName(good.getName());
        oldGood.setDescription(good.getDescription());
        oldGood.setUnit(good.getUnit());
        goodMapper.save(oldGood);

        List<GoodExtendedField> goodExtendedFields = good.getGoodExtendedFieldList();
        for (GoodExtendedField goodExtendedField : goodExtendedFields) {
            if (goodExtendedField.getId() == null) {
                goodExtendedField.setGood(oldGood);
            }
            goodExtendedFieldMapper.save(goodExtendedField);
        }
    }

    @Override
    public Good findById(Long id) {
        Good good = goodMapper.findById(id).orElseThrow(() -> new EntityNotFoundException("未找到"));
        good.setUnit(unitMapper.findById(good.getUnit().getId()).orElseThrow(() -> new EntityNotFoundException("未找到")));
        this.goodExtendedField(good, good.getId().toString());
        return good;
    }

    @Override
    public void delete(Long id) {
        goodMapper.delete(id);
    }

    @Override
    public Page<Good> page(Pageable pageable, String name) {
        // 构造查询参数
        List<QueryParam> queryParams = new ArrayList<>();
        // 判断是否出入name
        if (name != null) {
            QueryParam goodIdQueryParam = new QueryParam("good.name", name, QueryType.CONTAINING);
            queryParams.add(goodIdQueryParam);
        }

        Page<Good> goodPage = goodMapper.page(queryParams, pageable);
        for (Good good : goodPage.getContent()) {
            this.goodExtendedField(good, good.getId().toString());
        }
        return goodPage;
    }

    /**
     * 构造good中 goodExtendedFieldList
     */
    private void goodExtendedField(Good good, String id) {
        // 构造查询参数并通过goodId查询
        List<GoodExtendedField> goodExtendedFieldList = goodExtendedFieldMapper.findAll(new ArrayList<>(
                Arrays.asList(new QueryParam("good_id", id))));

        // 获取扩展字段记录
        good.setGoodExtendedFieldList(goodExtendedFieldList);

        // 获取扩展字段
        for (GoodExtendedField goodExtendedField : goodExtendedFieldList) {
            goodExtendedField.setExtendedField(extendedFieldMapper.findById(goodExtendedField.getExtendedField().getId()).orElseThrow(() -> new EntityNotFoundException("未找到")));
        }
    }

    /**
     * 更新货物库存
     *
     * @param id 货物ID
     */
    @Override
    @CacheEvict(value = "goodStocks", key = "#id")
    public void updateStockById(Long id, Integer amount) {
        RLock lock = redissonClient.getFairLock("good_" + id.toString());
        // 上锁
        try {
            logger.info("尝试上锁");
            lock.lock();

            // 获取上锁后的最新数据后更新库存
            Good good = goodMapper.findById(id).orElseThrow(() -> new EntityNotFoundException("未找到"));
            good.setStock(good.getStock() + amount);
            if (good.getStock().compareTo(0) < 0) {
                throw new RuntimeException("库存不足");
            }
            goodMapper.save(good);
        } finally {
            // 在finally中解锁
            logger.info("解锁成功");
            lock.unlock();
        }
    }
}
