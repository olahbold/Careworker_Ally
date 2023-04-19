import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}
