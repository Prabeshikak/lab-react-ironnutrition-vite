// Your code here

function FoodBox(props) {
  const { food } = props;

  return (
    <div>
      <p>NAME: {food.name}</p>
      <img src={food.image} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.servings * food.calories}</b> kcal
      </p>
      <button>Delete</button>
    </div>
  );
}
export default FoodBox;
