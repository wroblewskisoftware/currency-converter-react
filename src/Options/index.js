import "./style.css";

const Options = () => (
  <select className="form__field" name="currency">
    <option value="eur">Euro</option>
    <option value="usd">Dolar amerykański</option>
    <option value="gbp">Funt szterling</option>
    <option value="chf">Frank szwajcarski</option>
  </select>
);

export default Options;
