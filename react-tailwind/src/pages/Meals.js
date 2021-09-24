import { useEffect, useState } from "react";
import axios from "axios";
import MealItem from "../components/Meals/MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const getMeals = async () => {
      const response = await axios.get("http://127.0.0.1:9000/api/v1/meals");
      const data = response.data.meals;
      setMeals(data);
    };
    getMeals();
  }, []);
  return (
    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {meals.map((meal) => {
            return (
              <MealItem
                key={meal._id}
                id={meal._id}
                name={meal.name}
                price={meal.price}
                image={meal.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Meals;
