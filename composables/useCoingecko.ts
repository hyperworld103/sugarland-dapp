import { ref } from "@nuxtjs/composition-api";
import axios from "axios";

const useCoingecko = () => {
  const fetchCoinData = async (id) => {
    try {
      const coin = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&community_data=false&developer_data=false&sparkline=false`
      );
      return coin.data.market_data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCoinChart = async (id) => {
    try {
      const chart = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365&interval=monthly`
      );
      console.info("chart res", chart.status)
      return chart.data;
    } catch (error) {
      console.error(error);
    }
  };


  return {
    fetchCoinData,
    fetchCoinChart
  };
};

export default useCoingecko;
