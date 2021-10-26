-- MariaDB dump 10.19  Distrib 10.5.10-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: publishing_engine_prod
-- ------------------------------------------------------
-- Server version	10.5.10-MariaDB-1:10.5.10+maria~focal

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `publishing_engine_prod`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `publishing_engine_prod` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `publishing_engine_prod`;

--
-- Table structure for table `ContactMessage`
--

DROP TABLE IF EXISTS `ContactMessage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ContactMessage` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `message` varchar(1000) DEFAULT NULL,
  `creationDate` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ContactMessage`
--

LOCK TABLES `ContactMessage` WRITE;
/*!40000 ALTER TABLE `ContactMessage` DISABLE KEYS */;
/*!40000 ALTER TABLE `ContactMessage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Follows`
--

DROP TABLE IF EXISTS `Follows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Follows` (
  `userId` int(10) unsigned DEFAULT NULL,
  `creatorId` int(10) unsigned DEFAULT NULL,
  KEY `follows_userid_foreign` (`userId`),
  KEY `follows_creatorid_foreign` (`creatorId`),
  CONSTRAINT `follows_creatorid_foreign` FOREIGN KEY (`creatorId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `follows_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Follows`
--

LOCK TABLES `Follows` WRITE;
/*!40000 ALTER TABLE `Follows` DISABLE KEYS */;
/*!40000 ALTER TABLE `Follows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Image`
--

DROP TABLE IF EXISTS `Image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Image` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `label` varchar(255) DEFAULT NULL,
  `objectKey` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `image_objectkey_unique` (`objectKey`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Image`
--

LOCK TABLES `Image` WRITE;
/*!40000 ALTER TABLE `Image` DISABLE KEYS */;
INSERT INTO `Image` VALUES (1,'6024297908797440.png','munikeraragon@gmail.com6024297908797440.png2021-08-18T06:15:16.526Z'),(2,'golang-tutorial.png','munikeraragon@gmail.comgolang-tutorial.png2021-08-22T03:45:56.406Z'),(3,'robot_icon.png','munikeraragon@gmail.comrobot_icon.png2021-08-26T05:08:41.397Z'),(4,'AI.png','munikeraragon@gmail.comAI.png2021-09-05T04:59:14.678Z'),(5,'AI.png','munikeraragon@gmail.comAI.png2021-09-05T05:01:35.491Z'),(6,'AI.png','munikeraragon@gmail.comAI.png2021-09-05T05:01:43.706Z'),(7,'AI.png','munikeraragon@gmail.comAI.png2021-09-05T05:01:59.527Z'),(8,'AI.png','munikeraragon@gmail.comAI.png2021-09-05T05:02:26.805Z'),(9,'AI.png','munikeraragon@gmail.comAI.png2021-09-05T05:02:54.779Z'),(10,'AI.png','munikeraragon@gmail.comAI.png2021-09-06T02:50:52.577Z'),(11,'virtual-graph.png','munikeraragon@gmail.comvirtual-graph.png2021-09-06T23:27:24.198Z');
/*!40000 ALTER TABLE `Image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Likes`
--

DROP TABLE IF EXISTS `Likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Likes` (
  `userId` int(10) unsigned DEFAULT NULL,
  `postId` int(10) unsigned DEFAULT NULL,
  KEY `likes_userid_foreign` (`userId`),
  KEY `likes_postid_foreign` (`postId`),
  CONSTRAINT `likes_postid_foreign` FOREIGN KEY (`postId`) REFERENCES `Post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Likes`
--

LOCK TABLES `Likes` WRITE;
/*!40000 ALTER TABLE `Likes` DISABLE KEYS */;
INSERT INTO `Likes` VALUES (1,1),(2,1),(1,3),(1,5);
/*!40000 ALTER TABLE `Likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Post`
--

DROP TABLE IF EXISTS `Post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Post` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(10) unsigned DEFAULT NULL,
  `mainImageId` int(10) unsigned DEFAULT NULL,
  `objectKey` varchar(1000) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `prettyTitle` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `images` int(11) DEFAULT NULL,
  `paragraphs` int(11) DEFAULT NULL,
  `words` int(11) DEFAULT NULL,
  `readingTime` int(11) DEFAULT NULL,
  `likes` int(11) DEFAULT 0,
  `comments` int(11) DEFAULT 0,
  `saved` int(11) DEFAULT 0,
  `publish` tinyint(1) DEFAULT 0,
  `creationDate` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `post_userid_title_unique` (`userId`,`title`),
  UNIQUE KEY `post_objectkey_unique` (`objectKey`) USING HASH,
  KEY `post_mainimageid_foreign` (`mainImageId`),
  CONSTRAINT `post_mainimageid_foreign` FOREIGN KEY (`mainImageId`) REFERENCES `Image` (`id`),
  CONSTRAINT `post_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `User` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Post`
--

LOCK TABLES `Post` WRITE;
/*!40000 ALTER TABLE `Post` DISABLE KEYS */;
INSERT INTO `Post` VALUES (1,1,1,'munikeraragon/implement-https-security-into-you-full-stack-application','Implement HTTPS security into you full-stack application','implement-https-security-into-you-full-stack-application','Secure your React and Express application using Docker, Nginx, and Letsencrypt.',0,0,138,1,2,0,1,1,'2021-08-18 06:20:15'),(3,1,3,'munikeraragon/things-about-tech','Things about tech','things-about-tech','Learn about the most sought-after skills and platforms in the world of tech and software development.',1,0,54,0,1,0,1,1,'2021-08-26 05:28:12'),(5,1,10,'munikeraragon/what-is-ai->>>>','What is AI ????','what-is-ai->>>>','Learn about AI, algorithms, and real world use cases.',1,0,8,0,1,0,1,1,'2021-09-06 02:51:34'),(6,1,11,'munikeraragon/deep-learning-areas','Deep learning areas','deep-learning-areas','',1,0,168,1,0,0,0,0,'2021-09-06 23:33:58');
/*!40000 ALTER TABLE `Post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PostImage`
--

DROP TABLE IF EXISTS `PostImage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PostImage` (
  `postId` int(10) unsigned NOT NULL,
  `imageId` int(10) unsigned NOT NULL,
  PRIMARY KEY (`postId`,`imageId`),
  KEY `postimage_imageid_foreign` (`imageId`),
  CONSTRAINT `postimage_imageid_foreign` FOREIGN KEY (`imageId`) REFERENCES `Image` (`id`),
  CONSTRAINT `postimage_postid_foreign` FOREIGN KEY (`postId`) REFERENCES `Post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PostImage`
--

LOCK TABLES `PostImage` WRITE;
/*!40000 ALTER TABLE `PostImage` DISABLE KEYS */;
INSERT INTO `PostImage` VALUES (1,1),(3,3),(5,10),(6,11);
/*!40000 ALTER TABLE `PostImage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PostTag`
--

DROP TABLE IF EXISTS `PostTag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PostTag` (
  `postId` int(10) unsigned NOT NULL,
  `tagId` int(10) unsigned NOT NULL,
  PRIMARY KEY (`postId`,`tagId`),
  KEY `posttag_tagid_foreign` (`tagId`),
  CONSTRAINT `posttag_postid_foreign` FOREIGN KEY (`postId`) REFERENCES `Post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `posttag_tagid_foreign` FOREIGN KEY (`tagId`) REFERENCES `Tag` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PostTag`
--

LOCK TABLES `PostTag` WRITE;
/*!40000 ALTER TABLE `PostTag` DISABLE KEYS */;
INSERT INTO `PostTag` VALUES (1,1),(1,2),(1,3),(1,4),(3,5),(3,6),(3,7),(3,8),(5,5),(5,9),(5,10),(5,11),(6,5),(6,9),(6,10),(6,12);
/*!40000 ALTER TABLE `PostTag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Saved`
--

DROP TABLE IF EXISTS `Saved`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Saved` (
  `userId` int(10) unsigned DEFAULT NULL,
  `postId` int(10) unsigned DEFAULT NULL,
  KEY `saved_userid_foreign` (`userId`),
  KEY `saved_postid_foreign` (`postId`),
  CONSTRAINT `saved_postid_foreign` FOREIGN KEY (`postId`) REFERENCES `Post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `saved_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Saved`
--

LOCK TABLES `Saved` WRITE;
/*!40000 ALTER TABLE `Saved` DISABLE KEYS */;
INSERT INTO `Saved` VALUES (1,1),(1,3),(1,5);
/*!40000 ALTER TABLE `Saved` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tag`
--

DROP TABLE IF EXISTS `Tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Tag` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tag_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tag`
--

LOCK TABLES `Tag` WRITE;
/*!40000 ALTER TABLE `Tag` DISABLE KEYS */;
INSERT INTO `Tag` VALUES (9,'ai'),(5,'code'),(12,'deep-learning'),(4,'express'),(2,'https'),(3,'letsencrypt'),(10,'ml'),(11,'neural-networks'),(1,'react'),(8,'skills'),(7,'software'),(6,'tech');
/*!40000 ALTER TABLE `Tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `locale` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `userIcon` varchar(2000) DEFAULT NULL,
  `creationDate` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_email_firstname_unique` (`email`,`firstName`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'Muniker','Aragon','munikeraragon','munikeraragon@gmail.com','en','google','https://lh3.googleusercontent.com/a/AATXAJzRDjC7EsB19Plxg_zylvm1bPyNOSOjxCDzXjMK=s96-c','ADMIN','data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNTAsMzgsMjE3LDEpOyBzdHJva2U6cmdiYSg1MCwzOCwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4=','2021-08-16 17:57:07'),(2,'Dary','Estevez','daryestevez88','daryestevez88@gmail.com','en','google','https://lh3.googleusercontent.com/a/AATXAJxfZIQ8nxoy9MgekZCevn1SJCDIJJ63pAXNRzZD=s96-c','USER','data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDg0LDEpOyBzdHJva2U6cmdiYSgzOCwyMTcsODQsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScxNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzQ3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PC9nPjwvc3ZnPg==','2021-08-19 20:16:30'),(3,'RPG ghost killer','Gomez','santiaragon1319','santiaragon1319@gmail.com','en','google','https://lh3.googleusercontent.com/a/AATXAJz0T2KQkAvQUux25QL8CrFKYWZmsQS7cIjjvX1C=s96-c','USER','data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNjEsMzgsMjE3LDEpOyBzdHJva2U6cmdiYSg2MSwzOCwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4=','2021-08-22 03:46:56');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserImage`
--

DROP TABLE IF EXISTS `UserImage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserImage` (
  `userId` int(10) unsigned NOT NULL,
  `imageId` int(10) unsigned NOT NULL,
  PRIMARY KEY (`userId`,`imageId`),
  KEY `userimage_imageid_foreign` (`imageId`),
  CONSTRAINT `userimage_imageid_foreign` FOREIGN KEY (`imageId`) REFERENCES `Image` (`id`),
  CONSTRAINT `userimage_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserImage`
--

LOCK TABLES `UserImage` WRITE;
/*!40000 ALTER TABLE `UserImage` DISABLE KEYS */;
INSERT INTO `UserImage` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11);
/*!40000 ALTER TABLE `UserImage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations`
--

DROP TABLE IF EXISTS `knex_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `knex_migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations`
--

LOCK TABLES `knex_migrations` WRITE;
/*!40000 ALTER TABLE `knex_migrations` DISABLE KEYS */;
INSERT INTO `knex_migrations` VALUES (1,'20210706033233_create_user.ts',1,'2021-08-16 17:56:53'),(2,'20210706033910_create_contact_message.ts',1,'2021-08-16 17:56:53'),(3,'20210706214850_create_image.ts',1,'2021-08-16 17:56:53'),(4,'20210709053329_create_post.ts',1,'2021-08-16 17:56:53'),(5,'20210718001002_create_tags.ts',1,'2021-08-16 17:56:54'),(6,'20210813060215_create_likes.ts',1,'2021-08-16 17:56:54'),(7,'20210813060735_create_follows.ts',1,'2021-08-16 17:56:54'),(8,'20210813060900_create_saved.ts',1,'2021-08-16 17:56:54');
/*!40000 ALTER TABLE `knex_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations_lock`
--

DROP TABLE IF EXISTS `knex_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `knex_migrations_lock` (
  `index` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int(11) DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations_lock`
--

LOCK TABLES `knex_migrations_lock` WRITE;
/*!40000 ALTER TABLE `knex_migrations_lock` DISABLE KEYS */;
INSERT INTO `knex_migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `knex_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-14 18:26:35
