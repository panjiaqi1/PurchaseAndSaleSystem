package com.example.demo.controller;

import com.example.demo.entity.ExtendedField;
import com.example.demo.entity.Unit;
import com.example.demo.service.ExtendedFieldService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 扩展字段控制器
 */
@RestController
@RequestMapping("extendedField")
public class ExtendedFieldController {
    private final ExtendedFieldService extendedFieldService;

    public ExtendedFieldController(ExtendedFieldService extendedFieldService) {
        this.extendedFieldService = extendedFieldService;
    }

    /**
     * 新增
     */
    @PostMapping
    public void save(@RequestBody ExtendedField extendedField) {
        extendedFieldService.save(extendedField);
    }

    /**
     * 获取所有
     */
    @GetMapping()
    public List<ExtendedField> getAll() {
        return extendedFieldService.findAll();
    }

    /**
     * 删除
     */
    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        extendedFieldService.delete(id);
    }
}