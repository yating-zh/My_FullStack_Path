import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cover from "./components/Cover";
import Features from "./components/Features";
import Product from "./components/Product";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Nav />
      <Wrapper>
        <Cover />
        <Product />
        <Features />
        {/*<Footer />*/}
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
