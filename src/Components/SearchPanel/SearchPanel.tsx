import React, { useState } from "react";
import { SearchPanelStyled } from "./SearchPanel.styled";
import { useCards } from "../../context/CardProvider";

type Props = {};

export const SearchPanel: React.FC<Props> = () => {
  const [search, setSearch] = useState("");
  const { filterCardsState } = useCards();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const searchText: string = e.currentTarget.value;
    setSearch(searchText);
    filterCardsState(searchText);
  };

  return (
    <SearchPanelStyled>
      <div className="search">
        <img
          src={require("./images/search_logo.png")}
          className="search_logo"
        />
        <input
          onChange={handleChange}
          className="search_input"
          type="text"
          placeholder="Search by operation or DeFi company name"
        />
      </div>
      <div className="filter">
        <div className="filter_button">
          <div className="filter_button_frame">all</div>
        </div>
        <div className="filter_button">
          {" "}
          <div className="filter_button_frame">selected</div>
        </div>
      </div>
    </SearchPanelStyled>
  );
};
