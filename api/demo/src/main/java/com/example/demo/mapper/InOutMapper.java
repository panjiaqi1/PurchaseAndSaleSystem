package com.example.demo.mapper;

import com.example.demo.entity.Good;
import com.example.demo.entity.InOut;
import org.apache.ibatis.annotations.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 进出库仓库，对应 InOutMapper.xml
 *
 * @author panjiaqi
 */
@Mapper
@Repository
public interface InOutMapper extends CrudMapper<InOut, Long> {
    /**
     * 保存
     */
    void save(@Param("amount") Integer amount, @Param("beInput") boolean beInput,
              @Param("createTime") Long createTime, @Param("goodId") Long goodId, @Param("userId") Long userId);




    /**
     * 更新
     *
     * @param inOut 实体
     * @return 更新成功true, 失败false
     */
    @Override
    @Update("UPDATE in_out SET amount = #{inOut.amount}, good_id = #{inOut.good.id}, " +
            "WHERE id = #{inOut.id}")
    boolean update(@Param("inOut") InOut inOut);

    @Override
    @Insert("INSERT INTO in_out (amount, create_time, deleted, good_id, be_input) VALUES (#{inOut.amount}, #{inOut.createTime}, false, #{inOut.good.id}, #{inOut.beInput})")
    @SelectKey(statement = "select last_insert_id()", keyProperty = "inOut.id", before = false, resultType = long.class)
    void insert(@Param("inOut") InOut inOut);
}
