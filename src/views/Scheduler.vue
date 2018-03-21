<template>

	<div class="scheduler row text-center middle-xs">
		<div class="col-xs-2 arrow" @click="gotoLastDay">
			&lsaquo;
		</div>
		<div class="col-xs-8">
			<h1 class="day">{{ day }}</h1>
			<h2 class="month">{{ month }}</h2>
		</div>
		<div class="col-xs-2 arrow" @click="gotoNextDay">
			&rsaquo;
		</div>
	</div>

</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator"
import * as moment from "moment"

@Component
export default class Scheduler extends Vue {

	date = moment()

	get month() {
		return this.date.format("MMMM")
	}

	get day() {
		return this.date.format("DD")
	}

	gotoNextDay() {
		this.date = moment(this.date.add(1, "days"))
	}

	gotoLastDay() {
		this.date = moment(this.date.subtract(1, "days"))
	}
}

</script>
<style lang="stylus" scoped>

date_color = #46494C
month_color = #4C5C68

.scheduler
	max-width 700px
	margin 1.5em auto
.day, .month
	line-height 1
.day
	font-size 130px
	color date_color
.month
	text-transform uppercase
	font-size 40px
	color month_color
.arrow
	font-size 70px
	color month_color
</style>
