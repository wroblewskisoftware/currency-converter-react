import "./style.css";

const Result = ({ result }) => (
  <p className="result">
    W dniu 23.04.2023r. za <strong>{result.amount}&nbsp;PLN</strong> możesz
    nabyć{" "}
    <strong>
      {result.result.toFixed(2)}&nbsp;{result.currency}
    </strong>
    .
  </p>
);

export default Result;
