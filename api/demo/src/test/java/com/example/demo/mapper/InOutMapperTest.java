package com.example.demo.mapper;

import com.example.demo.entity.Good;
import com.example.demo.entity.InOut;
import com.example.demo.entity.Unit;
import net.bytebuddy.utility.RandomString;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;


@SpringBootTest
class InOutMapperTest {
    @Autowired
    InOutMapper inOutMapper;

    @Autowired
    GoodMapper goodMapper;

    @Autowired
    UnitMapper unitMapper;


    @Test
    public void page() {
        // 数据准备
        Unit unit = new Unit();
        unit.setName(RandomString.make(5));
        this.unitMapper.save(unit);

        Good good = new Good();
        good.setUnit(unit);
        good.setName("测试货物");
        this.goodMapper.save(good);

        Long createTime = 100L;
        Integer amount = 100;
        InOut inout = new InOut();
        inout.setGood(good);
        inout.setBeInput(true);
        inout.setCreateTime(createTime);
        inout.setAmount(amount);
        this.inOutMapper.save(inout);

        // 查询条件
        QueryParam goodIdQueryParam =  new QueryParam("good_id", good.getId().toString());
        QueryParam unitIdQueryParam = new QueryParam("unit_id", unit.getId().toString());
        QueryParam beInputQueryParam = new QueryParam("be_input", QueryType.TRUE);
        QueryParam lessThanAmountQueryParam = new QueryParam("amount", "101", QueryType.LESS_THAN);
        QueryParam greaterThanQueryParam = new QueryParam("amount", "99", QueryType.GREATER_THAN);
        QueryParam lessThanCreateTimeQueryParam = new QueryParam("create_time", "101",  QueryType.LESS_THAN);
        QueryParam greaterCreateTimeQueryParam = new QueryParam("create_time", "99", QueryType.GREATER_THAN);

        // 组合查询条件
        List<QueryParam> queryParams = new ArrayList<>(Arrays.asList(
                goodIdQueryParam,
                unitIdQueryParam,
                lessThanAmountQueryParam,
                greaterThanQueryParam,
                lessThanCreateTimeQueryParam,
                greaterCreateTimeQueryParam,
                beInputQueryParam
        ));

        // 分页
        Pageable pageable = PageRequest.of(0, 2);

        // 测试findAll及page方法
        List<InOut> inOuts = this.inOutMapper.findAll(queryParams);
        Assertions.assertEquals(inOuts.size(), 1);

        Page<InOut> inOutPage = this.inOutMapper.page(queryParams, pageable);
        Assertions.assertEquals(inOutPage.getTotalElements(), 1);

        // 改变任意条件，返回值为0。改变goodId
        goodIdQueryParam.setValue("123");
        Assertions.assertEquals(this.inOutMapper.findAll(queryParams).size(), 0);
        Assertions.assertEquals(this.inOutMapper.page(queryParams, pageable).getTotalElements(), 0);

        // 去除刚刚改变的条件，再次查询，结果为1
        queryParams.remove(goodIdQueryParam);
        Assertions.assertEquals(this.inOutMapper.findAll(queryParams).size(), 1);
        Assertions.assertEquals(this.inOutMapper.page(queryParams, pageable).getTotalElements(), 1);

        // 其它条件请自行尝试
    }
}