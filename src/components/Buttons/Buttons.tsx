import Button from "../Button/Button";
import { ButtonsGrid } from "./Buttons.styled";

function Buttons() {
  const buttons = [
    {
      text: "AC",
    },
    { text: "/" },
    { text: "x" },
    { text: "7" },
    { text: "8" },
    { text: "9" },
    { text: "-" },
    { text: "4" },
    { text: "5" },
    { text: "6" },
    { text: "+" },
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { text: "=" },
    { text: "0" },
    { text: "." },
  ];

  return (
    <ButtonsGrid>
      {buttons.map((el) => (
        <Button text={el.text} key={el.text} />
      ))}
    </ButtonsGrid>
  );
}

export default Buttons;
