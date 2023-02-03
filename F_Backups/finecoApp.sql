-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 02-02-2023 a las 21:18:35
-- Versión del servidor: 8.0.32-0ubuntu0.22.04.2
-- Versión de PHP: 8.1.2-1ubuntu2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `finecoApp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bancos`
--

CREATE TABLE `bancos` (
  `id` int NOT NULL,
  `nombre` varchar(80) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `num_cuenta` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `tipo_cuenta` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `estado_cuenta` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `contacto_cuenta` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `logo_banco` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `bancos`
--

INSERT INTO `bancos` (`id`, `nombre`, `num_cuenta`, `tipo_cuenta`, `estado_cuenta`, `contacto_cuenta`, `logo_banco`) VALUES
(1, 'Bancolombia', '102232570011', 'Corriente', 'Activo', '3016834994', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int NOT NULL,
  `primer_nombre` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `segundo_nombre` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `primer_apellido` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `segundo_apellido` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `tipo_documento` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `num_documento` int NOT NULL,
  `correo_electronico` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `telefono` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `estado` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `ocupacion` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `empresa` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `fecha_incorporacion` date NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `direccion_residencia` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `pais` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `departamento` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `ciudad` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `estrato` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `sexo` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `foto_cedula` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `ingreso_mensual` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `salud` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `primer_nombre`, `segundo_nombre`, `primer_apellido`, `segundo_apellido`, `tipo_documento`, `num_documento`, `correo_electronico`, `telefono`, `estado`, `ocupacion`, `empresa`, `fecha_incorporacion`, `fecha_nacimiento`, `direccion_residencia`, `pais`, `departamento`, `ciudad`, `estrato`, `sexo`, `foto_cedula`, `ingreso_mensual`, `salud`) VALUES
(1, 'prueba', 'daniel', 'castro', 'ok', 'CC', 808263970, 'danielc2203@gmaiñ.com', '3016834994', 'Activo', '', '1', '2023-12-31', '2023-12-31', 'CRA 54 # 152-60 INTERIOR 3 APTO 102', 'Colombia', '', 'BOGOTA', '', 'M', NULL, '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `convenios`
--

CREATE TABLE `convenios` (
  `id` int NOT NULL,
  `nombre` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `logo` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `convenios`
--

INSERT INTO `convenios` (`id`, `nombre`, `logo`) VALUES
(2, 'CAGEN - TEGEN', NULL),
(3, 'Casur', NULL),
(4, 'Colpensiones', NULL),
(5, 'Cremil', NULL),
(7, 'Fiduprevisora', NULL),
(8, 'Mindefensa', NULL),
(9, 'Mindefensa Pensionados', NULL),
(10, 'PONAL', NULL),
(11, 'SED Valle del Cauca', NULL),
(12, 'SEM Cali', NULL),
(13, 'SEM Popayán', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `creditos`
--

CREATE TABLE `creditos` (
  `id` int NOT NULL,
  `id_documento` int NOT NULL,
  `solicitud_credito` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `monto` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `plazo` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `amortizacion` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `tipo_credito` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `deudas_actuales` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `egresos` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `datacreditos` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `capacidad` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `calificacion_interna` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `tasa` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `resultado` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `cuota_mensual` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `intereses_anticipados` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `seguro` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `asesoria` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `iva` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `comentarios` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `fecha_solicitud` varchar(50) COLLATE utf32_spanish2_ci NOT NULL,
  `estado` varchar(50) COLLATE utf32_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish2_ci;

--
-- Volcado de datos para la tabla `creditos`
--

INSERT INTO `creditos` (`id`, `id_documento`, `solicitud_credito`, `monto`, `plazo`, `amortizacion`, `tipo_credito`, `deudas_actuales`, `egresos`, `datacreditos`, `capacidad`, `calificacion_interna`, `tasa`, `resultado`, `cuota_mensual`, `intereses_anticipados`, `seguro`, `asesoria`, `iva`, `comentarios`, `fecha_solicitud`, `estado`) VALUES
(3, 80826973, NULL, '1100000', '120', NULL, NULL, NULL, NULL, NULL, '1240000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '17/12/2022', 'Con Cupo'),
(4, 80826974, NULL, '360000', '120', NULL, NULL, NULL, NULL, NULL, '420000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '12/19/2022', 'Negado'),
(5, 80826970, NULL, '400000', '360', NULL, NULL, NULL, NULL, NULL, '410851', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '12/19/2022', 'Aprobado'),
(6, 1022325600, NULL, '320000', '120', NULL, NULL, NULL, NULL, NULL, '410851', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '24/12/2022', 'Pendiente'),
(7, 80826970, NULL, '350.000', '122', NULL, NULL, NULL, NULL, NULL, '410851', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1/11/2023', 'Con Cupo'),
(8, 1000000002, NULL, '2400000', '24', NULL, NULL, NULL, NULL, NULL, '410851', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1/2/2023', 'Pendiente'),
(9, 123456, NULL, '1500000', '48', NULL, NULL, NULL, NULL, NULL, '410851', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2/1/2023', 'Pendiente'),
(10, 808263970, NULL, '1200000', '56', NULL, NULL, NULL, NULL, NULL, '1490080', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1/2/2023', 'Pendiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_usuarios`
--

CREATE TABLE `grupo_usuarios` (
  `id` int NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `grupo_usuarios`
--

INSERT INTO `grupo_usuarios` (`id`, `nombre`) VALUES
(1, 'Administrador'),
(2, 'Comercial'),
(3, 'Credito'),
(4, 'Incorporación'),
(5, 'Tesoreria'),
(6, 'Cartera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Información del crédito`
--

CREATE TABLE `Información del crédito` (
  `id` int NOT NULL,
  `monto` varchar(60) COLLATE utf8mb3_spanish_ci NOT NULL,
  `plazo` varchar(60) COLLATE utf8mb3_spanish_ci NOT NULL,
  `tasa` varchar(60) COLLATE utf8mb3_spanish_ci NOT NULL,
  `amortizacion` varchar(60) COLLATE utf8mb3_spanish_ci NOT NULL,
  `tipo_de_credito` varchar(60) COLLATE utf8mb3_spanish_ci NOT NULL,
  `cuenta a la que le vamos a transferir al cliente` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `plan_de_pago` varchar(60) COLLATE utf8mb3_spanish_ci NOT NULL,
  `estado_de_pagos` varchar(60) COLLATE utf8mb3_spanish_ci NOT NULL,
  `emision_de_facturas` varchar(60) COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimientos`
--

CREATE TABLE `movimientos` (
  `id` int NOT NULL,
  `fecha` date NOT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `sucursal` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `dcto` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `valor` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `saldo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `id_banco` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `movimientos`
--

INSERT INTO `movimientos` (`id`, `fecha`, `descripcion`, `sucursal`, `dcto`, `valor`, `saldo`, `id_banco`) VALUES
(2, '2022-11-01', 'ABONO INTERESES AHORROS', '', '', '88.92', '32457043.92', 1),
(3, '2022-11-01', 'TRANSFERENCIA DESDE NEQUI', '', '', '68020.00', '32525063.92', 1),
(4, '2022-11-01', 'ABONO INTERESES AHORROS', '', '', '267.32', '32525331.24', 1),
(5, '2022-11-01', 'IMPTO GOBIERNO 4X1000', '', '', '-2031.43', '32523299.81', 1),
(6, '2022-11-01', 'COMPRA EN CAMARA DE', '', '', '-6500.00', '32516799.81', 1),
(7, '2022-11-01', 'COMPRA EN CHEVYPLAN', '', '', '-501359.00', '32015440.81', 1),
(8, '2022-11-01', 'ABONO INTERESES AHORROS', '', '', '175.42', '32015616.23', 1),
(9, '2022-11-01', 'IMPTO GOBIERNO 4X1000', '', '', '-6122.79', '32009493.44', 1),
(10, '2022-11-01', 'PAGO A PROVE NECSOFT', '', '', '-330698.60', '31678794.84', 1),
(11, '2022-11-01', 'PAGO A PROVE NUBIA BOLANOS', '', '', '-1200000.00', '30478794.84', 1),
(12, '2022-11-01', 'ABONO INTERESES AHORROS', '', '', '501.00', '30479295.84', 1),
(13, '2022-11-01', 'PAGO A PROV KAPITAL BANK', '', '', '-364500.00', '30114795.84', 1),
(14, '2022-11-01', 'IMPTO GOBIERNO 4X1000', '', '', '-16044.37', '30098751.47', 1),
(15, '2022-11-01', 'PAGO PSE IMPUESTO DIAN', 'CENTRO FINANCIERO', '', '-1218000.00', '28880751.47', 1),
(16, '2022-11-01', 'COMPRA EN TEXACO EDS', '', '', '-20000.00', '28860751.47', 1),
(17, '2022-11-01', 'PAGO PSE Bancolombia', '', '', '-4000.00', '28856751.47', 1),
(18, '2022-11-01', 'PAGO A PROVE REGUS', '', '', '-2255219.00', '26601532.47', 1),
(19, '2022-11-01', 'PAGO A PROVE REGUS', '', '', '-149373.50', '26452158.97', 1),
(20, '2022-11-01', 'ABONO INTERESES AHORROS', '', '', '144.94', '26452303.91', 1),
(21, '2022-11-01', 'ABONO INTERESES AHORROS', '', '', '56.61', '26452360.52', 1),
(22, '2022-11-01', 'PAGO A PROV GAF TECHNOLOGY SOL', '', '', '-5764047.00', '20688313.52', 1),
(23, '2022-11-01', 'IMPTO GOBIERNO 4X1000', '', '', '-23056.18', '20665257.34', 1),
(24, '2022-11-01', 'PAGO A PROV KAPITAL BANK', '', '', '-364500.00', '20300757.34', 1),
(25, '2022-11-01', 'IMPTO GOBIERNO 4X1000', '', '', '-28943.60', '20271813.74', 1),
(26, '2022-11-01', 'PAGO A NOMIN MIGUEL DIAZ GRA', '', '', '-2760000.00', '17511813.74', 1),
(27, '2022-11-01', 'PAGO A NOMIN GUSTAVO VIVES', '', '', '-2760000.00', '14751813.74', 1),
(28, '2022-11-01', 'PAGO PSE COMPENSAR-OI', '', '', '-1351400.00', '13400413.74', 1),
(29, '2022-11-01', 'ABONO INTERESES AHORROS', '', '', '146.84', '13400560.58', 1),
(30, '2022-11-01', 'PAGO DE PROV AUTONIZA SA', '', '', '207526.00', '13608086.58', 1),
(31, '2022-11-01', 'ABONO INTERESES AHORROS', '', '', '37.28', '13608123.86', 1),
(32, '2022-11-01', 'IMPTO GOBIERNO 4X1000', '', '', '-144.56', '13607979.30', 1),
(33, '2022-11-01', 'COMPRA EN UBER *TRI', '', '', '-17400.00', '13590579.30', 1),
(34, '2022-11-01', 'COMPRA INTL UBER PENDING', '', '', '-18742.41', '13571836.89', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ocupacion`
--

CREATE TABLE `ocupacion` (
  `id` int NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `ocupacion`
--

INSERT INTO `ocupacion` (`id`, `nombre`) VALUES
(1, 'Empleado'),
(2, 'Pensionado'),
(3, 'Docente'),
(4, 'Policía'),
(5, 'Fuerzas Armadas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `todo_list`
--

CREATE TABLE `todo_list` (
  `id` int NOT NULL,
  `titulo` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `id_usr` int NOT NULL,
  `fecha_asigando` date NOT NULL,
  `creado_por` int DEFAULT NULL,
  `estado_tarea` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `todo_list`
--

INSERT INTO `todo_list` (`id`, `titulo`, `descripcion`, `fecha`, `id_usr`, `fecha_asigando`, `creado_por`, `estado_tarea`) VALUES
(1, 'tarea 1 para ', 'Daniel Stiven', '2022-11-16', 2, '0000-00-00', 0, 'done'),
(4, 'tarea Tres 333', 'Esta es la descripciòn de la tarea numero cuatro', '2022-11-10', 1, '0000-00-00', 0, 'done'),
(7, 'Nueva tarea', 'Daniel Castro / Tarea Realizada ... ', '2022-11-08', 2, '0000-00-00', 0, 'activa'),
(10, 'tarea Cinco de stiven', 'Para Daniel - Asiganda', '2022-12-07', 1, '0000-00-00', 0, 'activa'),
(11, 'Nueva Tarea Fecha', 'para pruebas de fecha', '2022-11-12', 2, '0000-00-00', 0, 'done'),
(13, 'Pruebas 20', 'Pruebas finales de tareas', '2022-12-10', 1, '0000-00-00', 0, 'done'),
(14, 'Tarea Activa', 'Prueba de Envio Activa', '2022-11-11', 1, '0000-00-00', 0, 'activa'),
(15, 'Tarea Activa Dos', 'Activa 2', '2022-11-10', 1, '2022-11-10', 0, 'done'),
(16, 'tarea para stiven', 'revisar Nueva tarea', '2022-11-16', 1, '2022-11-10', NULL, 'done'),
(17, 'Tarea Daniel Castro ', 'Si quedo bien', '2022-11-10', 2, '2022-11-10', NULL, 'done'),
(18, 'tarea para daniel castro Para Stiven', 'Actualizar servidor', '2022-11-21', 2, '2022-11-18', NULL, 'activa'),
(19, 'Revisar App', 'Diligenciar clientes y revisar app', '2022-12-21', 9, '2022-12-14', NULL, 'activa'),
(20, 'Revisar Calculadoras', 'Revisión de las calculadoras FINECO', '2022-12-21', 7, '2022-12-14', NULL, 'activa'),
(21, 'Meter nuevo usuario en BD', 'urgente', '2023-02-08', 2, '2023-02-01', NULL, 'activa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `nombres` varchar(50) COLLATE utf8mb3_spanish_ci NOT NULL,
  `apellidos` varchar(50) COLLATE utf8mb3_spanish_ci NOT NULL,
  `correo` varchar(50) COLLATE utf8mb3_spanish_ci NOT NULL,
  `password` varchar(120) COLLATE utf8mb3_spanish_ci NOT NULL,
  `estado` int NOT NULL,
  `rol_id` int NOT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  `ruta_imagen` varchar(256) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `correo`, `password`, `estado`, `rol_id`, `fecha_ingreso`, `ruta_imagen`) VALUES
(1, 'Daniel', 'Castro Reyes', 'danielc2203@gmail.com', '3e67f2e7f20bad1444dc007ab16d2c42', 1, 1, NULL, '../dist/img/usuarios/daniel.jpg'),
(2, 'Stiven', 'Castro', 'riosstiven44@gmail.com', '3e67f2e7f20bad1444dc007ab16d2c42', 1, 1, NULL, '../dist/img/usuarios/avatar.jpg'),
(4, 'cloy', 'Castro', 'cloy@pruebas.com', '31b415a9e392fcdac6ad9a69f5db7083', 1, 2, NULL, '../dist/img/usuarios/avatar.jpg'),
(7, 'Miguel', 'Díaz Granados', 'mdg@fineco.com.co', '31b415a9e392fcdac6ad9a69f5db7083', 1, 0, NULL, '../dist/img/usuarios/avatar.jpg'),
(9, 'Gustavo', 'Vivies', 'gvives@fineco.com.co', '31b415a9e392fcdac6ad9a69f5db7083', 1, 1, NULL, '../dist/img/usuarios/avatar.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bancos`
--
ALTER TABLE `bancos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `convenios`
--
ALTER TABLE `convenios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `creditos`
--
ALTER TABLE `creditos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo_usuarios`
--
ALTER TABLE `grupo_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Información del crédito`
--
ALTER TABLE `Información del crédito`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movimientos`
--
ALTER TABLE `movimientos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ocupacion`
--
ALTER TABLE `ocupacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `todo_list`
--
ALTER TABLE `todo_list`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rol_id` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bancos`
--
ALTER TABLE `bancos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `convenios`
--
ALTER TABLE `convenios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `creditos`
--
ALTER TABLE `creditos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `grupo_usuarios`
--
ALTER TABLE `grupo_usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `Información del crédito`
--
ALTER TABLE `Información del crédito`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `movimientos`
--
ALTER TABLE `movimientos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de la tabla `ocupacion`
--
ALTER TABLE `ocupacion`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `todo_list`
--
ALTER TABLE `todo_list`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
