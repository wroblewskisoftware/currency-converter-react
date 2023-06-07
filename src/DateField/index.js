import "./style.css";
import { useEffect, useState } from "react";

const DateField = () => {
  const [date, setDate] = useState(new Date());

  const day = date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = date.toLocaleTimeString(undefined);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="dateField">
      Dzisiaj jest {day}, {time}
    </p>
  );
};

export default DateField;
