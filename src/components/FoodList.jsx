import FoodBox from "./FoodBox";
import { useState } from "react";
import foodsJson from "../foods.json";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFoods, setFilteredFoods] = useState(foodsJson);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];

    setFoods(updatedFoods);
    setFilteredFoods(updatedFoods);
  };

  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
    setFilteredFoods(updatedFoods);
  };
  const handleSearch = (searchTerm) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  return (
    <div className="FoodList">
      <Search onSearch={handleSearch} />
      <AddFoodForm addFood={addNewFood} />
      {filteredFoods.map((food) => {
        return <FoodBox key={food.id} food={food} onDelete={deleteFood} />;
      })}
    </div>
  );
}
export default FoodList;
