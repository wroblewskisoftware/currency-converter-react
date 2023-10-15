import { useEffect, useState } from "react";
import axios from "axios";

export const useDownloadRates = () => {
  const [ratesData, setRatesData] = useState();

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get("data.json");
          setRatesData(response.data);
        } catch (error) {
          setRatesData({ error: true });
        }
      })();
    }, 1000);
  }, []);

  return ratesData;
};
