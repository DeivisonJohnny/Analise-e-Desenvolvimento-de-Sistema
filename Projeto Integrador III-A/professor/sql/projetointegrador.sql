
CREATE TABLE `data_collection` (
  `id_data` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(11) NOT NULL,
  `data` varchar(300) NOT NULL,
  PRIMARY KEY (`id_data`),
  KEY `id` (`id`),
  CONSTRAINT `data_collection_ibfk_1` FOREIGN KEY (`id`) REFERENCES `scrap_collection` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `scrap_collection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) DEFAULT NULL,
  `url` varchar(500) DEFAULT NULL,
  `path` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
