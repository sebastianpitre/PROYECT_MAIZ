-- phpMyAdmin SQL Dump-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-08-2023 a las 16:45:03
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_cultivomaiz`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventario`
--

CREATE TABLE `inventario` (
  `id` int(11) NOT NULL,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  `subtotal_alquiler` varchar(255) DEFAULT NULL,
  `id_user1` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `inventario`
--

INSERT INTO `inventario` (`id`, `nombre_producto`, `tipo_inventario`, `cantidad`, `precio_unidad`, `tiempo_alq`, `subtotal_alquiler`, `id_user1`) VALUES
(1, 'hjh', 'alquilar', '6', '6567', '5', NULL, 4),
(2, 'hjuigufguikm', 'alquilar', '89', '65', '5', NULL, 4),
(3, 'yuhbi', 'comprar', '766', '9', NULL, NULL, 4),
(4, 'bcxrgfhg', 'alquilar', '89', '65', '5', NULL, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prepa_terreno`
--

CREATE TABLE `prepa_terreno` (
  `id_terreno` int(11) NOT NULL,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  `subtotal_alquiler` varchar(255) DEFAULT NULL,
  `id_user2` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proceso_siembra`
--

CREATE TABLE `proceso_siembra` (
  `id_siembra` int(11) NOT NULL,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `tipo_inventario` varchar(255) DEFAULT NULL,
  `cantidad` varchar(255) DEFAULT NULL,
  `precio_unidad` varchar(255) DEFAULT NULL,
  `tiempo_alq` varchar(255) DEFAULT NULL,
  `precio_semilla` varchar(255) DEFAULT NULL,
  `subtotal_alquiler` varchar(255) DEFAULT NULL,
  `id_user3` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `terreno`
--

CREATE TABLE `terreno` (
  `id` int(11) NOT NULL,
  `area` varchar(255) DEFAULT NULL,
  `surcos` varchar(255) DEFAULT NULL,
  `distancia` varchar(255) DEFAULT NULL,
  `cotizar_lab` varchar(255) DEFAULT NULL,
  `id_user` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `terreno`
--

INSERT INTO `terreno` (`id`, `area`, `surcos`, `distancia`, `cotizar_lab`, `id_user`) VALUES
(1, '10000', '90', '25', NULL, 1),
(2, '1200000', '90', '25', NULL, 2),
(3, NULL, '75', '25', NULL, 3),
(4, NULL, '75', '25', NULL, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nombre_u` varchar(255) DEFAULT NULL,
  `pss_u` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre_u`, `pss_u`) VALUES
(1, 'user1', NULL),
(2, 'user2', NULL),
(3, 'user3', NULL),
(4, 'user4', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario` (`id_user1`);

--
-- Indices de la tabla `prepa_terreno`
--
ALTER TABLE `prepa_terreno`
  ADD PRIMARY KEY (`id_terreno`),
  ADD KEY `fk_usuario` (`id_user2`);

--
-- Indices de la tabla `proceso_siembra`
--
ALTER TABLE `proceso_siembra`
  ADD PRIMARY KEY (`id_siembra`),
  ADD KEY `fk_usuario` (`id_user3`);

--
-- Indices de la tabla `terreno`
--
ALTER TABLE `terreno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario` (`id_user`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `inventario`
--
ALTER TABLE `inventario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `prepa_terreno`
--
ALTER TABLE `prepa_terreno`
  MODIFY `id_terreno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `proceso_siembra`
--
ALTER TABLE `proceso_siembra`
  MODIFY `id_siembra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `terreno`
--
ALTER TABLE `terreno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD CONSTRAINT `fk_usuario1` FOREIGN KEY (`id_user1`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `prepa_terreno`
--
ALTER TABLE `prepa_terreno`
  ADD CONSTRAINT `fk_usuario2` FOREIGN KEY (`id_user2`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `proceso_siembra`
--
ALTER TABLE `proceso_siembra`
  ADD CONSTRAINT `fk_usuario3` FOREIGN KEY (`id_user3`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `terreno`
--
ALTER TABLE `terreno`
  ADD CONSTRAINT `fk_usuario` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
