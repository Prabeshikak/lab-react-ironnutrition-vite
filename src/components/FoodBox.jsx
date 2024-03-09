// Your code here

function FoodBox(props) {
  const { food, onDelete } = props;

  return (
    <div className="FoodBox">
      <p>NAME: {food.name}</p>
      <img src={food.image} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.servings * food.calories}</b> kcal
      </p>
      <button onClick={() => onDelete(food.id)}>Delete</button>
    </div>
  );
}
export default FoodBox;
