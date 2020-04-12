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
     * 通过Id查询
     *
     * @param id 出/入库Id
     * @return InOut
     */
    InOut findById(@Param("id") Long id);

    /**
     * 分页数据
     *
     * @return List<InOut>
     */
    List<InOut> findAll(@Param("goodId") Long goodId, @Param("inPut") boolean inPut, @Param("pageable") Pageable pageable);

    /**
     * 分页数据
     *
     * @param pageable 分页参数
     * @return
     */
    default Page<InOut> page(@Param("pageable") Pageable pageable, @Param("goodId") Long goodId, @Param("inPut") boolean inPut) {
        return new PageImpl<>(
                this.findAll(goodId, inPut, pageable),
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
    @Select("select count(*) from in_out")
    long count();

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
}
