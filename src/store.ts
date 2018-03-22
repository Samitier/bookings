import Vue from "vue"
import Vuex from "vuex"
import * as moment from "moment"
import "moment/locale/es"
import Booking from "@/models/booking"
moment.locale("es")

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		date: moment(),
		bookings: [
			new Booking("1", moment(), "John Smith", 1, "+34 654 324 341"),
			new Booking("2", moment(), "Alf Foo", 2, "+34 654 324 341"),
			new Booking("3", moment(), "Hello World", 3, "+34 654 324 341"),
		],
	},
	mutations: {
		gotoNextDay: state => state.date = moment(state.date.add(1, "days")),
		gotoPastDay: state => state.date = moment(state.date.subtract(1, "days")),
	},
	actions: {

	},
	getters: {
		day: state => state.date.format("DD"),
		month: state => state.date.format("MMMM"),
		year: state => state.date.format("YYYY"),

		dayBookings: state => state.bookings.filter(r => r.date.isSame(state.date, "day")),
	},
})
