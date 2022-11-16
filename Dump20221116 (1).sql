-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: resume_db
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user_goals`
--

DROP TABLE IF EXISTS `user_goals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_goals` (
  `id` int NOT NULL AUTO_INCREMENT,
  `goal_name` varchar(100) NOT NULL,
  `goal_description` varchar(2000) NOT NULL,
  `goal_target_date` datetime NOT NULL,
  `goal_completed` datetime DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `uid_idx` (`user_id`),
  CONSTRAINT `uid` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_goals`
--

LOCK TABLES `user_goals` WRITE;
/*!40000 ALTER TABLE `user_goals` DISABLE KEYS */;
INSERT INTO `user_goals` VALUES (2,'DevOps Certification','ddsdsDevOps certification is a formalized testing program intended to ensure that applicants have achieved an appropriate level of skills and knowledge for working in the converged areas of software development and IT operations.','2023-04-01 00:00:00',NULL,4),(4,'ITIL Ceritification','ITIL certifications demonstrate that you are educated in service management best practices, utilizing processes, terminology, and methods that are common in modern IT.','2023-01-27 00:00:00',NULL,4);
/*!40000 ALTER TABLE `user_goals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_com_name` varchar(100) NOT NULL,
  `user_address` varchar(150) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_contact_no` varchar(45) NOT NULL,
  `user_image` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(150) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'er','lizapaano@gmail.com','$2a$10$CBa6Psd/HkOiHw/HAHn.oOr5SYd9xcnZ1yArDuRLYfOTWwnf7WrNq',NULL),(4,'reypaano','reypaano@gmail.com','$2a$10$9qyMlBOx9Lx2hmmqhkjCY..coglgHx5rFvEeRTaS7S4.LqAMJd096',NULL),(5,'reypaano2','dsada#g.com','$2a$10$sHtvilIz6JvpcEcOJVVvkO.K9VH0gX/cyf6PAS1cdCqvJSWiDkCeO',NULL),(6,'reypaano3','reqy@g.com','$2a$10$x6wq9pNH/zdpHBuiwlGdNObMWtT5OsmwWQf3Dkm7b3nEEuS8hjRxy',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_school_expe`
--

DROP TABLE IF EXISTS `work_school_expe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_school_expe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `date` varchar(50) DEFAULT NULL,
  `expe_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_school_expe`
--

LOCK TABLES `work_school_expe` WRITE;
/*!40000 ALTER TABLE `work_school_expe` DISABLE KEYS */;
INSERT INTO `work_school_expe` VALUES (1,'BS Computer Science','Xavier University - Ateneo de Cagayan','Taken up Bachelor of Science in Computer Science at Xavier University - Ateneo de Cagayan from 2012 to 2016','March 2016','school'),(2,'Full Stack Developer','Mines and Geoscience Bureau','Had my On-the-job training at Mines and Geoscience Bureau with Key Responsibility: Developed a Document Management System (DMS) ','April - May 2015','work'),(3,'Full-Stack Developer','Unistar Credit and Finance Corporation','First work Experience in UCFC developing in-house Web Application and Monile Application for Android ','November 2016 - September 2021','work'),(4,'Data Engineer / Fullstack','Yondu Inc.','Deployed to Globe and responsible for developing Front-end of EDO Mapping Automation toolt','September - December 2021','work'),(5,'Web/Front-End Developer','Collabera Technologies Private Limited Inc','Deployed to CIS Bayad and responsible for developing BFA Web Application, microsites for cash-in and cash-out with Bayad Mobile Application, and E-sabog UX/UI with functionalities for player Registration and Cash-in/out','February 2022 - Present','work');
/*!40000 ALTER TABLE `work_school_expe` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-16 19:12:49
