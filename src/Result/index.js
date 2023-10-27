import { StyledResult } from "./styled";

const Result = ({ result }) => (
  <StyledResult>
    W dniu {result.date} za <strong>{result.amount}&nbsp;PLN</strong> możesz
    nabyć{" "}
    <strong>
      {result.result.toFixed(2)}&nbsp;{result.selectedCurrency}
    </strong>
  </StyledResult>
);

export default Result;
