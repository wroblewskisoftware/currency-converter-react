import "./style.css";

const Options = ({ currences }) => (
  <select className="form__field" name="currency">
    {currences.map((currency) => (
      <option key={currency.shortName}>{currency.name}</option>
    ))}
  </select>
);

export default Options;
