import "./style.css";

const Button = ({ name, type }) => (
  <button className="form__button" type={type}>
    {name}
  </button>
);

export default Button;
