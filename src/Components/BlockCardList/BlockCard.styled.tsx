import styled from "styled-components";

export const BlockCardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #1c1c33;
  opacity: 0.6;
  color: white;
  border-radius: 8px;

  .card_blocks_count {
    margin: 16px;
    margin-right: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }


  .block_count_text {
    margin-top: 10px;
    opacity: 0.6;
    font-size: 10px;
    color: #6E42CA;
;
  }

  .card_description {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    margin-right: 43px;
 
  }

  .description_title {
    font-size: 15px;
    margin-bottom: 2px;
  }

  .description_text {
    opacity: 60%;
    font-size: 13px;
;
  }

  .card_buttons {
    margin-top: 20px;

  }



  .buttons_button {
    height: 32px;
    width: 137px;
    margin-right: 32px;
    margin-bottom: 8px;
    border-radius: 4px;
    border: 1px solid #6E42CA;
    color: #6E42CA;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      border-width:2px;
    }
  }
`;
