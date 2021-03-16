/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
By David Evans 3/15/2021
******************************************/


/* 
   Created an array of objects "quotes" with 4 peramiters quote, source, citation and year.
   @ Google search for quote properties
    */
let quotes = [

  {quote:'Ask not what your country can do for you—ask what you can do for your country.', source:'John F Kennedy', citation:'Inaugural address', year:'1961'},
  {quote:'I have a dream...', source:'Martin Luther King, Jr.', citation:'March on Washington speech', year:'1963'},
  {quote:"Th-th-th-that's all folks!", source:'Porky the Pig', citation:'Loony Tunes', year:'1935'},
  {quote:'To infinity and beyong', source:'Buzz Lightyear', citation:'Toy Store',year:'1995'},
  {quote:"It’s like déjà vu all over again.", source:'Yogi Berra',citation:'',year:''}, 
  {quote:"Life is like riding a bicycle. To keep your balance you must keep moving.", source:"Alber Einstein",citation:"", year:""}
  
  ]
 
  
/* 
  A function to return a radom quote form the provided array.  
  Generates a random number based on the array lenght.
  Requires the arrays name to be entered when called.
  Returns a random object from the array using the radom number. 
     Credit to the below site and of course Treehouse Loops course.   
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomQuote (array){
  
    let randomQuoteNumber =  Math.floor(Math.random() * array.length);
    return quotes [randomQuoteNumber]
  }


  /* Function to create a concatenated HTML string using random objet from the quotes array.
  Call getRandomQuote function passing quotes array - defined above.
  @ html = html formatted string variable
  Concatenate quote and source properties
  Check citation and year propertise for no data and concatinat only if there is data.
  Insert string in index.html @ "quote-box". 
  @ Armen Nersisyan for methiod to check if an objet is empty. https://stackoverflow.com/questions/28552589/in-javascript-how-to-determine-if-an-object-property-exists-and-is-not-empty 
  @ Mozilla for refresher on addition assigment. //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment
  */
  
function printQuote (){
    let randomQuote = getRandomQuote(quotes);
 
    let html =`<p class="quote">${randomQuote.quote}</p>
          <p class ="source">${randomQuote.source}<span`;
    
      if (randomQuote.citation.length > 0) {
            html += `<span class = "citation">${randomQuote.citation}</span>`;
          }
    
      if (randomQuote.year.length > 0) {
          html += `<span class = "year">${randomQuote.year}</span>`;
          }
      document.getElementById("quote-box").innerHTML = `${html}`;
       
      }
       

document.getElementById('load-quote').addEventListener("click", printQuote, false);