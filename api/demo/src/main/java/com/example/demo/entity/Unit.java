package com.example.demo.entity;

import javax.persistence.*;
import java.util.List;

/**
 * 单位实体
 */
@Entity
public class Unit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 单位名称
     */
    private String name;

    /**
     * 货物
     */
    @OneToMany(mappedBy = "unit")
    private List<Good> Good;

    public Unit() {
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

    public List<com.example.demo.entity.Good> getGood() {
        return Good;
    }

    public void setGood(List<com.example.demo.entity.Good> good) {
        Good = good;
    }
}
