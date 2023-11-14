// task 5, buckle up
function changeMode(size, weight, transform, background, color) {
  return function() {
    let body = document.body;

    body.style.fontSize = size + 'px';
    body.style.fontWeight = weight;
    body.style.textTransform = transform;
    body.style.backgroundColor = background;
    body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  let text = document.createElement("text");
  text.textContent = "Welcome Holberton!";
  document.body.appendChild(text);

  let spookyButton = document.createElement("button");
  spookyButton.textContent = "Spooky";
  spookyButton.onclick = spooky;
  document.body.appendChild(spookyButton);

  let darkButton = document.createElement("button");
  darkButton.textContent = "Dark mode";
  darkButton.onclick = darkMode;
  document.body.appendChild(darkButton);

  let screamButton = document.createElement("button");
  screamButton.textContent = "Scream mode";
  screamButton.onclick = screamMode;
  document.body.appendChild(screamButton);
}

main();
