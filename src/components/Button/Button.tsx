import { StyledButton } from "./Button.styled";

function Button({
  text,
  width,
  height,
}: {
  text: string;
  width: string;
  height: string;
}) {
  return (
    <StyledButton buttonWidth={width} buttonHeight={height}>
      {text}
    </StyledButton>
  );
}

export default Button;
