import { StyledInput } from "../Input/styled";

const Options = ({ currencies, selectedCurrency, onCurrencyChange }) => (
  <StyledInput
    as="select"
    name="currency"
    value={selectedCurrency}
    onChange={onCurrencyChange}
  >
    {currencies.map((currency) => (
      <option key={currency.shortName}>{currency.name}</option>
    ))}
  </StyledInput>
);

export default Options;
