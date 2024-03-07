INSERT INTO attraction (nom, description, difficulte, visible) VALUES ('Silver Star', 'Montagne russe', 3, 1);
INSERT INTO attraction (nom, description, difficulte, visible) VALUES ('Montagne 8', 'Montagne russe', 4, 1);

INSERT INTO users (name, password) VALUES ('toto', 'toto');

INSERT INTO critique (commentaire,note,nom,prenom,attraction) VALUES ("Super", 5, "John", "Doe",1);
INSERT INTO critique (commentaire,note,nom,prenom,attraction) VALUES ("Nul", 1, "Karine", "François",2);
INSERT INTO critique (commentaire,note,nom,prenom,attraction) VALUES ("Moyen", 3, "Jean", "Dupont",1);
INSERT INTO critique (commentaire,note,nom,prenom,attraction) VALUES ("Pas mal", 4, "", "",2);