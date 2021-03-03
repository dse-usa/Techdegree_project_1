/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [

  {quote:'Ask not what your country can do for you—ask what you can do for your country', source:'John F Kennedy', citation:'Inaugural address', year:'1961'},
  {quote:'I have a dream', source:'Martin Luther King, Jr.', citation:'March on Washington speech', year:'1963'},
  {quote:"Th-th-th-that's all folks!", source:'Porky the Pig', citation:'Loony Tunes', year:'1935'},
  {quote:'To infinity and beyong', source:'Buzz Lightyear', citation:'Toy Store',year:'1995'},
  {quote:"test.", source:'none',citation:'',year:''} 

]


/***
 * `getRandomQuote` function
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * https://w.trhou.se/j8jfv1x8ra 2_loops.js
***/
let numberOfQuotes = quotes.length; 

function getRandomQuote (quotes){
  
    let randomQuoteNumber =  Math.floor(Math.random() * numberOfQuotes);
    
    return quotes [randomQuoteNumber]
}


/***
 * `printQuote` function
 * 
***/
console.log (getRandomQuote(quotes));


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);