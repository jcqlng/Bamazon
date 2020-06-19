DROP DATABASE bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE product (
item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity),
VALUES ('Eyeshadow', 'cosmetics',10.00,100)

