import { StyledButton } from "./Button.styled";

function Button({
 text,
 span,
 height = 1,
}: {
 text: string;
 span: number;
 height?: number;
}) {
 return (
  <StyledButton span={span} buttonHeight={height}>
   {text}
  </StyledButton>
 );
}

export default Button;
