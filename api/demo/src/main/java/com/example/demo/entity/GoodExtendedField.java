package com.example.demo.entity;

import javax.persistence.*;

/**
 * 扩展字段记录
 */
@Entity
public class GoodExtendedField {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 值
     */
    private String value;

    /**
     * 货物
     */
    @ManyToOne
    private Good good;

    /**
     * 扩展字段定义
     */
    @ManyToOne
    private ExtendedField extendedField;

    public GoodExtendedField() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Good getGood() {
        return good;
    }

    public void setGood(Good good) {
        this.good = good;
    }

    public ExtendedField getExtendedField() {
        return extendedField;
    }

    public void setExtendedField(ExtendedField extendedField) {
        this.extendedField = extendedField;
    }
}
