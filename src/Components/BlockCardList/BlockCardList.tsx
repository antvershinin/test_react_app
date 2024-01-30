import React from "react";
import { BlockCardItem } from "./BlockCardItem";

type Props = {};

export const BlockCardList: React.FC<Props> = () => {
  const data = [
    {
      id: "5589073c-1de8-4e1e-8360-80ab7128a713",
      address: "3TRfsEove2Ev6MusnquwdtP79rWauVBn",
      title: "Awesome Concrete Tuna",
      description: "Qui repudiandae quasi fuga sit id ut excepturi rerum non.",
      blocksCount: 4,
    },
    {
      id: "979011f0-c186-4b34-aa41-51c7a59e825e",
      address: "3Q7F7Nuo2sA3JGGNzmpAN65GtmE3Z",
      title: "Intelligent Steel Tuna",
      description:
        "Adipisci deserunt ut aut possimus optio nostrum quia labore ut.",
      blocksCount: 9,
    },
    {
      id: "4033af7e-a390-4728-a69e-364312359c3f",
      address: "3S7DEVKWghSbTyQi7X7tL5cpmczcdook",
      title: "Awesome Rubber Table",
      description:
        "Neque illum aliquam quis dignissimos eos est porro tempora unde.",
      blocksCount: 6,
    },
    {
      id: "56f84755-1b2a-4322-b8eb-cdccd9168e70",
      address: "3CS495YRkMNExBLmSiqjFa7jMX2rKDMZ",
      title: "Rustic Concrete Bike",
      description:
        "Et impedit vitae at provident cumque possimus non saepe est.",
      blocksCount: 2,
    },
    {
      id: "c793a8bf-0cb1-462a-a809-bf13ec41a168",
      address: "3cjfMZBTtFWrjYe6cMB3wei3HVXCTNQ",
      title: "Practical Steel Salad",
      description:
        "Fugit non totam est laborum est non voluptates laboriosam maxime.",
      blocksCount: 10,
    },
  ];
  return (
    <>
      {data.map((el) => (
        <BlockCardItem data_item={el} key={el.id} />
      ))}
    </>
  );
};
