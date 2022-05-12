import { computed, ref } from '@nuxtjs/composition-api';

const modal = ref(null);
const props = ref({});

export function useModal(selectedModal) {
  function showMintingModal() {
    modal.value = selectedModal;
  }

  function close() {
    // @ts-ignore
    if (props.value?.persistent) return;
    modal.value = null;
    props.value = null;
  }

  function closePersistent() {
    modal.value = null;
    props.value = null;
  }

  const isShown = computed(() => Boolean(modal.value));

  function showComponent(component, componentProps = {}) {
    modal.value = component;
    props.value = componentProps;
  }

  return {
    showMintingModal,
    close,
    closePersistent,
    isShown,
    modal: computed(() => modal.value),
    props: computed(() => props.value),
    showComponent
  };
}