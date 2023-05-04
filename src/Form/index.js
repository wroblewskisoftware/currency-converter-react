const Form = ({ children, calculateResult, resetAll }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  const onFormReset = (event) => {
    event.preventDefault();
    resetAll();
  };

  return (
    <form className="form__form" onSubmit={onFormSubmit} onReset={onFormReset}>
      {children}
    </form>
  );
};

export default Form;
