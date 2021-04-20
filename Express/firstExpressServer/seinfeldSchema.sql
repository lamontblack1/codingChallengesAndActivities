DROP DATABASE IF EXISTS service_db;
CREATE DATABASE service_db;
USE service_db;

CREATE TABLE seinfeld (
    id int AUTO_INCREMENT NOT NULL,
    actorName VARCHAR(40) NOT NULL,
    characterName VARCHAR(40) NOT NULL,
    coolness int,
    attitude VARCHAR(40),
    PRIMARY KEY(ID)
);

INSERT INTO seinfeld (actorName, characterName, coolness, attitude)
VALUES ("Jerry Seinfeld", "Jerry Seinfeld", 8, "easy going"),
("Jason Alexander", "George Costanza", 4, "insecure"),
("Julia Louis-Dreyfuss", "Elaine Benes", 6, "flighty"),
("Michael Richards", "Cosmo Kramer", 10, "flighty"),
("Wayne Knight", "Newman", 3,"jealous"),
("Estelle Harris", "Estelle Costanza", 7, "flighty");