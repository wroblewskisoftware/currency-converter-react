import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 25px;
  margin: 5px;
  border: 2px solid rgb(35, 35, 35);
  border-radius: 5px;
  background-color: hsl(238, 100%, 60%);
  color: #ffffff;
  font-weight: bold;
  flex-basis: 127px;
  flex-grow: 1;
  flex-shrink: 0;

  &:hover {
    background-color: hsl(238, 100%, 30%);
  }

  &:active {
    background-color: hsl(238, 100%, 15%);
  }
`;
