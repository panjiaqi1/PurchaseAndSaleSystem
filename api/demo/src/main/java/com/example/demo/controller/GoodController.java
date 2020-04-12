package com.example.demo.controller;

import com.example.demo.entity.Good;
import com.example.demo.service.GoodService;

import java.util.List;

import org.springframework.web.bind.annotation.*;

/**
 * 产品管理控制器
 *
 * @author panjiaqi
 */
@RestController
@RequestMapping("good")
public class GoodController {

    private final GoodService goodService;

    public GoodController(GoodService goodService) {
        this.goodService = goodService;
    }

    /**
     * 新增
     */
    @PostMapping
    public void save(@RequestBody Good good) {
        goodService.save(good);
    }

    /**
     * 获取所有
     */
    @GetMapping()
    public List<Good> getAll() {
        return goodService.findAll();
    }

    /**
     * 通过Id获取单位
     */
    @GetMapping("{id}")
    public Good findById(@PathVariable Long id) {
        return goodService.findById(id);
    }

    /**
     * 更新单位
     */
    @PutMapping("{id}")
    public void update(@PathVariable Long id, @RequestBody Good good) {
        goodService.update(id, good);
    }

    /**
     * 删除
     */
    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        goodService.delete(id);
    }
}