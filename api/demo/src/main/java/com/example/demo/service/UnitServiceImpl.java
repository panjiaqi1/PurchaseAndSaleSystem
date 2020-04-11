package com.example.demo.service;

import com.example.demo.entity.Unit;
import com.example.demo.mapper.UnitMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UnitServiceImpl implements UnitService {


    private final UnitMapper unitMapper;

    public UnitServiceImpl(UnitMapper unitMapper) {
        this.unitMapper = unitMapper;
    }


    @Override
    public void add(Unit unit) {
        unitMapper.add(unit);
    }

    @Override
    public List<Unit> findAll() {
        return unitMapper.findAll();
    }

    @Override
    public void update(Unit unit) {
        unitMapper.update(unit);
    }

    @Override
    public Unit findById(Long id) {
        return unitMapper.findById(id);
    }

    @Override
    public void delete(Long id) {
        unitMapper.delete(id);
    }
}
