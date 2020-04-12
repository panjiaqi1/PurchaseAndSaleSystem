package com.example.demo.service;

import com.example.demo.entity.Unit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface UnitService {
    /**
     * 新增单位
     */
    void save(Unit unit);

    /**
     * 获取所有单位
     */
    List<Unit> findAll();

    /**
     * 更新单位
     */
    void update(Long id, Unit unit);

    /**
     * 通过Id获取单位
     */
    Unit findById(Long id);

    /**
     * 删除
     */
    void delete(Long id);

    /**
     * 分页
     */
    Page<Unit> page(Pageable pageable);
}
