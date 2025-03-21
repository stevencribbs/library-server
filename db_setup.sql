CREATE TABLE `books` (
  `id` int NOT NULL,
  `title` varchar(128) DEFAULT NULL,
  `author` varchar(128) DEFAULT NULL,
  `summary` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `facts` (
  `id` int NOT NULL,
  `text` varchar(1000) NOT NULL,
  `tags` varchar(256) DEFAULT NULL,
  `source` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `quotes` (
  `id` int NOT NULL,
  `author` varchar(45) DEFAULT NULL,
  `text` varchar(1000) NOT NULL,
  `tags` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `recipes` (
  `id` int NOT NULL,
  `title` varchar(128) NOT NULL,
  `ingredients` varchar(1000) DEFAULT NULL,
  `directions` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `verses` (
  `id` int NOT NULL,
  `text` varchar(1000) NOT NULL,
  `source` varchar(128) DEFAULT NULL,
  `tags` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
