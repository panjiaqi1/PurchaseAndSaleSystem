package com.example.demo.mapper;

/**
 * 查询参数
 *
 * @author panjiaqi
 */
public class QueryParam {
    private String key;
    private String value;
    private String queryType;

    public QueryParam(String key, String value, QueryType queryType) {
        this.key = key;
        this.value = value;
        this.queryType = queryType.getKeyword();
    }

    public QueryParam(String key, String value) {
        this(key, value, QueryType.EQ);
    }

    public QueryParam(String key, QueryType queryType) {
        this.key = key;
        this.queryType = queryType.getKeyword();
    }

    public String getKey() {
        return key;
    }

    public String getValue() {
        return value;
    }

    public String getQueryType() {
        return queryType;
    }

    public void setValue(String value) {
        this.value = value;
    }
}