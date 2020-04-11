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
     * @return List<Unit>
     */
    List<Unit> findAll();

    /**
     * 新增
     *
     * @param unit 单位
     */
    void add(Unit unit);

    /**
     * 删除
     *
     * @param id 单位Id
     */
    void delete(Long id);

    /**
     * 编辑
     */
    void update(String name, Long id);

    /**
     * 通过Id查询
     *
     * @param id 单位Id
     * @return Unit
     */
    Unit findById(Long id);
}
