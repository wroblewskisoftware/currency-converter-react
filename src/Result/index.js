import "./style.css";

const Result = ({ amount, result, currentCurrency, toggleResultField }) => {
  if (result !== "") {
    return (
      <p className="form__result" hidden={toggleResultField}>
        W dniu 23.04.2023r. za <strong>{amount} PLN</strong> możesz nabyć{" "}
        <strong>
          {result.toFixed(2)} {currentCurrency.shortName.toUpperCase()}
        </strong>
        .
      </p>
    );
  }
};

export default Result;
