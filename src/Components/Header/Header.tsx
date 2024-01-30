import React from "react";
import { HeaderStyled } from "./Header.styled";

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <HeaderStyled>
      <div className="button">PASTE YOUR FULLNAME</div>
    </HeaderStyled>
  );
};
