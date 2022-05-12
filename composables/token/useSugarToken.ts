import { ref, computed, useContext } from "@nuxtjs/composition-api";
import useCoingecko from "../useCoingecko";
import {ethers, BigNumber} from "ethers"

import LoginPopup from '~/components/modals/LoginPopup.vue'

import SUGARTokenABI from "~/abi/SUGARToken.json"

import walletlink from "walletlink"

const SUGAR_V1_ADDRESS = "0xa16976133d3450f78766ecaa1d743621e237e1a5"
const SUGAR_V1_GENESIS_BLOCK = 10227028

const SUGAR_V2_ADDRESS = "0xcB2aDBCa6f15E9B3F1D98FcE57aC48a093F34fA9"
const SUGAR_V2_GENESIS_BLOCK = 14254159

const SUGAR_ADDRESS = SUGAR_V2_ADDRESS
const SUGAR_GENESIS_BLOCK = SUGAR_V2_GENESIS_BLOCK

const SugarPrice = ref(0);
const sugarSupply = ref(0);
const sugarMarketCap = computed(() => {
  return SugarPrice.value * sugarSupply.value;
});
const useSugarToken = () => {
  const { fetchCoinData } = useCoingecko();

  const fetchSugarData = async () => {
    await fetchSugarMarketData()
    //await fetchSugarChartData()
  };

  const fetchSugarMarketData = async () => {
    const sugarland = await fetchCoinData("sugarland")

    SugarPrice.value = sugarland.current_price.usd.toFixed(10);
    sugarSupply.value = sugarland.total_supply
  } 

  const fetchSugarBalance = async (address) => {
    const balance = await getTokenBalance(address);
    return BigNumber.from(balance)
  }

  const fetchSugarReflections = async (address, totalIO) => {
    const balance = await getTokenBalance(address);
    return BigNumber.from(totalIO).sub(balance)
  }

  return {
    SUGAR_ADDRESS,
    SUGAR_GENESIS_BLOCK,
    SugarPrice,
    sugarMarketCap,
    sugarSupply,
    fetchSugarData,
    fetchSugarBalance,
    fetchSugarReflections
  };
};

export default useSugarToken;


async function getTokenBalance(address) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const ERC20_SUGAR = new ethers.Contract(SUGAR_ADDRESS, SUGARTokenABI, provider)
  const balance = await ERC20_SUGAR.balanceOf(address)
  console.info(balance)

  return balance
}