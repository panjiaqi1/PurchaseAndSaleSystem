package com.example.demo.mapper;

/**
 * 查询类型
 *
 * @author panjiaqi
 */
public enum QueryType {
    GREATER_THAN("after", "大于某个时间点,where x.startDate > ?1"),
    LESS_THAN("before", "在某个时间点以后"),
    EQ("eq", "相等 where x.age = ?1"),
    STARTING_WITH("startingWith", "模糊查询，以某关键字开始  where x.firstname like ?1 (parameter bound with appended %)"),
    ENDING_WITH("endingWith", "模糊查询，以某关键字结束 where x.firstname like ?1 (parameter bound with prepended %)"),
    CONTAINING("containing", "模糊查询，包含: where x.firstname like ?1 (parameter bound wrapped in %)"),
    TRUE("true", "为true: where x.active = true"),
    FALSE("false", "为false: where x.active = false"),
    TRUE_OR_FALSE("trueOrFalse", "布尔值");
    private String keyword;
    private String description;

    QueryType(String keyword, String description) {
        this.keyword = keyword;
        this.description = description;
    }

    public String getKeyword() {
        return keyword;
    }
}