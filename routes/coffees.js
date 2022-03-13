const router = require("express").Router();
let Coffee = require("../models/coffee.model");

router.route("/").get((req, res) => {
  Coffee.find()
    .then((coffees) => res.json(coffees))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const { name, imageUrl, description, ingredients, price } = req.body;
  const newCoffee = new Coffee({
    name,
    imageUrl,
    description,
    ingredients,
    price,
  });

  newCoffee
    .save()
    .then(() => res.json("Coffee added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
