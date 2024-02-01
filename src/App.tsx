import { useEffect } from "react";
import { Appstyled } from "./App.styled";
import { BlockCardList } from "./Components/BlockCardList/BlockCardList";

import { Header } from "./Components/Header/Header";
import { SearchPanel } from "./Components/SearchPanel/SearchPanel";

import { getCardsDB } from "./api/CardAPI";
import { useCards } from "./context/CardProvider";

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
    <Appstyled>
      <Header />
      <div className="container">
        <SearchPanel />

        <BlockCardList />
      </div>
    </Appstyled>
  );
}

export default App;
