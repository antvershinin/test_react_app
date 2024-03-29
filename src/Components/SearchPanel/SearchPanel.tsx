import React from "react";
import { SearchPanelStyled } from "./SearchPanel.styled";
import { useCards } from "../../context/CardProvider";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

type Props = {};

export const SearchPanel: React.FC<Props> = () => {
  const { keywords } = useParams();

  const { filterCardsState, setFilter, currentFilter } = useCards();

  const navigate = useNavigate();
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const tagret = e.currentTarget.value;
    if (tagret.startsWith(" ")) return;
    tagret ? navigate(`/search/${tagret}`) : navigate("/");
    filterCardsState(tagret);
  };

  const handleClick = () => {
    setFilter(true);
  };

  return (
    <SearchPanelStyled>
      <div className="search">
        <img
          src={require("./images/search_logo.png")}
          className="search_logo"
        />
        <input
          defaultValue={keywords ? keywords : undefined}
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
          <div className="filter_button_frame" onClick={handleClick}>
            selected
          </div>
        </div>
      </div>
    </SearchPanelStyled>
  );
};
