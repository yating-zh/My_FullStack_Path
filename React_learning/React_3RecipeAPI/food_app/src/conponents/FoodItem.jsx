import styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodID }) {
  return (
    <div className={styles.foodContainer}>
      <img src={food.image} alt="food image" />
      <div className={styles.foodContent}>
        <h3>{food.title}</h3>
        <button
          onClick={() => {
            setFoodID(food.id);
            //console.log(food.id);
          }}
        >
          view recipe
        </button>
      </div>
    </div>
  );
}
