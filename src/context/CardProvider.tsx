import React, { useContext, useState } from "react";
import { ICard } from "../interfaces/Interfaces";

const CardContext = React.createContext<{
  cards: ICard[];
  foundCards: ICard[];
  searchStatus: true | false;
  fillCardsState: (cards: ICard[]) => void;
  filterCardsState: (text: string) => void;
}>(null!);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [foundCards, setFoundCards] = useState<ICard[]>([]);
  const [searchStatus, setSearchStatus] = useState<boolean>();

  const fillCardsState = (cards: ICard[]) => {
    setCards(cards);
  };

  const filterCardsState = (text: string) => {
    console.log(text);
    if (text !== "") {
      setSearchStatus(true);
      const result = cards.filter((el) => {
        return (
          el.title.toLowerCase().includes(text.toLowerCase()) ||
          el.description.toLowerCase().includes(text.toLowerCase())
        );
      });
      setFoundCards(result);
      console.log(cards.length);
    } else if (text === "") {
      setSearchStatus(false);
      setCards(cards);
    }
  };

  const value = {
    cards,
    foundCards,
    searchStatus,
    fillCardsState,
    filterCardsState,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export const useCards = () => {
  return useContext(CardContext);
};
