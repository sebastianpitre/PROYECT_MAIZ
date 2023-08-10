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
  `id_user1` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuario` (`id_user1`),
  CONSTRAINT `fk_usuario1` FOREIGN KEY (`id_user1`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `inventario` */

LOCK TABLES `inventario` WRITE;

insert  into `inventario`(`id`,`nombre_producto`,`tipo_inventario`,`cantidad`,`precio_unidad`,`tiempo_alq`,`subtotal_alquiler`,`id_user1`) values (1,'Tractor','alquilar','1','100000','2',NULL,2),(2,'Mangueras','comprar','12','20000',NULL,NULL,2);

UNLOCK TABLES;

/*Table structure for table `terreno` */

DROP TABLE IF EXISTS `terreno`;

CREATE TABLE `terreno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area` varchar(255) DEFAULT NULL,
  `surcos` varchar(255) DEFAULT NULL,
  `distancia` varchar(255) DEFAULT NULL,
  `cotizar_lab` varchar(255) DEFAULT NULL,
  `id_user` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuario` (`id_user`),
  CONSTRAINT `fk_usuario` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `terreno` */

LOCK TABLES `terreno` WRITE;

insert  into `terreno`(`id`,`area`,`surcos`,`distancia`,`id_user`) values (1,'10000','90','25',1),(2,'1200000','90','25',2);

UNLOCK TABLES;

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_u` varchar(255) DEFAULT NULL,
  `pss_u` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `usuario` */

LOCK TABLES `usuario` WRITE;

insert  into `usuario`(`id_usuario`,`nombre_u`,`pss_u`) values (1,'user1',NULL),(2,'user2',NULL);

UNLOCK TABLES;

/*Table structure for table `preparacion_terreno` */

DROP TABLE IF EXISTS `preparacion_terreno`;

CREATE TABLE `preparacion_terreno` (
  `id_terreno` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  
  `subtotal_alquiler` varchar(255) DEFAULT NULL,
  `id_user2` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_terreno`),
  KEY `fk_usuario` (`id_user2`),
  CONSTRAINT `fk_usuario2` FOREIGN KEY (`id_user2`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `preparacion_terreno` */

LOCK TABLES `preparacion_terreno` WRITE;

UNLOCK TABLES;

/*Table structure for table  `proceso_siembra` */

DROP TABLE IF EXISTS `proceso_siembra`;

CREATE TABLE `proceso_siembra` (
  `id_siembra` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  `precio_semilla` varchar(255) DEFAULT NULL,

  
  `subtotal_alquiler` varchar(255) DEFAULT NULL,
  `id_user3` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_siembra`),
  KEY `fk_usuario` (`id_user3`),
  CONSTRAINT `fk_usuario3` FOREIGN KEY (`id_user3`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `proceso_siembra` */

LOCK TABLES `proceso_siembra` WRITE;

UNLOCK TABLES;


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
