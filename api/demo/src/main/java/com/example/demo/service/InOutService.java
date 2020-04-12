package com.example.demo.service;

import com.example.demo.entity.InOut;

import java.util.List;

public interface InOutService {
    /**
     * 进货
     */
    void save(InOut inOut);

    /**
     * 通过货物获取所有进货记录
     */
    List<InOut> findAllByBeInputAndGoodId(Long goodId);
}