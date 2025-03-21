DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) DEFAULT NOT NULL,
  `author` varchar(128) DEFAULT NULL,
  `summary` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
DROP TABLE IF EXISTS `facts`;
CREATE TABLE `facts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(1000) NOT NULL,
  `tags` varchar(256) DEFAULT NULL,
  `source` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
DROP TABLE IF EXISTS `quotes`;
CREATE TABLE `quotes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(45) DEFAULT NULL,
  `text` varchar(1000) NOT NULL,
  `tags` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
DROP TABLE IF EXISTS `recipes`;
CREATE TABLE `recipes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `ingredients` varchar(1000) DEFAULT NULL,
  `directions` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
DROP TABLE IF EXISTS `verses`;
CREATE TABLE `verses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(1000) NOT NULL,
  `source` varchar(128) DEFAULT NULL,
  `tags` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `books` (`title`, `author`, `summary`) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted "gin was the ...'),
('To Kill a Mockingbird', 'Harper Lee', 'The story of a young...'),
('1984', 'George Orwell', 'The story of Winston Smith, an employee of the Ministry of Truth in a totalitarian state, and his illicit romance with Julia');
INSERT INTO `facts` (`text`, `tags`, `source`) VALUES
('The Great Wall of China is not visible from space.', 'geography', 'https://www.space.com/14717-great-wall-china-space-myth.html'),
('The Great Wall of China is not visible from the moon.', 'geography', 'https://www.space.com/14717-great-wall-china-space-myth.html'),
('The Great Wall of China is not visible from low Earth orbit.', 'geography', 'https://www.space.com/14717-great-wall-china-space-myth.html');
INSERT INTO `quotes` (`author`, `text`, `tags`) VALUES
('Albert Einstein', 'The only source of knowledge is experience.', 'knowledge'),
('Albert Einstein', 'The only thing that interferes with my learning is my education.', 'knowledge'),
('Albert Einstein', 'The important thing is not to stop questioning.', 'knowledge');
INSERT INTO `verses` (`text`, `source`, `tags`) VALUES
('In the beginning God created the heavens and the earth.', 'Genesis 1:1', 'creation'),
('For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.', 'John 3:16', 'salvation'),
('For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.', 'Jeremiah 29:11', 'hope');
INSERT INTO `recipes` (`title`, `ingredients`, `directions`) VALUES
('Chocolate Chip Cookies', '1 cup butter, 1 cup sugar, 1 cup brown sugar, 2 eggs, 1 tsp vanilla, 3 cups flour, 1 tsp baking soda, 2 cups chocolate chips', 'Preheat oven to 375 degrees. Cream together butter, sugar, and brown sugar. Beat in eggs and vanilla. Combine flour and baking soda, then add to butter mixture. Stir in chocolate chips. Drop by spoonfuls onto ungreased cookie sheet. Bake for 8-10 minutes or until golden brown.'),
('Spaghetti Carbonara', '1 lb spaghetti, 1/2 lb pancetta, 2 cloves garlic, 2 eggs, 1 cup grated Parmesan cheese, 1/4 cup chopped parsley, salt and pepper to taste', 'Cook spaghetti according to package directions. Meanwhile, cook pancetta in a skillet until crispy. Add garlic and cook until fragrant. In a bowl, whisk together eggs, cheese, parsley, salt, and pepper. Drain spaghetti and add to pancetta. Remove from heat and stir in egg mixture. Serve immediately.'),
('Chicken Alfredo', '1 lb fettuccine, 2 chicken breasts, 2 cups heavy cream, 1 cup grated Parmesan cheese, 1/2 cup butter, 2 cloves garlic, salt and pepper to taste', 'Cook fettuccine according to package directions. Season chicken with salt and pepper, then cook in a skillet until no longer pink. Add garlic and cook until fragrant. In a saucepan, heat cream and butter until melted. Stir in cheese until smooth. Toss fettuccine with sauce and chicken. Serve hot.');
