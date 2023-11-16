import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 25px;
  margin: 5px;
  border: 2px solid ${({ theme }) => theme.color.black};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  font-weight: bold;
  flex-basis: 127px;
  flex-grow: 1;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme.color.navyBlue};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.darkNavyBlue};
  }
`;
