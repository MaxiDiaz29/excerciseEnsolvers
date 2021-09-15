CREATE SCHEMA todo_maxi_diaz;
CREATE TABLE todo_maxi_diaz.todos (
  id INT NOT NULL AUTO_INCREMENT,PRIMARY KEY (id), 
task VARCHAR(20) NULL, done INT NULL);
