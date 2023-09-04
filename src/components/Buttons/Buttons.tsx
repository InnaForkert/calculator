import Button from "../Button/Button";
import { ButtonsGrid } from "./Buttons.styled";

function Buttons() {
 const buttons = [
  { text: "AC", span: 2 },
  { text: "/", span: 1 },
  { text: "x", span: 1 },
  { text: "7", span: 1 },
  { text: "8", span: 1 },
  { text: "9", span: 1 },
  { text: "-", span: 1 },
  { text: "4", span: 1 },
  { text: "5", span: 1 },
  { text: "6", span: 1 },
  { text: "+", span: 1 },
  { text: "1", span: 1 },
  { text: "2", span: 1 },
  { text: "3", span: 1 },
  { text: "=", span: 1, height: 2 },
  { text: "0", span: 2 },
  { text: ".", span: 1 },
 ];

 return (
  <ButtonsGrid>
   {buttons.map((el) => (
    <Button text={el.text} key={el.text} span={el.span} height={el.height} />
   ))}
  </ButtonsGrid>
 );
}

export default Buttons;
