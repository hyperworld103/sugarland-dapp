declare module "*.svg?inline" {
  const content: any;
  export default content;
}

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
