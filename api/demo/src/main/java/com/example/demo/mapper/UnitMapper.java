package com.example.demo.mapper;

import com.example.demo.entity.Unit;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

/**
 * 单位库仓库，对应 UnitMapper.xml
 */
@Mapper
public interface UnitMapper {

    /**
     * 获取所有
     *
     * @return List<Company>
     */
    List<Unit> findAll();

    /**
     * 新增
     *
     * @param company 单位
     */
    void add(Unit company);

    /**
     * 删除
     *
     * @param id 单位Id
     */
    void delete(Long id);

    /**
     * 编辑
     *
     * @param company 单位
     */
    void update(Unit company);

    /**
     * 通过Id查询
     *
     * @param id 单位Id
     * @return Company
     */
    Unit findById(Long id);
}
