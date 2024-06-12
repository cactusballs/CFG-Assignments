CREATE DATABASE alien_zoo;

USE alien_zoo;


--  creating tables using normalization, .
CREATE TABLE species (
    species_id INT AUTO_INCREMENT PRIMARY KEY,
    species_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE animal_food (
    food_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    species_id INT NOT NULL,
    price DECIMAL NOT NULL,
    stock_quantity INT NOT NULL,
    CONSTRAINT fk_species_food FOREIGN KEY (species_id)
        REFERENCES species (species_id)
);

CREATE TABLE animals (
    animal_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    species_id INT NOT NULL,
    habitat VARCHAR(100) NOT NULL,
    current_population INT NOT NULL,
    CONSTRAINT fk_species_animal FOREIGN KEY (species_id)
        REFERENCES species (species_id)
);

CREATE TABLE visitors (
    visitor_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_number VARCHAR(15) NOT NULL
);

CREATE TABLE interactions (
    interaction_id INT AUTO_INCREMENT PRIMARY KEY,
    visitor_id INT NOT NULL,
    animal_id INT NOT NULL,
    interaction_type VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    CONSTRAINT fk_visitor_id_interactions FOREIGN KEY (visitor_id)
        REFERENCES visitors (visitor_id),
    CONSTRAINT fk_animal_id_interactions FOREIGN KEY (animal_id)
        REFERENCES animals (animal_id)
);    
    
-- inserting data into the tables
INSERT INTO species (species_name)
    VALUES
		('Bantha'),
        ('Niffler'),
        ('Eevee'),
        ('Tauntaun'),
        ('Direwolf'),
        ('Thestral'),
        ('Shai-Hulud'),
        ('Mogwai');
        
INSERT INTO animal_food (name, species_id, price, stock_quantity)
VALUES
    ('Shrub a Dub', 1, 100.50, 50),
    ('Forest Weed', 2, 200.00, 30),
    ('Pecha Berry', 3, 150.75, 40),
    ('Ice scrabblers', 4, 120.25, 20),
    ('Whitewalker Jerky', 5, 180.40, 25),
    ('Liver', 6, 160.55, 35),
    ('The Corpses of Arrakis Enemies', 7, 190.85, 15),
    ('Chicken Legs', 8, 220.95, 10);
    
INSERT INTO animals (name, species_id, habitat, current_population)
VALUES
    ('Billy', 1, 'Desert', 5),
    ('Norg', 2, 'Burrows', 10),
    ('Elly', 3, 'Forest', 3),
    ('Tommo', 4, 'Icy Plains', 8),
    ('Derek', 5, 'Forest', 6),
    ('Theo', 6, 'Forest', 7),
    ('Sandy', 7, 'Desert', 2),
    ('Maggie', 8, 'Trash Cans', 4);

INSERT INTO visitors (first_name, last_name, email, phone_number)
VALUES
    ('Scott', 'Godfrey', 'SG83@gmail.com', '1234567890'),
    ('Lottie', 'Judge', 'lottiejudge@gmail.com', '0987654321'),
    ('Idris', 'Elba', 'idris@gmail.com', '1122334455'),
    ('Frances', 'Draskau', 'frannyD@gmail.com', '2233445566'),
    ('Sarah', 'Cronin', 'sarah_cronenburg@gmail.com', '3344556677'),
    ('Jessice', 'Lumley', 'JlAw@gmail.com', '4455667788'),
    ('Roberto', 'Figueriedo', 'robraps@gmail.com', '5566778899'),
    ('Molly', 'Judge', 'Mojo@gmail.com', '6677889900');
       
INSERT INTO interactions (visitor_id, animal_id, interaction_type, date)
VALUES
    (1, 6, 'Feeding', '2024-06-12'),
    (8, 2, 'Petting', '2024-12-02'),
    (3, 3, 'Observation', '2023-08-03'),
    (2, 1, 'Feeding', '2007-12-07'),
    (5, 6, 'Training', '4003-01-05'),
    (6, 8, 'Petting', '1623-11-11'),
    (7, 4, 'Petting', '5005-06-07'),
    (4, 8, 'Feeding', '2024-06-08'),
    (1, 7, 'observation', '2024-06-09'),
    (1, 6, 'Training', '2027-08-02'),
    (7, 5, 'Observation', '3065-06-03'),
    (4, 4, 'Feeding', '1860-06-04'),
    (5, 5, 'Training', '2001-07-01'),
    (6, 6, 'Observation', '3000-06-06'),
    (7, 7, 'Petting', '2025-06-07'),
    (8, 8, 'Feeding', '1993-09-08');

-- adding in a new column and then deleting that data (using alter, deleting using drop)
ALTER TABLE animals 
ADD amount_of INT NOT NULL;

-- populating the new column (inserting more data)
UPDATE animals 
SET 
    amount_of = CASE
        WHEN name = 'Bantha' THEN 3
        WHEN name = 'Niffler' THEN 7
        WHEN name = 'Eevee' THEN 2
        WHEN name = 'Tauntaun' THEN 6
        WHEN name = 'Direwolf' THEN 12
        WHEN name = 'Thestral' THEN 5
        WHEN name = 'Shai-Hulud' THEN 43
        WHEN name = 'Mogwai' THEN 12
        ELSE 1
    END;

-- realising we had that data under population and now deleting the column and data
ALTER TABLE animals 
DROP amount_of;

-- retreiving five different data types from the database and grouping them using ORDER BY
-- 1. selecting all animals and ordering by habitat 
SELECT 
    *
FROM
    animals
ORDER BY habitat;
  
-- 2. selecting all animal food ordered by price Descending 
SELECT 
    *
FROM
    animal_food
ORDER BY price DESC;

-- 3. getting most populated animal and using concat (aggregate and inbuilt function)
SELECT 
CONCAT(name,' is the animal with the biggest population. Currently we have ',
     current_population, ' ', name, '!') 
     AS max_population_info
FROM
    animals
WHERE
    current_population = (SELECT 
            MAX(current_population)
        FROM
            animals);

-- 4. concatenating foodname plus it's stock amount and then getting overall stock of all items (aggregate function, inbuilt function, orderBY)
SELECT 
    CONCAT(af.name, ': ', af.stock_quantity) AS food_stock,
    s.species_name,
    (SELECT SUM(stock_quantity) FROM animal_food) AS total_food_stock
FROM
    animal_food af
JOIN
    species s ON af.species_id = s.species_id
ORDER BY
    af.name ASC;


-- 5. retreiving animals and transactions, formatting dates (built in function, join and OrderBy)
SELECT 
    i.interaction_id,
    v.first_name,
    v.last_name,
    a.name AS animal_name,
    i.interaction_type,
    DATE_FORMAT(i.date, '%Y-%b-%d') AS formatted_date
FROM
    interactions i
        JOIN
    visitors v ON i.visitor_id = v.visitor_id
        JOIN
    animals a ON i.animal_id = a.animal_id
ORDER BY v.first_name ASC;

-- using the delete keyword to remove an out of date interaction 
DELETE FROM interactions 
WHERE
    interaction_id = 12;
    
-- creating a stored procedure to keep an eye on stock levels, will give back any stock under 50 so the staff know to order more and using delimiter so SQL knows when the procedure block code ends

DELIMITER //

CREATE PROCEDURE CheckStockLevels()
BEGIN
    SELECT name, stock_quantity
    FROM animal_food
    WHERE stock_quantity < 50;
END //

DELIMITER ;

-- calling the stored procedure
CALL CheckStockLevels();


