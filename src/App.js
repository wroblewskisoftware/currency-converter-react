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
  const onInputChange = ({ target }) => setAmount(target.value);

  const [selectedCurrency, setSelectedCurrency] = useState("Euro");
  const onCurrencyChange = ({ target }) => setSelectedCurrency(target.value);

  const currentCurrency = currences.find(
    ({ name }) => name === selectedCurrency
  );

  const [result, setResult] = useState("");
  const onCalculateResult = (amount, currentCurrency) =>
    setResult(+amount / +currentCurrency.value);

  return (
    <Container>
      <Form
        amount={amount}
        currentCurrency={currentCurrency}
        onCalculateResult={onCalculateResult}
      >
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
      <Result
        amount={amount}
        result={result}
        currentCurrency={currentCurrency}
      />
    </Container>
  );
}

export default App;
