import { StyledSection } from "./styled";

const Section = ({ label, field }) => (
  <p>
    <label>
      <StyledSection>{label}</StyledSection>
      {field}
    </label>
  </p>
);

export default Section;
