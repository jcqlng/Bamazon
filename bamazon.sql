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


INSERT INTO `bamazon`.`product`
(`product_name`,
`department_name`,
`stock_quantity`,
`price`)
VALUES 
('Eyeshadow', 'cosmetics',10, 100.00), 
('Lipstick', 'cosmetics', 10, 100.00), 
('PennyBoard', 'toys',product 150, 150.00), 
('Rollerblades', 'toys', 250, 80.00), 
('Duvet', 'Bedding', 1500, 50.00),
('Knive Set', 'Kitchen', 140, 109.99),
('Yoga Mat', 'Athletics', 7, 24.99),
('Riding Boots', 'Shoes', 25, 149.99),
('Blue Suit', 'Suits', 33, 269.99),
('Super Man Returns', 'Books', 17, 16.99);