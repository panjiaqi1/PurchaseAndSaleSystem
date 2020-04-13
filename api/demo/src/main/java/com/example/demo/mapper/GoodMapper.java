package com.example.demo.mapper;

import com.example.demo.entity.Good;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * 货物仓库，对应 GoodMapper.xml
 *
 * @author panjiaqi
 */
@Mapper
@Repository
public interface GoodMapper extends CrudMapper<Good, Long> {

    @Override
    default Optional<Good> findById(Long id) {
        return this.findById(id, "good.id");
    }

    /**
     * 删除
     *
     * @param id 扩展字段Id
     */
    @Override
    @Delete("DELETE FROM good WHERE id = #{id}")
    boolean delete(@Param("id") Long id);

    /**
     * 插入新数据
     */
    @Override
    @Insert("INSERT INTO good (name, description, stock, unit_id) VALUES (#{good.name}, #{good.description}, #{good.stock}, #{good.unit.id})")
    @SelectKey(statement = "select last_insert_id()", keyProperty = "good.id", before = false, resultType = long.class)
    void insert(@Param("good") Good good);

    /**
     * 更新
     *
     * @param good 实体
     * @return 更新成功true, 失败false
     */
    @Override
    @Update("UPDATE good SET name = #{good.name}, description = #{good.description}, " +
            "stock = #{good.stock}, unit_id = #{good.unit.id} WHERE id = #{good.id}")
    boolean update(@Param("good") Good good);

}
