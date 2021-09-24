import { useParams } from "react-router-dom";
import MealCheckout from "../components/Meals/MealCheckout";
import Loader from "../components/UI/Loader";
import axios from "axios";
import OrderForm from "../components/Input/OrderForm";
import { useEffect, useState } from "react";

const MealDetail = () => {
  const [mealData, setMeal] = useState({});
  const [loader, setLoader] = useState({
    showLoader: false,
    showSuccess: false,
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const params = useParams();
  useEffect(() => {
    const mealDetail = async () => {
      const response = await axios.get(
        `http://127.0.0.1:9000/api/v1/meals/${params.mealId}`
      );
      const data = response.data.meal;
      setMeal(data);
    };
    mealDetail();
  }, [params.mealId]);

  const orderMade = () => {
    setLoader((prevState) => {
      return { ...prevState, showLoader: true };
    });
    const timerFunc = async () => {
      setTimeout(() => {
        setLoader((prevState) => {
          return { showLoader: false, showSuccess: true };
        });
      }, 5000);
    };
    timerFunc();
  };

  const successfulOrder = (
    <div className="block bg-green-300 rounded-full m-3.5">
      <p className="p-4 font-sans text-center">
        You have sucessfully Placed an order!
      </p>
    </div>
  );

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        {loader.showLoader && <Loader />}
        {loader.showSuccess && successfulOrder}
        <MealCheckout meal={mealData} onOrder={orderMade} />
      </div>
    </section>
  );
};

export default MealDetail;
