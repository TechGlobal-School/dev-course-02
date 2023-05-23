// Elements
const addBtn = document.getElementById("addBtn");
const select = document.getElementById("colors");
const table = document.getElementById("pixelTable");

let chosenColor = "red";

// Make a row
const makeARow = () => {
  // Create 20 td append it to tr. Append tr to table
  const tr = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    tr.append(td);
  }
  table.append(tr);
};

// Pick a color
const pickColor = (event) => (chosenColor = event.target.value);

// Colorize
const colorize = (event) => {
  let tagetElement = event.target;
  if (tagetElement.tagName !== "TD") {
    return;
  } else if (tagetElement.className === chosenColor) {
    tagetElement.className = "";
  } else {
    tagetElement.className = chosenColor;
  }
};

// Event handlers
addBtn.addEventListener("click", makeARow);
select.addEventListener("change", pickColor);
table.addEventListener("click", colorize); // https://javascript.info/bubbling-and-capturing
