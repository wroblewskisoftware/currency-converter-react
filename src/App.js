import { Container } from "./Container/styled";
import Form from "./Form";
import Result from "./Result";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  return (
    <Container>
      <Form setResult={setResult} />
      {result ? <Result result={result} /> : null}
    </Container>
  );
}

export default App;
