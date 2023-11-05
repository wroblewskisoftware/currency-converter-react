import { Fieldset } from "../Fieldset/styled";
import Legend from "../Legend";
import Information from "../Information";
import DateField from "../DateField";
import Loading from "../Loading";
import Error from "../Error";
import Section from "../Section";
import Input from "../Input";
import Options from "../Options";
import Buttons from "../Buttons";
import Button from "../Button";
import { useState } from "react";
import { useDownloadRates } from "../useDownloadRates";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [result, setResult] = useState("");
  const ratesData = useDownloadRates();

  const onInputChange = ({ target }) => setAmount(target.value);
  const onCurrencyChange = ({ target }) => setSelectedCurrency(target.value);

  const calculateResult = (amount, selectedCurrency, ratesData) =>
    setResult({
      amount,
      selectedCurrency,
      result: +amount * ratesData.data[selectedCurrency].value,
      ratesData,
    });

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, selectedCurrency, ratesData);
  };

  const inputReset = () => setAmount("");
  const currencyReset = () => setSelectedCurrency("EUR");
  const resetResult = () => setResult("");

  const onFormReset = (event) => {
    event.preventDefault();
    inputReset();
    currencyReset();
    resetResult();
  };

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      <Fieldset>
        <Legend name="Kalkulator walut" />
        <DateField />
        {ratesData.status === "loading" ? <Loading /> : null}
        {ratesData.status === "error" ? <Error /> : null}
        {ratesData.status === "success" ? (
          <>
            <Information content="Pola wymagane są oznaczone*." />
            <Section
              label="Podaj kwotę w PLN*:"
              field={<Input amount={amount} onInputChange={onInputChange} />}
            />
            <Section
              label="Wybierz walutę:"
              field={
                <Options
                  ratesData={ratesData}
                  selectedCurrency={selectedCurrency}
                  onCurrencyChange={onCurrencyChange}
                />
              }
            />
          </>
        ) : null}
      </Fieldset>
      {ratesData.status === "success" ? (
        <Buttons
          content={
            <>
              <Button name="Przelicz" />
              <Button name="Wyczyść" type="reset" />
            </>
          }
        />
      ) : null}
    </form>
  );
};

export default Form;
