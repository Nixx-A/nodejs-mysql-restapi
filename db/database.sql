CREATE DATABASE IF NOT EXISTS companydb

USE companydb

CREATE TABLE employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name varchar(50) DEFAULT NULL,
  salary INT(5) DEFAULT NULL,
  PRIMARY KEY (id)
  );

  INSERT INTO employee (name, salary) 
  VALUES ('John', 1000), ('Mike', 1500), ('Sara', 2000), ('Alex', 3000), ('Tom', 4000), ('Jack', 5000), ('Jill', 6000)  ; 

