
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
My JavaScript WebApp is stored within this Repo in the folder labeled assignmentTwo 📓

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




  




