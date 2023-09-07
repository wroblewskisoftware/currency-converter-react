import { useEffect } from "react";

export const useDownloadRates = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("./data.json");
        console.log(response.data);
      } catch (error) {
        console.error("Coś poszło nie tak, sprawdź połączenie z internetem.");
      }
    })();
  }, []);
};
