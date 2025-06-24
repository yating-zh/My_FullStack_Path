import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";

export default function FoodDetails({ foodID }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const apiKey = "b88ab5a4dc884b639523b5010fa68b81"; //will be put in env for security
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodID]);

  return (
    <div className={styles.foodCard}>
      <div className={styles.foodTitle}>
        <h1>{food.title}</h1>
        <img src={food.image} alt="food image" />
      </div>
      <div className={styles.foodTags}>
        <span className={styles.foodTag}>⏰{food.readyInMinutes} Minutes</span>
        <span className={styles.foodTag}>
          {food.vegetarian ? "🥕Vegetarian" : "🥩Non-Vegetarian"}
        </span>
        <span className={styles.foodTag}>
          {food.vegan ? "* Vegan" : "* Non-Vegan"}
        </span>
      </div>
      <div className={styles.price}>
        <span> $ {food.pricePerServing}per serving</span>
      </div>
      <div className={styles.foodInstruction}>
        <h2>Instructions</h2>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
