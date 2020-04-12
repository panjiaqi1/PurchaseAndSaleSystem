package com.example.demo.repository;

import com.example.demo.entity.InOut;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 进出库库仓库，用于自动创建数据表
 *
 * @author panjiaqi
 */
public interface InOutRepository extends JpaRepository<InOut, Long> {
}
