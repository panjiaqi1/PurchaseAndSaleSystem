package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *  用户仓库，用于自动创建数据表
 *
 *  @author panjiaqi
 */
public interface UserRepository extends JpaRepository<User, Long> {
}
