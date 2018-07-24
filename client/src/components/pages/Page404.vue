<template>
	<v-container :tag="article">
		<v-container pa-0 pb-3><h2 class="display-1">Ошибка 404</h2></v-container>
		<p>К сожалению, данная страница не существует на нашем сайте.<br>Рекомендуем вернуться на <router-link to="/">главную страницу.</router-link></p>
	</v-container>
</template>

<script>
	export default {
		name:'Page404'
	}
</script>

<style>
	
</style>