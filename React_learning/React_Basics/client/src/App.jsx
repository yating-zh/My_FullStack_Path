import Hello from "./components/Hello";
import FruitArray from "./components/FruitsArray";
import FruitsObj from "./components/FruitsObj";
import ConditionalComponent from "./components/ConditionalComponent";
import ConditionalFruits from "./components/ConditionalFruits";
import ButtonMessage from "./components/ButtonMessage";
import Counter from "./components/state/Counter";
import FormSingleInput from "./components/state/FormSingleInput";
import FormMultiInput from "./components/state/FormMultiInput";

function App() {
  const person = {
    name: "mike",
    message: "hello",
    seatNumber: [1, 4, 7],
  };
  return (
    <div>
      <Hello person={person} />
      <FruitArray />
      <FruitsObj />
      <ConditionalComponent />
      <ConditionalFruits />
      <ButtonMessage />
      <Counter />
      <FormSingleInput />
      <FormMultiInput />
    </div>
  );
}

export default App;
