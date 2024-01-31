import React, { useState, useEffect } from "react";
import { BlockCardItem } from "./BlockCardItem";

type Props = {};

export const BlockCardList: React.FC<Props> = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/sirWill/9f3e7cca5ca3f3a2f4b6378b725ffb5d/raw/c3cc18c73f1d0d5b9b8b83259f47d9bb68edea5e/blocks.json",
        {
          method: "GET",
          mode: "cors",
        }
      );

      if (!response.ok) {
        throw new Error("Response not OK");
      }

      const data = await response.json();
      setData(data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((el) => (
        <BlockCardItem data_item={el} />
      ))}
    </>
  );
};
