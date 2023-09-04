import styled from "styled-components";

export const ButtonsGrid = styled.div`
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 gap: 5px;

 height: calc(100% - 50px);
 width: 100%;
 margin-top: 5px;

 border-radius: 0 0 5px 5px;
 overflow: hidden;
`;
