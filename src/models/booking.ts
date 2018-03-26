import * as moment from "moment"

export default class Booking {

	constructor(
		public id: string = "",
		public date: moment.Moment = moment(),
		public name: string = "",
		public table: number = 0,
		public phone: string = "",
		public email: string = "",
		public numPeople: number = 0,
		public isDone: boolean = false,
		public isConfirmed: boolean = false
	) {}
}
