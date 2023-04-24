import "./style.css";

const Options = ({ currences, currency, onCurrencyChange }) => (
  <select
    className="form__field"
    name="currency"
    value={currency}
    onChange={onCurrencyChange}
  >
    {currences.map((currency) => (
      <option key={currency.shortName}>{currency.name}</option>
    ))}
  </select>
);

export default Options;
