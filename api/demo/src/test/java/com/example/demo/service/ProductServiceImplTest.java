package com.example.demo.service;

import com.example.demo.entity.Good;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ProductServiceImplTest {
    @Autowired

    GoodService productService;

    @Test
    void findById() {
        Good product = this.productService.findById(1L);
    }
}