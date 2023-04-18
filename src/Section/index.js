import "./style.css";

const Section = ({ label, field }) => (
  <p>
    <label>
      <span className="form__labelText">{label}</span>
      {field}
    </label>
  </p>
);

export default Section;
