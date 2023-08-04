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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

/*Data for the table `inventario` */

LOCK TABLES `inventario` WRITE;

insert  into `inventario`(`id`,`nombre_producto`,`tipo_inventario`,`cantidad`,`precio_unidad`,`tiempo_alq`,`subtotal_alquiler`) values (59,'ujgb','comprar','','',NULL,NULL);

UNLOCK TABLES;

/*Table structure for table `terreno` */

DROP TABLE IF EXISTS `terreno`;

CREATE TABLE `terreno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area` varchar(255) DEFAULT NULL,
  `surcos` varchar(255) DEFAULT NULL,
  `distancia` varchar(255) DEFAULT NULL,
  `id_user` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuario` (`id_user`),
  CONSTRAINT `fk_usuario` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

/*Data for the table `terreno` */

LOCK TABLES `terreno` WRITE;

insert  into `terreno`(`id`,`area`,`surcos`,`distancia`,`id_user`) values (1,'10000','75','25',1),(2,'129',NULL,NULL,NULL),(3,'5',NULL,NULL,NULL),(4,'4',NULL,NULL,NULL),(5,'4',NULL,NULL,NULL),(6,'4',NULL,NULL,NULL),(7,'',NULL,NULL,NULL),(8,'',NULL,NULL,NULL),(9,'1',NULL,NULL,NULL),(10,'7',NULL,NULL,NULL),(11,'4',NULL,NULL,NULL),(12,'5',NULL,NULL,NULL);

UNLOCK TABLES;

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_u` varchar(255) DEFAULT NULL,
  `pss_u` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

/*Data for the table `usuario` */

LOCK TABLES `usuario` WRITE;

insert  into `usuario`(`id_usuario`,`nombre_u`,`pss_u`) values (1,'user1',NULL),(2,'user2',NULL),(3,'user3',NULL),(4,'user4',NULL),(5,'user5',NULL),(6,'user6',NULL),(7,'user7',NULL),(8,'user8',NULL),(9,'user9',NULL),(10,'user10',NULL),(11,'user11',NULL),(12,'user12',NULL),(13,'user13',NULL),(14,'user14',NULL),(15,'user15',NULL),(16,'user16',NULL),(17,'user17',NULL),(18,'user18',NULL),(19,'user19',NULL),(20,'user20',NULL),(21,'user21',NULL);

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
