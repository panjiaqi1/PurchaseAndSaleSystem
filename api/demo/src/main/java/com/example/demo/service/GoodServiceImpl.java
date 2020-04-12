package com.example.demo.service;

import com.example.demo.entity.Good;
import com.example.demo.entity.GoodExtendedField;
import com.example.demo.mapper.ExtendedFieldMapper;
import com.example.demo.mapper.GoodExtendedFieldMapper;
import com.example.demo.mapper.UnitMapper;
import com.example.demo.mapper.GoodMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

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
        goodMapper.save(good.getName(), good.getDescription(), good.getUnit().getId());
    }

    @Override
    public List<Good> findAll() {
        return goodMapper.findAll(null, null);
    }

    @Override
    public void update(Long id, Good good) {
        Good oldGood = goodMapper.findById(id);
        oldGood.setName(good.getName());
        oldGood.setDescription(good.getDescription());
        oldGood.setUnit(good.getUnit());
        goodMapper.save(oldGood);

    }

    @Override
    public Good findById(Long id) {
        Good good = goodMapper.findById(id);
        good.setUnit(unitMapper.findById(good.getUnit().getId()));
        return good;
    }

    @Override
    public void delete(Long id) {
        goodMapper.delete(id);
    }

    @Override
    public Page<Good> page(Pageable pageable, String name) {
        Page<Good> goodPage = goodMapper.page(pageable, name);
        for (Good good : goodPage.getContent()) {
            List<GoodExtendedField> goodExtendedFieldList = goodExtendedFieldMapper.findAllByGoodId(good.getId());
            good.setGoodExtendedFieldList(goodExtendedFieldList);
            for (GoodExtendedField goodExtendedField : goodExtendedFieldList) {
                goodExtendedField.setExtendedField(extendedFieldMapper.findById(goodExtendedField.getExtendedField().getId()));
            }
        }
        return goodPage;
    }
}
