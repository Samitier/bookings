<template>

	<div class="booking-list">
		<div class="row headers" v-if="dayBookings.length">
			<div class="col-xs-1">
				<h4>#</h4>
			</div>
			<div class="col-xs-3 text-center">
				<h4>Hora</h4>
			</div>
			<div class="col-xs-5">
				<h4>Nom</h4>
			</div>
		</div>
		<div
			class="row booking"
			v-for="booking in dayBookings"
			:key="booking.id"
		>
			<div class="col-xs-1">
				{{ booking.table }}
			</div>
			<div class="col-xs-3 text-center">
				{{ booking.time }}
			</div>
			<div class="col-xs-5">
				{{ booking.name }}
			</div>
		</div>
		<div class="text-center booking" v-if="!dayBookings.length">
			<i>(Encara no hi ha reserves per aquest dia)</i>
		</div>
	</div>
  
</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator"
import { Getter } from "vuex-class"
import Booking from "@/models/booking"

@Component
export default class extends Vue {

	@Getter dayBookings: Booking[]
}

</script>
<style lang="stylus" scoped>
@import "../../../styles/variables" 

.booking-list
	background-color color_4
	border 1px solid darken(color_4, 50%)
	padding 1em 1.5em
	margin 1.5em 1em 1.5em 1em
	border-radius 2px
.headers
	color color_2
	padding-bottom .4em
.booking
	color color_3
	font-weight bold
	padding .2em 0

</style>
