import styled from "styled-components";

export const StyledLegend = styled.legend`
  padding: 10px 25px;
  border: 2px solid ${({ theme }) => theme.color.black};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  font-weight: bold;
`;
