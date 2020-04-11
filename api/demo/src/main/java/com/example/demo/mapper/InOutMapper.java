package com.example.demo.mapper;

import com.example.demo.entity.InOut;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 进出库仓库，对应 InOutMapper.xml
 */
@Mapper
@Repository
public interface InOutMapper {

    List<InOut> findAllByGoodId(Long productId);

    /**
     * 进货
     */
    void inGoodSave(Integer amount, Integer inputOrOutput, Long createTime, Long goodId, Long userId);

    /**
     * 所有进货记录
     */
    List<InOut> findAllByIn();
}
