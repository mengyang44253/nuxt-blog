import Vue from "vue";
import dayjs from "dayjs";
import * as filters from "@/utils/filters";
import globalMixin from "@/mixin/global";

export default ({ app }) => {
  Vue.prototype.$dayjs = dayjs
  Object.keys(filters).forEach(key => {
    Vue.filter(key,filters[key])
  })
  Vue.mixin(globalMixin)
};
