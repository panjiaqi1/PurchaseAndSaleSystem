## 进销存系统

使用 SpringBoot + mybatis +MySql

## MySql

使用5.7版本的MySQL,端口:3307
datasource.username=root
datasource.password=

## redis

端口:6380 

## 后台启动

命令:mvn spring-boot:run

## SpringBoot + thymeleaf 单体集成部分

访问: http://localhost:8080/outputGood

## 配置nginx

找到项目中nginx.conf配置文件,将项目中配置文件include到本地nginx.conf配置文件中

比如: 在本地nginx.conf中 -> include /Users/panjiaqi/github/PurchaseAndSaleSystem/nginx.conf;

## SpringBoot + Angular 前后台分离部分

Angular:
		首先: npm install
		启动: ng serve

访问: http://localhost:8012

## docker

启动项目中docker文件,运行MySql、redis 环境，直接启动后台即可


注：请用 火狐 谷歌 IE11以上 浏览器访问





