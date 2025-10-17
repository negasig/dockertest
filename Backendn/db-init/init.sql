CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  salary INT NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO users (firstname, lastname, salary, email) VALUES
('Alice', 'tesfa', 1000, 'alice@example.com'),
('Bob', 'jackson',3000, 'bob@example.com'),
('Charlie', 'chapli',9000, 'charlie@example.com'),
('Negasi', 'hadush', 80000, 'Negasi@example.com');