<template>
	<transition name="open">
		<div v-if="isOpen">
			<div class="popup-backdrop fixed-fullscreen"></div>
			<div class="popup fixed-fullscreen">
				<a class="popup-close" @click="close">×</a>
				<h4 v-if="title" class="popup-title text-center">{{ title }}</h4>
				<div class="popup-content text-left">
					<slot/>
				</div>
				<div 
					class="popup-accept-container" 
					v-if="!hideAcceptButton"
				>
					<a 
						class="btn" 
						@click="accept"
						:class="okBtnClass"
					>Acceptar</a>
				</div>
			</div>
		</div>
	</transition>
</template>
<script lang="ts">

import { Component, Vue, Emit, Prop } from "vue-property-decorator"
@Component
export default class extends Vue {

	@Prop() title: string
	@Prop() hideAcceptButton: boolean
	@Prop() isOkBtnDisabled: boolean

	isOpen: boolean = false

	get okBtnClass() { return { disabled: this.isOkBtnDisabled }}

	open() {
		this.isOpen = true
	}

	close() {
		this.isOpen = false
	}

	@Emit()
	cancel() {
		this.close()
	}

	@Emit()
	accept() {
		this.close()
	}
}

</script>
<style lang="stylus" scoped>
@import "../styles/variables"

.popup
	background white
	margin auto
	max-width 350px
	max-height: 400px
	bottom auto
	padding 1em .5em
	top 5em
	left 2em
	right 2em
	border-radius 2px
	box-shadow 0 0 2px 1px #00000033
	display flex
	flex-direction column
.popup-backdrop
	background-color #00000028
.popup-close
	position absolute
	padding .2em .5em
	right 0
	top 0
	font-size 25px
	color color_1
.popup-content
	overflow-x hidden
	overflow-y auto
	padding 0 1em
.popup-title
	text-transform uppercase
	font-size 14px
	color color_1
	margin .5em 0 1em 0
.popup-accept-container .btn
	display block
	margin .5em 1em
.open-enter-active, .open-leave-active
	transition opacity .5s
	.popup
		transition transform .5s
.open-enter, .open-leave-to
	opacity 0
	pointer-events none
	.popup
		transform translateY(10%)
</style>
