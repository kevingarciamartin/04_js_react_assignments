// TODO: Set item in localStorage
localStorage.setItem("key", "value");

// TODO: Get item from localStorage
const localStorageItem = localStorage.getItem("key");

// TODO: Remove item from localStorage
localStorage.removeItem("key");

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
const user = {
  name: "John Doe",
  age: 30,
};

localStorage.setItem("user", JSON.stringify(user));

// TODO: Get an object from localStorage
const localStorageUser = JSON.parse(localStorage.getItem("user"));

// TODO: Set item in sessionStorage
sessionStorage.setItem("key", "value");

// TODO: Get item from sessionStorage
const sessionStorageItem = sessionStorage.getItem("key");

// TODO: Remove item from sessionStorage
sessionStorage.removeItem("key");

// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
sessionStorage.setItem("user", JSON.stringify(user));

// TODO: Get an object from sessionStorage
const sessionStorageUser = JSON.parse(sessionStorage.getItem("user"));
