DROP DATABASE IF EXISTS InfoGames;

CREATE DATABASE InfoGames;

USE InfoGames;

CREATE TABLE users (
  usr_id INT NOT NULL auto_increment,
  usr_full_name VARCHAR(40) NOT NULL,
  usr_nickname VARCHAR(8) NOT NULL,

  PRIMARY KEY(usr_id)
) ENGINE=INNODB;

CREATE TABLE games (
  gam_id INT NOT NULL auto_increment,
  gam_name VARCHAR(50) NOT NULL,

  PRIMARY KEY(gam_id)
) ENGINE=INNODB;

CREATE TABLE favorites (
  usr_id INT NOT NULL,
  gam_id INT NOT NULL,

  FOREIGN KEY (usr_id) REFERENCES users (usr_id) ON DELETE CASCADE,
  FOREIGN KEY (gam_id) REFERENCES games (gam_id) ON DELETE CASCADE
)  ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO InfoGames.users (usr_full_name, usr_nickname) VALUES
    ("Vinicius Souza Vasconcelos dos Santos", "WYNYCYUZ"),
    ("Billy Jordan Soares Pinto", "boraBill"),
    ("Joséfina Maria Fagundes Fragoso", "jm_FF"),
    ("Cleyde Joana Pelgrino de Limeira", "jm_FF");

INSERT INTO InfoGames.games (gam_name) VALUES
    ("EA SPORTS™ FIFA 23"),
    ("Mad Max"),
    ("God of War"),
    ("Crash Bandicoot™ N. Sane Trilogy"),
    ("Bully: Scholarship Edition"),
    ("Saints Row IV"),
    ("Rise of the Tomb Raider™"),
    ("BioShock™");