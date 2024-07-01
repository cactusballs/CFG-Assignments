# Arrakis Zoo HR API how to 

_This API allows Arrakis Zoo to easily manage their HR system._
_They Key Features Include_
 - Adding new employees to their system.
 - Removing employees when needed. 
 - Returning a list of all current employees.

## Installing the API 

- Clone this repository here git@github.com:cactusballs/CFG-Assignments/assignmentFour.git
- run `npm install` to install the following dependencies
  - [NodeJS](https://nodejs.org/en)
  - [express.js](https://expressjs.com)
  - [mysql2](https://www.npmjs.com/package/mysql2) 
  - [express.json](https://www.geeksforgeeks.org/express-js-express-json-function/) - middleware 
- [nodemon](https://www.npmjs.com/package/nodemon)
  
- Create an env file in the root folder and add the variables outlined in env.example
  
## Using the API 
 - Run `npm start` in your terminal to start the API
 - Connect to the API using Postman on PORT 3001 

### API Endpoints

| `HTTP Verbs` | `Endpoints` | `Action` |
| --- | --- | --- |
| `GET` | `/` | `Returns a Welcome Greeting` |
| `POST` | `/animal_handlers` | `Adds new staff member` |
| `DELETE` | `/animal_handlers` | `Removes last staff member` |
| `GET` | `/animal_handlers` | `Returns list of current staff` |


## Author 
Lottie Judge 

## License
This project is available for use under LJ licensing 