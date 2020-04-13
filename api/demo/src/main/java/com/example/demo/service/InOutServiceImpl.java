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
import java.util.Arrays;
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
            inOutMapper.save(inOut.getAmount(), InOut.INPUT,
                    System.currentTimeMillis(), inOut.getGood().getId(),
                    inOut.getUser().getId());

            Good good = goodMapper.findById(inOut.getGood().getId()).get();
            good.setStock(good.getStock() + inOut.getAmount());
            goodMapper.save(good);
        } else {
            inOutMapper.save(inOut.getAmount() * (-1), InOut.OUTPUT,
                    System.currentTimeMillis(), inOut.getGood().getId(),
                    inOut.getUser().getId());

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
    public Page<InOut> page(Pageable pageable, Long goodId, boolean beInput) {
        QueryParam goodIdQueryParam = new QueryParam("good_id", goodId.toString());
        QueryParam beInputQueryParam = new QueryParam("be_input", beInput ? "true" : "false", QueryType.TRUE_OR_FALSE);
        List<QueryParam> queryParams = new ArrayList<>(Arrays.asList(
                goodIdQueryParam,
                beInputQueryParam
        ));
        Page<InOut> inOutPage = inOutMapper.page(queryParams, pageable);
        for (InOut inout : inOutPage.getContent()) {
            inout.setGood(goodMapper.findById(inout.getGood().getId()).get());
        }
        return null;
    }
}
