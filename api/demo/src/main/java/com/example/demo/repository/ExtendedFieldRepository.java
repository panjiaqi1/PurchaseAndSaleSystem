package com.example.demo.repository;

import com.example.demo.entity.ExtendedField;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 扩展字段定义仓库，用于自动创建数据表
 */
public interface ExtendedFieldRepository extends JpaRepository<ExtendedField, Long> {
}
