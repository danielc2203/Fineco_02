-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para finecoapp
CREATE DATABASE IF NOT EXISTS `finecoapp` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `finecoapp`;

-- Volcando estructura para tabla finecoapp.bancos
CREATE TABLE IF NOT EXISTS `bancos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `num_cuenta` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `tipo_cuenta` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `estado_cuenta` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `contacto_cuenta` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `logo_banco` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- Volcando datos para la tabla finecoapp.bancos: ~0 rows (aproximadamente)
DELETE FROM `bancos`;
INSERT INTO `bancos` (`id`, `nombre`, `num_cuenta`, `tipo_cuenta`, `estado_cuenta`, `contacto_cuenta`, `logo_banco`) VALUES
	(1, 'Bancolombia', '102232570011', 'Corriente', 'Activo', '3016834994', '');

-- Volcando estructura para tabla finecoapp.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `primer_nombre` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `segundo_nombre` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `primer_apellido` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `segundo_apellido` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `tipo_documento` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `num_documento` varchar(12) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL DEFAULT '',
  `telefono` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `correo_electronico` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `direccion_residencia` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `ciudad` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `departamento` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `pagaduria` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `edad` varchar(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `fecha_vinculacion` date DEFAULT NULL,
  `estado` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- Volcando datos para la tabla finecoapp.clientes: ~16 rows (aproximadamente)
DELETE FROM `clientes`;
INSERT INTO `clientes` (`id`, `primer_nombre`, `segundo_nombre`, `primer_apellido`, `segundo_apellido`, `tipo_documento`, `num_documento`, `telefono`, `correo_electronico`, `direccion_residencia`, `ciudad`, `departamento`, `pagaduria`, `fecha_nacimiento`, `edad`, `fecha_vinculacion`, `estado`) VALUES
	(1, 'MARIA', 'LUCERO', 'LOPEZ', 'CARDENAS', 'CC', '29771015', '3176806374', 'lucerolopez1954@gmail.com', 'CALLE 7 #1-06', 'ROLDANILLO', 'VALLE DEL CAUCA', 'SED Valle del Cauca', '1950-10-04', '68', '2022-01-01', 'Activo'),
	(2, 'MARTHA', 'MORENO', 'DE', 'ZAPATA', 'CC', '24310365', '3117710058', 'marthamgz52@hotmail.com', 'CALLE 15 #9-39', 'BOGOTA', 'CUNDINAMARCA', 'Fiduprevisora', '1952-07-06', '70', '2022-01-01', 'Activo'),
	(3, 'MARIA', 'ADIELA', 'CHINGANA', 'DE PEREZ', 'CC', '25271619', '3173739795', 'mariachicangana1951@gmail.com', 'CARRERA 38 #2A-8', 'PURACE', 'CAUCA', 'FIDUPREVISORA', '1951-03-09', '71', '2022-01-01', 'Activo'),
	(4, 'DEIVI', 'JESUS', 'SIMANCA', 'HERRERA', 'CC', '10769626', '3177373693', 'deivi11santiago@hotmail.com', 'CALLE 88 #86-16', 'CHIGORODO', 'ANTIOQUIA', 'POLICIA NACIONAL', '1980-12-02', '42', '2022-01-01', 'Activo'),
	(5, 'HORACIO', '', 'PINZON', '', 'CC', '5654417', '3102945672', 'horacio.pinzon4417@gmail.com', 'CALLE 200A #26-59', 'FLORIDABLANCA', 'SANTANDER', 'PONAL', '1980-08-26', '42', '2022-01-01', 'Activo'),
	(6, 'JOSE', 'LUIS', 'TACUE', 'BOJORGE', 'CC', '1088251228', '3103623945', 'tacuejoseluis@gmail.com', 'CALLE 1 # 18-65', 'POPAYAN', 'CAUCA', 'POLICIA NACIONAL', '1987-07-06', '35', '2022-01-01', 'Activo'),
	(7, 'GERARDO', 'MOLINA', 'VARON', '', 'CC', '6805043', '3162454797', 'gemova24.gm@gmail.com', 'CALLE 12 #21-64', 'SAN GIL', 'SANTANDER', 'POLICIA NACIONAL', '1983-10-03', '39', '2022-01-01', 'Activo'),
	(8, 'YURIS', 'CECILIA', 'MEDINA', 'MERLANO', 'CC', '1052965558', '3007839548', 'yurismedina13@gmail.com', 'CARRERA 66 #12-40', 'MAGANGUE', 'BOLIVAR', 'POLICIA NACIONAL', '1989-04-13', '33', '2022-01-01', 'Activo'),
	(9, 'HOLMES', 'JOAQUIN', 'GUERRERO', 'GOMEZ', 'CC', '1065594775', '3006484365', 'holmesguer1988@hotmail.com', 'CALLE 20J #2-5', 'VALLEDUPAR', 'CESAR', 'POLICIA NACIONAL', '1988-02-08', '35', '2022-01-01', 'Activo'),
	(10, 'JOSE', 'ANTONIO', 'LOPEZ', 'RODRIGUEZ', 'CC', '80258780', '3112908140', 'vpaola003@gmail.com', 'CARRERA 49B #58G-5 SUR', 'BOGOTA', 'CUNDINAMARCA', 'POLICIA NACIONAL', '1984-03-08', '38', '2022-01-01', 'Activo'),
	(11, 'ERIKA', 'LIZETH', 'CARDENAS', 'RODRIGUEZ', 'CC', '1033720264', '3102999408', 'erikaliz8990@hotmail.com', 'KR 11 D N 50 B 15 SUR', 'BOGOTA', 'CUNDINAMARCA', 'POLICIA NACIONAL', '1990-03-13', '32', '2022-01-01', 'Activo'),
	(12, 'CRISTOBAL', 'JESUS', 'NAVARRO', 'BRAVO', 'CC', '92535697', '3107178001', 'cristobalnavarro29@hotmail.com', 'CL 98 N 103 23', 'APARTADO', 'ANTIOQUIA', 'POLICIA NACIONAL', '1979-12-24', '43', '2022-01-01', 'Activo'),
	(13, 'JAIRO', 'RODOLFO', 'TOLOZA', 'ESTUPIÑAN', 'CC', '13106319', '3108477583', 'jairo.toloza319@casur.gov.co', 'CL 64B #10A-21', 'POPAYAN', 'CAUCA', 'CASUR', '1975-11-01', '47', '2022-01-01', 'Activo'),
	(14, 'LUZ', 'ELENA', 'LONDO¥O', 'RESTREPO', 'CC', '31871014', '3103743273', 'luznena57@gmail.com', 'KR 68 14 73 CA 12', 'CALI', 'VALLE DEL CAUCA', 'FIDUPREVISORA', '1957-11-12', '65', '2022-01-01', 'Activo'),
	(18, 'JOSE ', 'DANIEL', 'CASTRO', 'REYES', 'CC', '80826970', '3016834994', 'danielc2203@gmail.com', 'AA # 33 - 25', 'Bogotà', 'Cundinamarca', 'CAGEN - TEGEN', '1984-03-22', '38', '2023-02-26', 'Activo');

-- Volcando estructura para tabla finecoapp.convenios
CREATE TABLE IF NOT EXISTS `convenios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `logo` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- Volcando datos para la tabla finecoapp.convenios: ~11 rows (aproximadamente)
DELETE FROM `convenios`;
INSERT INTO `convenios` (`id`, `nombre`, `logo`) VALUES
	(2, 'CAGEN - TEGEN', NULL),
	(3, 'Casur', NULL),
	(4, 'Colpensiones', NULL),
	(5, 'Cremil', NULL),
	(7, 'FIDUPREVISORA', 'null'),
	(8, 'Mindefensa', NULL),
	(9, 'Mindefensa Pensionados', NULL),
	(10, 'PONAL', NULL),
	(11, 'SED Valle del Cauca', NULL),
	(12, 'SEM Cali', NULL),
	(13, 'SEM Popayán', NULL);

-- Volcando estructura para tabla finecoapp.creditos
CREATE TABLE IF NOT EXISTS `creditos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_documento` varchar(12) COLLATE utf32_spanish2_ci NOT NULL DEFAULT '0',
  `pagaduria` varchar(50) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `asesor` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `fecha_solicitud` varchar(50) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `ingresos` varchar(50) COLLATE utf32_spanish2_ci DEFAULT NULL,
  `monto_solicitado` varchar(50) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `monto_desembolsado` varchar(50) COLLATE utf32_spanish2_ci DEFAULT NULL,
  `gastos` varchar(50) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `capacidad` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `plazo` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `tasa` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `servicio_aval` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `estudio_adm` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `impuestos` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `intereses_iniciales` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `seguro` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `gmf` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `cartera` varchar(50) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `totalCredito` varchar(50) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `cuota_mensual` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `amortizacion` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish2_ci DEFAULT NULL,
  `estado` varchar(50) CHARACTER SET utf32 COLLATE utf32_spanish2_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish2_ci;

-- Volcando datos para la tabla finecoapp.creditos: ~2 rows (aproximadamente)
DELETE FROM `creditos`;
INSERT INTO `creditos` (`id`, `id_documento`, `pagaduria`, `asesor`, `fecha_solicitud`, `ingresos`, `monto_solicitado`, `monto_desembolsado`, `gastos`, `capacidad`, `plazo`, `tasa`, `servicio_aval`, `estudio_adm`, `impuestos`, `intereses_iniciales`, `seguro`, `gmf`, `cartera`, `totalCredito`, `cuota_mensual`, `amortizacion`, `estado`) VALUES
	(11, '80826970', 'SEM Popayán', 'Stiven', '15/2/2023', 'null', '20000000', '20000000', 'null', '1490081', '20', '2.3', '800000', '2600000', '646000', '1697625', '60000', '96184', '0', '25839809', '1631397', 'null', 'Sin Cupo'),
	(67, '80826970', 'Colpensiones', 'Daniel Castro Reyes', '17/4/2023', '2452955', '4000000', '4000000', '1247524', '126154', '144', '2.2', '160000', '520000', '129200', '324442', '67086', '19236', '0', '5152878', '124117', '', '4.1 APROBADO PDTE CERTIFICACIONES'),
	(69, '80826970', 'Docentes', 'Daniel Castro Reyes', '17/4/2023', '5000000', '9000000', '9000000', '900000', '1800000', '12', '2.3', '360000', '1170000', '290700', '763931', '50000', '43282', '0', '11627914', '1124056', NULL, '1.1 COMITÉ DE CRÉDITO');

-- Volcando estructura para tabla finecoapp.estados
CREATE TABLE IF NOT EXISTS `estados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `descripcion` varchar(150) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  `responsable` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- Volcando datos para la tabla finecoapp.estados: ~1 rows (aproximadamente)
DELETE FROM `estados`;
INSERT INTO `estados` (`id`, `nombre`, `descripcion`, `responsable`) VALUES
	(1, 'Ingresado', 'Estudio de la solicitud de crédito', 3);

-- Volcando estructura para tabla finecoapp.estado_credito
CREATE TABLE IF NOT EXISTS `estado_credito` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `descripcion` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `grupo_usuarios` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_estados_creditos_grupo_usuarios` (`grupo_usuarios`),
  CONSTRAINT `FK_estados_creditos_grupo_usuarios` FOREIGN KEY (`grupo_usuarios`) REFERENCES `grupo_usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Volcando datos para la tabla finecoapp.estado_credito: ~1 rows (aproximadamente)
DELETE FROM `estado_credito`;
INSERT INTO `estado_credito` (`id`, `nombre`, `descripcion`, `grupo_usuarios`) VALUES
	(1, 'Ingresado', 'Estudio de la solicitud de crédito', 2);

-- Volcando estructura para tabla finecoapp.grupo_usuarios
CREATE TABLE IF NOT EXISTS `grupo_usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `descripcion` varchar(120) COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- Volcando datos para la tabla finecoapp.grupo_usuarios: ~7 rows (aproximadamente)
DELETE FROM `grupo_usuarios`;
INSERT INTO `grupo_usuarios` (`id`, `nombre`, `descripcion`) VALUES
	(1, 'Administrador', 'Solo para los administradores del sitio'),
	(2, 'Comercial', NULL),
	(3, 'Credito', NULL),
	(4, 'Incorporación', NULL),
	(5, 'Tesoreria', NULL),
	(6, 'Cartera', NULL);

-- Volcando estructura para tabla finecoapp.información del crédito
CREATE TABLE IF NOT EXISTS `información del crédito` (
  `id` int NOT NULL AUTO_INCREMENT,
  `monto` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `plazo` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `tasa` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `amortizacion` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `tipo_de_credito` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `cuenta a la que le vamos a transferir al cliente` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `plan_de_pago` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `estado_de_pagos` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `emision_de_facturas` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- Volcando datos para la tabla finecoapp.información del crédito: ~0 rows (aproximadamente)
DELETE FROM `información del crédito`;

-- Volcando estructura para tabla finecoapp.movimientos
CREATE TABLE IF NOT EXISTS `movimientos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `sucursal` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `dcto` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `valor` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `saldo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `id_banco` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- Volcando datos para la tabla finecoapp.movimientos: ~33 rows (aproximadamente)
DELETE FROM `movimientos`;
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

-- Volcando estructura para tabla finecoapp.ocupacion
CREATE TABLE IF NOT EXISTS `ocupacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- Volcando datos para la tabla finecoapp.ocupacion: ~7 rows (aproximadamente)
DELETE FROM `ocupacion`;
INSERT INTO `ocupacion` (`id`, `nombre`) VALUES
	(1, 'Empleado'),
	(2, 'Pensionado'),
	(3, 'Docente'),
	(4, 'Policía'),
	(5, 'Fuerzas Armadas');

-- Volcando estructura para tabla finecoapp.tabla_amortizacion
CREATE TABLE IF NOT EXISTS `tabla_amortizacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_prestamo` int NOT NULL,
  `periodo` int NOT NULL,
  `fecha` date NOT NULL,
  `capital` decimal(10,2) NOT NULL,
  `seguro` decimal(10,2) NOT NULL,
  `interes` decimal(10,2) NOT NULL,
  `cuota` decimal(10,2) NOT NULL,
  `saldo` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_prestamo` (`id_prestamo`),
  CONSTRAINT `tabla_amortizacion_ibfk_1` FOREIGN KEY (`id_prestamo`) REFERENCES `creditos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- Volcando datos para la tabla finecoapp.tabla_amortizacion: ~0 rows (aproximadamente)
DELETE FROM `tabla_amortizacion`;

-- Volcando estructura para tabla finecoapp.todo_list
CREATE TABLE IF NOT EXISTS `todo_list` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `id_usr` int NOT NULL,
  `fecha_asigando` date NOT NULL,
  `creado_por` int DEFAULT NULL,
  `estado_tarea` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- Volcando datos para la tabla finecoapp.todo_list: ~14 rows (aproximadamente)
DELETE FROM `todo_list`;
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

-- Volcando estructura para tabla finecoapp.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombres` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `apellidos` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `correo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `password` varchar(120) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci NOT NULL,
  `estado` int NOT NULL,
  `rol_id` int NOT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  `ruta_imagen` varchar(256) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rol_id` (`rol_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish_ci;

-- Volcando datos para la tabla finecoapp.usuarios: ~5 rows (aproximadamente)
DELETE FROM `usuarios`;
INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `correo`, `password`, `estado`, `rol_id`, `fecha_ingreso`, `ruta_imagen`) VALUES
	(1, 'Daniel', 'Castro Reyes', 'danielc2203@gmail.com', '3e67f2e7f20bad1444dc007ab16d2c42', 1, 1, NULL, '../dist/img/usuarios/daniel.jpg'),
	(2, 'Stiven', 'Castro', 'riosstiven44@gmail.com', '3e67f2e7f20bad1444dc007ab16d2c42', 1, 1, NULL, '../dist/img/usuarios/avatar.jpg'),
	(4, 'cloy', 'Castro', 'cloy@pruebas.com', '31b415a9e392fcdac6ad9a69f5db7083', 1, 2, NULL, '../dist/img/usuarios/avatar.jpg'),
	(7, 'Miguel', 'Díaz Granados', 'mdg@fineco.com.co', '31b415a9e392fcdac6ad9a69f5db7083', 1, 0, NULL, '../dist/img/usuarios/avatar.jpg'),
	(9, 'Gustavo', 'Vivies', 'gvives@fineco.com.co', '31b415a9e392fcdac6ad9a69f5db7083', 1, 1, NULL, '../dist/img/usuarios/avatar.jpg');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
