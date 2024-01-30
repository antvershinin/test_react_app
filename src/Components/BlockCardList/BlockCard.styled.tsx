import styled from "styled-components";

export const BlockCardStyled = styled.div`
  height: 167px;
  width: 100%;
  display: flex;
  flex-direction: row;

  background-color: #1c1c33;
  opacity: 0.6;

  .card_blocks_count {
    margin: 16px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
  }
  .block_count_text {
    background: linear-gradient(90deg, #6e42ca 0%, #8d29c1 100%);
    opacity: 0.6;
  }

  .card_description {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  .card_buttons {
    margin-top: 20px;
  }
  .buttons_button {
    height: 32px;
    width: 137px;
  }
`;
