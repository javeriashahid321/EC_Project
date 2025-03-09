CREATE DATABASE localMarket;
USE localMarket;
CREATE TABLE user
(
id INT AUTO_INCREMENT PRIMARY KEY,
accountname varchar(255),
email varchar(255),
accountpassword varchar(255),
userrole varchar(255),
created_at timestamp default current_timestamp
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    fields JSON NOT NULL  
);
DELETE FROM categories where id=1;