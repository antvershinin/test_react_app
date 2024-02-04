import styled from "styled-components";

export const SearchPanelStyled = styled.div`
  display: flex;
  
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;

  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: #1c1c33;
    border-radius: 4px;
  }
  .search_logo {
    height: 14px;
    width: 14px;
    margin-left: 17px;
    margin-right: 3px;
  }
  .search_input {
    width: 100%;
    background: none;
    border: none;
    color: #e5e4fa;
    outline: none;
    font-size: 13px;

    &::placeholder {
    }
  }
  .filter {
    display: flex;
    margin-top: 11px;
    gap: 8px;
    flex-direction: row;
  }
  .filter_button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e5e4fa;
    height: 24px;
    border-radius: 99px;
    background-color: #1c1c33;
    font-size: 13px;
    &:hover {
      cursor: pointer;
    }
  }
  .filter_button_frame {
    padding: 0 8px;
  }
`;
