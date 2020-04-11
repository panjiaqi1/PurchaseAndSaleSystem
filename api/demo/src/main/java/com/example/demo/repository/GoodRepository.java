package com.example.demo.repository;

import com.example.demo.entity.Good;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 产品仓库，用于自动创建数据表
 */
public interface GoodRepository extends JpaRepository<Good, Long> {
}
