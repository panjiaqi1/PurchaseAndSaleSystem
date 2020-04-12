package com.example.demo.service;

import com.example.demo.entity.Good;
import com.example.demo.mapper.UnitMapper;
import com.example.demo.mapper.GoodMapper;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;

@Service
public class GoodServiceImpl implements GoodService {

    private final GoodMapper goodMapper;
    private final UnitMapper unitMapper;

    public GoodServiceImpl(GoodMapper goodMapper, UnitMapper unitMapper) {
        this.goodMapper = goodMapper;
        this.unitMapper = unitMapper;
    }

    @Override
    public void save(Good good) {
//        Assert.notNull(good, "null");
//        Assert.notNull(good.getUnit(), "null");
//        Assert.notNull(good.getUnit().getId(),"null");
//        goodMapper.save(good);
//        goodMapper.save(good.getName(), good.getDescription(), good.getUnit().getId());
    }

    @Override
    public List<Good> findAll() {
        List<Good> goodList = goodMapper.findAll();
        return goodList;
    }

    @Override
    public void update(Long id, Good good) {

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
}
