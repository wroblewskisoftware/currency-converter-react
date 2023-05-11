import Container from "./Container";
import Form from "./Form";
import Fieldset from "./Fieldset";
import Legend from "./Legend";
import Information from "./Information";
import Section from "./Section";
import Input from "./Input";
import Options from "./Options";
import Buttons from "./Buttons";
import Button from "./Button";
import Result from "./Result";
import { useState } from "react";
import currences from "./currences.js";

function App() {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("Euro");
  const [result, setResult] = useState("");

  const currentCurrency = currences.find(
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
  const onCurrencyReset = () => setSelectedCurrency("Euro");
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
          <Information content="Pola wymagane są oznaczone*." />
          <Section
            label="Podaj kwotę w PLN*:"
            field={<Input amount={amount} onInputChange={onInputChange} />}
          />
          <Section
            label="Wybierz walutę:"
            field={
              <Options
                currences={currences}
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
  );
}

export default App;
