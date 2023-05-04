const Form = ({ children, calculateResult }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  return (
    <form className="form__form" onSubmit={onFormSubmit}>
      {children}
    </form>
  );
};

export default Form;
