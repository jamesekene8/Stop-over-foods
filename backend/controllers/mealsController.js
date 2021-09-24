const catchAsync = require("../utils/catchAsync");
const Meal = require("../models/mealsModel");
const AppError = require("../utils/appError");

exports.getMeals = catchAsync(async (req, res, next) => {
  const meals = await Meal.find();
  res.status(200).json({ message: "This route passed successfully", meals });
});

exports.createMeal = catchAsync(async (req, res, next) => {
  const meal = await Meal.create(req.body);
  res.status(201).json({ status: "created", meal });
});

exports.getMeal = catchAsync(async (req, res, next) => {
  const meal = await Meal.findById(req.params.id);
  if (!meal) return new AppError("No Meal Found", 404);
  res.status(200).json({ status: "success", meal });
});
