import { Layout } from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { SearchPage } from "./Pages/SearchPage";
import { useEffect } from "react";
import { useCards } from "./context/CardProvider";
import { getCardsDB } from "./api/CardAPI";


function App() {
  const { fillCardsState } = useCards();

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await getCardsDB();
        fillCardsState(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCards();
  }, []);

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
