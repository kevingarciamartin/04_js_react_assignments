const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  if (event.target.id === "button4" || event.target.id === "button5") {
    return myFunction(event, event.target.textContent);
  }
  alert("Child container clicked!");
});

document.querySelector("#button2").onclick = (event) => myFunction(event, event.target.textContent);

document.querySelector("#button3").addEventListener("click", (event) => myFunction(event, event.target.textContent));

function myFunction(event, message) {
  event.stopPropagation();
  alert(message);
}
