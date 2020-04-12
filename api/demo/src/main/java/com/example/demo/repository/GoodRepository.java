package com.example.demo.repository;

import com.example.demo.entity.Good;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 货物仓库，用于自动创建数据表
 *
 * @author panjiaqi
 */
public interface GoodRepository extends JpaRepository<Good, Long> {
}
