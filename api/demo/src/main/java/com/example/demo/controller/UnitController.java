package com.example.demo.controller;

import com.example.demo.entity.Unit;
import java.util.List;
import com.example.demo.service.UnitService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;

/**
 * 单位管理控制器
 *
 * @author panjiaqi
 */
@RestController
@RequestMapping("unit")
public class UnitController {
    private final UnitService unitService;

    public UnitController(UnitService unitService) {
        this.unitService = unitService;
    }

    /**
     * 新增单位
     */
    @PostMapping
    public void save(@RequestBody Unit unit) {
        unitService.save(unit);
    }

    /**
     * 获取所有单位
     */
    @GetMapping()
    public List<Unit> getAll() {
        return unitService.findAll();
    }

    /**
     * 分页
     */
    @GetMapping("page")
    public Page<Unit> page(@SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC))Pageable pageable) {
        return this.unitService.page(pageable);
    }

    /**
     * 通过Id获取单位
     */
    @GetMapping("{id}")
    public Unit findById(@PathVariable Long id) {
        return unitService.findById(id);
    }

    /**
     * 更新单位
     */
    @PutMapping("{id}")
    public void update(@PathVariable Long id, @RequestBody Unit unit) {
        unitService.update(id, unit);
    }

    /**
     * 删除
     */
    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        unitService.delete(id);
    }
}