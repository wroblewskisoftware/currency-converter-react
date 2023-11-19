import { StyledDateField } from "./styled";
import { useCurrentDate } from "../../../useCurrentDate";

const DateField = () => {
  const { day, time } = useCurrentDate();

  return (
    <StyledDateField>
      Dzisiaj jest {day}, {time}
    </StyledDateField>
  );
};

export default DateField;
