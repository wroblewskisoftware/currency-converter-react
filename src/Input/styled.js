import styled from "styled-components";

export const StyledInput = styled.input`
  max-width: 400px;
  width: 100%;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  box-shadow: 5px 5px 18px -3px ${({ theme }) => theme.color.silver};
`;
