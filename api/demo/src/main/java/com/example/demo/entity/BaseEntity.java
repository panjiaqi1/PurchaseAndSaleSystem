package com.example.demo.entity;

/**
 * 基础实体
 *
 * @param <D> 主键类型
 * @author panjiaqi
 */
public interface BaseEntity<D> {
    /**
     * 设置id
     *
     * @param d 主键
     * @return 主键类型
     */
    void setId(D d);

    /**
     * 获取主键值
     * @return 主键
     */
    D getId();
}
