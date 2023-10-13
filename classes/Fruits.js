class Fruit {
  name;
  color;
  weight;
  texture;
  imgURL;
  className;

  constructor(name, color, weight, texture, imgURL, className) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.texture = texture;
    this.imgURL = imgURL;
    this.className = className;
  }
}

const passionFruit = new Fruit(
  "Passionsfrukt",
  "Lila/Brun",
  "20g",
  "Skrovlig",
  "/assets/passion.png",
  "passion"
);
const mango = new Fruit(
  "Mango",
  "Grön/Röd/Gul",
  "300g",
  "Slät",
  "./assets/mango.png",
  "mango"
);
const banana = new Fruit(
  "Banan",
  "Grön/Brun/Gul",
  "80g",
  "Slät",
  "./assets/banan.png",
  "banana"
);
const apple = new Fruit(
  "Äpple",
  "Grön/Röd",
  "75g",
  "Slät",
  "./assets/äpple.png",
  "apple"
);

export const fruitList = [banana, apple, mango, passionFruit];
