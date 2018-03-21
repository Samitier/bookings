import Vue from "vue"
import Router from "vue-router"
import Scheduler from "./views/Scheduler.vue"

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			name: "scheduler",
			component: Scheduler,
		},
	],
})
