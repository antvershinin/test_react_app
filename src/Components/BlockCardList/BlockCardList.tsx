import React from "react";
import { BlockCardItem } from "./BlockCardItem";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import { useCards } from "../../context/CardProvider";

type Props = {
  searched?: boolean;
  keyword?: string;
};

export const BlockCardList: React.FC<Props> = ({ searched, keyword }) => {
  const { cards, foundCards } = useCards();

  const data = searched ? foundCards : cards;

  if (!data.length) {
    return (
      <>
        <h3 style={{ color: "#FBFAFF" }}>No matching</h3>
      </>
    );
  } else {
    return (
      <>
        <AutoSizer>
          {({ height, width }: { height: number; width: number }) => {
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
                      <BlockCardItem
                        keyword={keyword}
                        data_item={data[index]}
                      />
                    </div>
                  );
                }}
              </List>
            );
          }}
        </AutoSizer>
      </>
    );
  }
};
