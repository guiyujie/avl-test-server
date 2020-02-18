### 接口说明
行政区域查询1

### 请求路径或接口地址
admin/api/area/search

### 请求方法
GET

### 请求参数
参数名称|	参数类型|	是否必须|	参数描述
---|---|---|---
area | int | 否 | 行政区别id
organiz | int | 否 | 组织机构id
deparment | int |  否 | 职能部门id
key | string | 否 | 行政区划编号或名称
			
### 返回结果
```
{
"status": "success",
"message": "success",
"data": {
	"area":[{
           "id":410000,
           "name":"河南省",
           "createTime":"2018-05-30 22:00",
           "createAuthor":"刘小小",
           "updateTime":"2018-06-1 22:00",
           "updateAuthor":"张三"
    }],
	"organiz":[{
		"id":1,
		"name":"财务局",
	    "createTime":"2018-05-30 22:00",
        "createAuthor":"刘小小",
        "updateTime":"2018-06-1 22:00",
        "updateAuthor":"张三"	
	}],
    "deparment":[{
		"id":1,
		"name":"侦查科",
	    "createTime":"2018-05-30 22:00",
        "createAuthor":"刘小小",
        "updateTime":"2018-06-1 22:00",
        "updateAuthor":"张三"	
	}]
}
```

### 特殊说明
无参数, 返回所有行政区别