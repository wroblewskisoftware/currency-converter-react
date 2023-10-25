import { StyledInput } from "../Input/styled";

const Options = ({ ratesData, selectedCurrency, onCurrencyChange }) => {
  const currenciesArray = Object.keys(ratesData.rates);

  return (
    <StyledInput
      as="select"
      name="currency"
      value={selectedCurrency}
      onChange={onCurrencyChange}
    >
      {currenciesArray.map((currency) => (
        <option key={currency}>{currency}</option>
      ))}
    </StyledInput>
  );
};

export default Options;
