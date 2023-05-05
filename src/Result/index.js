import "./style.css";

const Result = ({ result, toggleResultField }) => {
  if (result !== "") {
    return (
      <p className="form__result" hidden={toggleResultField}>
        W dniu 23.04.2023r. za <strong>{result.amount} PLN</strong> możesz nabyć{" "}
        <strong>
          {result.result.toFixed(2)} {result.currency.toUpperCase()}
        </strong>
        .
      </p>
    );
  }
};

export default Result;
