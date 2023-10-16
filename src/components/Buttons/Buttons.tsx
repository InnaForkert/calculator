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

 const [history, setHistory] = useState<string[]>([]);
 const [isFinal, setIsFinal] = useState(false);
 const [isAction, setIsAction] = useState(false);

 useEffect(() => {
  console.log("history", history);
 }, [history]);

 useEffect(() => {
  setResult(history[history.length - 1]);
 }, [history, setResult]);

 function calculateValue(action: string) {
  if (action === "AC") {
   setHistory(["0"]);
   setResult("0");
   setIsFinal(true);
   return;
  }

  if (!isNaN(parseInt(action))) {
   if (isFinal) {
    setHistory([action]);
    setIsFinal(false);
    return;
   }

   if (isAction) {
    
   }

   if (!isFinal) {
    setHistory((prev) => [
     ...prev.slice(0, history.length - 1),
     String(history[history.length - 1]) + action,
    ]);
   } else {
   }
  }

  if (action === "+") {
   setHistory((prev) => [
    ...prev,
    String(+history[history.length - 1] + +history[history.length - 2]),
   ]);
  }
  if (action === "/") {
   setHistory((prev) => [
    ...prev,
    String(+history[history.length - 1] / +history[history.length - 2]),
   ]);
  }
  if (action === "-") {
   setHistory((prev) => [
    ...prev,
    String(+history[history.length - 1] - +history[history.length - 2]),
   ]);
  }
  if (action === "*") {
   setHistory((prev) => [
    ...prev,
    String(+history[history.length - 1] * +history[history.length - 2]),
   ]);
  }
 }

 return (
  <ButtonsGrid>
   {buttons.map((el) => (
    <Button
     text={el.text}
     key={el.text}
     span={el.span}
     height={el.height}
     onClick={() => calculateValue(el.text)}
    />
   ))}
  </ButtonsGrid>
 );
}

export default Buttons;
