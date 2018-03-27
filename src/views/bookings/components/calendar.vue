<template>

	<div class="calendar row text-center middle-xs">
		<div 
			class="col-xs-2 arrow noselect" 
			@click="gotoPastDay"
		>
			&lsaquo;
		</div>
		<div class="col-xs-8" @click="openDatepicker">
			<h1 class="day">{{ day }}</h1>
			<h2 class="month">{{ month }}</h2>
			<h3 class="year">{{ year }}</h3>
		</div>
		<div 
			class="col-xs-2 arrow noselect" 
			@click="gotoNextDay"
		>
			&rsaquo;
		</div>
		<popup 
			ref="datepickerPopup" 
			:hideAcceptButton="true"
		>
			<datepicker @date-selected="onDateSelected"/>
		</popup>
	</div>
</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator"
import { Getter, Mutation } from "vuex-class"
import * as moment from "moment"
import Popup from "@/components/popup.vue"

@Component
export default class extends Vue {

	@Getter day: string
	@Getter month: string
	@Getter year: string
	@Mutation gotoNextDay: () => any
	@Mutation gotoPastDay: () => any
	@Mutation setDate: (date: moment.Moment) => any

	openDatepicker() {
		(this.$refs.datepickerPopup as Popup).open()
	}

	onDateSelected(date: moment.Moment) {
		try {
			this.setDate(date)
		} catch (e) {
			// For some weird reason this gets a typeError exception, but works like a charm.
			// Probably a vuex-class bug.
		}
		(this.$refs.datepickerPopup as Popup).close()
	}
}

</script>
<style lang="stylus" scoped>
@import "../../../styles/variables"  

.calendar
	margin .4em 0
.day, .month, .year
	line-height 1
.day
	font-size 126px
	color color_1
.month
	text-transform uppercase
	font-size 39px
	color color_2
.year
	margin-top .2em
	font-size 32px
	color color_3
.arrow
	font-size 68px
	color color_2
	cursor pointer

</style>
