DROP DATABASE IF EXISTS top_songsDB;
CREATE DATABASE top_songsDB;
USE top_songsDB;

CREATE TABLE top5000(
    position INT,
    artist VARCHAR(40),
    song_title VARCHAR(60),
    year INT,
    world_popularity DECIMAL(10,4),
    us_popularity DECIMAL(10,4),
    uk_popularity DECIMAL(10,4),
    eur_popularity DECIMAL(10,4),
    album_sale_popularity DECIMAL(10,4),
    PRIMARY KEY (position)
);

SELECT * FROM top5000;
-- LOAD DATA INFILE 'C:\ProgramData\MySQL\MySQL Server 8.0\Uploads' 
-- INTO TABLE top5000 
-- FIELDS TERMINATED BY ',' 
-- ENCLOSED BY ''
-- LINES TERMINATED BY '\n';