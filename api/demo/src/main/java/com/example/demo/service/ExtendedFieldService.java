package com.example.demo.service;

import com.example.demo.entity.ExtendedField;

import java.util.List;

public interface ExtendedFieldService {
    /**
     * 获取所有
     */
    List<ExtendedField> findAll();

    /**
     * 删除
     */
    void delete(Long id);

    /**
     * 新增
     */
    void save(ExtendedField extendedField);

}
