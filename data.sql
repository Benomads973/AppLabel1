CREATE TABLE organisations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    appname VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255),
    org VARCHAR(255),
    logo VARCHAR(255)
);

-- Exemple d'insertion de données que je mets aléatoirement
INSERT INTO organisations (appname, username, password, org, logo)
VALUES ('Coca Cola', 'Alice', 'bob', 'Coca Cola', 'img/logo.png');
