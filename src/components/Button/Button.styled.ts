import styled from "styled-components";

export const StyledButton = styled.div<{
 span: number;
 buttonHeight: number;
}>`
 grid-column: span ${(props) => props.span};
 grid-row: span ${(props) => props.buttonHeight};

 display: grid;
 place-items: center;

 padding: 5px;
 cursor: pointer;

 background-color: #9e218c;

 font-size: 20px;

 transition: background-color 250ms ease-in-out;

 &:hover {
  background-color: #cf66c0;
 }

 &:active {
  background-color: #782a6d;
 }
`;
