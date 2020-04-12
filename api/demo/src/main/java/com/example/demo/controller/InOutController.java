package com.example.demo.controller;

import com.example.demo.entity.Good;
import com.example.demo.entity.InOut;
import com.example.demo.service.InOutService;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.*;

/**
 * 进出库控制器
 *
 * @author panjiaqi
 */
@RestController
@RequestMapping("inOut")
public class InOutController {

    private final InOutService inOutService;

    public InOutController(InOutService inOutService) {
        this.inOutService = inOutService;
    }

    /**
     * 新增
     */
    @PostMapping
    public void save(@RequestBody InOut inOut) {
        inOutService.save(inOut);
    }


    /**
     * 通过Id查询
     */
    @GetMapping("{id}")
    public InOut findById(@PathVariable Long id) {
        return inOutService.findById(id);
    }

    /**
     * 更新
     */
    @PutMapping("{id}")
    public void update(@PathVariable Long id, @RequestBody InOut inOut) {
        inOutService.update(id, inOut);
    }

    /**
     * 分页并查询
     */
    @GetMapping("page")
    public Page<InOut> page(@RequestParam(required = false) Long goodId,
                            @RequestParam(required = false) boolean beInput,
                            @SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC)) Pageable pageable) {
        return inOutService.page(pageable, goodId, beInput);
    }
}
