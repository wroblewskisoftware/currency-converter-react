import "./style.css";
import { useEffect, useState } from "react";

const DateField = () => {
  const [date, setDate] = useState(new Date());

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
      {"Dzisiaj jest "}
      {date.toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
      , {date.toLocaleTimeString(undefined)}
    </p>
  );
};

export default DateField;
