

CREATE TABLE `bancos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `monto` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `id_credito` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;




CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `fecha_incorporacion` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO clientes VALUES("1","Juancho","Camilo","Perez","Martinez","CC","21212121","juan@123.com","5558889996","Activo","Empleado","Fineco","2022-09-30");
INSERT INTO clientes VALUES("2","Luis","Fernando","Perez","Corral","Seleccionar...","2147483647","JuanFernando@gmail.com","3003332244","Activo","Empleado","Fuerza Aerea","2022-10-04");
INSERT INTO clientes VALUES("3","Valentina","Laverde","dela","Rosa","Seleccionar...","11223344","ValentinaLaverde@gmail.com","3123332244","Activo","Pensionado","Policia","2022-10-05");
INSERT INTO clientes VALUES("4","Sara","Teresa","Sanchez","Pinar","Seleccionar...","2147483647","SaraTeresa@gmail.com","3203332244","Activo","Empleado","Armada","2022-10-06");
INSERT INTO clientes VALUES("5","Efrain","Jose","Casas","Mejia","CC","2147483647","EfrainJose@gmail.com","3013332244","1","Independiente","Ejercito","0000-00-00");
INSERT INTO clientes VALUES("6","Julieta","Maria","Ponce","Leon","CC","2147483647","JulietaMaria@gmail.com","3003332244","1","Empleado","Ejercito","0000-00-00");
INSERT INTO clientes VALUES("7","Martin","Elias","Rios","Acosta","CC","2147483647","MartinElias@gmail.com","3043332244","1","Pensionado","Fineco","0000-00-00");
INSERT INTO clientes VALUES("8","Olivia","Acevedo","Velazques","Rios","Seleccionar...","1994802","juanc@fineco.com.co","3053760030","Activo","Empleado","Fiscalia","2022-10-20");
INSERT INTO clientes VALUES("9","Jose","Mora","Castillo","Duran","CC","5419415","JuanFernando@gmail.com","3052670449","1","Empleado","Armada Nacional","0000-00-00");
INSERT INTO clientes VALUES("10","Jose","Del","CARMEN","REMOLINA","Seleccionar...","5419632","ValentinaLaverde@gmail.com","3051580869","Activo","Pensionado","Empleado","2022-09-16");
INSERT INTO clientes VALUES("11","ISMAEL","VILLAMIZAR","GAMBOA","","CE","5419690","SaraTeresa@gmail.com","3050491289","1","Empleado","Casur","0000-00-00");
INSERT INTO clientes VALUES("12","MIGUEL","ANGEL","TAMAYO","FLOREZ","CC","5419883","EfrainJose@gmail.com","3049401708","1","Independiente","Ejercito","0000-00-00");
INSERT INTO clientes VALUES("13","HECTOR","CALDERON","","","CC","5420006","JulietaMaria@gmail.com","3048312128","1","Empleado","Ejercito","0000-00-00");
INSERT INTO clientes VALUES("14","ERIBERTO","PATI?O","ARDILA","","CC","5420065","MartinElias@gmail.com","3047222548","1","Pensionado","Fineco","0000-00-00");
INSERT INTO clientes VALUES("15","TOBIAS","FLOREZ","TORRES","","CC","5420200","juanc@fineco.com.co","3046132967","1","Empleado","Armada Nacional","0000-00-00");
INSERT INTO clientes VALUES("16","HELMAN","MONTAGUT","SANCHEZ","","CC","5420365","JuanFernando@gmail.com","3045043387","1","Empleado","Armada Nacional","0000-00-00");
INSERT INTO clientes VALUES("17","JAVIER","EUGENIO","MONTAGUT","ORTEGA","CC","5420601","ValentinaLaverde@gmail.com","3043953807","1","Pensionado","Casur","0000-00-00");
INSERT INTO clientes VALUES("18","AUGUSTO","AQUILES","HERNANDEZ","GONZALEZ","CE","5420613","SaraTeresa@gmail.com","3042864226","1","Empleado","Casur","0000-00-00");
INSERT INTO clientes VALUES("19","OLMEDO","JEREZ","PATI?O","","CC","5420956","EfrainJose@gmail.com","3041774646","1","Independiente","Ejercito","0000-00-00");
INSERT INTO clientes VALUES("20","MIGUEL","RAMON","ARCINIEGAS","ROPERO","CC","5423267","JulietaMaria@gmail.com","3040685065","1","Empleado","Ejercito","0000-00-00");
INSERT INTO clientes VALUES("21","LUIS","FRANCISCO","CA?AS","ANAYA","CC","5423338","MartinElias@gmail.com","3039595485","1","Pensionado","Fineco","0000-00-00");
INSERT INTO clientes VALUES("22","VICTOR","BALAGUERA","VILLAMIZAR","","CC","5423367","juanc@fineco.com.co","3038505905","1","Empleado","Armada Nacional","0000-00-00");
INSERT INTO clientes VALUES("23","LUCIANO","PABON","RODRIGUEZ","","CC","5566830","JuanFernando@gmail.com","3037416324","1","Empleado","Armada Nacional","0000-00-00");
INSERT INTO clientes VALUES("24","CIRO","ANTONIO","RINCON","CARVAJAL","CC","5726642","leidy@gmail.com","3036326744","Activo","Pensionado","Policia","2022-08-10");
INSERT INTO clientes VALUES("25","NORBERTO","GARRIDOS","CARRE?O","","CE","5795119","SaraTeresa@gmail.com","3035237164","1","Empleado","Casur","0000-00-00");
INSERT INTO clientes VALUES("26","ISAIAS","JIMENEZ","GONZALEZ","","CC","8724509","EfrainJose@gmail.com","3034147583","1","Independiente","Ejercito","0000-00-00");
INSERT INTO clientes VALUES("27","FABIAN","ORTIZ","VEGA","","CC","13285391","JulietaMaria@gmail.com","3033058003","1","Empleado","Ejercito","0000-00-00");
INSERT INTO clientes VALUES("29","ALDRUAL","VILLAMIZAR","SANCHEZ","","CC","13512478","juanc@fineco.com.co","3030878842","1","Empleado","Armada Nacional","0000-00-00");
INSERT INTO clientes VALUES("30","REYNALDO","VEGA","GOMEZ","","CC","13536936","JuanFernando@gmail.com","3029789262","1","Empleado","Armada Nacional","0000-00-00");
INSERT INTO clientes VALUES("31","JOSE","ALFREDO","JIMENEZ","VELANDIA","CC","13541275","ValentinaLaverde@gmail.com","3028699682","1","Pensionado","Casur","0000-00-00");
INSERT INTO clientes VALUES("32","RUBEN","GUTIERREZ","RODRIGUEZ","","CC","6546546546","rioosstiven44@gmail.com","3027610101","Activo","Empleado","Armada","2022-10-19");
INSERT INTO clientes VALUES("50","José","Daniel","Castro","Reyes","CC","6546546546","daniec2003@gmail.com","3016834994","Activo","Empleado","Fineco","2022-10-19");
INSERT INTO clientes VALUES("62","diana","Milena","Rios","Piñeres","CE","3232323232","ValentinaLaverde@gmail.com","55555556","Activo","Empleada","Fuerza Aerea","0000-00-00");
INSERT INTO clientes VALUES("63","Daniel","Stiven","Castro","Rios","Seleccionar...","333333","rioosstiven44@gmail.com","300100100","Activo","Empleado","Fuerza Aerea","2022-10-05");



CREATE TABLE `datos_cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) NOT NULL,
  `ocupacion` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `convenio` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `direccion` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `pais` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `departamento` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `ciudad` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `estrato` int(11) NOT NULL,
  `sexo` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;




CREATE TABLE `grupo_usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_grupo` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

INSERT INTO grupo_usuarios VALUES("1","Administradores");
INSERT INTO grupo_usuarios VALUES("2","Comercial");
INSERT INTO grupo_usuarios VALUES("3","Credito");
INSERT INTO grupo_usuarios VALUES("4","Incorporaciones");
INSERT INTO grupo_usuarios VALUES("5","Tesoreria");
INSERT INTO grupo_usuarios VALUES("6","Daniel");



CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(120) COLLATE utf8_spanish_ci NOT NULL,
  `estado` int(11) NOT NULL,
  `rol_id` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rol` (`rol_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO usuarios VALUES("1","Daniel","Castro","danielc2203@gmail.com","3e67f2e7f20bad1444dc007ab16d2c42","1","1");
INSERT INTO usuarios VALUES("2","Stiven","Castro","riosstiven44@gmail.com","d41d8cd98f00b204e9800998ecf8427e","1","0");
INSERT INTO usuarios VALUES("3","Prueba","Fineco","prueba@fineco.com","31b415a9e392fcdac6ad9a69f5db7083","2","2");
INSERT INTO usuarios VALUES("11","prueba4","Cuatro","pruebascuatro@gmail.com","31b415a9e392fcdac6ad9a69f5db7083","0","4");
INSERT INTO usuarios VALUES("12","admin","fineco","fineco@fineco.com","3e67f2e7f20bad1444dc007ab16d2c42","1","3");
INSERT INTO usuarios VALUES("13","Prueba5","cinco","prueba5@fineco.com","3e67f2e7f20bad1444dc007ab16d2c42","1","1");

