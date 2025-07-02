// 1. setTimeout & setInterval

// Use setTimeout to show a message after 3 seconds and Use setInterval to create a timer counting from 0

/*setTimeout(() => {
  console.log("Runs after 3 second");
}, 3000);

let count = 0;
const intervalId = setInterval(() => {
  console.log(count);
  count++;
}, 1000);
console.log(intervalId);*/

// 2. Promises & async/await

// Create a function that returns a promise with setTimeout and use async/await to fetch and log that promise

/*let count = 0;
const intervalId = setInterval(() => {
  console.log(count);
  count++;

  if (count === 10) {
    clearInterval(intervalId);
  }
}, 1000);
console.log(intervalId);

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("This is a test!"), 2000);
  });
};

async function getData() {
  const test = await fetchData();
  console.log(test);
}
getData();*/

//3. Fetch API

// Fetch user data from https://jsonplaceholder.typicode.com/users and Display user names in a list

/*fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data));

const loadUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const list = document.getElementById("userList");

  data.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user.name;
    list.appendChild(li);
  });
};

loadUsers();*/

//4. localStorage

// Save a text input value to localStorage when user submits and Reload page → retrieve and display saved value

document.getElementById("saveBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  localStorage.setItem("name", name);
  displayStoredName();
});

function displayStoredName() {
  const savedName = localStorage.getItem("name");
  if (savedName) {
    document.getElementById("displayName").textContent = savedName;
  }
}

displayStoredName();
