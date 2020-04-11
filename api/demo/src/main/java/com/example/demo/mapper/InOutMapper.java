package com.example.demo.mapper;

import com.example.demo.entity.InOut;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * 进出库仓库，对应 InOutMapper.xml
 */
@Mapper
public interface InOutMapper {

    List<InOut> findAllByGoodId(Long productId);
}
