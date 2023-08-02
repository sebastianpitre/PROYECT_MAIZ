/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.24-MariaDB : Database - bd_valores
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bd_valores` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `bd_valores`;

/*Table structure for table `inventario1` */

DROP TABLE IF EXISTS `inventario1`;

CREATE TABLE `inventario1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario1` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  `subtotal_alquiler` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `inventario1` */

LOCK TABLES `inventario1` WRITE;

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
  CONSTRAINT `fk_usuario` FOREIGN KEY (`id_user`) REFERENCES `bd_cultivomaiz`.`usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `terreno` */

LOCK TABLES `terreno` WRITE;

insert  into `terreno`(`id`,`area`,`surcos`,`distancia`,`id_user`) values (1,'1','2','3',1);

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
