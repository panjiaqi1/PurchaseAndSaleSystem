package com.example.demo.mapper;

import com.example.demo.entity.GoodExtendedField;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;


/**
 * 扩展字段记录仓库，对应 GoodExtendedFieldMapper.xml
 *
 * @author panjiaqi
 */
@Mapper
@Repository
public interface GoodExtendedFieldMapper extends CrudMapper<GoodExtendedField, Long> {

    /**
     * 删除
     *
     * @param id 扩展字段Id
     */
    @Override
    @Delete("DELETE FROM good_extended_field WHERE id = #{id}")
    boolean delete(@Param("id") Long id);

    /**
     * 插入新数据
     */
    @Override
    @Insert("INSERT INTO good_extended_field (value, extended_field_id, good_id) " +
            "VALUES (#{goodExtendedField.value},#{goodExtendedField.extendedField.id}," +
            "#{goodExtendedField.good.id})")
    @SelectKey(statement = "select last_insert_id()", keyProperty = "goodExtendedField.id", before = false, resultType = long.class)
    void insert(@Param("goodExtendedField") GoodExtendedField goodExtendedField);

    /**
     * 更新
     *
     * @param goodExtendedField 实体
     * @return 更新成功true, 失败false
     */
    @Override
    @Update("UPDATE good_extended_field SET " +
            "value = #{goodExtendedField.value}, " +
            "extended_field_id = #{goodExtendedField.extendedField.id}, " +
            "good_id = #{goodExtendedField.good.id} " +
            "WHERE id = #{goodExtendedField.id}")
    boolean update(@Param("goodExtendedField") GoodExtendedField goodExtendedField);
}
