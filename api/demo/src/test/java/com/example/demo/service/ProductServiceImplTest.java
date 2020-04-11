package com.example.demo.service;

import com.example.demo.entity.Good;
import com.example.demo.entity.InOut;
import com.example.demo.mapper.InOutMapper;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ProductServiceImplTest {
    @Autowired

    GoodService productService;

    @Autowired
    InOutService inOutService;

    @Test
    void findById() {
        Good product = this.productService.findById(1L);
    }

    @Test
    void find() {
        List<InOut> product = this.inOutService.findAllByGoodId(1L);
    }
}