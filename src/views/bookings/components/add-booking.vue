<template>

	<div class="text-center">
		<a class="btn" @click="openAddForm">
			Nova reserva
		</a>
		<popup 
			ref="popupAdd"
			:title="'Nova reserva'"
			:isOkBtnDisabled="!isBookingValid"
			@accept="onAddBooking"
		>
			<div class="row">
				<div class="col-xs-6">
					<number-input :name="'Taula'" v-model="booking.table"/>
				</div>
				<div class="col-xs-6">
					<time-input	:name="'Hora'" v-model="booking.date"/>
				</div>
				<div class="col-xs-12">
					<text-input :name="'Nom i Cognoms'" v-model="booking.name"/>
				</div>
				<div class="col-xs-12">
					<text-input :name="'Telèfon'" v-model="booking.phone"/>
				</div>
				<div class="col-xs-12">
					<text-input :name="'Email'" v-model="booking.email"/>
				</div>
				<div class="col-xs-12">
					<number-input :name="'Número de persones'" v-model="booking.numPeople"/>
				</div>
			</div>
		</popup>
	</div>
</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator"
import { State, Mutation } from "vuex-class"
import * as moment from "moment"
import Popup from "@/components/popup.vue"
import Booking from "@/models/booking"

@Component
export default class extends Vue {

	booking: Booking = new Booking()
	@State("date") date: moment.Moment
	@Mutation addBooking: (booking: Booking) => void

	get isBookingValid() {
		return this.booking.table && this.booking.name
	}

	openAddForm() {
		(this.$refs.popupAdd as Popup).open()
		this.booking = new Booking()
		this.booking.date = this.date
	}

	onAddBooking() {
		this.addBooking(this.booking)
	}
}

</script>
<style lang="stylus" scoped>

</style>
