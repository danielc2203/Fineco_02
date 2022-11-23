-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-11-2022 a las 04:35:59
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

-- --------------------------------------------------------usuarios

--
-- Estructura de tabla para la tabla `bancos`
--

CREATE TABLE `bancos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `monto` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `id_credito` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `primer_nombre` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `segundo_nombre` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `primer_apellido` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `segundo_apellido` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `tipo_documento` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `num_documento` varchar(11) COLLATE utf8_spanish_ci NOT NULL,
  `correo_electronico` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `estado` varchar(13) COLLATE utf8_spanish_ci NOT NULL,
  `ocupacion` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `empresa` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_incorporacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `primer_nombre`, `segundo_nombre`, `primer_apellido`, `segundo_apellido`, `tipo_documento`, `num_documento`, `correo_electronico`, `telefono`, `estado`, `ocupacion`, `empresa`, `fecha_incorporacion`) VALUES
(1, 'Juancho', 'Camilo', 'Perez', 'Martinez', 'Seleccionar...', '21212121', 'juan@123.com', '5558889996', 'Activo', 'Empleado', 'Fineco', '2022-10-01'),
(2, 'Luis', 'Fernando', 'Perez', 'Corral', 'Seleccionar...', '2147483647', 'JuanFernando@gmail.com', '3003332244', 'Activo', 'Empleado', '', '2022-10-01'),
(3, 'Valentina', 'Laverde', 'dela', 'Rosa', 'Seleccionar...', '11223344', 'ValentinaLaverde@gmail.com', '3123332244', 'Activo', 'Pensionado', 'Fuerza Aerea', '2022-10-26'),
(4, 'Sara', 'Teresa', 'Sanchez', 'Pinar', 'CE', '2147483647', 'SaraTeresa@gmail.com', '3203332244', '1', 'Empleado', 'Casur', '0000-00-00'),
(5, 'Efrain', 'Jose', 'Casas', 'Mejia', 'Seleccionar...', '2147483647', 'EfrainJose@gmail.com', '3013332244', 'Inactivo', 'Independiente', 'Fuerza Aerea', '2022-10-26'),
(6, 'Julieta', 'Maria', 'Ponce', 'Leon', 'CC', '2147483647', 'JulietaMaria@gmail.com', '3003332244', '1', 'Empleado', 'Ejercito', '0000-00-00'),
(7, 'Martin', 'Elias', 'Rios', 'Acosta', 'CC', '2147483647', 'MartinElias@gmail.com', '3043332244', '1', 'Pensionado', 'Fineco', '0000-00-00'),
(8, 'Olivia', 'Acevedo', 'Velazques', 'Rios', 'Seleccionar...', '1994802', 'juanc@fineco.com.co', '3053760030', 'Activo', 'Empleado', 'Fiscalia', '2022-10-20'),
(9, 'Jose', 'Mora', 'Castillo', 'Duran', 'CC', '5419415', 'JuanFernando@gmail.com', '3052670449', '1', 'Empleado', 'Armada Nacional', '0000-00-00'),
(10, 'Jose', 'Del', 'CARMEN', 'REMOLINA', 'CC', '5419632', 'ValentinaLaverde@gmail.com', '3051580869', '1', 'Pensionado', 'Casur', '0000-00-00'),
(11, 'ISMAEL', 'VILLAMIZAR', 'GAMBOA', '', 'CE', '5419690', 'SaraTeresa@gmail.com', '3050491289', '1', 'Empleado', 'Casur', '0000-00-00'),
(12, 'MIGUEL', 'ANGEL', 'TAMAYO', 'FLOREZ', 'Seleccionar...', '5419883', 'Miguelangel@gmail.com', '3049401708', 'Activo', 'Independiente', 'Policia', '2022-10-26'),
(13, 'HECTOR', 'CALDERON', '', '', 'CC', '5420006', 'JulietaMaria@gmail.com', '3048312128', '1', 'Empleado', 'Ejercito', '0000-00-00'),
(14, 'ERIBERTO', 'PATI?O', 'ARDILA', '', 'CC', '5420065', 'MartinElias@gmail.com', '3047222548', '1', 'Pensionado', 'Fineco', '0000-00-00'),
(15, 'TOBIAS', 'FLOREZ', 'TORRES', '', 'CC', '5420200', 'juanc@fineco.com.co', '3046132967', '1', 'Empleado', 'Armada Nacional', '0000-00-00'),
(16, 'HELMAN', 'MONTAGUT', 'SANCHEZ', '', 'CC', '5420365', 'JuanFernando@gmail.com', '3045043387', '1', 'Empleado', 'Armada Nacional', '0000-00-00'),
(17, 'JAVIER', 'EUGENIO', 'MONTAGUT', 'ORTEGA', 'CC', '5420601', 'ValentinaLaverde@gmail.com', '3043953807', '1', 'Pensionado', 'Casur', '0000-00-00'),
(18, 'AUGUSTO', 'AQUILES', 'HERNANDEZ', 'GONZALEZ', 'CE', '5420613', 'SaraTeresa@gmail.com', '3042864226', '1', 'Empleado', 'Casur', '0000-00-00'),
(19, 'OLMEDO', 'JEREZ', 'PATI?O', '', 'CC', '5420956', 'EfrainJose@gmail.com', '3041774646', '1', 'Independiente', 'Ejercito', '0000-00-00'),
(20, 'MIGUEL', 'RAMON', 'ARCINIEGAS', 'ROPERO', 'CC', '5423267', 'JulietaMaria@gmail.com', '3040685065', '1', 'Empleado', 'Ejercito', '0000-00-00'),
(21, 'LUIS', 'FRANCISCO', 'CA?AS', 'ANAYA', 'CC', '5423338', 'MartinElias@gmail.com', '3039595485', '1', 'Pensionado', 'Fineco', '0000-00-00'),
(22, 'VICTOR', 'BALAGUERA', 'VILLAMIZAR', '', 'CC', '5423367', 'juanc@fineco.com.co', '3038505905', '1', 'Empleado', 'Armada Nacional', '0000-00-00'),
(23, 'LUCIANO', 'PABON', 'RODRIGUEZ', '', 'CC', '5566830', 'JuanFernando@gmail.com', '3037416324', '1', 'Empleado', 'Armada Nacional', '0000-00-00'),
(24, 'CIRO', 'ANTONIO', 'RINCON', 'CARVAJAL', 'CC', '5726642', 'leidy@gmail.com', '3036326744', 'Activo', 'Pensionado', 'Policia', '2022-08-10'),
(25, 'NORBERTO', 'GARRIDOS', 'CARRE?O', '', 'CE', '5795119', 'SaraTeresa@gmail.com', '3035237164', '1', 'Empleado', 'Casur', '0000-00-00'),
(26, 'ISAIAS', 'JIMENEZ', 'GONZALEZ', '', 'CC', '8724509', 'EfrainJose@gmail.com', '3034147583', '1', 'Independiente', 'Ejercito', '0000-00-00'),
(27, 'FABIAN', 'ORTIZ', 'VEGA', '', 'CC', '13285391', 'JulietaMaria@gmail.com', '3033058003', '1', 'Empleado', 'Ejercito', '0000-00-00'),
(29, 'ALDRUAL', 'VILLAMIZAR', 'SANCHEZ', '', 'CC', '13512478', 'juanc@fineco.com.co', '3030878842', '1', 'Empleado', 'Armada Nacional', '0000-00-00'),
(30, 'REYNALDO', 'VEGA', 'GOMEZ', '', 'CC', '13536936', 'JuanFernando@gmail.com', '3029789262', '1', 'Empleado', 'Armada Nacional', '0000-00-00'),
(31, 'JOSE', 'ALFREDO', 'JIMENEZ', 'VELANDIA', 'CC', '13541275', 'ValentinaLaverde@gmail.com', '3028699682', '1', 'Pensionado', 'Casur', '0000-00-00'),
(32, 'RUBEN', 'GUTIERREZ', 'RODRIGUEZ', '', 'CC', '6546546546', 'rioosstiven44@gmail.com', '3027610101', 'Activo', 'Empleado', 'Armada', '2022-10-19'),
(50, 'José', 'Daniel', 'Castro', 'Reyes', 'CC', '6546546546', 'daniec2003@gmail.com', '3016834994', 'Activo', 'Empleado', 'Fineco', '2022-10-19'),
(62, 'diana', 'Milena', 'Rios', 'Piñeres', 'CE', '3232323232', 'ValentinaLaverde@gmail.com', '55555556', 'Activo', 'Empleada', 'Fuerza Aerea', '0000-00-00'),
(63, 'Daniel', 'Stiven', 'Castro', 'Rios', 'Seleccionar...', '333333', 'rioosstiven44@gmail.com', '300100100', 'Activo', 'Empleado', 'Fuerza Aerea', '2022-10-05'),
(64, 'Cloy', 'prueba', 'Castro', 'Ríos', 'CC', '10101010101', 'Cloy@prueba.com', '300500300500', 'Activo', 'Administradora de parques', 'Empleado', '2022-10-20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos cliente`
--

CREATE TABLE `datos cliente` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `ocupacion` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `convenio` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `direccion` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `pais` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `departamento` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `ciudad` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `estrato` int(11) NOT NULL,
  `sexo` varchar(10) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_usuarios`
--

CREATE TABLE `grupo_usuarios` (
  `id` int(11) NOT NULL,
  `nombre_grupo` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `grupo_usuarios`
--

INSERT INTO `grupo_usuarios` (`id`, `nombre_grupo`) VALUES
(1, 'Administrador'),
(2, 'Comercial'),
(3, 'Credito'),
(4, 'Incorporaciones'),
(5, 'Tesoreria'),
(6, 'Cartera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `información del crédito`
--

CREATE TABLE `información del crédito` (
  `id` int(11) NOT NULL,
  `monto` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `plazo` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `tasa` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `amortizacion` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `tipo_de_credito` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `cuenta a la que le vamos a transferir al cliente` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `plan_de_pago` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `estado_de_pagos` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `emision_de_facturas` varchar(60) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimientos`
--

CREATE TABLE `movimientos` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `sucursal` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `dcto` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `valor` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `saldo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `id_banco` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

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
(12, '2022-11-01', 'ABONO INTERESES AHORROS', '', '', '501.00', '30479295.84', 2),
(13, '2022-11-01', 'PAGO A PROV KAPITAL BANK', '', '', '-364500.00', '30114795.84', 1),
(14, '2022-11-01', 'IMPTO GOBIERNO 4X1000', '', '', '-16044.37', '30098751.47', 1),
(15, '2022-11-01', 'PAGO PSE IMPUESTO DIAN', 'CENTRO FINANCIERO', '', '-1218000.00', '28880751.47', 1),
(16, '2022-11-01', 'COMPRA EN TEXACO EDS', '', '', '-20000.00', '28860751.47', 1),
(17, '2022-11-01', 'PAGO PSE Bancolombia', '', '', '-4000.00', '28856751.47', 0),
(18, '2022-11-01', 'PAGO A PROVE REGUS', '', '', '-2255219.00', '26601532.47', 1),
(19, '2022-11-01', 'PAGO A PROVE REGUS', '', '', '-149373.50', '26452158.97', 1),
(20, '2022-11-01', 'ABONO INTERESES AHORROS', '', '', '144.94', '26452303.91', 1),
(21, '2022-11-01', 'ABONO INTERESES AHORROS', '', '', '56.61', '26452360.52', 0),
(22, '2022-11-01', 'PAGO A PROV GAF TECHNOLOGY SOL', '', '', '-5764047.00', '20688313.52', 1),
(23, '2022-11-01', 'IMPTO GOBIERNO 4X1000', '', '', '-23056.18', '20665257.34', 0),
(24, '2022-11-01', 'PAGO A PROV KAPITAL BANK', '', '', '-364500.00', '20300757.34', 1),
(25, '2022-11-01', 'IMPTO GOBIERNO 4X1000', '', '', '-28943.60', '20271813.74', 1),
(26, '2022-11-01', 'PAGO A NOMIN MIGUEL DIAZ GRA', '', '', '-2760000.00', '17511813.74', 1),
(27, '2022-11-01', 'PAGO A NOMIN GUSTAVO VIVES', '', '', '-2760000.00', '14751813.74', 1),
(28, '2022-11-01', 'PAGO PSE COMPENSAR-OI', '', '', '-1351400.00', '13400413.74', 1),
(29, '2022-11-01', 'ABONO INTERESES AHORROS', '', '', '146.84', '13400560.58', 1),
(30, '2022-11-01', 'PAGO DE PROV AUTONIZA SA', '', '', '207526.00', '13608086.58', 1),
(31, '2022-11-01', 'ABONO INTERESES AHORROS', '', '', '37.28', '13608123.86', 2),
(32, '2022-11-01', 'IMPTO GOBIERNO 4X1000', '', '', '-144.56', '13607979.30', 1),
(33, '2022-11-01', 'COMPRA EN UBER *TRI', '', '', '-17400.00', '13590579.30', 1),
(34, '2022-11-01', 'COMPRA INTL UBER PENDING', '', '', '-18742.41', '13571836.89', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `todo_list`
--

CREATE TABLE `todo_list` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `id_usr` int(11) NOT NULL,
  `fecha_asigando` date NOT NULL,
  `creado_por` int(1) DEFAULT NULL,
  `estado_tarea` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `todo_list`
--

INSERT INTO `todo_list` (`id`, `titulo`, `descripcion`, `fecha`, `id_usr`, `fecha_asigando`, `creado_por`, `estado_tarea`) VALUES
(1, 'tarea 1 para ', 'Daniel Stiven', '2022-11-16', 2, '0000-00-00', 0, 'activa'),
(2, 'Tarea 2 para ', 'Stiven Castro', '2022-11-08', 2, '2022-11-10', 0, 'done'),
(4, 'tarea Tres 333', 'Esta es la descripciòn de la tarea numero cuatro', '2022-11-10', 1, '0000-00-00', 0, 'done'),
(7, 'Nueva tarea', 'Daniel Castro / Tarea Realizada ... ', '2022-11-08', 2, '0000-00-00', 0, 'activa'),
(10, 'tarea Cinco de stiven', 'Para Daniel - Asiganda', '2022-11-18', 1, '0000-00-00', 0, 'activa'),
(11, 'Nueva Tarea Fecha', 'para pruebas de fecha', '2022-11-12', 2, '0000-00-00', 0, 'done'),
(12, 'Tarea fecha', 'creado', '2022-11-11', 2, '0000-00-00', 0, 'activa'),
(13, 'Pruebas 20', 'Pruebas finales de tareas', '2022-11-17', 1, '0000-00-00', 0, 'activa'),
(14, 'Tarea Activa', 'Prueba de Envio Activa', '2022-11-11', 1, '0000-00-00', 0, 'done'),
(15, 'Tarea Activa Dos', 'Activa 2', '2022-11-10', 1, '2022-11-10', 0, 'activa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombres` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(120) COLLATE utf8_spanish_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `correo`, `password`, `estado`, `rol_id`) VALUES
(1, 'Daniel', 'Castro', 'danielc2203@gmail.com', '3e67f2e7f20bad1444dc007ab16d2c42', 1, 1),
(2, 'Stiven', 'Castro', 'riosstiven44@gmail.com', '3e67f2e7f20bad1444dc007ab16d2c42', 1, 1),
(4, 'cloy', 'Castro', 'cloy@pruebas.com', '31b415a9e392fcdac6ad9a69f5db7083', 1, 2),
(7, 'Miguel', 'Díaz Granados', 'mdg@fineco.com.co', '25f9e794323b453885f5181f1b624d0b', 1, 0),
(8, 'pruebas', 'pruebas', 'pruebas@fineco.com', '31b415a9e392fcdac6ad9a69f5db7083', 1, 5);

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
-- Indices de la tabla `datos cliente`
--
ALTER TABLE `datos cliente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupo_usuarios`
--
ALTER TABLE `grupo_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `información del crédito`
--
ALTER TABLE `información del crédito`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `movimientos`
--
ALTER TABLE `movimientos`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT de la tabla `datos cliente`
--
ALTER TABLE `datos cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grupo_usuarios`
--
ALTER TABLE `grupo_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `información del crédito`
--
ALTER TABLE `información del crédito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `movimientos`
--
ALTER TABLE `movimientos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de la tabla `todo_list`
--
ALTER TABLE `todo_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
