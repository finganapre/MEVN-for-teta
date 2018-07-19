<template>
	<v-container :tag="article">
		<h2>Ошибка 404</h2>
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