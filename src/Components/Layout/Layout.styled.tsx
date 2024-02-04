import styled from "styled-components";

export const LayoutStyled = styled.div`
  margin: 0;
  height: 100vh;
  min-width: 100%;
  font-family: "Roboto";

  background: linear-gradient(52deg, #14072e 22.22%, #0a081e 59.58%);
  display: grid ;
  grid-template-rows: 150px 100px 1fr;
  
  

  .main_content, .search_panel {
    max-width: 640px;
    width: 640px;
    justify-self: center;
    }
`;
