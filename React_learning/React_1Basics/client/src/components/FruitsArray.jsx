//Iterate an array using map()
export default function FruitArray() {
  const fruits = ["Apple", "Banana", "Orange", "Pineapple"];
  return (
    <div>
      <h3>Fruits-Array:</h3>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
