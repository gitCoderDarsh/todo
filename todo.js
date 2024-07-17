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

// this part of code says how many tasks are listed

let countTask = 2;

numberOfTasks.innerHTML = countTask + (countTask === 1 ? " task" : " tasks");

// this part of code enables the add task option.

const addTaskDialogBox = document.querySelector(".add-task");

const addTaskButton = document.querySelector(".add-button");

addTaskButton.addEventListener("click", () => {
  console.log("clicked");
  if (addTaskDialogBox.style.display === "none") {
    addTaskButton.classList.toggle("rotate-45");
    addTaskDialogBox.classList.toggle("display-add-task");
  } else {
    addTaskDialogBox.classList.toggle("display-add-task");
    addTaskButton.classList.toggle("rotate-45");
  }
});

// this part lets the user add the task in the todo list
const save = document.querySelector(".save-task");
const taskItem = document.querySelector(".addName");
const taskListContainer = document.querySelector(".tasks-body");

save.addEventListener("click", () => {
  const taskName = taskItem.value.trim();

  console.log(taskItem);

  if (taskName === "") {
    console.log("dont print")
  }else{
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    const newPara = document.createElement("p");
    newPara.classList.add("task-name");
    newPara.textContent = taskName;

    const newButton = document.createElement("button");
    newButton.classList.add("task-check");

    const deleteTask = document.createElement("button");

    deleteTask.classList.add("delete");

    newButton.addEventListener("click", () => {
      if (newButton.style.backgroundColor !== "green") {
        newButton.style.backgroundColor = "green";
        newPara.style.textDecoration = "line-through";
      } else {
        newButton.style.backgroundColor = "white";
        newPara.style.textDecoration = "none";
      }
    });

    deleteTask.addEventListener("click", () => {
      taskListContainer.removeChild(newTask);
    });

    newTask.appendChild(newPara);
    newTask.appendChild(newButton);
    newTask.appendChild(deleteTask);

    taskListContainer.appendChild(newTask);

    console.log(taskName);
    taskItem.value = "";
  }

});
