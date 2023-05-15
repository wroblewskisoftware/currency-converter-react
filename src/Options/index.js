import "./style.css";

const Options = ({ currencies, selectedCurrency, onCurrencyChange }) => (
  <select
    className="options"
    name="currency"
    value={selectedCurrency}
    onChange={onCurrencyChange}
  >
    {currencies.map((currency) => (
      <option key={currency.shortName}>{currency.name}</option>
    ))}
  </select>
);

export default Options;
