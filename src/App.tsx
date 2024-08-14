import "./App.css";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";

function App() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Header />
      <Slider />
    </div>
  );
}

export default App;
