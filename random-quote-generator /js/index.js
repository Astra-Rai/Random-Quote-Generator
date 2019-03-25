
//store quotes is array of objects 
const quotesArray= [

//0 index of array  
{  
  quoteFromArray: '"Everything always works out for me."',
}, 
//1, index of array 
{   
 quoteFromArray: '"Being human is the LEAST of who we are.',
},

//2 index of array  
{   
quoteFromArray: '"I can only control what I do and how I respond. <br><br> What everyone else does is on them."',
},

// 3 index of array
{ 
 quoteFromArray: '"I am that I am and there is nothing you can do about it."'
}
]
//target the <h3 element id = "quoteDisplay"
//the innerHTML will display random quote
const quoteEmptyContainer = document.querySelector('#quoteDisplay');
//select button element with id = "quote"
//add an event listener parameter 'click'
//add an event listener parameter function displayQuote

quoteButton.addEventListener('click', displayQuote);

//run displayQuote function when <button type = "button" id ="quoteButton">...
//is clicked

function displayQuote () {
 
//generate random # between 0 and length of array 
//.length propery gives length of array, therefore array index max
//generate a random number, multiply it by length of array, round number  
//store generated # variable, randomGeneratedIndex 
  
let randomGeneratedIndex= Math.floor(Math.random()*quotesArray.length); 
//id ="quote"
//<h3 = id = "quoteDisplay">innerHTML</h3> = content of idex of array quotes

quoteDisplay.innerHTML = quotesArray[randomGeneratedIndex].quoteFromArray;
                        
}