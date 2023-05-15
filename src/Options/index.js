import "./style.css";

const Options = ({ currences, selectedCurrency, onCurrencyChange }) => (
  <select
    className="options"
    name="currency"
    value={selectedCurrency}
    onChange={onCurrencyChange}
  >
    {currences.map((currency) => (
      <option key={currency.shortName}>{currency.name}</option>
    ))}
  </select>
);

export default Options;
