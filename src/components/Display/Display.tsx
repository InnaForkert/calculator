import { DisplayContainer } from "./Display.styled";

function Display({ result }: { result: string }) {
 return <DisplayContainer>{result}</DisplayContainer>;
}

export default Display;
