package com.example.demo.service;

import com.example.demo.entity.ExtendedField;
import com.example.demo.mapper.ExtendedFieldMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ExtendedFieldServiceImpl implements ExtendedFieldService {

    private final ExtendedFieldMapper extendedFieldMapper;

    public ExtendedFieldServiceImpl(ExtendedFieldMapper extendedFieldMapper) {
        this.extendedFieldMapper = extendedFieldMapper;
    }

    @Override
    public void delete(Long id) {
        extendedFieldMapper.delete(id);
    }

    @Override
    public ExtendedField findById(Long id) {
        return extendedFieldMapper.findById(id).orElseThrow(()->new EntityNotFoundException("未找到"));
    }

    @Override
    public List<ExtendedField> findAll() {
        return extendedFieldMapper.findAll();
    }

    @Override
    public void save(ExtendedField extendedField) {
        extendedFieldMapper.save(extendedField);
    }

    @Override
    public Page<ExtendedField> page(Pageable pageable) {
        return extendedFieldMapper.page(pageable);
    }

    @Override
    public void update(Long id, ExtendedField extendedField) {
        ExtendedField oldExtendedField = this.findById(id);
        oldExtendedField.setName(extendedField.getName());
        extendedFieldMapper.save(oldExtendedField);
    }
}
