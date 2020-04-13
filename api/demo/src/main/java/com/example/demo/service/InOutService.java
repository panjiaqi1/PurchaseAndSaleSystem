package com.example.demo.service;

import com.example.demo.entity.InOut;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface InOutService {
    /**
     * 保存
     */
    void save(InOut inOut);

    /**
     * 通过Id查询
     */
    InOut findById(Long id);

    /**
     * 更新
     */
    void update(Long id, InOut inOut);

    /**
     * 分页
     */
    Page<InOut> page(Pageable pageable, Long goodId, boolean beInput);

}
