import "./style.css";

const Result = ({ result }) => (
  <p className="form__result">
    W dniu 23.04.2023r. za <strong>{result.amount} PLN</strong> możesz nabyć{" "}
    <strong>
      {result.result.toFixed(2)} {result.currency}
    </strong>
    .
  </p>
);

export default Result;
