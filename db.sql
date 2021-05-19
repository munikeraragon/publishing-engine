CREATE TABLE IF NOT EXISTS `User` (
    `firstName` varchar(255),
    `lastName` varchar(255),
    `email` varchar(255),
    `phone` varchar(255),
    PRIMARY KEY (`email`)
);

CREATE TABLE IF NOT EXISTS `ContactMessage` (
    `firstName` varchar(255),
    `lastName` varchar(255),
    `email` varchar(255),
    `company` varchar(255),
    `phone` varchar(255),
    `message` varchar(1000),
    `dateCreated` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`firstName`(50), `lastName`(50),`email`(50),`company`(50),`phone`(50),`message`(100))
);

