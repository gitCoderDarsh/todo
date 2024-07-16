// declaration of date, here date stores all information regarding date.
const date = new Date();

//here i have created a variable so that i can target the div in the html where i will be displaying day of the week.
const dayLocation = document.querySelector(".day");

//this array is declared as the getDay() function returns only the position of the day, so it is later accessed via this array
const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// using this helps to write content on the page
dayLocation.innerHTML = weekDay[date.getDay()];

//points to the location where i am going to print date
const displayDate = document.querySelector(".date");

//again, this helps with the writing the content on the web page
displayDate.innerHTML =
  month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

//here too, numberOfTasks is created so that i can
const numberOfTasks = document.querySelector(".task-number");

//ticks creates an array like structure which stores all same class tags in one place

const ticks = document.querySelectorAll('.task-check');

// here foreach makes sure that each tag gets this unnamed function and when clicked on the button it turns green and there is strike though over the text and vice-versa
ticks.forEach(tick => {
    tick.addEventListener('click' , () => {
        if(tick.style.backgroundColor !== "green"){
            tick.style.backgroundColor = "green";
            const taskBody = tick.parentElement;
            const taskName = taskBody.querySelector('.task-name');
            taskName.style.textDecoration = "line-through";
        }
        else{
            tick.style.backgroundColor = "white";
            const taskBody = tick.parentElement;
            const taskName = taskBody.querySelector('.task-name');
            taskName.style.textDecoration = "none";
        }
    });
});

// this part of code says how many tasks are listed

countTask = 0;
ticks.forEach(tick => {
    countTask++;
});

numberOfTasks.innerHTML = countTask + (countTask === 1 ? " task" : " tasks");

// this part of code enables the add task option.

const addTaskDialogBox = document.querySelector('.add-task');

const addTaskButton = document.querySelector('.add-button');

addTaskButton.addEventListener('click', () => {
  if(addTaskDialogBox.style.display === "none"){
    addTaskButton.classList.toggle('rotate-45');
    addTaskDialogBox.classList.toggle('display-add-task');
  }
  else{
    addTaskDialogBox.classList.toggle('display-add-task')
    addTaskButton.classList.toggle('rotate-45');
  }
});

