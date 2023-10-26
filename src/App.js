import { Container } from "./Container/styled";
import Form from "./Form";
import { Fieldset } from "./Fieldset/styled";
import Legend from "./Legend";
import Information from "./Information";
import DateField from "./DateField";
import Loading from "./Loading";
import Error from "./Error";
import Section from "./Section";
import Input from "./Input";
import Options from "./Options";
import Buttons from "./Buttons";
import Button from "./Button";
import Result from "./Result";
import { useState } from "react";
import { useDownloadRates } from "./useDownloadRates";

function App() {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [result, setResult] = useState("");
  const ratesData = useDownloadRates();

  const onInputChange = ({ target }) => setAmount(target.value);
  const onCurrencyChange = ({ target }) => setSelectedCurrency(target.value);

  const onCalculateResult = (amount, selectedCurrency, ratesData) =>
    setResult({
      amount,
      selectedCurrency,
      result: +amount / ratesData.rates[selectedCurrency],
    });

  const calculateResult = () => {
    onCalculateResult(amount, selectedCurrency, ratesData);
  };

  const onInputReset = () => setAmount("");
  const onCurrencyReset = () => setSelectedCurrency("EUR");
  const onResultReset = () => setResult("");

  const resetAll = () => {
    onInputReset();
    onCurrencyReset();
    onResultReset();
  };

  return (
    <Container>
      <Form calculateResult={calculateResult} resetAll={resetAll}>
        <Fieldset>
          <Legend name="Kalkulator walut" />
          <DateField />
          {ratesData === undefined ? <Loading /> : null}
          {ratesData?.error ? <Error /> : null}
          {ratesData?.success ? (
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
        {ratesData?.success ? (
          <Buttons
            content={
              <>
                <Button name="Przelicz" />
                <Button name="Wyczyść" type="reset" />
              </>
            }
          />
        ) : null}
      </Form>
      {result ? <Result result={result} /> : null}
    </Container>
  );
}

export default App;
