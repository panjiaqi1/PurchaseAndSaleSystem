package com.example.demo.controller;

import com.example.demo.entity.InOut;
import com.example.demo.service.InOutService;

import java.util.List;

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
     * 新增单位
     */
    @PostMapping
    public void save(@RequestBody InOut inOut) {
        inOutService.save(inOut);
    }

    /**
     * 通过货物获取所有进货记录
     */
    @GetMapping("/query")
    public List<InOut> findAllByBeInputAndGoodId(@RequestParam(required = false) Long goodId) {
        return inOutService.findAllByBeInputAndGoodId(goodId);
    }
}
