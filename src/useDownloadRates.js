import { useEffect, useState } from "react";
import axios from "axios";

export const useDownloadRates = () => {
  const [ratesData, setRatesData] = useState();

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get("data.json");
          const saveData = () => setRatesData(response.data);
          saveData();
        } catch (error) {
          const saveError = () => setRatesData({ error: true });
          saveError();
        }
      })();
    }, 1000);
  }, []);

  return ratesData;
};
