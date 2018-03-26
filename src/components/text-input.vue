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

	@Prop() name: string
	isFocus: boolean = false
	@Prop() value: string = ""
	inputValue: string =  this.value || ""
	@Emit() input(value: string) { /* */ }

	get cssClass() {
		return {
			focus: this.isFocus && !this.inputValue.length,
			filled: this.inputValue.length
		}
	}

	setFocus(isFocus: boolean) { this.isFocus = isFocus }
}
</script>

<style lang="stylus" scoped>
@import "../styles/variables"

inactive_color = lighten(color_3, 20%)
focus_color = lighten(color_3, 15%)
filled_color = lighten(color_3, 5%)

input
	border none
	outline none
	background-color transparent
	padding .4em 0 .5em 0
	color color_2
label
	font-weight bold
	color inactive_color
	position absolute
	top 4px
	font-size 14px
	pointer-events: none
	transition: all 0.3s
.form-group
	// margin 1.5em 0 1em 0
	margin .8em 0
	position relative
	&:after
		position absolute
		content ""
		right 0
		left 0
		bottom 0
		height 2px
		background-color inactive_color
		transition all 0.3s
.focus, .filled
	&:after
		height 3px
	label
		transform-origin left center
		transform scale(0.85)
		top -1em
.filled
	&:after
		background-color filled_color
	label
		color filled_color
.focus
	&:after
		background-color focus_color
	label
		color focus_color
</style>
