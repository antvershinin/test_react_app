import { useEffect } from "react";
import { useCards } from "../context/CardProvider";
import { getCardsDB } from "../api/CardAPI";
import { BlockCardList } from "../Components/BlockCardList/BlockCardList";

export const HomePage = () => {
  const { fillCardsState } = useCards();

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await getCardsDB();
        fillCardsState(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCards();
  }, []);
  return (
    <>
      <BlockCardList />
    </>
  );
};
