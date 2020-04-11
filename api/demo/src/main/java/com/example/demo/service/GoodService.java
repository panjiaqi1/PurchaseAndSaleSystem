package com.example.demo.service;

import com.example.demo.entity.Good;

import java.util.List;

public interface GoodService {
    /**
     * 新增产品
     */
    void add(Good product);

    /**
     * 获取所有产品
     */
    List<Good> findAll();

    /**
     * 更新
     */
    void update(Good product);

    /**
     * 通过Id获取产品
     */
    Good findById(Long id);

    /**
     * 删除
     */
    void delete(Long id);
}
