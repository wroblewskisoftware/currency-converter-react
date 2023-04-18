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

function App() {
  return (
    <Container>
      <Form>
        <Fieldset>
          <Legend name="Kalkulator walut" />
          <Information content="Pola wymagane są oznaczone*." />
          <Section label="Podaj kwotę w PLN*:" field={<Input />} />
          <Section label="Wybierz walutę:" field={<Options />} />
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
      <Result />
    </Container>
  );
}

export default App;
