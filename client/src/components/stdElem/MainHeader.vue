<template>
	<header class="MainHeader container-fluid">
		<div class="row">
			<div class="container">
				<div class="row align-items-center">
					<div class="col col-lg-6 col-md-6 col-sm-7 col-6 align-items-center justify-content-start flex-row d-flex">
							<i class="fas fa-bars mainMenuBtn"></i>
							<MainLogo :siteName="siteName" :siteDsc="siteDsc"></MainLogo>
					</div>
					<div class="col col-lg-6 col-md-5 col-sm-4 col-4">
						<MainOptions></MainOptions>
					</div>
				</div>
			</div>
		</div>
		
	</header>
</template>

<script>
	import MainLogo from '@/components/stdElem/MainLogo.vue'
	import MainOptions from '@/components/stdElem/MainOptions.vue'

	export default {
		data(){
			
			return {
				
			}
		},
		props: {
			siteName: String,
			siteDsc: String
		},
		components: {
			MainLogo: MainLogo,
			MainOptions: MainOptions
		}
	}
</script>

<style scoped>
	.MainHeader{
		background-color: #333;
		padding-top: 20px;
		padding-bottom: 20px;
		color: white;
	}
	.mainMenuBtn{
		font-size: 24px;
		margin-right: 15px;
		cursor: pointer;
	}
</style>