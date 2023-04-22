import "./style.css";

const Input = ({ amount, onInputChange }) => (
  <input
    className="form__field"
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
