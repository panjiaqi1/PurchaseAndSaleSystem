package com.example.demo.controller;

import com.example.demo.entity.ExtendedField;
import com.example.demo.service.ExtendedFieldService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 扩展字段控制器
 *
 * @author panjiaqi
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
     * 获取所有记录
     */
    @GetMapping()
    public List<ExtendedField> getAll() {
        return extendedFieldService.findAll();
    }

    /**
     * 分页
     */
    @GetMapping("page")
    public Page<ExtendedField> page(@SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC)) Pageable pageable) {
        return extendedFieldService.page(pageable);
    }

    /**
     * 通过Id查询
     */
    @GetMapping("{id}")
    public ExtendedField findById(@PathVariable Long id) {
        return extendedFieldService.findById(id);
    }

    /**
     * 更新
     */
    @PutMapping("{id}")
    public void update(@PathVariable Long id, @RequestBody ExtendedField extendedField) {
        extendedFieldService.update(id, extendedField);
    }

    /**
     * 删除
     */
    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        extendedFieldService.delete(id);
    }
}