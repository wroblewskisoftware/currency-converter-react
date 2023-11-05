import { useState } from "react";
import { Container } from "./Container/styled";
import Form from "./Form";
import Result from "./Result";

function App() {
  const [result, setResult] = useState("");

  const getResult = (calculatedResult) => {
    setResult(calculatedResult);
  };

  return (
    <Container>
      <Form getResult={getResult}></Form>
      {result ? <Result result={result} /> : null}
    </Container>
  );
}

export default App;
