import { computed, ref } from "@nuxtjs/composition-api";

export const collapsed = ref(false);
export const closed = ref(false);
export const toggleSidebar = () => (collapsed.value = !collapsed.value);

export const SIDEBAR_WIDTH = 320;
export const SIDEBAR_COLLAPSED = 0;
export const SIDEBAR_CLOSED = 0;

export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_COLLAPSED : SIDEBAR_WIDTH}px`
);
export const sidebarClose = computed(
  () => `${collapsed.value ? SIDEBAR_CLOSED : SIDEBAR_WIDTH}px`
);
