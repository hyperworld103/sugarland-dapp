import { InjectedConnector } from "@web3-react/injected-connector";

import METAMASK_ICON_URL from '~/assets/icons/metamask.svg?inline'

export function useWallets() {
  const injected = new InjectedConnector({
    supportedChainIds: [56],
  });

  const wallets = {
    METAMASK: {
      connector: injected,
      name: "MetaMask",
      iconURL: METAMASK_ICON_URL,
    }
  };

  return {
    injected,
    wallets
  };
}
