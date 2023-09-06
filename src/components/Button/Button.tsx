import { StyledButton } from "./Button.styled";

function Button({
 text,
 span,
 height = 1,
 onClick,
}: {
 text: string;
 span: number;
 height?: number;
 onClick: (val: string) => void;
}) {
 return (
  <StyledButton span={span} buttonHeight={height} onClick={() => onClick(text)}>
   {text}
  </StyledButton>
 );
}

export default Button;
