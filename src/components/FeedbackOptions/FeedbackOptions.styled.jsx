import styled from "@emotion/styled";

export const BtnContainer = styled.div`
display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;`;

  export const Button = styled.button`
  margin: 20px;
    height: 50px;
    width: 100px;
    color: #e2ebf0;
    text-transform: capitalize;
    border: none;
    border-radius: 10px;
    background-image: linear-gradient( 134.6deg,  rgba(201,37,107,1) 15.4%, rgba(116,16,124,1) 74.7% );
    font-size: 20px;
    cursor: pointer;
    box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);
  
  
    &:hover{
        background-image: radial-gradient( circle 602px at 2.1% 5.1%,  rgba(233,0,120,1) 0%, rgba(0,0,0,1) 90.1% );
  }`
    

