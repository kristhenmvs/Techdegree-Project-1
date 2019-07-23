/******************************************
Treehouse FSJS Techdegree: 
Project 1 - A Random Quote Generator.
******************************************/


// Array of objects that contains all my quotes with their respective info.

let quotes = [
  {
    quote: "Not so perfect, but so beautiful.",
    source: "Jin",
    citation: "Epiphany",
    year: 2018
  },
  {
    quote: "You never walk alone.",
    source: "BTS",
    citation: "You never walk alone",
    year: 2017
  },
  {
    quote: "I grew a flower that can't be bloomed in a dream that can't come true.",
    source: "BTS",
    citation: "Fake Love",
    year: 2018
  },
  {
    quote: "Moonchild, don't cry. When the moon rise, it's your time.",
    source: "RM",
    citation: "Moonchild",
    year: 2018
  },
  {
    quote: "The whole world is blue under the moonlight.",
    source: "V and RM",
    citation: "4 o'clock"
  }
];

// Logging the quotes to the console 

console.log(quotes);

//  Function to get a random quote from the array.

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

// Function to change the background color randomly.
// Created with the help of Steve Griffith's tutorial -- https://www.youtube.com/watch?v=rsgceMJBXcw

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let color = 'rgb(' + r + ',' + g + ',' + b + ')';
  document.body.style.backgroundColor = color;
};


// Function to print the quotes to the page.

let html = "";
function printQuote() {
  let randomQuote = getRandomQuote();
  getRandomColor();

  html = '<p class="quote">' + randomQuote.quote + '</p>';
  
  if (randomQuote.source && randomQuote.year) {
   html +='<p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span><span class="year">' + randomQuote.year + '</span></p>'
  } else if (randomQuote.source) {
    html +='<p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span></p>'
  } else if (randomQuote.year) {
    html +='<p class="source">' + randomQuote.source + '<span class="year">' + randomQuote.year + '</span></p>'
  };
 
  document.getElementById('quote-box').innerHTML = html;
};

printQuote(); 

// To call the printQuote function each time the button is clicked

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// To change the quote and background color every 5 seconds.
// Created with the help of w3schools -- https://www.w3schools.com/jsref/met_win_setinterval.asp

let renew = setInterval(function(){ printQuote(); }, 5000);