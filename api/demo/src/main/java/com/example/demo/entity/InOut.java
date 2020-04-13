package com.example.demo.entity;

import javax.persistence.*;

/**
 * 进出库
 *
 * @author panjiaqi
 */
@Entity
public class InOut implements BaseEntity<Long>{
    /**
     * 进货
     */
    public static boolean INPUT = true;
    /**
     * 出货
     */
    public static boolean OUTPUT = false;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /**
     * 数量
     */
    @Column(nullable = false)
    private Integer amount = 0;

    /**
     * 时间
     */
    @Column(nullable = false)
    private Long createTime = System.currentTimeMillis();

    /**
     * 出库/入库
     * false-出库
     * true-入库
     */
    @Column(nullable = false)
    private Boolean beInput = InOut.INPUT;

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

    @Override
    public Long getId() {
        return id;
    }

    @Override
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

    public Boolean getBeInput() {
        return beInput;
    }

    public void setBeInput(Boolean beInput) {
        this.beInput = beInput;
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
