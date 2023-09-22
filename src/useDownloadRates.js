import { useEffect } from "react";
import axios from "axios";

export const useDownloadRates = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("data.json");
        const dataObject = response.data;
        console.log(dataObject);
      } catch (error) {
        const isError = true;
        console.log(isError);
      }
    })();
  }, []);
};
