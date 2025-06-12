import ConditionalFruit from "./ConditionalFruit";
export default function ConditionalFruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldout: false },
    { name: "Banana", price: 6, emoji: "🍌", soldout: true },
    { name: "Orange", price: 5, emoji: "🍊", soldout: true },
    { name: "Mango", price: 12, emoji: "🥭", soldout: false },
    { name: "strawberry", price: 19, emoji: "🍓", soldout: true },
  ];
  return (
    <div>
      <h3>Fruits- Only display fruits with price greater than $8:</h3>
      <ul>
        {fruits.map((fruit) => (
          //<li>
          //  {fruit.emoji}
          //  {fruit.name} ${fruit.price}
          //</li>
          <ConditionalFruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
