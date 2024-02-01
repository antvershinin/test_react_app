import React from "react";
import { BlockCardStyled } from "./BlockCard.styled";
import { ICard } from "../../interfaces/Interfaces";

type Props = {
  data_item: ICard;
};

export const BlockCardItem: React.FC<Props> = (props) => {
  const {
    data_item: { blocksCount, description, title },
  } = props;
  return (
    <BlockCardStyled>
      <div className="card_blocks_count">
        <div className="block_count_image">
          <img src={require("./images/block_image.png")} alt="" />
        </div>

        <div className="block_count_text">{blocksCount}</div>
      </div>
      <div className="card_description">
        <div className="description_title">{title}</div>
        <div className="description_text">{description}</div>
      </div>
      <div className="card_buttons">
        <div className="buttons_button">Details</div>
        <div className="buttons_button">Mark as Suitable</div>
      </div>
    </BlockCardStyled>
  );
};
