import Vue from "vue"

import Popup from "./popup.vue"
import TextInput from "./forms/text-input.vue"
import NumberInput from "./forms/number-input.vue"
import TimeInput from "./forms/time-input.vue"
import Datepicker from "./datepicker.vue"

Vue.component("popup", Popup)
Vue.component("text-input", TextInput)
Vue.component("number-input", NumberInput)
Vue.component("time-input", TimeInput)
Vue.component("datepicker", Datepicker)
