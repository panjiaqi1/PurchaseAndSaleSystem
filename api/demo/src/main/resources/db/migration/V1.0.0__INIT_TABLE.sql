SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `unit`
-- ----------------------------
create table `unit`
	(
		`id`      bigint not null auto_increment,
		`name`    varchar(255),
		primary key (`id`)
	) engine=InnoDB
	DEFAULT CHARSET = utf8mb4;

BEGIN;
INSERT INTO `unit`(`name`)
	VALUES  ('千克'),('克'),('吨'),('袋'),('箱'),('桶'),('公斤'),('厘米'),
			('分米'),('毫米');
COMMIT;

-- ----------------------------
--  Table structure for `good`
-- ----------------------------

create table `good`
	(
		`id`             bigint not null auto_increment,
		`description`    varchar(255),
		`name`           varchar(255),
		`stock`          integer,
		`unit_id`        bigint,
		primary key (`id`),
		key `FK3jbhxfwm23qr9f47721xrrxx2` (`unit_id`),
		constraint `FK3jbhxfwm23qr9f47721xrrxx2` foreign key (`unit_id`) references `unit` (`id`)
		) engine=InnoDB
	DEFAULT CHARSET = utf8mb4;

BEGIN;
INSERT INTO `good`(`description`,`name`,`stock`,`unit_id`)
	VALUES  ('描述','方便面','40','5'),
			('描述','香皂','50','5'),
			('描述','大米','30','4'),
			('描述','白面','70','4'),
			('描述','铁矿','20','1'),
			('描述','鸡蛋','80','7');
COMMIT;

-- ----------------------------
--  Table structure for `extended_field`
-- ----------------------------
create table `extended_field`
	(
		`id`             bigint not null auto_increment,
		`name`           varchar(255),
		primary key (`id`)
		) engine=InnoDB
DEFAULT CHARSET = utf8mb4;


BEGIN;
INSERT INTO `extended_field`(`name`)
	VALUES  ('出厂编号'),('出厂地址'),('厂家'),('出厂日期'),
			('类型'),('保质期');
COMMIT;

-- ----------------------------
--  Table structure for `good_extended_field`
-- ----------------------------
create table `good_extended_field`
	(
		`id`                  bigint not null auto_increment,
		`value`               varchar(255),
		`extended_field_id`   bigint,
		`good_id`             bigint,
		primary key (`id`),
		key `FKn7qe2r3ng7xrj9a8oxpt90wfa` (`extended_field_id`),
		constraint `FKn7qe2r3ng7xrj9a8oxpt90wfa` foreign key (`extended_field_id`) references `extended_field` (`id`),
		key `FKawdlxdgggtfvmybnhdderhf0o` (`good_id`),
		constraint `FKawdlxdgggtfvmybnhdderhf0o` foreign key (`good_id`) references `good` (`id`)
		) engine=InnoDB
	DEFAULT CHARSET = utf8mb4;

BEGIN;
INSERT INTO `good_extended_field`(`value`,`extended_field_id`,`good_id`)
	VALUES  ('12345','1','1'),
			('唐山','2','1'),
			('121212','1','2'),
			('12月','6','2'),
			('2020/4/13','4','2'),
			('Q111','1','3'),
			('乐亭','2','4'),
			('A131','1','5'),
			('河北','2','6');
COMMIT;

-- ----------------------------
--  Table structure for `in_out`
-- ----------------------------
create table `in_out`
	(
		`id`            bigint not null auto_increment,
	 	`amount`        integer not null,
	 	`be_input`      bit not null,
	 	`create_time`   bigint not null,
	 	`good_id`       bigint,
	 	`user_id`       bigint,
	 	primary key (`id`),
	 	key `FKlrec525d0rg751cpk3yqairuy` (`good_id`),
		key `FKf5qh99oecehkfknk4nhtjecpl` (`user_id`),
	 	constraint `FKlrec525d0rg751cpk3yqairuy` foreign key (`good_id`) references `good` (`id`),
		constraint `FKf5qh99oecehkfknk4nhtjecpl` foreign key (`user_id`) references `user` (`id`)
	 ) engine=InnoDB
    DEFAULT CHARSET = utf8mb4;

BEGIN;
INSERT INTO `in_out`(`amount`,`be_input`,`create_time`,`good_id`)
	VALUES  ('20',1,1586833731646,'1'),
			('30',1,1586833731646,'2'),
			('10',1,1586833731646,'2'),
			('5 ',1,1586833731646,'3'),
			('23',1,1586833731646,'4'),
			('70',1,1586833731646,'5'),
			('70',1,1586833731646,'6'),
			('-30',0,1586833731646,'1'),
			('-40',0,1586833731646,'2'),
			('-20',0,1586833731646,'3'),
			('-60',0,1586833731646,'3'),
			('-35',0,1586833731646,'4'),
			('-35',0,1586833731646,'5'),
			('-50',0,1586833731646,'6');
COMMIT;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
create table user
	(
		`id`          bigint not null auto_increment,
		`name`        varchar(255),
		`password`    varchar(255) not null,
		`username`    varchar(255),
		primary key (`id`)
	) engine=InnoDB
	DEFAULT CHARSET = utf8mb4;


SET FOREIGN_KEY_CHECKS = 1;

