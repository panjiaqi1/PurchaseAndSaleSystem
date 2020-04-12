package com.example.demo.repository;

import com.example.demo.entity.GoodExtendedField;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 扩展字段记录仓库，用于自动创建数据表
 *
 * @author panjiaqi
 */
public interface GoodExtendedFieldRepository extends JpaRepository<GoodExtendedField, Long> {
}
