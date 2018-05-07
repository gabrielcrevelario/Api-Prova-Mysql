create database prova_api
use prova_api

CREATE TABLE IF IS NOT EXISTS `data`{
    `data_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `description` text NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `base_points` varchar(32) NOT NULL,
  `start_date` datetime NOT NULL ,
  `end_date` datetime not null,
  is_active boolean not null,
  `alreadyAnswered` boolean not null,
  primary key(`data_id`)
}

CREATE TABLE IF IS NOT EXISTS `question`{
   `question_id` int not null AUTO_INCREMENT,
   texto text not null,
   tipo varchar(20) not null,
   constraint `cons_option_fk` FOREIGN KEY `option_fk`(`option`),
   references `option`(`option_id`),
   primary key(`question_id`)

}

create table if is not exists option{
 `option_id` int not null AUTO_INCREMENT,
 `texto` text not null,
 `value` varchar(20) not null,
primary key(`option_id`)}




create table if is not exists `data_question`{
  `data` int not null,
  `question` int not null,
  primary key(`data`,`question`),
   FOREIGN KEY `data_fk` (`data`) REFERENCES `data` (`data_id`)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `question_fk`
        FOREIGN KEY `question_fk` (`question`) REFERENCES `question` (`question_id`)