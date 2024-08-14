import "./App.css";
import { Header } from "./components/Header";
import { ProductionHouse } from "./components/ProductionHouse";
import { Slider } from "./components/Slider";

function App() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Header />

      <Slider />

      <ProductionHouse />
    </div>
  );
}

export default App;
