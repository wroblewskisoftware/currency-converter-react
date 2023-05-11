import "./style.css";

const Section = ({ label, field }) => (
  <p>
    <label>
      <span className="section">{label}</span>
      {field}
    </label>
  </p>
);

export default Section;
