import { useEffect, useState } from "react";
import HomeMeal from "../components/Meals/HomeMeal";
import axios from "axios";

const Home = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const getMeals = async () => {
      const response = await axios.get("http://127.0.0.1:9000/api/v1/meals");
      const data = response.data.meals.slice(0, 5);
      setMeals(data);
    };
    getMeals();
  }, []);
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 bg-green-400 p-10 rounded-md">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Stopover Meals And Delight
            </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-black-500">
            We have the best meals across Nigeria. We provide our customers with
            different varieties of meals and we always make sure that our
            customers are satisfied. Order from us and get the best!!!. We
            deliver meals across Nigeria and we make sure that we deliver on
            time to all our customers
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          {meals.map((meal) => {
            return (
              <HomeMeal
                key={meal._id}
                name={meal.name}
                category={meal.category}
                price={meal.price}
                description={meal.description}
                image={meal.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
