package com.example.demo.service;

import com.example.demo.entity.Good;
import com.example.demo.entity.InOut;
import com.example.demo.mapper.GoodMapper;
import com.example.demo.mapper.InOutMapper;
import com.example.demo.mapper.QueryParam;
import com.example.demo.mapper.QueryType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class InOutServiceImpl implements InOutService {
    private final InOutMapper inOutMapper;
    private final GoodMapper goodMapper;

    public InOutServiceImpl(InOutMapper inOutMapper, GoodMapper goodMapper) {
        this.inOutMapper = inOutMapper;
        this.goodMapper = goodMapper;
    }

    @Override
    public void save(InOut inOut) {
        if (inOut.getBeInput()) {
            inOutMapper.save(inOut);

            Good good = goodMapper.findById(inOut.getGood().getId()).get();
            good.setStock(good.getStock() + inOut.getAmount());
            goodMapper.save(good);
        } else {
            inOut.setAmount(inOut.getAmount() * (-1));
            inOutMapper.save(inOut);

            Good good = goodMapper.findById(inOut.getGood().getId()).get();
            good.setStock(good.getStock() + inOut.getAmount() * (-1));
            goodMapper.save(good);
        }
    }

    @Override
    public InOut findById(Long id) {
        return inOutMapper.findById(id).get();
    }

    @Override
    public void update(Long id, InOut inOut) {
        InOut oldInOut = inOutMapper.findById(id).get();
        oldInOut.setAmount(inOut.getAmount());
        oldInOut.setGood(inOut.getGood());
        inOutMapper.save(oldInOut);
    }

    @Override
    public Page<InOut> page(Pageable pageable, Long goodId, boolean beInput, Long beginTime, Long endTime) {

        // 构造查询参数
        List<QueryParam> queryParams = new ArrayList<>();

        // 判断是否传入货物Id，传入按货物查询
        if (goodId != null) {
            QueryParam goodIdQueryParam = new QueryParam("in_out.good_id", goodId.toString());
            queryParams.add(goodIdQueryParam);
        }

        // 判断是否传入开始时间，传入按开始时间查询
        if (beginTime != null) {
            QueryParam goodIdQueryParam = new QueryParam("in_out.create_time", beginTime.toString(), QueryType.GREATER_THAN);
            queryParams.add(goodIdQueryParam);
        }

        // 判断是否传入结束时间，传入按结束时间查询
        if (endTime != null) {
            QueryParam goodIdQueryParam = new QueryParam("in_out.create_time", endTime.toString(), QueryType.LESS_THAN);
            queryParams.add(goodIdQueryParam);
        }

        // 按出/入库查询
        QueryParam beInputQueryParam = new QueryParam("be_input", beInput ? "1" : "0", QueryType.TRUE_OR_FALSE);
        queryParams.add(beInputQueryParam);

        Page<InOut> inOutPage = inOutMapper.page(queryParams, pageable);
        for (InOut inout : inOutPage.getContent()) {
            inout.setGood(goodMapper.findById(inout.getGood().getId()).get());
        }
        return inOutPage;
    }
}
