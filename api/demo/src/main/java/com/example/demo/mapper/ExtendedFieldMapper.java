package com.example.demo.mapper;

import com.example.demo.entity.ExtendedField;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

/**
 * 扩展字段仓库，对应 ExtendedFieldMapper.xml
 *
 * @author panjiaqi
 */
@Mapper
@Repository
public interface ExtendedFieldMapper extends CrudMapper<ExtendedField, Long> {

    /**
     * 当前数据总条数
     *
     * @return 总数
     */
    @Override
    @Select("select count(*) from extended_field")
    long count();

    /**
     * 删除
     *
     * @param id 扩展字段Id
     */
    @Override
    @Delete("DELETE FROM extended_field WHERE id = #{id}")
    boolean delete(@Param("id") Long id);

    /**
     * 插入新数据，并返回主键值
     *
     * @param extendedField 实体
     * @return 主键值
     */
    @Override
    @Insert("INSERT INTO extended_field (name) VALUES (#{extendedField.name})")
    @SelectKey(statement = "select last_insert_id()", keyProperty = "extendedField.id", before = false, resultType = long.class)
    void insert(@Param("extendedField") ExtendedField extendedField);

    /**
     * 更新
     *
     * @param extendedField 实体
     * @return 更新成功true, 失败false
     */
    @Override
    @Update("UPDATE extended_field SET name = #{extendedField.name} WHERE id = #{extendedField.id}")
    boolean update(@Param("extendedField") ExtendedField extendedField);
}
