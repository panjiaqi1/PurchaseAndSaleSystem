package com.example.demo.mapper;

import com.example.demo.entity.GoodExtendedField;
import com.example.demo.entity.InOut;
import com.example.demo.entity.Good;

import java.util.List;

import com.example.demo.repository.GoodRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ProductMapperTest {
    @Autowired
    GoodMapper productMapper;
    @Autowired
    GoodRepository productRepository;
    @Autowired
    GoodExtendedFieldMapper goodExtendedFieldMapper;

    @Test
    public void save() {
        this.productMapper.save("1", "2", 1L);
    }

    @Test
    public void findAll() {
        List<Good> products = this.productMapper.findAll();

    }

    @Test
    public void findById() {
        Good product = this.productMapper.findById(1L);

    }
}