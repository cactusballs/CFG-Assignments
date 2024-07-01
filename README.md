
# Welcome to my CFG Degree repository! :joystick:

## Introduction
Hiya, my name's Lottie and I'm an aspiring Full Stack Developer! I live in London with my two dogs Watson and Chewie. I love running, reading, hiking and heading to the pub with pals! 

Here I'll be showcasing all I've learned on the *FullStack* course from _Code First Girls_. I'll be learning to use the following languages, frameworks & libraries 

* JavaScript 
* SQL
* React
* TypeScript
* Node

I'm super excited to get started <sup>and really hope this summer is a rainy one</sup>

Thanks for visiting, feedback is always appreciated and here's a **Top Tip** from one of our lead instructors

> “Run the Bloody Code!" _Kenny, circa 2024_

<sub>[click for a surprise!](https://cactusballs.github.io/Yeehonk/)</sub>

## Assignment 1: Git & GitHub :boom:

_Assignment 1 evidence and screenshots in the code files. I made a static site to display them but couldn't use pages to make it live due to being a private repository._ 

### Assignment 1 checklist 
- [x] add a checklist
- [x] Create a README
- [x] use at least 6 different markdown styles
- [x] Create .gitignore and explain what it's for
- [x] Explain what a requirements.txt  
- [x] work on a file and demonstrate knowledge of Git & Github.
- [x] get full marks! :zany_face:


## Assignment 2: Javascript 👾

### Question 1
My JavaScript WebApp is stored here - CFGDegree/assignmentTwo/ 📓

### Question 2 

#### 2.1) Array & String Methods.

- **Unshift():** Is a JavaScript array method that takes in an element and appends it to the beginning of the array, returning the full array including the new element.
<img width="694" alt="unshift" src="https://github.com/cactusballs/CFGDegree/assets/71734928/c88bb888-987e-4a53-bb23-12e4ea1e885c">

- **shift():** Is a JavaScript array method that removes the first element of an array (zero index) and returns that element changing the length of the array.
<img width="621" alt="shift" src="https://github.com/cactusballs/CFGDegree/assets/71734928/a6475318-553f-4272-ae8c-a64219df4bec">


- **split():** Is a JavaScript string method that takes in a pattern and divides the string into a list of substrings that match the pattern. 
<img width="666" alt="split()" src="https://github.com/cactusballs/CFGDegree/assets/71734928/932acc4a-2496-4f70-b00e-e460ec9248d9">

#### 2.2) Objects & Object Methods.

- **Define object methods:** Object methods are functions defined within an Object that can then be used to perfomr actions/extrapolate information from that object. E.g:
<img width="1085" alt="Screenshot 2024-05-30 at 22 43 37" src="https://github.com/cactusballs/CFGDegree/assets/71734928/df2c9f95-6b2a-4f97-a9cb-10d0cc8be254">


#### 2.3) DOM Events. 

The DOM converts HTML elements into JavaScript objects and vice verca. DOM Events are user triggered events (by mouse, keyboard, input etc) that will then trigger JavaScript to perform a function changing the HTML element the DOM event is assigned to. 

- **onmouseover** is a DOM event that will change the HTML when a user hovers their mouse over a certain element. E.g:
  
  HTML:```<div class='colorChange' onmouseover='colorChange(this)'>Change My Color!</div>```
  
  JavaScript:```const colorChange = (element) => { element.style.color = 'red'; };```

- **onclick** is a DOM event that triggers a change when a user clicks an element with their mouse. E.g:
  
  HTML: ```<div class='colorChange' onclick='colorChange(this)'>Change Me!</div>```
  
  JavaScript: ```const colorChange = (element) => {element.style.color = 'green'; };```

- **onkeypress** is a DOM event that triggers a change when a user hits a key on their keyboard while the web page is focusing on that element, this is typically used for elements such as <input>, <button> or <a>. They won't work when certain keys are pressed such as ALT, CTRL, SHIFT, ESC. E.g:
  
  HTML: ```  <input type="text" onkeypress="keyAlert()"> ```
  
  JavaScript: ``` const keyAlert = (element) => {alert('Great job on pressing that key!')}; ```




## Assignment 3: SQL :rocket:

#### 1) Creating my DataBase - Arrakis Zoo

My SQL code file containing my DataBase and my table design from draw.io are in the folder marked assignmentThree in this repo.

#### Creative Scenario 

># Welcome to Arrakis's World Class Zoo of Intergalactic Animals!

>At Arrakis Zoo, we maintain a detailed database to make sure we provide the best care for all of our animals and visitors. The database tracks various species of animals, the food supplies required for each species, and interactions between our lovely visitors and their favourite animals!

>When a visitor arrives, they register their details, which are stored in the visitors table. As they interact with different animals, these interactions are recorded in the interactions table, linking the visitor to the specific animal and type of interaction, along with the date.

>For each animal species, we maintain detailed records in the animals table, including the habitat and current population. The food supplies required for each species are tracked in the animal_food table, with stock levels monitored to ensure that we never run out of their essential items!

>Using various queries, we can retrieve detailed information about the animals, visitors, and interactions. We use Joins, Aggregate Functions and Inbuilt Functions to help us understand the total & highest populations, average food prices and insights into the relationships between visitors, interactions, and animals.

>To maintain stock levels, we have a stored procedure that alerts us when any food item is low in stock, ensuring that our animals are always well looked after! 


## Assignment 4: Build your own API 🌠:

#### The API)
_Arrakis Zoo HR API. This API allows Arrakis Zoo to add new employees onto their database, return a list of current staff and remove staff when needed._

In the AssignmentFour folder you can find my coding files including a README containing information on how to use the API and what libraries etc are needed. ✨

#### Postman Evidence) 

Using the GET method to display a message at the root - 

<img width="734" alt="Get ROOT" src="https://github.com/cactusballs/CFG-Assignments/assets/71734928/9b9f940b-0270-47f4-89bc-ebc699d0c1ea">


Using the GET method to display a list of current staff - 

<img width="737" alt="GET staff" src="https://github.com/cactusballs/CFG-Assignments/assets/71734928/bb09ffc4-fc7c-40fb-b968-7d9432eb7094">


Using the POST method to add an Employee to the DataBase -

<img width="738" alt="Post Method" src="https://github.com/cactusballs/CFG-Assignments/assets/71734928/a39535a9-bc78-4f4e-bf65-c5ff634d2503">



Using the DELETE method to remove the last member of staff added - 

<img width="731" alt="Delete Method" src="https://github.com/cactusballs/CFG-Assignments/assets/71734928/a26b13a2-ba39-4f0c-bb33-f143a7c427fc">


Using typeof for data validation -

Too many letters)
<img width="721" alt="typeOf working" src="https://github.com/cactusballs/CFG-Assignments/assets/71734928/429ae3e4-36aa-4d5e-8c76-a9d9db980438">

Incorrect data type)

<img width="743" alt="typeOf data type" src="https://github.com/cactusballs/CFG-Assignments/assets/71734928/7d9074df-00f8-4ac7-8389-7cda81082565">




