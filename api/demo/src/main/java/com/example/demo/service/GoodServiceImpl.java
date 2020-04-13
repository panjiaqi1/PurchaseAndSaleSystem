package com.example.demo.service;

import com.example.demo.entity.Good;
import com.example.demo.entity.GoodExtendedField;
import com.example.demo.mapper.*;
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

    private final GoodMapper goodMapper;
    private final UnitMapper unitMapper;
    private final GoodExtendedFieldMapper goodExtendedFieldMapper;
    private final ExtendedFieldMapper extendedFieldMapper;

    public GoodServiceImpl(GoodMapper goodMapper, UnitMapper unitMapper, GoodExtendedFieldMapper goodExtendedFieldMapper, ExtendedFieldMapper extendedFieldMapper) {
        this.goodMapper = goodMapper;
        this.unitMapper = unitMapper;
        this.goodExtendedFieldMapper = goodExtendedFieldMapper;
        this.extendedFieldMapper = extendedFieldMapper;
    }

    @Override
    public void save(Good good) {
        Assert.notNull(good, "null");
        Assert.notNull(good.getUnit(), "null");
        Assert.notNull(good.getUnit().getId(), "null");
        goodMapper.save(good);
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

    }

    @Override
    public Good findById(Long id) {
        Good good = goodMapper.findById(id).orElseThrow(() -> new EntityNotFoundException("未找到"));
        good.setUnit(unitMapper.findById(good.getUnit().getId()).orElseThrow(() -> new EntityNotFoundException("未找到")));
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
            // 构造查询参数并通过goodId查询
            List<GoodExtendedField> goodExtendedFieldList = goodExtendedFieldMapper.findAll(new ArrayList<>(
                    Arrays.asList(new QueryParam("good_id", good.getId().toString()))));
            // 获取扩展字段记录
            good.setGoodExtendedFieldList(goodExtendedFieldList);

            // 获取扩展字段
            for (GoodExtendedField goodExtendedField : goodExtendedFieldList) {
                goodExtendedField.setExtendedField(extendedFieldMapper.findById(goodExtendedField.getExtendedField().getId()).orElseThrow(() -> new EntityNotFoundException("未找到")));
            }
        }
        return goodPage;
    }
}
