import { useDownloadRates } from "../useDownloadRates";

const Form = ({ children, calculateResult, resetAll }) => {
  useDownloadRates();

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  const onFormReset = (event) => {
    event.preventDefault();
    resetAll();
  };

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      {children}
    </form>
  );
};

export default Form;
