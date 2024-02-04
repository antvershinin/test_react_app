import React, { useContext, useState } from "react";
import { ICard } from "../interfaces/Interfaces";

const CardContext = React.createContext<{
  cards: ICard[];
  foundCards: ICard[];
  fillCardsState: (cards: ICard[]) => void;
  filterCardsState: (text: string) => void;
  markAsSuitable: (id : string) => void
}>(null!);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [foundCards, setFoundCards] = useState<ICard[]>([]);

  const markAsSuitable = (id:string) => {
    const newList = cards.map((el)=> {
      if (el.id !== id) return el
      else return {...el, suitable:!el.suitable}
    })
    setCards(newList)
  }

  const fillCardsState = (cards: ICard[]) => {
    setCards(cards);
  };

  const filterCardsState = (text: string) => {
    if (text !== "") {
      const result = cards.filter((el) => {
        return (
          el.title.toLowerCase().includes(text.toLowerCase()) ||
          el.description.toLowerCase().includes(text.toLowerCase())
          
          );
        });
        
        setFoundCards(result);

    } else if (text === "") {
      setCards(cards);
    }
  };

  const value = {
    cards,
    foundCards,
    fillCardsState,
    filterCardsState,
    markAsSuitable
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export const useCards = () => {
  return useContext(CardContext);
};
