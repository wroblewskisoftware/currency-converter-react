import "./style.css";
import { useCurrentDate } from "../useCurrentDate";

const DateField = () => {
  const [day, time] = useCurrentDate();

  return (
    <p className="dateField">
      Dzisiaj jest {day}, {time}
    </p>
  );
};

export default DateField;
