import "./style.css";

const Button = ({ name, type }) => (
  <button className="buttons__button" type={type}>
    {name}
  </button>
);

export default Button;
