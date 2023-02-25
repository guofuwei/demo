# API 文档

> **需要登录**的接口必须在HTTP Request Header中带上`authorization`字段，字段的值为 jwt token，token的获取方式见登录模块
> 若token过期/不携带Token，会返回：`{"code":401,"message":"token已过期，请重新登录"}`

## 登录模块

### 登录

#### URL

/api/user/login

#### HTTP Method

POST

#### Request Body

```json
{
    "account": "zam",
    "password": "123456"
}
```

#### Response Body

```json
{
    "code": 200,
    "message": "登录成功",
    "token": "jwt token，之后每次请求都需要带上",
    "role": 1 // 1 代表管理员，2 代表项目负责人，3 代表普通用户，根据角色不同，有不同的页面
}
```

```json
{
    "code": 400,
    "message": "用户名或密码错误"
}
```

```json
{
    "code": 400,
    "message": "账户未激活"
}
```

在这里最好做个判断，如果密码是初始密码，那么就直接跳转到修改密码页面，让用户修改密码。

### 注册

#### URL

/api/user/register

#### HTTP Method

POST

#### Request Body

```json
{
    "account": "zam",
    "password": "123456",
    "name": "zam",
    "email": "1111@11.com",
    "phone": "12345678901"
}
```

#### Response Body

```json
{
    "code": 200,
    "message": "注册成功，请联系管理员激活账户"
}
```

```json
{
    "code": 400,
    "message": "用户名已存在"
}
```

```json
{
    "code": 400,
    "message": "注册失败，请检查填入信息是否正确"
}
```

### 修改密码（需要登录）

#### URL

/api/user/change_password

#### HTTP Method

POST

#### Request Body

```json
{
    "password": "123456"
}
```

#### Response Body

```json
{
    "code": 200,
    "message": "修改成功"
}
```

```json
{
    "code": 400,
    "message": "修改失败，请检查修改后的密码是否满足格式要求"
}
```

## 文件模块

### 上传文件（需要登录）

#### URL

/api/file/upload

#### HTTP Method

POST

#### Request Body

FromData 形式，需要包含如下几个key

- biz_id：业务id，比如在员工花名册中进行的上传，那么这个bizid就应填 `Register`
- file：上传的文件

#### Response Body

```json
{
    "code": 200,
    "message": "上传成功",
    "name": "文件名，用于前端展示",
    "url": "文件地址"
}
```

```json
{
    "code": 400,
    "message": "上传失败"
}
```

### 查看文件（需要登录）

#### URL

文件URL

#### HTTP Method

GET

#### HTTP Response

文件流，没有找到文件就返回404。

## 收集表模块

### 提交收集表

#### URL

/api/collect/submit

#### HTTP Method

POST

#### Request Body

```json
{
    "project_id": 1,
    "name": "张三",
    "sex": "男",
    "phone": "12345678901",
    "residence_type": "城镇", // 或者农村
    "id_number": "xxxxxxxxx",
    "address": "xxxxxx",
    "employ_date": "2022-01-01", // yyyy-mm-dd
    "post": "后端开发工程师"
}
```
#### Response Body

```json
{
    "code": 200,
    "message": "提交成功"
}
```

```json
{
    "code": 400,
    "message": "提交失败，请检查填入信息是否正确"
}
```

## 配置模块

### 获取正在进行的项目列表

#### URL

/api/config/project_list_progressing

#### HTTP Method

GET

#### HTTP Request

无

#### HTTP Response

```json
{
    "code": 200,
    "data": [
        {
            "id": 1,
            "name": "项目1"
        },
        {
            "id": 2,
            "name": "项目2"
        }
    ]
}
```