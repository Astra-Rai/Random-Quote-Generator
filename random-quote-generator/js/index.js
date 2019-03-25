const quotes= [
{  
  quote: '"Everything always works out for me."',
}, 
{   
 quote: '"Being human is the LEAST of who we are.',
},
{   
quote: '"I can only control what I do and how I respond. <br><br> What everyone else does is on them."',
},
{ 
 quote: '"I am that I am and there is nothing you can do about it."'
}
]

const quote = document.querySelector('#quote');
quoteBtn.addEventListener('click', displayQuote);

function displayQuote () {
 let index = Math.floor(Math.random()*quotes.length); 
 quote.innerHTML = quotes[index].quote;
                        
}