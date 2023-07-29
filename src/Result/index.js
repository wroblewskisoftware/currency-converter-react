import { StyledResult } from "./styled";

const Result = ({ result }) => (
  <StyledResult>
    W dniu 23.04.2023r. za <strong>{result.amount}&nbsp;PLN</strong> możesz
    nabyć{" "}
    <strong>
      {result.result.toFixed(2)}&nbsp;{result.currency}
    </strong>
    .
  </StyledResult>
);

export default Result;
