import React from "react";
import axios from "axios";
import { ICard } from "../interfaces/Interfaces";

const baseURL =
  "https://gist.githubusercontent.com/sirWill/9f3e7cca5ca3f3a2f4b6378b725ffb5d/raw/c3cc18c73f1d0d5b9b8b83259f47d9bb68edea5e/";

export const getCardsDB = async () => {
  const cards = await axios.get<ICard[]>(baseURL);
  return cards;
};
