// Creating the server 
const express = require('express');
const app = express();
const sql = require('mysql2')
const port = 3001;
require('dotenv').config()

//middleware to Parse JSON 
app.use(express.json());


// the app will run on port 3001
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
} );

//creating a reusable error function to call for checks, it takes two arguments, the error and the request as a string.
let errorHandler = (error, request) => {
  if (error) {
    console.error(`Error: ${error.stack}`)
    return;
  } console.log(`${request} request successful`)
};

// connecting my alien zoo database to my express app and using the env file to hide the password
const dataBase = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'alien_zoo'
});

//using the error handler function to check it works
dataBase.connect((error) => {
  errorHandler(error, 'Connection');
});

//creating a new table in the database 
const tableCreate = `CREATE TABLE IF NOT EXISTS animal_handlers(
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_name VARCHAR(100) NOT NULL,
  age INT,
  salary_band VARCHAR(1) NOT NULL
);`;

//checking the above has worked and logging it to the terminal
dataBase.query(tableCreate, (error) => {
  errorHandler(error, 'Table Creation');
});
 
//receiving data for new animal_handlers from POST and adding to the animal
app.post('/animal_handlers', (req, res) => {
  const animalHandler = {
    // auto increment id
    employee_name: req.body.employee_name,
    age: req.body.age,
    salary_band: req.body.salary_band
  } 
  const addAnimalHandler = 'INSERT INTO animal_handlers (employee_name, age, salary_band) VALUES ( ?, ?, ?)';
  res.status(201).json({
    message: 'Employee successfully added'
  })   
});


//deleting the last inserted data set 
app.delete('/animal_handlers', (req, res) => {
  const deleteLast = 'DELETE FROM animal_handlers ORDER BY id DESC LIMIT 1';
  res.status(200).json({
    message: 'Last employee successfully deleted'
  });
});

//creating a route to the root endpoint
app.get(`/`, (req, res) => {
  res.status(200).send('Welcome to Arrakis Zoo!')
  });


//getting the first animal from the animals table 
app.get('/animals', (req, res) => {
  const query = 'SELECT * FROM animals LIMIT 1'
  dataBase.query(query, (err, results) => {
    res.status(200).send(results); 
  });
})



