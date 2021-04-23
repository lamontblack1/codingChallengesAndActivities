DROP DATABASE IF EXISTS wishes_db;
CREATE DATABASE wishes_db;
USE wishes_db;

CREATE TABLE wishes (
    id int NOT NULL AUTO_INCREMENT,
    wish VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO wishes (wish)
VALUES ("Travel to Paris"),
("Visit Macchu Picchu"),
("Build a car");
