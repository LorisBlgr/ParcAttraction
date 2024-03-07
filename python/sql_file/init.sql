DROP TABLE IF EXISTS attraction;

CREATE TABLE attraction (
    attraction_id int auto_increment,
    primary key(attraction_id),
    nom varchar(255) not null,
    description varchar(255) not null,
    difficulte int,
    visible bool default true
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    users_id int auto_increment,
    primary key(users_id),
    name varchar(255) not null,
    password varchar(255) not null
);

DROP TABLE IF EXISTS critique;

CREATE TABLE critique (
  id int auto_increment,
  primary key(id),
  commentaire varchar(255),
  note int,
  nom varchar(255) null,
  prenom varchar(255) null,
  attraction int,
  FOREIGN KEY (attraction) REFERENCES attraction(attraction_id)
);