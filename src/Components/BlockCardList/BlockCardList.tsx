import React, { useState, useEffect } from "react";
import { BlockCardItem } from "./BlockCardItem";
import { FixedSizeList as List } from "react-window";
import { useCards } from "../../context/CardProvider";

type Props = {};

export const BlockCardList: React.FC<Props> = () => {
  const { cards, foundCards, searchStatus } = useCards();

  return (
    <>
      <List
        style={{ scrollbarWidth: "none" }}
        itemData={searchStatus ? foundCards : cards}
        itemCount={searchStatus ? foundCards.length : cards.length}
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
};
