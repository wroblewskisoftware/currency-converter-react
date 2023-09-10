import { useEffect } from "react";
import axios from "axios";

export const useDownloadRates = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("../data.json");
        console.log(response.data);
      } catch (error) {
        console.error("Coś poszło nie tak, sprawdź połączenie z internetem.");
      }
    })();
  }, []);
};
