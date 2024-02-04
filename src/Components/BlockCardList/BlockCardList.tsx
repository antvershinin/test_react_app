import React from "react";
import { BlockCardItem } from "./BlockCardItem";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import { useCards } from "../../context/CardProvider";

type Props = {
  filtered?: boolean;
  keyword?: string;
};

export const BlockCardList: React.FC<Props> = ({ filtered, keyword }) => {
  const { cards, foundCards, filterCardsState } = useCards();

  const data = filtered ? foundCards : cards;

  if (!data.length) {
    return (
      <>
        <h1>No matching</h1>
      </>
    );
  } else {
    return (
      <>
      <AutoSizer >
        {({height, width}:{height:number, width : number})=>{
          return (
        <List 
          style={{ scrollbarWidth: "none" }}

          itemData={data}
          itemCount={cards.length}
          itemSize={167}
          height={height}
          width={width}
        >
          {({ data, index, style }) => {
            return (
              
              <div style={style}>
                
                <BlockCardItem keyword={keyword} data_item={data[index]} />
              </div>
              
            );
          }}
        </List>
        )}}
        </AutoSizer>
      </>
    );
  }
};
