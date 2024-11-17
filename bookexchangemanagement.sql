CREATE DATABASE  IF NOT EXISTS `bookexchangeplatform` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bookexchangeplatform`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: bookexchangeplatform
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `booklisting`
--

DROP TABLE IF EXISTS `booklisting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booklisting` (
  `id` int NOT NULL AUTO_INCREMENT,
  `listingId` varchar(200) NOT NULL,
  `bookListTitle` varchar(200) NOT NULL,
  `userId` int NOT NULL,
  `bookList` json NOT NULL,
  `createdOn` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booklisting`
--

LOCK TABLES `booklisting` WRITE;
/*!40000 ALTER TABLE `booklisting` DISABLE KEYS */;
INSERT INTO `booklisting` VALUES (1,'hL2yS6PKiVyV8c87IbKNFbWzIPHEqVGW','adv',1,'[{\"genre\": \"Adventure\", \"title\": \"Don Quixote\", \"author\": \"Miguel de Cervantes\", \"available\": \"Yes\", \"condition\": \"Good\", \"description\": \"Regarded as one of the greatest works in literature, Don Quixote recounts the adventures of Alonso Quixano: a middle-aged man so obsessed with chivalric books that he decides to imitate them and become a knight-errant. So begins his journey to find a faithful squire, save damsels in distress, and fight windmills.\"}]','2024-11-17');
/*!40000 ALTER TABLE `booklisting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `genre` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `listingId` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'To Kill a Mockingbird','Harper Lee','The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. \"To Kill A Mockingbird\" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic. Compassionate, dramatic, and deeply moving, \"To Kill A Mockingbird\" takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos.','Fiction',NULL),(2,'Harry Potter and the Philosopher’s Stone (Harry Potter, #1)','J.K. Rowling','Harry Potter thinks he is an ordinary boy - until he is rescued by an owl, taken to Hogwarts School of Witchcraft and Wizardry, learns to play Quidditch and does battle in a deadly duel. The Reason ... HARRY POTTER IS A WIZARD!','Fantasy',NULL),(3,'Pride and Prejudice','Jane Austen','Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work \"her own darling child\" and its vivacious heroine, Elizabeth Bennet, \"as delightful a creature as ever appeared in print.\"','Fiction',NULL),(4,'The Diary of a Young Girl','Anne Frank','Discovered in the attic in which she spent the last years of her life, Anne Frank’s remarkable diary has become a world classic—a powerful reminder of the horrors of war and an eloquent testament to the human spirit.','Biography',NULL),(5,'Animal Farm','George Orwell','A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality.','Dystopia',NULL),(6,'The Little Prince','Antoine de Saint-Exupéry','A pilot stranded in the desert awakes one morning to see, standing before him, the most extraordinary little fellow. \"Please,\" asks the stranger, \"draw me a sheep.\"',NULL,NULL),(7,'1984','George Orwell','The new novel by George Orwell is the major work towards which all his previous writing has pointed. Critics have hailed it as his \"most solid, most brilliant\" work.',NULL,NULL),(8,'The Great Gatsby','F. Scott Fitzgerald','The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s.',NULL,NULL),(9,'The Catcher in the Rye','J.D. Salinger','It\'s Christmas time and Holden Caulfield has just been expelled from yet another school...Fleeing the crooks at Pencey Prep, he pinballs around New York City seeking solace in fleeting encounters.',NULL,NULL),(10,'The Lord of the Rings','J.R.R. Tolkien','In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.',NULL,NULL),(11,'The Book Thief','Markus Zusak','It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will be busier still.',NULL,NULL),(12,'Jane Eyre','Charlotte Brontë','Orphaned as a child, Jane has felt an outcast her whole young life. Her courage is tested once again when she arrives at Thornfield Hall.',NULL,NULL),(13,'The Chronicles of Narnia (Chronicles of Narnia, #1-7)','C.S. Lewis','Librarian note: An alternate cover for this edition can be found here: 2005. Journeys to the end of the world, fantastic creatures, and epic battles between good and evil—what more could any reader ask for in one book? The book that has it all is The Lion, the Witch and the Wardrobe, written in 1949 by Clive Staples Lewis. But Lewis did not stop there. Six more books followed, and together they became known as The Chronicles of Narnia. For the past fifty years, The Chronicles of Narnia have transcended the fantasy genre to become part of the canon of classic literature. Each of the seven books is a masterpiece, drawing the reader into a land where magic meets reality, and the result is a fictional world whose scope has fascinated generations. This edition presents all seven books—unabridged—in one impressive volume. The books are presented here in chronological order, each chapter graced with an illustration by the original artist, Pauline Baynes. Deceptively simple and direct, The Chronicles of Narnia continue to captivate fans with adventures, characters, and truths that speak to readers of all ages, even fifty years after they were first published.',NULL,NULL),(14,'Lord of the Flies','William Golding','At the dawn of the next world war, a plane crashes on an uncharted island, stranding a group of schoolboys. At first, with no adult supervision, their freedom is something to celebrate; this far from civilization the boys can do anything they want. Anything. They attempt to forge their own society, failing, however, in the face of terror, sin and evil. And as order collapses, as strange howls echo in the night, as terror begins its reign, the hope of adventure seems as far from reality as the hope of being rescued. Labeled a parable, an allegory, a myth, a morality tale, a parody, a political treatise, even a vision of the apocalypse, Lord of the Flies is perhaps our most memorable novel about “the end of innocence, the darkness of man’s heart.”',NULL,NULL),(15,'Romeo and Juliet','William Shakespeare','In Romeo and Juliet, Shakespeare creates a violent world, in which two young people fall in love. It is not simply that their families disapprove; the Montagues and the Capulets are engaged in a blood feud. In this death-filled setting, the movement from love at first sight to the lovers’ final union in death seems almost inevitable. And yet, this play set in an extraordinary world has become the quintessential story of young love. In part because of its exquisite language, it is easy to respond as if it were about all young lovers.',NULL,NULL),(16,'Harry Potter and the Deathly Hallows (Harry Potter, #7)','J.K. Rowling','Harry has been burdened with a dark, dangerous and seemingly impossible task: that of locating and destroying Voldemort\'s remaining Horcruxes. Never has Harry felt so alone, or faced a future so full of shadows. But Harry must somehow find within himself the strength to complete the task he has been given. He must leave the warmth, safety and companionship of The Burrow and follow without fear or hesitation the inexorable path laid out for him... In this final, seventh installment of the Harry Potter series, J.K. Rowling unveils in spectacular fashion the answers to the many questions that have been so eagerly awaited.',NULL,NULL),(17,'The Kite Runner','Khaled Hosseini','1970s Afghanistan: Twelve-year-old Amir is desperate to win the local kite-fighting tournament and his loyal friend Hassan promises to help him. But neither of the boys can foresee what would happen to Hassan that afternoon, an event that is to shatter their lives. After the Russians invade and the family is forced to flee to America, Amir realises that one day he must return to an Afghanistan under Taliban rule to find the one thing that his new world cannot grant him: redemption.',NULL,NULL),(21,'Don Quixote','Miguel de Cervantes','Regarded as one of the greatest works in literature, Don Quixote recounts the adventures of Alonso Quixano: a middle-aged man so obsessed with chivalric books that he decides to imitate them and become a knight-errant. So begins his journey to find a faithful squire, save damsels in distress, and fight windmills.','Adventure','hL2yS6PKiVyV8c87IbKNFbWzIPHEqVGW');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usermanagement`
--

DROP TABLE IF EXISTS `usermanagement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usermanagement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `firstName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `lastName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `resetKey` varchar(145) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdOn` date DEFAULT NULL,
  `updatedOn` date DEFAULT NULL,
  `enabled` bit(1) DEFAULT b'1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `userName_UNIQUE` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usermanagement`
--

LOCK TABLES `usermanagement` WRITE;
/*!40000 ALTER TABLE `usermanagement` DISABLE KEYS */;
INSERT INTO `usermanagement` VALUES (1,'test@test.com','$2b$10$Inl.q4OIgn2gglbKixruAuWbBgUKVYelc657gXOsc63RQ6WewES9W','Test','User','XhvnmwTTiQIqAhEcR09QAlrHIUUyMrNY','2024-11-15',NULL,_binary ''),(9,'test1@test.com','$2b$10$y4j38y4Ye7POrn0VxJ4CqOUDiccni1MLRXX4RbCnlEkIwAYLB01C2','Test1','User',NULL,'2024-11-15',NULL,_binary '');
/*!40000 ALTER TABLE `usermanagement` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-17 22:26:43
