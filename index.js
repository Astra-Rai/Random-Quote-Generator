
//store quotes is array of objects 
const quotesArray= [

// 0 index of array   
' " Have enough courage to trust love one more time and always one more time." ',

// 1 index of array 
' "You can’t use up creativity. The more you use, the more you have. " ',
  
// 2 index of array  
' " Hate, it has caused a lot of problems in the world, but has not solved one yet." ',

// 3 index of array
' " If you find it in your heart to care for somebody else, you will have succeeded. " ',

// 4 index of array
' " There is no greater agony than bearing an untold story inside you." '  
]

//create a variable, quoteEmptyContainer to hold the quote that will be displayed 
//quote diplayed will be in innerHTML of <h3> element with id = "quoteDisplay" 

const quoteEmptyContainer = document.querySelector('#quoteDisplay');

//select button element with id = "quote"
//add an event listener parameter 'click'
//add an event listener parameter function "displayQuote"
//when users clicks on button with "press to display text"..
//the function, displayQuote() is called

quoteButton.addEventListener('click', displayQuote);

//run displayQuote function when <button type = "button" id ="quoteButton">..
//run displayQuote function

function displayQuote () {
 
//generate random # between 0 and length of array 
//length propery gives length of array, therefore array index max
//Math.random generate as decimal number
//The Math.random() function returns a floating-point...
//pseudo-random number in the range [0, 1) (inclusive of 0, but not 1)  
//generate a random number, multiply it by length of array, round number  
//store generated number in variable, randomGeneratedIndex 
  
let randomGeneratedIndexNumber= Math.floor(Math.random()*quotesArray.length); 

//quoteDispaly is id for <h3> element
//the innerHTML displayed will be displayed according to randomGeneratedIndexNumber
//remember we can bracket notation to target element in array  

quoteDisplay.innerHTML = quotesArray[randomGeneratedIndexNumber];                        
}