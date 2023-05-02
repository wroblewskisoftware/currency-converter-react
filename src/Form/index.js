const Form = ({ children, amount, currentCurrency, onCalculateResult }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    onCalculateResult(amount, currentCurrency);
  };

  return (
    <form className="form__form" onSubmit={onFormSubmit}>
      {children}
    </form>
  );
};

export default Form;
