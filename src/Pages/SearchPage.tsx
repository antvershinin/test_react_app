import { useParams } from "react-router";
import { BlockCardList } from "../Components/BlockCardList/BlockCardList";

export const SearchPage = () => {
  const { keywords } = useParams();

  return (
    <>
      <BlockCardList filtered />
    </>
  );
};
