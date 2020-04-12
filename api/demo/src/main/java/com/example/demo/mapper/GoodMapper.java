package com.example.demo.mapper;

import com.example.demo.entity.Good;
import com.example.demo.entity.Unit;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.SelectKey;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 货物仓库，对应 GoodMapper.xml
 */
@Mapper
@Repository
public interface GoodMapper {

    /**
     * 获取所有
     *
     * @return List<Product>
     */
    List<Good> findAll();

    /**
     * 新增
     */
    void save(String name, String description, Long unitId);

    void updateStock(Integer stock, Long id);

    @Insert("INSERT INTO good (name, unit_id) VALUES (#{good.name}, #{good.unit.id})")
    @SelectKey(statement = "select last_insert_id()", keyProperty = "good.id", before = false, resultType = long.class)
    void insert(@Param("good") Good good);

    /**
     * 删除
     *
     * @param id 单位Id
     */
    void delete(Long id);

    /**
     * 编辑
     *
     * @param good 产品
     */
    void update(Good good);

    /**
     * 通过Id查询
     *
     * @param id 产品Id
     * @return Product
     */
    Good findById(Long id);
}
