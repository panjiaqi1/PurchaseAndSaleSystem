package com.example.demo.controller;

import com.example.demo.entity.ExtendedField;
import com.example.demo.entity.GoodExtendedField;
import com.example.demo.service.GoodExtendedFieldService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 扩展字段记录控制器
 *
 * @author panjiaqi
 */
@RestController
@RequestMapping("goodExtendedField")
public class GoodExtendedFieldController {
    private final GoodExtendedFieldService goodExtendedFieldService;

    public GoodExtendedFieldController(GoodExtendedFieldService goodExtendedFieldService) {
        this.goodExtendedFieldService = goodExtendedFieldService;
    }


    /**
     * 新增
     */
    @PostMapping
    public void save(@RequestBody GoodExtendedField goodExtendedField) {
        goodExtendedFieldService.save(goodExtendedField);
    }

    /**
     * 分页
     */
    @GetMapping("page")
    public Page<GoodExtendedField> page(@SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC)) Pageable pageable) {
        return goodExtendedFieldService.page(pageable);
    }

    /**
     * 通过Id获取单位
     */
    @GetMapping("{id}")
    public GoodExtendedField findById(@PathVariable Long id) {
        return goodExtendedFieldService.findById(id);
    }

    /**
     * 更新单位
     */
    @PutMapping("{id}")
    public void update(@PathVariable Long id, @RequestBody GoodExtendedField goodExtendedField) {
        goodExtendedFieldService.update(id, goodExtendedField);
    }

    /**
     * 删除
     */
    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        goodExtendedFieldService.delete(id);
    }
}