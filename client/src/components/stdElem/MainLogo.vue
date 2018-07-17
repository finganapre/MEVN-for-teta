<template>
	<div class="MainLogo">
		<h1 class="MainLogo__title">{{ siteName }}</h1>
		<span class="MainLogo__desc">{{ siteDsc }}</span>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},

		props: {
			siteName: String,
			siteDsc: String
		}
	}
</script>

<style scoped>
	.MainLogo{
		white-space: nowrap;
   		overflow: hidden;
		text-overflow: ellipsis;
	}
	.MainLogo__title{
		display: inline;
		margin: 0;
		line-height: 0.7
	}
	.MainLogo__desc{
	}
</style>