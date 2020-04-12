package com.example.demo.mapper;

import com.example.demo.entity.InOut;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 进出库仓库，对应 InOutMapper.xml
 *
 * @author panjiaqi
 */
@Mapper
@Repository
public interface InOutMapper {
    /**
     * 进货
     */
    void inGoodSave(Integer amount, Integer inputOrOutput, Long createTime, Long goodId, Long userId);

    /**
     * 按出/入库、货物进行查询获取所有记录
     */
    List<InOut> findAllByBeInputAndGoodId(boolean BeInput, @Param("id") Long goodId);
}
