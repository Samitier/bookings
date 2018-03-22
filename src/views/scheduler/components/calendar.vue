<template>

	<div class="calendar row text-center middle-xs">
		<div 
			class="col-xs-2 arrow noselect" 
			@click="gotoLastDay"
		>
			&lsaquo;
		</div>
		<div class="col-xs-8">
			<h1 class="day">{{ day }}</h1>
			<h2 class="month">{{ month }}</h2>
			<h2 class="year">{{ year }}</h2>
		</div>
		<div 
			class="col-xs-2 arrow noselect" 
			@click="gotoNextDay"
		>
			&rsaquo;
		</div>
	</div>

</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator"
import * as moment from "moment"

@Component
export default class Calendar extends Vue {

	date = moment()

	get year() {
		return this.date.format("YYYY")
	}

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
year_color = #0B7A75

.calendar
	max-width 700px
	margin .7em auto
.day, .month, .year
	line-height 1
.day
	font-size 130px
	color date_color
.month
	text-transform uppercase
	font-size 40px
	color month_color
.year
	margin-top .2em
	font-size 33px
	color year_color
.arrow
	font-size 70px
	color month_color
	cursor pointer
</style>
