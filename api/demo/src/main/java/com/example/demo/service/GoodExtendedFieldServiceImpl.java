package com.example.demo.service;

import com.example.demo.entity.GoodExtendedField;
import com.example.demo.mapper.ExtendedFieldMapper;
import com.example.demo.mapper.GoodExtendedFieldMapper;
import com.example.demo.mapper.GoodMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;


@Service
public class GoodExtendedFieldServiceImpl implements GoodExtendedFieldService {

    private final GoodExtendedFieldMapper goodExtendedFieldMapper;
    private final GoodMapper goodMapper;
    private final ExtendedFieldMapper extendedFieldMapper;

    public GoodExtendedFieldServiceImpl(GoodExtendedFieldMapper goodExtendedFieldMapper, GoodMapper goodMapper, ExtendedFieldMapper extendedFieldMapper) {
        this.goodExtendedFieldMapper = goodExtendedFieldMapper;
        this.goodMapper = goodMapper;
        this.extendedFieldMapper = extendedFieldMapper;
    }

    @Override
    public void delete(Long id) {
        goodExtendedFieldMapper.delete(id);
    }

    @Override
    public GoodExtendedField findById(Long id) {
        return goodExtendedFieldMapper.findById(id).get();
    }

    @Override
    public void save(GoodExtendedField goodExtendedField) {
        Assert.notNull(goodExtendedField, "扩展字段记录不能为空");
        Assert.notNull(goodExtendedField.getGood().getId(), "扩展字段记录中货物Id不能为空");
        Assert.notNull(goodExtendedField.getExtendedField().getId(), "扩展字段记录中扩展字段Id不能为空");
        goodExtendedFieldMapper.save(goodExtendedField);
    }

    @Override
    public Page<GoodExtendedField> page(Pageable pageable) {
        Page<GoodExtendedField> goodExtendedFieldPage = goodExtendedFieldMapper.page(pageable);
        for (GoodExtendedField goodExtendedField : goodExtendedFieldPage.getContent()) {
            goodExtendedField.setGood(goodMapper.findById(goodExtendedField.getGood().getId()).get());
            goodExtendedField.setExtendedField(extendedFieldMapper.findById(goodExtendedField.getExtendedField().getId()).get());
        }
        return goodExtendedFieldPage;
    }

    @Override
    public void update(Long id, GoodExtendedField goodExtendedField) {
        GoodExtendedField oldGoodExtendedField = this.findById(id);
        oldGoodExtendedField.setValue(goodExtendedField.getValue());
        oldGoodExtendedField.setGood(goodExtendedField.getGood());
        oldGoodExtendedField.setExtendedField(goodExtendedField.getExtendedField());
        goodExtendedFieldMapper.save(oldGoodExtendedField);
    }
}
