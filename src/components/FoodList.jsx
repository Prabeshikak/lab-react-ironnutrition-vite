import FoodBox from "./FoodBox";
import { useState } from "react";
import foodsJson from "../foods.json";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];

    setFoods(updatedFoods);
  };

  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addNewFood} />
      {foods.map((food) => {
        return <FoodBox key={food.id} food={food} onDelete={deleteFood} />;
      })}
    </div>
  );
}
export default FoodList;
