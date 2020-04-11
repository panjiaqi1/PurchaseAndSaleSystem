package com.example.demo.mapper;

import com.example.demo.entity.Unit;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CompanyMapperTest {
    @Autowired
    UnitMapper companyMapper;

    @Test
    public void save() {
        Unit company = new Unit();
        company.setName("1212");
        this.companyMapper.add(company);
    }
}