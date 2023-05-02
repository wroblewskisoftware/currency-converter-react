import "./style.css";

const Result = ({ amount, result, currentCurrency }) => {
  if (result !== "") {
    return (
      <p className="form__result">
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
