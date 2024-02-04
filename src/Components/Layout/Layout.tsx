import { Outlet } from "react-router-dom";
import { LayoutStyled } from "./Layout.styled";
import { Header } from "../Header/Header";
import { SearchPanel } from "../SearchPanel/SearchPanel";

export const Layout = () => {
  return (
    <LayoutStyled>
      <Header />
      <section className="search_panel">
        <SearchPanel />
      </section>
      
      <section className="main_content">
        <Outlet />
      </section>
    </LayoutStyled>
  );
};
