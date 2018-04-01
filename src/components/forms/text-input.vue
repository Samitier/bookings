<template>
  <div class="form-group" :class="cssClass">
	  	<label>{{ name }}</label>
	  	<input 
			v-model="inputValue" 
			@focus="setFocus(true)" 
			@blur="setFocus(false)"
			@input="input($event.target.value)"
			type="text"
		>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator"

@Component
export default class extends Vue {

	isFocus: boolean = false
	inputValue: string = this.value

	@Prop() name: string
	@Prop() value: string
	inputValue: string =  this.value || ""
	@Emit() input(value: string) { /* */ }

	get cssClass() {
		return {
			focus: this.isFocus && !this.inputValue,
			filled: this.inputValue
		}
	}

	setFocus(isFocus: boolean) { this.isFocus = isFocus }
}
</script>
