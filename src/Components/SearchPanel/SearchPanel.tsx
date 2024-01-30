import React from "react";
import { SearchPanelStyled } from "./SearchPanel.styled";

type Props = {};

export const SearchPanel: React.FC<Props> = () => {
  return (
    <SearchPanelStyled>
      <div className="search">
        <img
          src={require("./images/search_logo.png")}
          className="search_logo"
        />
        <input
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
