import { useEffect } from "react";
import { Layout } from "./Components/Layout/Layout";
import { getCardsDB } from "./api/CardAPI";
import { useCards } from "./context/CardProvider";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { SearchPage } from "./Pages/SearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/search/:keywords" element={<SearchPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
