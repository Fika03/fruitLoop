import "../style.css";
import { fruitList } from "../classes/Fruits";

const fruitBasket = document.getElementById("fruitBasket");
const fruitListLength = fruitList.length;

for (let i = 0; i < fruitListLength * 5; i++) {
  const fruitContainer = document.createElement("div");
  fruitContainer.className = fruitList[i % fruitListLength].className;

  const title = document.createElement("h3");
  title.innerHTML = fruitList[i % fruitListLength].name;

  const color = document.createElement("p");
  color.innerHTML = fruitList[i % fruitListLength].color;

  const weight = document.createElement("p");
  weight.innerHTML = fruitList[i % fruitListLength].weight;

  const texture = document.createElement("p");
  texture.innerHTML = fruitList[i % fruitListLength].texture;

  fruitContainer.appendChild(title);
  fruitContainer.appendChild(color);
  fruitContainer.appendChild(weight);
  fruitContainer.appendChild(texture);
  fruitBasket.appendChild(fruitContainer);
}
