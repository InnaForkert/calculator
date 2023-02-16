import Buttons from "../Buttons/Buttons";
import Display from "../Display/Display";
import { Container } from "./MainContainer.styled";

function MainContainer() {
  return (
    <Container>
      <Display />
      <Buttons />
    </Container>
  );
}

export default MainContainer;
