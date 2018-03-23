<template>
  <div>
	    <input type="hidden" ref="datepicker">
		<div class="datepicker-container" ref="datepickerContainer"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator"
import * as moment from "moment"
import { Getter } from "vuex-class/lib/bindings"
// tslint:disable-next-line:no-var-requires
const Pikaday = require("pikaday")

@Component
export default class extends Vue {

	@Getter date: Date
	// tslint:disable-next-line:no-empty
	@Emit() dateSelected(date: moment.Moment) {}

	mounted() {
		// For more options: https://github.com/dbushell/Pikaday#configuration
		// tslint:disable-next-line:no-unused-expression
		new Pikaday({
			field: this.$refs.datepicker,
			container: this.$refs.datepickerContainer,
			format: "D/M/YYYY",
			bound: false,
			firstDay: 1,
			onSelect: (dateSelected: Date) => this.dateSelected(moment(dateSelected)),
			defaultDate: this.date,
			setDefaultDate: true,
			i18n: {
				previousMonth : "Mes anterior",
				nextMonth     : "Mes següent",
				months        : [
					"Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost",
					"Setembre", "Octubre", "Novembre", "Desembre"
				],
				weekdays      : [
					"Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"
				],
				weekdaysShort : ["Dg", "Dl", "Dm", "Dc", "Dj", "Dv", "Ds"],
			}
		})
	}
}
</script>

<style lang="stylus" scoped>

</style>