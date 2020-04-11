package com.example.demo.controller;

import com.example.demo.entity.Good;
import com.example.demo.entity.Unit;
import com.example.demo.service.GoodService;
import com.example.demo.service.UnitService;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 产品管理控制器
 */
@Controller
public class GoodController {

    private final UnitService unitService;
    private final GoodService goodService;

    public GoodController(UnitService unitService, GoodService goodService) {
        this.unitService = unitService;
        this.goodService = goodService;
    }

    /**
     * 获取所有
     */
    @RequestMapping("product")
    public String getAll(Model model) {
        List<Good> productList = goodService.findAll();
        model.addAttribute("productList", productList);
        return "product/product";
    }

    /**
     * 进入新增界面(获取所有单位)
     */
    @RequestMapping("/productAdd")
    public String productAdd(Model model) {
        List<Unit> companyList = unitService.findAll();
        model.addAttribute("companyList", companyList);
        return "product/add";
    }

    /**
     * 新增
     */
    @RequestMapping("/addProduct")
    public String addProduct(Good product) {
        goodService.add(product);
        return "redirect:/product";
    }


}