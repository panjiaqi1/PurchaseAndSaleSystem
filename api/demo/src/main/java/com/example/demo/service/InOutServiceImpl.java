package com.example.demo.service;

import com.example.demo.entity.Good;
import com.example.demo.entity.InOut;
import com.example.demo.mapper.GoodMapper;
import com.example.demo.mapper.InOutMapper;
import org.springframework.stereotype.Service;

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
//        if (inOut.getBeInput() == InOut.INPUT) {
//            inOutMapper.inGoodSave(inOut.getAmount(), inOut.getBeInput(),
//                    System.currentTimeMillis(), inOut.getGood().getId(),
//                    inOut.getUser().getId());
//
//            Good good = goodMapper.findById(inOut.getGood().getId());
//            goodMapper.updateStock(good.getStock() + inOut.getAmount(), good.getId());
//        }
    }


    @Override
    public List<InOut> findAllByBeInputAndGoodId(Long goodId) {
        List<InOut> inOutList = inOutMapper.findAllByBeInputAndGoodId(InOut.INPUT, goodId);
        for (InOut inout : inOutList) {
            inout.setGood(goodMapper.findById(inout.getGood().getId()));
        }
        return inOutList;
    }
}
