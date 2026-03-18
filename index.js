// Oppgave 1.a
function splitLines(text) {
    return text.split("\n").filter(line =>line !== "")
}

//Oppgave 1.b
let textValue = ["1.2", "-3.4", "5.6"];

function s2i (){
  numbers = textValue.map(Number);
  return numbers;
}

console.log(s2i())

// Oppgave 1.c
function sumPairs(numbers) {
    let list = document.getElementById("resultList");

    for (let i = 0; i < numbers.length - 1; i++) {
        let sum = numbers[i] + numbers[i + 1];

        let item = "<li>" + numbers[i] + "+" + numbers[i + 1] + "=" + sum + "</li>";
        list.innerHTML += item;
    }
}

// Oppgave 2
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
  const task = input.value;

  const listItem = document.createElement("li");
  listItem.innerHTML = `<input type="checkbox"/><span>${task}<span/><button>&#10005;<button/>`;

  list.appendChild(listItem);

  input.value = ""

  const checkbox = listItem.querySelector("input");
  const span = listItem.querySelector("span");
  const cross = listItem.querySelector("button");

  checkbox.addEventListener("change", () => {
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  cross.addEventListener("click", () => {
    listItem.remove();
  });
  });