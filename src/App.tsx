import { Appstyled } from "./App.styled";
import { BlockCardList } from "./Components/BlockCardList/BlockCardList";

import { Header } from "./Components/Header/Header";
import { SearchPanel } from "./Components/SearchPanel/SearchPanel";

function App() {
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
