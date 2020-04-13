package com.example.demo.controller;

import com.example.demo.entity.Good;
import com.example.demo.entity.InOut;
import com.example.demo.entity.Unit;
import com.example.demo.mapper.GoodMapper;

import java.util.List;

import com.example.demo.service.GoodService;
import com.example.demo.service.InOutService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 出库控制器
 *
 * @author panjiaqi
 */
@Controller
public class OutGoodController {

    private final InOutService inOutService;
    private final GoodService goodService;

    public OutGoodController(InOutService inOutService, GoodService goodService) {
        this.inOutService = inOutService;
        this.goodService = goodService;
    }

    /**
     * 首页
     */
    @RequestMapping("outputGood")
    public String greetingForm(Model model) {
        List<InOut> inOuts = inOutService.findAll(InOut.OUTPUT);
        model.addAttribute("inOuts", inOuts);
        return "outputGood/index";
    }

    /**
     * 进入新增界面
     */
    @RequestMapping("/intoSave")
    public String intoSave(Model model) {
        List<Good> goods = goodService.findAll();
        model.addAttribute("goods", goods);
        return "outputGood/add";
    }

    /**
     * 新增
     */
    @RequestMapping("/save")
    public String save(@ModelAttribute InOut inOut) {

        inOut.setBeInput(InOut.OUTPUT);
        inOutService.save(inOut);
        return "redirect:/outputGood";
    }
}