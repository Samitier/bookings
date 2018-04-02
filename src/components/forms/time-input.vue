<template>
  <div class="form-group" :class="cssClass">
	  	<label>{{ name }}</label>
	  	<input  
			@focus="setFocus(true)" 
			@blur="onBlur"
			@keydown="onRestrictKeys($event)"
			@input="onInputChange($event.target.value)"
			type="text"
			placeholder="hh:mm"
		>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator"
import * as moment from "moment"

@Component
export default class extends Vue {

	isFocus: boolean = false

	@Prop() name: string
	@Prop() value: moment.Moment
	inputValue: string =  ""
	@Emit() input(value: moment.Moment) { /* */ }

	onInputChange(newVal: string) {
		this.inputValue = newVal
	}

	onBlur() {
		let finalDate = moment(this.value)
		let h =  parseInt(this.inputValue.substr(0, 2), 10)
		let m = parseInt(this.inputValue.substr(3), 10)
		h = h > 23 ? 23 : h
		m = m > 59 ? 59 : m
		finalDate = finalDate.set("hour", h)
		finalDate = finalDate.set("minute", m)
		this.input(finalDate)
		this.setFocus(false)
	}

	onRestrictKeys(event: KeyboardEvent) {
		if (event.key === "Backspace" || event.key === "Tab") return
		const isSeparator = this.inputValue.length === 2
		const isTimeCompleted = this.inputValue.length === 5
		if (event.key === ":" && isSeparator) return true
		if (!isNaN(parseInt(event.key, 10)) && !isSeparator && !isTimeCompleted) return true
		event.preventDefault()
	}

	get cssClass() {
		return {
			focus: this.isFocus && !this.inputValue,
			filled: this.inputValue
		}
	}

	setFocus(isFocus: boolean) { this.isFocus = isFocus }
}
</script>
