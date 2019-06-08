/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Creates the 'quotes' array of objects which includes a quote, source, and citation, and year //(when applicable)
//below the array there is a 'for' loop to print the contents of the array at each index

var quotes = [ 
  { 
   quote: 'It was only the other night everything was fine and the next thing I know I’m drowning. How many times can a man go down and still be alive? I can’t breathe.',
    source: ' Ray Bradbury',
    citation: 'Farenheit 451',
    year: '1953',
    tags: '#novels' + ' #goodreads' + ' #classicbooks' + ' #' 
  },
  {
    quote: 'Change your life until you are who you know you are.',
    source: ' Adam Gnade'
  },
  {
    quote: 'You will not recognize me. This time, I put my pieces back differently.',
    source: ' Malia Makana'
  },
  {
    quote: 'Invest in yourself. You can afford it. Trust me.',
    source: ' Rashon Carraway'
  },
  {
    quote: 'You have dug your soul out of the dark, you have fought to be here, do not go back to what buried you.',
    source: ' Bianca Sparacino'
  }
];


for (var i = 0; i < quotes.length; i++){
    var quoteArr = quotes[i];
    
    console.log(quoteArr);
}


//'getRandomQuote' function that has a randNum variable which creates a random number
// that is no larger than the length of the quotes array and returns the value of that random
// index 
function getRandomQuote(){
    var randNum = Math.floor(Math.random() * Math.floor(quotes.length));
    
    return quotes[randNum];
}

// a 'printQuote' function that takes a string parameter and creates a variable to store the
// previously created 'getRandomQuote' function as well as a textHTML string variable that stores
// the 'randQuote.quote' value and the 'ranQuote.source' value concatenated with the html code
// for the respective classes. all of this is stored in the 'quote-box' div within index.html
// there are two 'if' statements that each check for a citation and year property within the 
// array object before printing the entire object

function printQuote(textHTML){
    var ranQuote = getRandomQuote();
    var textHTML = "<p class='quote'>" + ranQuote.quote + "</p>" + "<p class='source'>" + ranQuote.source;
    
    if(ranQuote.citation){
        textHTML += "<span class='citation'>" + ranQuote.citation + "</span>"; 
    }
    
    if(ranQuote.year){
        textHTML += "<span class='year'>" + ranQuote.year + "</span>"; 
    }
    
    "</p>"
    
    return document.getElementById('quote-box').innerHTML = textHTML;
}

// 'setInterval' method below to switch between random quotes every 5 seconds by calling on the
// 'printQuote' function

setInterval(printQuote, 5000);

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function.
***/


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
