<template>

	<div class="text-center">
		<a class="btn" @click="openAddForm">
			Nova reserva
		</a>
		<popup ref="popupAdd" :title="'Nova reserva'" @accept="onAddBooking">
			<div class="row">
				<!-- <div class="col-xs-6">
					<text-input :name="'Taula'" v-model="booking.table"/>
				</div> -->
				<!-- <div class="col-xs-6">
					<text-input	:name="'Hora'" />
				</div> -->
				<div class="col-xs-12">
					<text-input :name="'Nom i Cognoms'" v-model="booking.name"/>
				</div>
				<div class="col-xs-12">
					<text-input :name="'Telèfon'" v-model="booking.phone"/>
				</div>
				<div class="col-xs-12">
					<text-input :name="'Email'" v-model="booking.email"/>
				</div>
				<!-- <div class="col-xs-12">
					<text-input :name="'Número de persones'" v-model="booking.numPeople"/>
				</div> -->
			</div>
		</popup>
	</div>
</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator"
import { Getter, Mutation } from "vuex-class"
import Popup from "@/components/popup.vue"
import Booking from "@/models/booking"

@Component
export default class extends Vue {

	booking: Booking = new Booking()
	@Mutation addBooking: (booking: Booking) => void

	openAddForm() {
		(this.$refs.popupAdd as Popup).open()
		this.booking = new Booking()
	}

	onAddBooking() {
		this.addBooking(this.booking)
	}
}

</script>
<style lang="stylus" scoped>

</style>
