import { Container } from "./Container/styled";
import Form from "./Form";
import Result from "./Result";

function App() {
  return (
    <Container>
      <Form></Form>
      {result ? <Result result={result} /> : null}
    </Container>
  );
}

export default App;
