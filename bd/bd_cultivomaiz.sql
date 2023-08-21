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
/*DROP DATABASE bd_cultivomaiz;*/
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bd_cultivomaiz` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `bd_cultivomaiz`;

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


UNLOCK TABLES;

/*Table structure for table `analisis_terreno` */

DROP TABLE IF EXISTS `analisis_terreno`;

CREATE TABLE `analisis_terreno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  
  `subtotal_alquiler` varchar(255) DEFAULT NULL,
  `id_user_analisis` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuario` (`id_user_analisis`),
  CONSTRAINT `fk_usuario1` FOREIGN KEY (`id_user_analisis`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `analisis_terreno` */

LOCK TABLES `analisis_terreno` WRITE;


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
  `id_user_preparacion` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_terreno`),
  KEY `fk_usuario` (`id_user_preparacion`),
  CONSTRAINT `fk_usuario2` FOREIGN KEY (`id_user_preparacion`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `preparacion_terreno` */

LOCK TABLES `preparacion_terreno` WRITE;

UNLOCK TABLES;

/*Table structure for table  `proceso_siembra` */

DROP TABLE IF EXISTS `proceso_siembra`;

CREATE TABLE `proceso_siembra` (
  `id_siembra` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `precio_semilla` varchar(255) DEFAULT NULL,
  `valor_semilla` varchar(255) DEFAULT NULL,
  `valor_tonelada` varchar(255) DEFAULT NULL,
  `id_user_siembra` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_siembra`),
  KEY `fk_usuario` (`id_user_siembra`),
  CONSTRAINT `fk_usuario3` FOREIGN KEY (`id_user_siembra`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `proceso_siembra` */

LOCK TABLES `proceso_siembra` WRITE;

UNLOCK TABLES;

/*Table structure for table `fertilizacion` */

DROP TABLE IF EXISTS `fertilizacion`;

CREATE TABLE `fertilizacion` (
  `id_fertilizacion` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  
  `subtotal_alquiler` varchar(255) DEFAULT NULL,
  `id_user_fertilizacion` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_fertilizacion`),
  KEY `fk_usuario` (`id_user_fertilizacion`),
  CONSTRAINT `fk_usuario4` FOREIGN KEY (`id_user_fertilizacion`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `fertilizacion` */

LOCK TABLES `fertilizacion` WRITE;

UNLOCK TABLES;

/*Table structure for table `cosecha` */

DROP TABLE IF EXISTS `cosecha`;

CREATE TABLE `cosecha` (
  `id_cosecha` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  
  `subtotal_alquiler` varchar(255) DEFAULT NULL,
  `id_user_cosecha` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_cosecha`),
  KEY `fk_usuario` (`id_user_cosecha`),
  CONSTRAINT `fk_usuario5` FOREIGN KEY (`id_user_cosecha`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `cosecha` */

LOCK TABLES `cosecha` WRITE;
UNLOCK TABLES;

/*Table structure for table `pos_cosecha` */

DROP TABLE IF EXISTS `pos_cosecha`;

CREATE TABLE `pos_cosecha` (
  `id_pos_cosecha` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  
  `subtotal_alquiler` varchar(255) DEFAULT NULL,
  `id_user_pos_cosecha` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_pos_cosecha`),
  KEY `fk_usuario` (`id_user_pos_cosecha`),
  CONSTRAINT `fk_usuario6` FOREIGN KEY (`id_user_pos_cosecha`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `pos_cosecha` */

LOCK TABLES `pos_cosecha` WRITE;
UNLOCK TABLES;

/*Table structure for table `comercializar` */

DROP TABLE IF EXISTS `comercializar`;

CREATE TABLE `comercializar` (
  `id_comercializar` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  
  `subtotal_alquiler` varchar(255) DEFAULT NULL,
  `id_user_comercializar` int(255) DEFAULT NULL,
  PRIMARY KEY (`id_comercializar`),
  KEY `fk_usuario` (`id_user_comercializar`),
  CONSTRAINT `fk_usuario7` FOREIGN KEY (`id_user_comercializar`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `comercializar` */

LOCK TABLES `comercializar` WRITE;
UNLOCK TABLES;

/*Table structure for table `cronograma` */

DROP TABLE IF EXISTS `cronograma`;

CREATE TABLE `cronograma`(  
  `id_cronograma` INT NOT NULL AUTO_INCREMENT,
  `fecha_inicial` DATE,
  PRIMARY KEY (`id_cronograma`),
  `id_user_cronograma` int(255) DEFAULT NULL,
  KEY `fk_usuario` (`id_user_cronograma`),
  CONSTRAINT `fk_usuario8` FOREIGN KEY (`id_user_cronograma`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;


/*Data for the table `cronograma` */

LOCK TABLES `cronograma` WRITE;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
