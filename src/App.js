import "./styles.css";
import { useState } from "react";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import SearchCategory from "./components/SearchCategory";
import ImageGrid from "./components/ImageGrid";

export default function App() {
  const [category, setCategory] = useState("");
  return (
    <div className="App">
      <Logo />
      <SearchBar setCategory={setCategory} />
      <SearchCategory setCategory={setCategory} />
      <ImageGrid category={category} />
    </div>
  );
}
