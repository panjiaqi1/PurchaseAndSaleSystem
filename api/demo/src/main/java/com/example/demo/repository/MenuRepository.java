package com.example.demo.repository;

import com.example.demo.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 菜单仓库，用于自动创建数据表
 */
public interface MenuRepository extends JpaRepository<Menu, Long> {
}
