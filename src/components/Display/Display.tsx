import { DisplayContainer } from "./Display.styled";

function Display({ result }: { result: string }) {
 return <DisplayContainer>{result ? result : 0}</DisplayContainer>;
}

export default Display;
