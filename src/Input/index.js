import { StyledInput } from "./styled";

const Input = ({ amount, onInputChange }) => (
  <StyledInput
    type="number"
    min="0.01"
    step="0.01"
    name="amount"
    placeholder="Wpisz kwotę"
    required
    value={amount}
    onChange={onInputChange}
  />
);

export default Input;
