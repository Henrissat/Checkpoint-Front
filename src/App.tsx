import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Continents from "./pages/continents/continents";
import Country from "./pages/country/country";
import DetailsCountry from "./pages/details-country/details-country";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Continents />}/>
        <Route path={`/country/:code`} element={<Country/>}/>
        <Route path={`/details/:code`} element={<DetailsCountry />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
