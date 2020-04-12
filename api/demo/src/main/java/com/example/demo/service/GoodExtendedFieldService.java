package com.example.demo.service;

import com.example.demo.entity.GoodExtendedField;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface GoodExtendedFieldService {
    /**
     * 删除
     */
    void delete(Long id);

    /**
     * 通过Id查询
     */
    GoodExtendedField findById(Long id);

    /**
     * 保存
     */
    void save(GoodExtendedField goodExtendedField);


    /**
     * 分页
     */
    Page<GoodExtendedField> page(Pageable pageable);


    /**
     * 更新
     */
    void update(Long id, GoodExtendedField goodExtendedField);
}
