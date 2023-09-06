import Button from "../Button/Button";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { ButtonsGrid } from "./Buttons.styled";

function Buttons({
 setResult,
}: {
 setResult: Dispatch<SetStateAction<string>>;
}) {
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

 const [action, setAction] = useState("");
 const [number, setNumber] = useState("0");
 const [prevNumber, setPrevNumber] = useState("0");
 const [prevNumberSet, setPrevNumberSet] = useState(false);

 function calculateValue() {
  let res = "0";
  if (action === "+") {
   res = String(+prevNumber + +number);
  }
  if (action === "/") {
   res = String(+prevNumber / +number);
  }
  if (action === "-") {
   res = String(+prevNumber - +number);
  }
  if (action === "*") {
   res = String(+prevNumber * +number);
  }
  setPrevNumber(res?.toString());
  setResult(res.toString());
 }

 function handleClickBtn(val: string) {
  if (val === "AC") {
   setResult("0");
   return;
  }

  if (["/", "+", "x", "-"].includes(val)) {
   setAction(val);
   if (!prevNumberSet) {
    setPrevNumberSet(true);
   }
   return;
  }

  if (typeof +val === "number") {
   if (!prevNumberSet) {
    setPrevNumber((prev) => prev + val);
    return;
   }
   setNumber((prev: string) => prev + val);
   return;
  }

  if (val === "=") {
   calculateValue();
  }
 }

 useEffect(() => {
  setResult(prevNumber);
 }, [prevNumber, setResult]);

 return (
  <ButtonsGrid>
   {buttons.map((el) => (
    <Button
     text={el.text}
     key={el.text}
     span={el.span}
     height={el.height}
     onClick={handleClickBtn}
    />
   ))}
  </ButtonsGrid>
 );
}

export default Buttons;
