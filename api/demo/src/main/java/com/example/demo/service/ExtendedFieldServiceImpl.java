package com.example.demo.service;

import com.example.demo.entity.ExtendedField;
import com.example.demo.mapper.ExtendedFieldMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExtendedFieldServiceImpl implements ExtendedFieldService {

    private final ExtendedFieldMapper extendedFieldMapper;

    public ExtendedFieldServiceImpl(ExtendedFieldMapper extendedFieldMapper) {
        this.extendedFieldMapper = extendedFieldMapper;
    }

    @Override
    public List<ExtendedField> findAll() {
        return extendedFieldMapper.findAll();
    }

    @Override
    public void delete(Long id) {
        extendedFieldMapper.delete(id);
    }

    @Override
    public void save(ExtendedField extendedField) {
        extendedFieldMapper.save(extendedField);
    }
}
