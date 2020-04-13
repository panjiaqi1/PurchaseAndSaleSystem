package com.example.demo.mapper;

import com.example.demo.entity.GoodExtendedField;
import java.util.List;
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
     * 保存
     */
    void save(@Param("value") String value, @Param("goodId") Long goodId, @Param("extendedFieldId") Long extendedFieldId);

    /**
     * 通过GoodId查询
     */
    List<GoodExtendedField> findAllByGoodId(@Param("GoodId") Long GoodId);

    /**
     * 当前数据总条数
     *
     * @return 总数
     */
    @Override
    @Select("select count(*) from good_extended_field")
    long count();

    /**
     * 删除
     *
     * @param id 扩展字段Id
     */
    @Override
    @Delete("DELETE FROM good_extended_field WHERE id = #{id}")
    boolean delete(@Param("id") Long id);

    /**
     * 插入新数据，并返回主键值
     *
     * @param goodExtendedField 实体
     * @return 主键值
     */
    @Override
    @Insert("INSERT INTO good_extended_field (value) VALUES (#{goodExtendedField.value})")
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
