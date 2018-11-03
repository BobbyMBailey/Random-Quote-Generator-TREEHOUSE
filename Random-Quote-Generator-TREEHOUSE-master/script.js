// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//By requirements: Comments are included in the code

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Array that holds the quotes, sources, citations, years (DOB) and tags:
//By the requirements: Objects in array include quote and source properties. If known, citation and date properties are present
//By the requirements: arry of objects is named quotes, contains at least 5 quote objects.
var quotes = [
    {
      quote : "If we discover a desire within us that nothing in this world can satisfy, also we should begin to wonder if perhaps we were created for another world.",
      source : "C.S Lewis",
      citation : "Book Title: Mere Christianity",
      year : "Year: 1999",
      tags : "[Christianity]"
    },
    {
      quote : "If a man is proud of his wealth, he should not be praised until it is known how he employs it.",
      source : "Socrates",
      citation : "Occupation: Greek philosopher in Athens",
      year : "Year: (469 BC - 399 BC)",
      tags : "[Money & Praise]"
    },
    {
      quote : "I don't think much of a man who is not wiser than he was yesterday.",
      source : "Abraham Lincoln",
      citation : "Occupation: 16th president of US",
      year : "Year: (1809 - 1865)",
      tags : "[Wisdom & Future]"
    },
    {
      quote : "Faith is taking the first step, even when you don't see the whole staircase.",
      source : "Martin Luther King Jr",
      citation : "Occupation: US black civil rights leader & clergyman",
      year : "Year: (1929 - 1968)",
      tags : "[Faith & Belif]"
    },
    {
      quote : "Be kind, for everyone you meet is fighting a hard battle.",
      source : "Plato",
      citation : "Occupation: Greek author & philosopher in Athens",
      year : "Year: (427 BC - 347 BC)",
      tags : "[Kindness & Love]"
    },
    {
      quote : "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      source : "Ralph Waldo Emerson",
      citation : "Occupation: US essayist & poet",
      year : "Year: (1803 - 1882)",
      tags : "[Leadership]"
    },
    {
      quote : "Sometimes the questions are complicated and the answers are simple.",
      source : "Dr. Seuss",
      citation : "Occupation: US author & illustrator",
      year : "Year: (1904 - 1991)",
      tags : "[Focus & Understanding]"
    },
    {
      quote : "Those who do not remember the past are condemned to repeat it.",
      source : "George Santayana",
      citation : "Occupation: US (Spanish-born) philosopher",
      year : "Year: (1863 - 1952)",
      tags : "[Mistakes & Learning]"
    },
    {
      quote : "I like the dreams of the future better than the history of the past.",
      source : "Thomas Jefferson",
      citation : "Occupation: 3rd president of US",
      year : "Year: (1743 - 1826)",
      tags : "[Hope & Reason]"
    },
];

//A function that randomly selects a quote object from the quotes array,
//Then stores it into the quoteObject variable:
//By the requirements: function is named getRandomQuote and returns a random object from the quotes array
function getRandomQuote() {
    var quoteObject = Math.floor(Math.random() * (quotes.length));
    return quotes[quoteObject];
}

//By the requirements: function named printQuote calls the randomQuote function
//Function prints the quote to the page using the template supplied in the project instructions
function printQuote() {
    var nominateRandomQuote = getRandomQuote();
    var treehouse = '<p class="quote">' + nominateRandomQuote.quote + '</p>'
    + '<p class="source">' + nominateRandomQuote.source + '</p>'
    + '<p class="citation">' + nominateRandomQuote.citation + '</p>'
    + '<p class="year">' + nominateRandomQuote.year + '</p>'
    + '<p class="tags">' + nominateRandomQuote.tags + '</p>'
    document.getElementById('quote-box').innerHTML = treehouse;
}
