import { useWeb3 } from '@instadapp/vue-web3'
import {
  onMounted,
  ref,
  watch
} from '@nuxtjs/composition-api'
import { useWallets } from './useWallets'

export function useConnect() {
  const { activate, active, account } = useWeb3()
  const { injected } = useWallets()
  const tried = ref(false)

  onMounted(() => {
    if (!active.value && !tried.value) {
      injected.isAuthorized().then((isAuthorized: boolean) => {
        if (isAuthorized) {
          activate(injected, undefined, true).catch(() => {
            tried.value = true
          })
        } else {
          tried.value = true
        }
      })
    }
  })

  // if the connection worked, wait until we get confirmation of that to flip the flag
  watch([tried, active], () => {
    if (!tried.value && active.value) {
      tried.value = true
    }
  })

  return {
    tried,
  }
}
