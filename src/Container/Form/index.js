import { Fieldset } from "./styled";
import { Legend } from "./styled";
import DateField from "./DateField";
import { Information } from "./styled";
import Loading from "./Loading";
import Error from "./Error";
import Section from "./Section";
import Input from "./Section/Input";
import Options from "../../Options";
import { Buttons } from "./styled";
import { Button } from "./styled";
import { useState } from "react";
import { useDownloadRates } from "../../useDownloadRates";

const Form = ({ setResult }) => {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
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

  const inputReset = () => setAmount("");
  const currencyReset = () => setSelectedCurrency("EUR");
  const resetResult = () => setResult("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, selectedCurrency, ratesData);
  };

  const onFormReset = (event) => {
    event.preventDefault();
    inputReset();
    currencyReset();
    resetResult();
  };

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      <Fieldset>
        <Legend>Kalkulator walut</Legend>
        <DateField />
        {ratesData.status === "loading" ? <Loading /> : null}
        {ratesData.status === "error" ? <Error /> : null}
        {ratesData.status === "success" ? (
          <>
            <Information>Pola wymagane są oznaczone*</Information>
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
        <Buttons>
          <Button>Przelicz</Button>
          <Button type="reset">Wyczyść</Button>
        </Buttons>
      ) : null}
    </form>
  );
};

export default Form;
