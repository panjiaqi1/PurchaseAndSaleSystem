package com.example.demo.entity;

import javax.persistence.*;
import java.util.List;

/**
 * 扩展字段定义
 */
@Entity
public class ExtendedField {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 名称
     */
    private String name;
    /**
     * 扩展字段记录
     */
    @OneToMany(mappedBy = "extendedField")
    private List<GoodExtendedField> goodExtendedFieldList;

    public ExtendedField() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<GoodExtendedField> getGoodExtendedFieldList() {
        return goodExtendedFieldList;
    }

    public void setGoodExtendedFieldList(List<GoodExtendedField> goodExtendedFieldList) {
        this.goodExtendedFieldList = goodExtendedFieldList;
    }
}
