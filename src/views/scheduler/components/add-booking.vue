<template>

	<div class="text-center">
		<a class="btn" @click="openAddForm">
			Nova reserva
		</a>
		<popup ref="popupAdd" :title="'Nova reserva'">
			(popup content form)
		</popup>
	</div>
</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator"
import { Getter, Mutation } from "vuex-class"
import Popup from "@/components/popup.vue"

@Component({
	components: { Popup }
})
export default class extends Vue {

	openAddForm() {
		(this.$refs.popupAdd as Popup).open()
	}
}

</script>
<style lang="stylus" scoped>

</style>
