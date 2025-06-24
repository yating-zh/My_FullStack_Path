import { useState } from "react";
import Search from "./conponents/Search";
import FoodList from "./conponents/FoodList";
import NavBar from "./conponents/NavBar";
import "./app.module.css";
import Container from "./conponents/Container";
import FoodDetails from "./conponents/FoodDetails";
import InnerContainer from "./conponents/InnerContainer";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("658615");

  return (
    <div className="App">
      <NavBar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodID={setFoodID} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodID={foodID} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
