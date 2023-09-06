import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import Display from "../Display/Display";
import { Container } from "./MainContainer.styled";

function MainContainer() {
 const [result, setResult] = useState("0");

 return (
  <Container>
   <Display result={result} />
   <Buttons setResult={setResult} />
  </Container>
 );
}

export default MainContainer;
