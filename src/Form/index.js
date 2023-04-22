const Form = ({ children, testResult }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    testResult();
  };

  return (
    <form className="form__form" onSubmit={onFormSubmit}>
      {children}
    </form>
  );
};

export default Form;
