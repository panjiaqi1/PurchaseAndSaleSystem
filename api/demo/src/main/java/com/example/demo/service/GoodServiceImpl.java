package com.example.demo.service;

import com.example.demo.entity.Good;
import com.example.demo.mapper.UnitMapper;
import com.example.demo.mapper.GoodMapper;
import org.springframework.stereotype.Service;

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
    public void add(Good product) {

        goodMapper.save(product.getName(), product.getDescription(), product.getUnit().getId());
    }

    @Override
    public List<Good> findAll() {
        return null;
//        List<Product> productList = goodMapper.findAll();
//        for (Product product : productList) {
////            product.setInOutLibraryList(this.inOutMapper.findAllByProductId(product.getId()));
//        }
    }

    @Override
    public void update(Good product) {

    }

    @Override
    public Good findById(Long id) {
        Good good = goodMapper.findById(id);
        good.setUnit(unitMapper.findById(good.getUnit().getId()));
        return good;
    }

    @Override
    public void delete(Long id) {

    }
}
