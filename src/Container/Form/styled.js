import styled from "styled-components";

export const Fieldset = styled.fieldset`
  min-height: 284px;
  border: 2px solid ${({ theme }) => theme.color.black};
  border-radius: 5px;
  padding: 20px;
  margin: 0 5px;
  background-color: ${({ theme }) => theme.color.sand};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    min-height: 382px;
  }
`;

export const Legend = styled.legend`
  padding: 10px 25px;
  border: 2px solid ${({ theme }) => theme.color.black};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  font-weight: bold;
`;

export const Information = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const Buttons = styled.p`
  display: flex;
  flex-wrap: wrap;
`;

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
