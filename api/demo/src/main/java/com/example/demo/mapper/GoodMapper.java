package com.example.demo.mapper;

import com.example.demo.entity.Good;
import com.example.demo.entity.GoodExtendedField;
import com.example.demo.entity.Unit;
import org.apache.ibatis.annotations.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 货物仓库，对应 GoodMapper.xml
 *
 * @author panjiaqi
 */
@Mapper
@Repository
public interface GoodMapper extends CrudMapper<Good, Long> {

    /**
     * 分页数据
     *
     * @return List<Good>
     */
    List<Good> findAll(@Param("name") String name, @Param("pageable") Pageable pageable);

    /**
     * 分页数据
     *
     * @param pageable 分页参数
     * @return
     */
    default Page<Good> page(@Param("pageable") Pageable pageable, @Param("name") String name) {
        return new PageImpl<>(
                this.findAll(name, pageable),
                pageable,
                this.count()
        );
    }

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
    @Delete("DELETE FROM good WHERE id = #{id}")
    boolean delete(@Param("id") Long id);

    /**
     * 新增
     */
    void save(@Param("name") String name, @Param("description") String description, @Param("unitId") Long unitId);

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

    @Override
    @Insert("INSERT INTO good (name, description, stock, unit_id, deleted) VALUES (#{good.name}, #{good.description}, #{good.stock}, #{good.unit.id}, false)")
    @SelectKey(statement = "select last_insert_id()", keyProperty = "good.id", before = false, resultType = long.class)
    void insert(@Param("good") Good good);
}
