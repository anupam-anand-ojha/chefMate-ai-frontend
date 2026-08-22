import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import BestRecipes from "./pages/BestRecipes";
import QuickRecipes from "./pages/QuickRecipes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best-recipes" element={<BestRecipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/quick-recipes" element={<QuickRecipes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;