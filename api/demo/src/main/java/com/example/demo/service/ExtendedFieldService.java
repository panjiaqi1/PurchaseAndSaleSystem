package com.example.demo.service;

import com.example.demo.entity.ExtendedField;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ExtendedFieldService {
    /**
     * 删除
     */
    void delete(Long id);

    /**
     * 通过Id查询
     */
    ExtendedField findById(Long id);

    /**
     * 获取所有
     */
    List<ExtendedField> findAll();

    /**
     * 保存
     */
    void save(ExtendedField extendedField);


    /**
     * 分页
     */
    Page<ExtendedField> page(Pageable pageable);


    /**
     * 更新
     */
    void update(Long id, ExtendedField extendedField);
}
