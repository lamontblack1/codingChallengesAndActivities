USE top_songsDB;

CREATE TABLE topAlbums(
    position INT,
    artist VARCHAR(40),
    album_title VARCHAR(60),
    year INT,
    world_popularity DECIMAL(10,4),
    us_popularity DECIMAL(10,4),
    uk_popularity DECIMAL(10,4),
    eur_popularity DECIMAL(10,4),
    album_sale_popularity DECIMAL(10,4),
    PRIMARY KEY (position)
);

SELECT * FROM topAlbums;