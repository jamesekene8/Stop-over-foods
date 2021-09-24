const express = require("express");
const mealsController = require("../controllers/mealsController");

const router = express.Router();

router
  .route("/")
  .get(mealsController.getMeals)
  .post(mealsController.createMeal);

router.get("/:id", mealsController.getMeal);

module.exports = router;
