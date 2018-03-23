<template>
  
	<div>
		<div class="popup-backdrop fixed-fullscreen"></div>
		<div class="popup fixed-fullscreen">
		</div>
	</div>

</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator"
@Component
export default class Popup extends Vue {
	

}

</script>
<style lang="stylus" scoped>

.popup
	background white
	margin auto
	max-width 400px
	height 400px
	left 2em
	right 2em
.popup-backdrop
	background-color #00000022
	backdrop-filter blur(2px)
	webkit-backdrop-filter blur(2px)

</style>
