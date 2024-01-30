import styled from "styled-components";

export const HeaderStyled = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .button {
    align-self: flex-end;
    color: #e5e4fa;
    opacity: 0.6;

    margin-right: 53px;
    font-size: 15px;
  }

  &:hover .button {
    cursor: pointer;
  }
`;
