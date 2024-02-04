import { useParams } from "react-router";
import { BlockCardList } from "../Components/BlockCardList/BlockCardList";
import { useEffect } from "react";
import { useCards } from "../context/CardProvider";


export const SearchPage = () => {
  const { keywords } = useParams();
  const {filterCardsState, foundCards, cards} = useCards()

  useEffect(()=>{
    if (cards.length && keywords)
    filterCardsState(keywords)
  },[cards])


  return (
    <>
      <BlockCardList filtered keyword={keywords}/>
    </>
  );
};
