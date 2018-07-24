<template>
	<v-container fluid pa-0 pb-3>
		<h2 :tag="titleTag" :class="titleClass">{{ titleText }}</h2>
	</v-container>
</template>

<script>
	export default {
		props: {
			titleText: String,
			titleTag: String,
			titleClass: String
		},

		data(){
			return{

			}
		}
	}
</script>

<style scoped>

</style>