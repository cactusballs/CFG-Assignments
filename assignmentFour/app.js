// Creating the server 
const express = require('express');
const app = express();
const sql = require('mysql2')
require('dotenv').config()
//middleware to Parse JSON 
app.use(express.json());


// the app will run on port 3002
const port = 3002;
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

//creating a route to the root endpoint
app.get(`/`, (req, res) => {
  res.status(200).send('Welcome to The Arrakis Zoo HR system!')
  });


//creating a new table in the database 
const tableCreate = `CREATE TABLE IF NOT EXISTS animal_handlers(
  staff_id INT AUTO_INCREMENT PRIMARY KEY,
  employee_name VARCHAR(100) NOT NULL,
  age INT,
  salary_band VARCHAR(1) NOT NULL
);`;

//checking the above has worked and logging it to the terminal using the errorHandling function
dataBase.query(tableCreate, (error) => {
  errorHandler(error, 'Table Creation');
});
 
//receiving data for new animal_handlers from POST and adding to the animal_handlers table, using functions, response codes and typeof for error handling
app.post('/animal_handlers', (req, res) => {
  const animalHandler = {
    // auto inc id here
    employee_name: req.body.employee_name,
    age: req.body.age,
    salary_band: req.body.salary_band
  } 
  //validating data entry
  if(typeof animalHandler.employee_name !== 'string' || typeof animalHandler.age !== 'number' || typeof animalHandler.salary_band !== 'string'){
    return res.status(400).json({message:'Incorrect data type, please try again'})
  };
  if(animalHandler.age < 16 || animalHandler.age > 90000 ){
    return res.status(400).json({message:'Invalid age, please try again'})
  }
  if(animalHandler.salary_band.length > 1 ){
    return res.status(400).json({message:'Salary bands consist of one letter, please try again'})
  }
  const addAnimalHandler = 'INSERT INTO animal_handlers (employee_name, age, salary_band) VALUES ( ?, ?, ?)';
  dataBase.query(addAnimalHandler, [animalHandler.employee_name, animalHandler.age, animalHandler.salary_band], (error, results) => {
    if (error) {
      errorHandler(error, 'Employee Added')
      return res.status(500).json({ message: 'An error has occurred' });
    }
    res.status(201).json({
      message: 'Employee successfully added'
    })
  })
});


//deleting an employee, using functions, response codes and typeof for error handling
app.delete('/animal_handlers', (req, res) => {
  const animalHandler = {
    employee_name: req.body.employee_name
  }
  // validating data entry
  if(typeof animalHandler.employee_name !== 'string'){
    return res.status(400).json({message:'Incorrect data type, please try again'})
  }
  const deleteStaff = 'DELETE FROM animal_handlers WHERE employee_name = ? ';
  dataBase.query(deleteStaff,[animalHandler.employee_name], (error, results) => {
    if (error) {
      errorHandler(error, 'Employee Removal')
      return res.status(500).json({ message: 'An error has occurred' });
    }
    res.status(200).json({
      message: 'Employee successfully deleted'
    });
  });
});


//getting a staff list and sending the result, using functions and response codes for error handling
app.get('/staff', (req, res) => {
  const staffList = 'SELECT * FROM animal_handlers ORDER BY id ASC'
  dataBase.query(staffList, (error, results) => {
    if (error) {
      errorHandler(error, 'Staff List')
      return res.status(500).json({ message: 'An error has occurred' });
    }
    res.status(200).send(results);
  });
})

