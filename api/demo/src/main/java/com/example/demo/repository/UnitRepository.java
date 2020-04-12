package com.example.demo.repository;

import com.example.demo.entity.Unit;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 单位仓库，用于自动创建数据表
 *
 * @author panjiaqi
 */
public interface UnitRepository extends JpaRepository<Unit, Long> {
}
