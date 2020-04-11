package com.example.demo.controller;

import com.example.demo.entity.Unit;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 出库控制器
 */
@Controller
@RequestMapping("outputCargo")
public class OutGoodController {

    @GetMapping
    public String greetingForm(Model model) {
        model.addAttribute("greeting", new Unit());
        return "output-cargo/output-cargo";
    }
}