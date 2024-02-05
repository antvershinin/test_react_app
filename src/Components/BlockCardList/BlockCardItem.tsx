import React from "react";
import { BlockCardStyled } from "./BlockCard.styled";
import { ICard } from "../../interfaces/Interfaces";
import Highlighter from "react-highlight-words";
import { useCards } from "../../context/CardProvider";

type Props = {
  data_item: ICard;
  keyword?: string;
};

export const BlockCardItem: React.FC<Props> = (props) => {
  const {
    data_item: { id, blocksCount, description, title },
  } = props;

  const { markAsSuitable } = useCards();

  const stringHighlight: (string | RegExp)[] = props.keyword
    ? props.keyword.split(" ")
    : [];

  const handleClick = () => {
    markAsSuitable(id);
  };

  return (
    <>
      <BlockCardStyled suitable={props.data_item.suitable}>
        <div className="card_blocks_count">
          <div className="block_count_image">
            <img src={require(`./images/${blocksCount}.png`)} alt="BLOCKS" />
          </div>

          <div className="block_count_text">{`${blocksCount} BLOCK${
            blocksCount !== 1 ? "S" : ""
          }`}</div>
        </div>
        <div className="card_description">
          <div className="description_title">
            <Highlighter
              searchWords={stringHighlight}
              textToHighlight={title}
            />
          </div>
          <div className="description_text">
            <Highlighter
              searchWords={stringHighlight}
              textToHighlight={description}
            />
          </div>
        </div>
        <div className="card_buttons">
          <div className="buttons_button">Details</div>
          <div className="buttons_button" onClick={handleClick}>
            Mark as Suitable
          </div>
        </div>
      </BlockCardStyled>
    </>
  );
};
