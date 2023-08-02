/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.24-MariaDB : Database - bd_cultivomaiz
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bd_cultivomaiz` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `bd_cultivomaiz`;

/*Table structure for table `inventario` */

DROP TABLE IF EXISTS `inventario`;

CREATE TABLE `inventario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  `subtotal_alquiler` varchar(255) DEFAULT NULL,
  `datos_usuarios` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuario` (`datos_usuarios`),
  CONSTRAINT `fk_usuario` FOREIGN KEY (`datos_usuarios`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `inventario` */

LOCK TABLES `inventario` WRITE;

insert  into `inventario`(`id`,`nombre_producto`,`tipo_inventario`,`cantidad`,`precio_unidad`,`tiempo_alq`,`subtotal_alquiler`,`datos_usuarios`) values (1,'','alquilar','','','',NULL,36);

UNLOCK TABLES;

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_u` varchar(255) DEFAULT NULL,
  `pss_u` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

/*Data for the table `usuario` */

LOCK TABLES `usuario` WRITE;

insert  into `usuario`(`id_usuario`,`nombre_u`,`pss_u`) values (1,'user1',NULL),(2,'user2',NULL),(3,'user3',NULL),(4,'user4',NULL),(5,'user5',NULL),(6,'user6',NULL),(7,'user7',NULL),(8,'user8',NULL),(9,'user9',NULL),(10,'user10',NULL),(11,'user11',NULL),(12,'user12',NULL),(13,'user13',NULL),(14,'user14',NULL),(15,'user15',NULL),(16,'user16',NULL),(17,'user17',NULL),(18,'user18',NULL),(19,'user19',NULL),(20,'user20',NULL),(21,'user21',NULL),(22,'user22',NULL),(23,'user23',NULL),(24,'user24',NULL),(25,'user25',NULL),(26,'user26',NULL),(27,'user27',NULL),(28,'user28',NULL),(29,'user29',NULL),(30,'user30',NULL),(31,'user31',NULL),(32,'user32',NULL),(33,'user33',NULL),(34,'user34',NULL),(35,'user35',NULL),(36,'user36',NULL),(37,'user37',NULL),(38,'user38',NULL),(39,'user39',NULL),(40,'user40',NULL),(41,'user41',NULL),(42,'user42',NULL);

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
