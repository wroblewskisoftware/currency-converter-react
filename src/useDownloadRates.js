import { useEffect, useState } from "react";
import axios from "axios";

export const useDownloadRates = () => {
  const [ratesData, setRatesData] = useState();
  const api =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_4qw0WYNKjAF1Gd66sEvBhzcKSBKclgInv66XokCL&currencies=EUR%2CUSD%2CGBP%2CCHF&base_currency=PLN";

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get(api);
          setRatesData({ ...response.data, success: true });
        } catch (error) {
          setRatesData({ error: true });
        }
      })();
    }, 1000);
  }, []);

  return ratesData;
};
