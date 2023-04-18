import "./style.css";

const Input = () => (
  <input
    className="form__field"
    type="number"
    min="0.01"
    step="0.01"
    name="amount"
    placeholder="Wpisz kwotę"
    required
  />
);

export default Input;
