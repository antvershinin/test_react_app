import React from "react";
import { BlockCardItem } from "./BlockCardItem";
import { FixedSizeList as List } from "react-window";
import { useCards } from "../../context/CardProvider";

type Props = {
  filtered?: boolean;
  keyword?: string;
};

export const BlockCardList: React.FC<Props> = ({ filtered, keyword }) => {
  const { cards, foundCards, filterCardsState } = useCards();

  if (keyword) {
    filterCardsState(keyword);
  }

  const data = filtered ? foundCards : cards;

  if (!data) {
    return (
      <>
        <h1>No matching</h1>
      </>
    );
  } else {
    return (
      <>
        <List
          style={{ scrollbarWidth: "none" }}
          itemData={data}
          itemCount={cards.length}
          itemSize={167}
          height={700}
          width={640}
        >
          {({ data, index, style }) => {
            return (
              <div style={style}>
                <BlockCardItem data_item={data[index]} />
              </div>
            );
          }}
        </List>
      </>
    );
  }
};
