-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 27-08-2024 a las 22:07:05
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `odontologiaut`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `promociones`
--

CREATE TABLE IF NOT EXISTS `promociones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `promocion` text NOT NULL,
  `descripcion` text NOT NULL,
  `inicio` date NOT NULL,
  `fin` date NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `inicio` (`inicio`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Volcado de datos para la tabla `promociones`
--

INSERT INTO `promociones` (`id`, `promocion`, `descripcion`, `inicio`, `fin`, `img_id`) VALUES
(1, 'Blanqueamiento', '2x1 - Consultar detalles', '0000-00-00', '0000-00-00', 'a7gcensylkdtiaegcx7h'),
(2, '2x1', '50 % descuento - consultar detalles ', '0000-00-00', '0000-00-00', 'ahmqd95vthxq2syt1hch'),
(3, 'Descuentos todos los martes!', '70%  - consultar detalles', '2024-08-26', '2024-09-07', 'tql0lxecvipxln52wztx'),
(5, 'Agosto/Septiembre', 'Ortodoncia invisible al 40% menos', '0000-00-00', '0000-00-00', 'xoa4ltucpokj8ysbnq70'),
(6, 'PRUEBA MODIFICAR', 'Ortodoncia invisible al 40% menos', '0000-00-00', '0000-00-00', 'ot8wb72lhno3zoc2u4yw'),
(8, 'BLANQUEAMIENTO', 'Ortodoncia invisible al 40% menos', '2024-08-15', '2024-08-30', 'ytocrpcb2pet6uu9zpof');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'admin', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'jorge', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
