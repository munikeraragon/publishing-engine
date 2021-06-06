CREATE DATABASE publishing_engine;

USE publishing_engine;

CREATE TABLE IF NOT EXISTS `User` (
    `firstName` varchar(255),
    `lastName` varchar(255),
    `email` varchar(255),
    `locale` varchar(255),
    `provider` varchar(255),
    `picture` varchar(1000),
    PRIMARY KEY (`email`, `firstName`)
);

CREATE TABLE IF NOT EXISTS `ContactMessage` (
    `firstName` varchar(255),
    `lastName` varchar(255),
    `email` varchar(255),
    `company` varchar(255),
    `phone` varchar(255),
    `country` varchar(255),
    `message` varchar(1000),
    `dateCreated` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`firstName`(50), `lastName`(50),`email`(50),`company`(50), `country`(50), `phone`(50),`message`(100))
);

