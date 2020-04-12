package com.example.demo.service;

import com.example.demo.entity.Unit;
import com.example.demo.mapper.UnitMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UnitServiceImpl implements UnitService {

    private static final Logger logger = LoggerFactory.getLogger(UnitServiceImpl.class);

    private final UnitMapper unitMapper;

    public UnitServiceImpl(UnitMapper unitMapper) {
        this.unitMapper = unitMapper;
    }


    @Override
    public void save(Unit unit) {
        unitMapper.save(unit);
    }

    @Override
    public List<Unit> findAll() {
        return unitMapper.findAll();
    }

    @Override
    public void update(Long id, Unit unit) {
        logger.debug("通过Id获取单位");
        Unit oldUnit = unitMapper.findById(id);

        logger.debug("更新");
        oldUnit.setName(unit.getName());

        logger.debug("保存");
        unitMapper.save(oldUnit);
    }

    @Override
    public Unit findById(Long id) {
        return unitMapper.findById(id);
    }

    @Override
    public void delete(Long id) {
        unitMapper.delete(id);
    }

    @Override
    public Page<Unit> page(Pageable pageable) {
        return unitMapper.page(pageable);
    }
}
