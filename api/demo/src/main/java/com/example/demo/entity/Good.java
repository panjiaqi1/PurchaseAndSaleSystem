package com.example.demo.entity;

import java.util.List;
import javax.persistence.*;

/**
 * 货物实体
 *
 * @author panjiaqi
 */
@Entity
public class Good {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 货物名称
     */
    private String name;

    /**
     * 描述
     */
    private String description;

    /**
     * 库存
     */
    private Integer stock = 0;

    /**
     * 单位
     */
    @ManyToOne
    private Unit unit;

    /**
     * 进出库
     */
    @OneToMany(mappedBy = "good")
    private List<InOut> inOutList;

    /**
     * 扩展字段记录
     */
    @OneToMany(mappedBy = "good")
    private List<GoodExtendedField> goodExtendedFieldList;

    /**
     * 是否被删除,用于软删除
     */
    private Boolean deleted = false;

    public Good() {
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    public List<InOut> getInOutList() {
        return inOutList;
    }

    public void setInOutList(List<InOut> inOutList) {
        this.inOutList = inOutList;
    }

    public List<GoodExtendedField> getGoodExtendedFieldList() {
        return goodExtendedFieldList;
    }

    public void setGoodExtendedFieldList(List<GoodExtendedField> goodExtendedFieldList) {
        this.goodExtendedFieldList = goodExtendedFieldList;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }
}
