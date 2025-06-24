import Fruit from "./Fruit";
export default function FruitsObj() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Banana", price: 6, emoji: "🍌" },
    { name: "Orange", price: 5, emoji: "🍊" },
    { name: "Mango", price: 12, emoji: "🥭" },
  ];
  return (
    <div>
      <h3>Fruits-Object:</h3>
      <ul>
        {fruits.map((fruit) => (
          //<li>
          //  {fruit.emoji}
          //  {fruit.name} ${fruit.price}
          //</li>
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}
