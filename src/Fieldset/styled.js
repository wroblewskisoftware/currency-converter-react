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
