<template>

	<div class="text-center">
		<a class="btn">
			Nueva reserva
		</a>
		<!-- <popup /> -->
	</div>
</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator"
import { Getter, Mutation } from "vuex-class"
import popup from "@/components/popup.vue"

@Component({
	components: {
		popup
	}
})
export default class AddBooking extends Vue {
}

</script>
<style lang="stylus" scoped>

</style>
