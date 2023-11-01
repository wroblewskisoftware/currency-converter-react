import { StyledResult } from "./styled";

const Result = ({ result }) => {
  const date = new Date(
    result.ratesData.meta.last_updated_at
  ).toLocaleDateString("pl-PL");

  <StyledResult>
    W dniu {date} za <strong>{result.amount}&nbsp;PLN</strong> możesz nabyć{" "}
    <strong>
      {result.result.toFixed(2)}&nbsp;{result.selectedCurrency}
    </strong>
    .
  </StyledResult>;
};

export default Result;
