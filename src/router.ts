import Vue from "vue"
import Router from "vue-router"
import Bookings from "./views/bookings/bookings.vue"

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "bookings",
			component: Bookings,
		},
	],
})
