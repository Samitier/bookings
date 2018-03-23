<template>

	<div class="scheduler">
		<Calendar/>
		<BookingList />
		<AddBooking />
	</div>

</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator"
import Calendar from "./components/calendar.vue"
import BookingList from "./components/booking-list.vue"
import AddBooking from "./components/add-booking.vue"

@Component({
	components: { Calendar, BookingList, AddBooking },
})
export default class extends Vue {
}

</script>
<style lang="stylus" scoped>

.scheduler
	max-width 600px
	margin auto
	
</style>
