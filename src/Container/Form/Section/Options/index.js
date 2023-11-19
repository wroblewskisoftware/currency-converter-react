import { StyledInput } from "../Container/Form/Section/Input/styled";

const Options = ({ ratesData, selectedCurrency, onCurrencyChange }) => {
  const currenciesArray = Object.keys(ratesData.data);

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
