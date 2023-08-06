import styled from "styled-components";

export const StyledResult = styled.p`
  background-color: ${({ theme }) => theme.color.sand};
  border: 2px solid ${({ theme }) => theme.color.black};
  border-radius: 5px;
  padding: 20px;
  margin: 0 5px;
  line-height: 1.5;
`;
