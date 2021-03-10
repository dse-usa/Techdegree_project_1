/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


let quotes = [

  {quote:'Ask not what your country can do for you—ask what you can do for your country.', source:'John F Kennedy', citation:'Inaugural address', year:'1961'},
  {quote:'I have a dream...', source:'Martin Luther King, Jr.', citation:'March on Washington speech', year:'1963'},
  {quote:"Th-th-th-that's all folks!", source:'Porky the Pig', citation:'Loony Tunes', year:'1935'},
  {quote:'To infinity and beyong', source:'Buzz Lightyear', citation:'Toy Store',year:'1995'},
  {quote:"test.", source:'none',citation:'',year:''}, 
  {quote:"It’s like déjà vu all over again.", source:'Yogi Berra',citation:'',year:''} 
  

  ]
let numberOfQuotes = quotes.length; 

function getRandomQuote (array){
  
    let randomQuoteNumber =  Math.floor(Math.random() * numberOfQuotes);
    
    return quotes [randomQuoteNumber]
  }

function printQuote (){
    let randomQuote = getRandomQuote(quotes);
      
    let html =`<p class="quote">${randomQuote.quote}</p>
          <p class ="source">${randomQuote.source}<span`;
    
      if (randomQuote.citation.length > 0) {
            html += `<span class = "citation">${randomQuote.citation}</span>`;
            console.log(html);
        }
    
      if (randomQuote.year.length > 0) {
          html += `<span class = "year">${randomQuote.year}</span>`;
        }
      document.getElementById("quote-box").innerHTML = `${html}`;
       
      }
       

document.getElementById('load-quote').addEventListener("click", printQuote, false);