package com.example.demo.entity;

import javax.persistence.*;

/**
 * 扩展字段记录
 *
 * @author panjiaqi
 */
@Entity
public class GoodExtendedField implements BaseEntity<Long> {
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

    @Override
    public Long getId() {
        return id;
    }

    @Override
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
