import styled from "styled-components";

export const Fieldset = styled.fieldset`
  border: 2px solid ${({ theme }) => theme.color.black};
  border-radius: 5px;
  padding: 20px;
  margin: 0 5px;
  background-color: ${({ theme }) => theme.color.sand};
`;
