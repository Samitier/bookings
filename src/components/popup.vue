<template>
	<transition name="open">
		<div v-if="isOpen">
			<div class="popup-backdrop fixed-fullscreen"></div>
			<div class="popup fixed-fullscreen">
				<a class="popup-close" @click="close">×</a>
				<h4 v-if="title" class="popup-title text-center">{{ title }}</h4>
				<div class="popup-content">
					<slot/>
				</div>
				<div class="popup-accept-container" v-if="!hideAcceptButton">
					<a class="btn" @click="accept">Acceptar</a>
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

	isOpen: boolean = false

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
	padding 1.5em
	max-width 350px
	max-height: 400px
	bottom auto
	top 5em
	left 2em
	right 2em
	border-radius 2px
	box-shadow 0 0 2px 1px #00000033
.popup-backdrop
	background-color #00000028
	backdrop-filter blur(2px)
	webkit-backdrop-filter blur(2px)
.popup-close
	position absolute
	padding 0 .3em
	right .2em
	top .2em
	font-size 25px
	color color_1
.popup-content
	overflow auto
.popup-title
	text-transform uppercase
	font-size 14px
	color color_1
	margin -.2em 0 1em 0
.popup-accept-container
	position absolute
	left 0
	bottom 0
	right 0
	.btn
		display block
		margin 1.2em
.open-enter-active, .open-leave-active
	transition opacity .5s
	.popup
		transition transform .5s
.open-enter, .open-leave-to
	opacity 0
	.popup
		transform translateY(10%)
</style>
