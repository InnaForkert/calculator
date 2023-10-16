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

 const [history, setHistory] = useState<string[]>(["0"]);
 const [isFinal, setIsFinal] = useState(false);
 const [action, setAction] = useState("");
 const [actionHandled, setActionHandled] = useState(true);

 useEffect(() => {
  console.log("history", history);
 }, [history]);

 useEffect(() => {
  setResult(history[history.length - 1]);
 }, [history, setResult]);

 function reset() {
  setHistory(["0"]);
  setResult("0");
  setIsFinal(true);
  setAction("");
  setActionHandled(true);
 }

 function calculateValue(btn: string) {
  if (btn === "AC") {
   reset();
   return;
  }

  if (!isNaN(parseInt(btn))) {
   if (isFinal) {
    setHistory([btn]);
    setIsFinal(false);
    return;
   }

   if (actionHandled) {
    setHistory((prev) => [
     ...prev.slice(0, history.length - 1),
     String(history[history.length - 1]) + btn,
    ]);
    return;
   }

   setHistory((prev) => [...prev, btn]);
   setActionHandled(true);
   return;
  }

  if (["+", "/", "-", "x", "="].includes(btn)) {
   handleAction(btn);
   setActionHandled(false);
   return;
  }
 }

 function handleAction(btn: string) {
  if (action === "+") {
   setHistory((prev) => [
    ...prev,
    String(+history[history.length - 1] + +history[history.length - 2]),
   ]);
  }
  if (action === "/") {
   setHistory((prev) => [
    ...prev,
    String(+history[history.length - 2] / +history[history.length - 1]),
   ]);
  }
  if (action === "-") {
   setHistory((prev) => [
    ...prev,
    String(+history[history.length - 2] - +history[history.length - 1]),
   ]);
  }
  if (action === "x") {
   setHistory((prev) => [
    ...prev,
    String(+history[history.length - 1] * +history[history.length - 2]),
   ]);
  }
  if (btn === "=") {
   setAction("");
   return;
  }
  setAction(btn);
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
