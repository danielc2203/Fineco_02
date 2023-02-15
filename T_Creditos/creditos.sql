-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-12-2022 a las 06:01:16
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `finecoapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `creditos`
--

CREATE TABLE `creditos` (
  `id` int(11) NOT NULL,
  `id_documento` int(11) NOT NULL,
  `solicitud_credito` varchar(100) NOT NULL,
  `monto` varchar(100) NOT NULL,
  `plazo` varchar(100) NOT NULL,
  `amortizacion` varchar(100) NOT NULL,
  `tipo_credito` varchar(100) NOT NULL,
  `deudas_actuales` varchar(100) NOT NULL,
  `egresos` varchar(100) NOT NULL,
  `datacreditos` varchar(100) NOT NULL,
  `capacidad` varchar(100) NOT NULL,
  `calificacion_interna` varchar(100) NOT NULL,
  `tasa` varchar(100) NOT NULL,
  `resultado` varchar(100) NOT NULL,
  `cuota_mensual` varchar(100) NOT NULL,
  `intereses_anticipados` varchar(100) NOT NULL,
  `seguro` varchar(100) NOT NULL,
  `asesoria` varchar(100) NOT NULL,
  `iva` varchar(100) NOT NULL,
  `comentarios` varchar(100) NOT NULL,
  `fecha_solicitud` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `creditos`
--

INSERT INTO `creditos` (`id`, `id_documento`, `solicitud_credito`, `monto`, `plazo`, `amortizacion`, `tipo_credito`, `deudas_actuales`, `egresos`, `datacreditos`, `capacidad`, `calificacion_interna`, `tasa`, `resultado`, `cuota_mensual`, `intereses_anticipados`, `seguro`, `asesoria`, `iva`, `comentarios`, `fecha_solicitud`, `estado`) VALUES
(1, 80826970, 'vivienda', '350.000.000', '120', '3500000', 'Crédito de vivienda', 'Ninguna', '2.500.000', 'Ninguno', '400000000', '5', '0.2', 'Aprobado', '4300000', '0.2*2', '100.000', '% de Calificación y de la solicitud', '19% de la asesoría', 'Obligatorios por el analista', '13/11/2022', 'Pendiente'),
(2, 1022325700, 'Vehiculo', '35.000.000', '24', '350000', 'Crédito de vehiculo', 'Ninguna', '1.500.000', 'Ninguno', '300000000', '5', '0.2', 'Aprobado', '4000000', '0.2*2', '100.000', '% de Calificación y de la solicitud', '19% de la asesoría', 'Obligatorios por el analista', '19/11/2022', 'Aprobado');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `creditos`
--
ALTER TABLE `creditos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `creditos`
--
ALTER TABLE `creditos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
