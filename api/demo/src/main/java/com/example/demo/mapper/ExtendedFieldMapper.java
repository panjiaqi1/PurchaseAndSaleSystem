package com.example.demo.mapper;

import com.example.demo.entity.ExtendedField;
import com.example.demo.entity.InOut;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * 扩展字段仓库，对应 ExtendedFieldMapper.xml
 */
@Mapper
public interface ExtendedFieldMapper {
    /**
     * 新增
     */
    void save(ExtendedField extendedField);

    /**
     * 获取所有
     */
    List<ExtendedField> findAll();


    /**
     * 删除
     */
    void delete(Long id);
}
