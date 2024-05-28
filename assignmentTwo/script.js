 //Cookies alert, user input, boolean values
const confirmCookies = window.confirm('We use cookies. Are you ok with that?')
const cookiesAccept = confirmCookies === true ? window.close : window.location.href="https://www.google.com";


//function, data structure
const wildCardButton = document.querySelector(".wildCardButton")
  function generateAnswer() 
  {
    cards = ["Your date can only say 'Omelette Du Fromage' - fun!", "You're both wearing balaclavas the whole time - fun!", "You both turn up wearing the same outfit - fun!", "Your Mum was their primary school teacher and they called her 'Ms Fart' and they called you her 'Fartling' - fun!", "It's weirdly windy out - fun!", "Your date turned up in heelies, handed you a safety helmet and told you to hop on while offering you a piggy back - fun!",
    ];
    card = cards[Math.floor(Math.random() * cards.length)];
    document.getElementById('outPutDiv').innerHTML = card;
    wildCardButton.innerHTML = 'A different Wild Card please!'; //changes the HTML/CSS
    wildCardButton.style.color = 'red';
  }



 document.getElementById("date").addEventListener("submit", function(event) {
   event.preventDefault();

   const location = parseFloat(document.querySelector('input[name="locations"]:checked').value);

   const food = parseFloat(document.querySelector('input[name="foods"]:checked').value);

   const activity = parseFloat(document.querySelector('input[name="activity"]:checked').value);

 
   const result = location + food + activity;
   console.log(result);

  const dates = [
     {
      name: 'Sherlock Holmes',
      height: '6 feet',
      likes: 'The Game',
      dislikes: 'People'
    },
     {
      name: 'Mary Poppins',
      height: '5\'5',
      likes: 'Chimney Sweeps',
      dislikes: 'lack of manners'
    },
     {
      name: 'Salad Fingers',
      height: '5\'8',
      likes: 'rusty spoons',
      dislikes: 'lack of sustenance'
    }
  ]
  
  let finalResult;
  //using a for loop 
  for(let i = 0; i <= dates.length; i++){
    if((result < 10 && i === 1) || (result >= 10 && i ===2) || (result >= 20 && i === 3)){
      finalResult = dates[i];
    }
  }
  //triggers an event
  document.getElementById('formResult').innerHTML = `Your date is ${finalResult.name}! They're ${finalResult.height} They like ${finalResult.likes}, and they hate ${finalResult.dislikes}`;
})
  
