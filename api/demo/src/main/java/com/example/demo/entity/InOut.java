package com.example.demo.entity;

import javax.persistence.*;

/**
 * 进出库
 */
@Entity
public class InOut {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /**
     * 数量
     */
    private Integer amount;

    /**
     * 时间
     */
    private Long createTime = System.currentTimeMillis();

    /**
     * 出库/入库
     * 0-出库
     * 1-入库
     */
    private Integer inputOrOutput;

    /**
     * 是否被删除,用于软删除
     */
    private Boolean deleted = false;

    /**
     * 货物
     */
    @ManyToOne
    private Good good;

    /**
     * 用户
     */
    @ManyToOne
    private User user;

    public InOut() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Long getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Long createTime) {
        this.createTime = createTime;
    }

    public Integer getInputOrOutput() {
        return inputOrOutput;
    }

    public void setInputOrOutput(Integer inputOrOutput) {
        this.inputOrOutput = inputOrOutput;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    public Good getGood() {
        return good;
    }

    public void setGood(Good good) {
        this.good = good;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
