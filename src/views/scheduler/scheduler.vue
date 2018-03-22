<template>

	<calendar/>

</template>
<script lang="ts">

import { Component, Vue } from "vue-property-decorator"
import calendar from "./components/calendar.vue"

@Component({
	components: {
		calendar,
	},
})
export default class Scheduler extends Vue {
}

</script>
<style lang="stylus" scoped>
</style>
