import { StyledButton } from "./styled";

const Button = ({ name, type }) => (
  <StyledButton type={type}>{name}</StyledButton>
);

export default Button;
