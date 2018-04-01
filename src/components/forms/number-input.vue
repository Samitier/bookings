<template>
  <div class="form-group" :class="cssClass">
	  	<label>{{ name }}</label>
	  	<input 
			v-model="inputValue" 
			@focus="setFocus(true)" 
			@blur="setFocus(false)"
			@input="input(+$event.target.value)"
			type="number"
		>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator"

@Component
export default class extends Vue {

	isFocus: boolean = false

	@Prop() name: string
	@Prop() value: number
	inputValue: number =  this.value
	@Emit() input(value: number) { /* */ }

	get cssClass() {
		return {
			focus: this.isFocus && !this.inputValue && this.inputValue !== 0,
			filled: this.inputValue || this.inputValue === 0
	  	}
	}

	setFocus(isFocus: boolean) { this.isFocus = isFocus }
}
</script>