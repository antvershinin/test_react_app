import { useNavigate } from "react-router";
import { Outlet } from "react-router-dom";
import { LayoutStyled } from "./Layout.styled";
import { Header } from "../Header/Header";
import { SearchPanel } from "../SearchPanel/SearchPanel";

export const Layout = () => {
  return (
    <LayoutStyled>
      <Header />
      <main className="container">
        <SearchPanel />
        <Outlet />
      </main>
    </LayoutStyled>
  );
};
