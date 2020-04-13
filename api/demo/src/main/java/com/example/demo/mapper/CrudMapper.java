package com.example.demo.mapper;

import com.example.demo.entity.BaseEntity;
import org.apache.ibatis.annotations.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

/**
 * 基类
 *
 * @param <T> 实体
 * @param <D> 主键类型
 * @author panjiaqi
 */
public interface CrudMapper<T extends BaseEntity, D> {
    /**
     * 当前数据总条数
     *
     * @return 总数
     */
    long count(@Param("queryParams") Iterable<QueryParam> queryParams);

    default long count() {
        return this.count(null);
    }

    /**
     * 删除
     *
     * @param id 单位Id
     */
    boolean delete(D id);

    /**
     * 获取所有
     *
     * @Return List
     */
    default List<T> findAll() {
        return this.findAll(null, null);
    }

    /**
     * 关键字查询
     *
     * @param id 关键字
     * @return 实体
     */
    default Optional<T> findById(@Param("id") D id) {
        List<T> lists = this.findAll(Arrays.asList(
                new QueryParam("id", id.toString())));

        if (lists.size() > 0) {
            return Optional.of(lists.get(0));
        } else {
            return Optional.empty();
        }
    }

    /**
     * 插入新数据，并返回主键值
     *
     * @param entity 实体
     * @return
     */
    void insert(T entity);

    /**
     * 分页数据
     *
     * @param pageable 分页信息
     * @return
     */
    default List<T> findAll(@Param("pageable") Pageable pageable) {
        return this.findAll(null, pageable);
    }

    /**
     * 分页数据
     *
     * @param queryParams 查询参数
     * @return
     */
    default List<T> findAll(Iterable<QueryParam> queryParams) {
        return this.findAll(queryParams, null);
    }

    /**
     * 分页数据
     *
     * @param queryParams 查询参数
     * @param pageable    分页信息
     * @return
     */
    List<T> findAll(@Param("queryParams") Iterable<QueryParam> queryParams, @Param("pageable") Pageable pageable);

    /**
     * 分页数据
     *
     * @param pageable 分页参数
     * @return
     */
    default Page<T> page(Pageable pageable) {
        return this.page(null, pageable);
    }

    /**
     * 分页数据
     *
     * @param queryParams 查询参数
     * @param pageable    分页
     * @return
     */
    default Page<T> page(Iterable<QueryParam> queryParams, @Param("pageable") Pageable pageable) {
        return new PageImpl<T>(
                this.findAll(queryParams, pageable),
                pageable,
                this.count(queryParams)
        );
    }


    /**
     * 新增或更新
     *
     * @param entity 实体
     * @return 实体
     */
    default T save(T entity) {
        if (entity.getId() == null) {
            this.insert(entity);
        } else {
            this.update(entity);
        }

        return entity;
    }

    /**
     * 更新
     *
     * @param entity 实体
     * @return 成功true;失败false
     */
    boolean update(T entity);
}