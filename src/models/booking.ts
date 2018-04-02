import * as moment from "moment"

export default class Booking {

	constructor(
		public id: string = "",
		public date: moment.Moment = moment(),
		public name: string = "",
		public table: number = null,
		public phone: string = "",
		public email: string = "",
		public numPeople: number = null,
		public isDone: boolean = false,
		public isConfirmed: boolean = false
	) {}

	get time() {
		return this.date.format("kk:mm")
	}
}
