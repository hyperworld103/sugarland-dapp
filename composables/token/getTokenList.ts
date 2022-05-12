import { ref } from "@nuxtjs/composition-api";
import axios from "axios";
let TokenList = ref({});

const listResults = () => {
  const getTokenList = async () => {
    const list = await axios.get("https://tokens.swipe.org");

    TokenList.value = list.data["tokens"];
  };

  return {
    TokenList,
    getTokenList,
  };
};

export default listResults;
