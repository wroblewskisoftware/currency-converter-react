import GlobalStyle from "./globalStyles";
import Container from "./Container";
import Form from "./Form";
import Fieldset from "./Fieldset";
import Legend from "./Legend";
import Information from "./Information";
import DateField from "./DateField";
import Section from "./Section";
import Input from "./Input";
import Options from "./Options";
import Buttons from "./Buttons";
import Button from "./Button";
import Result from "./Result";
import { useState } from "react";
import currencies from "./currencies.js";

function App() {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].name);
  const [result, setResult] = useState("");

  const currentCurrency = currencies.find(
    ({ name }) => name === selectedCurrency
  );

  const onInputChange = ({ target }) => setAmount(target.value);
  const onCurrencyChange = ({ target }) => setSelectedCurrency(target.value);

  const onCalculateResult = (amount, currentCurrency) =>
    setResult({
      amount,
      currency: currentCurrency.shortName,
      result: +amount / currentCurrency.value,
    });

  const calculateResult = () => {
    onCalculateResult(amount, currentCurrency);
  };

  const onInputReset = () => setAmount("");
  const onCurrencyReset = () => setSelectedCurrency(currencies[0].name);
  const onResultReset = () => setResult("");

  const resetAll = () => {
    onInputReset();
    onCurrencyReset();
    onResultReset();
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Form calculateResult={calculateResult} resetAll={resetAll}>
          <Fieldset>
            <Legend name="Kalkulator walut" />
            <DateField />
            <Information content="Pola wymagane są oznaczone*." />
            <Section
              label="Podaj kwotę w PLN*:"
              field={<Input amount={amount} onInputChange={onInputChange} />}
            />
            <Section
              label="Wybierz walutę:"
              field={
                <Options
                  currencies={currencies}
                  selectedCurrency={selectedCurrency}
                  onCurrencyChange={onCurrencyChange}
                />
              }
            />
          </Fieldset>
          <Buttons
            content={
              <>
                <Button name="Przelicz" />
                <Button name="Wyczyść" type="reset" />
              </>
            }
          />
        </Form>
        {result ? <Result result={result} /> : null}
      </Container>
    </>
  );
}

export default App;
