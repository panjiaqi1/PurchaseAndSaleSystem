package com.example.demo.controller;

import com.example.demo.entity.Unit;

import java.util.List;

import com.example.demo.service.UnitService;
import org.springframework.web.bind.annotation.*;

/**
 * 单位管理控制器
 */
@RestController
@RequestMapping("company")
public class UnitController {
    private final UnitService companyService;

    public UnitController(UnitService companyService) {
        this.companyService = companyService;
    }

    /**
     * 新增单位
     */
    @PostMapping
    public void addCompany(Unit company) {
        companyService.add(company);
    }

    /**
     * 获取所有单位
     */
    @GetMapping()
    public List<Unit> getAll() {
        return companyService.findAll();
    }

    /**
     * 通过Id获取单位
     */
    @GetMapping("{id}")
    public Unit findById(@PathVariable Long id) {
        return companyService.findById(id);
    }

    /**
     * 更新单位
     */
    @PutMapping("{id}")
    public void update(@PathVariable Long id, @RequestBody Unit company) {
        companyService.update(company);
    }

    /**
     * 删除
     */
    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        companyService.delete(id);
    }
}