// declaration of date, here date stores all information regarding date.
const date = new Date();

//here i have created a variable so that i can target the div in the html where i will be displaying day of the week.
const dayLocation = document.querySelector('.day');

//this array is declared as the getDay() function returns only the position of the day, so it is later accessed via this array
const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// using this helps to write content on the page
dayLocation.innerHTML = weekDay[date.getDay()];

//points to the location where i am going to print date
const displayDate = document.querySelector('.date');

//again, this helps with the writing the content on the web page
displayDate.innerHTML = month[date.getMonth()] + ' ' + date.getDate() + ', ' +date.getFullYear();

//here too, numberOfTasks is created so that i can 
const numberOfTasks = document.querySelector('.task-number');

let countTask = 1;

numberOfTasks.innerHTML = countTask + (countTask === 1 ? " task" : " tasks");