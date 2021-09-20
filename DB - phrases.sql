create database phrases;

use phrases;

create table phrases (
id int not null auto_increment primary key,
author varchar(100) null,
txt text null
);

insert into phrases (id, author, txt) values ("", "Niki Santos", "Adoro dinossauros e Liga da Justiça");
insert into phrases (id, author, txt) values ("", "Nicolas Braga", "Pipoca doce é muito gostosa");
insert into phrases (id, author, txt) values ("", "José Oliveira", "Sou muito lindo e gosto de namorar.");
insert into phrases (id, author, txt) values ("", "Missilen Santos", "Gosto de academia e viagens");

select * from phrases;