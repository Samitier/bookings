<template>

	<div class="scheduler">
		<calendar/>
		<bookingList />
	</div>

</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator"
import calendar from "./components/calendar.vue"
import bookingList from "./components/booking-list.vue"

@Component({
	components: {
		calendar,
		bookingList,
	},
})
export default class Scheduler extends Vue {
}

</script>
<style lang="stylus" scoped>

.scheduler
	max-width 600px
	margin auto
	
</style>
