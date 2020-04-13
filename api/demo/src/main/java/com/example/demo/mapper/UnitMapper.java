package com.example.demo.mapper;

import com.example.demo.entity.Unit;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * 单位库仓库，对应 UnitMapper.xml
 *
 * @author panjiaqi
 */
@Mapper
@Repository
public interface UnitMapper extends CrudMapper<Unit, Long> {


    /**
     * 删除
     *
     * @param id 单位Id
     */
    @Override
    @Delete("DELETE FROM unit WHERE id = #{id}")
    boolean delete(@Param("id") Long id);

    /**
     * 插入新数据，并返回主键值
     *
     * @param unit 实体
     * @return 主键值
     */
    @Override
    @Insert("INSERT INTO unit (name) VALUES (#{unit.name})")
    @SelectKey(statement = "select last_insert_id()", keyProperty = "unit.id", before = false, resultType = long.class)
    void insert(@Param("unit") Unit unit);

    /**
     * 更新
     *
     * @param unit 实体
     * @return 更新成功true,失败false
     */
    @Override
    @Update("UPDATE unit SET name = #{unit.name} WHERE id = #{unit.id}")
    boolean update(@Param("unit") Unit unit);
}
