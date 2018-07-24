<template>
	<div>
		<v-container>
			<v-container fluid pa-0 pb-3>
				<h2 class="display-2">Менеджер событий</h2>
			</v-container>
			<v-alert
		    :value="true"
		      color="warning"
		      icon="priority_high"
		      outline
		    >
		    Сервис в разработке
		    </v-alert>
	    </v-container>
		
		<v-container>
			<v-layout>
		    <v-flex xs8>
		    	<v-container
		    		fluid
		    		pa-0
		    		mb-4
					v-for="(event) in events"
					:key="event.id"
		    		>
  		      <v-card>	
  						<v-card-text>
  							<h3 class="display-1">{{ event.nameEvent }}</h3>
  							<p>{{ event.description }}</p>
  							<p>{{ event.content }}</p>
  						</v-card-text>
  					</v-card>
		    	</v-container>
		      
				</v-flex>

				<v-spacer/>

				<v-flex xs3>
					<v-date-picker
						:first-day-of-week="1"
						v-model="picker"
						locale="ru"
					></v-date-picker>
				</v-flex>
			</v-layout>
			
		</v-container>
	</div>
</template>

<script>
	export default {
		name: 'EventsManager',
		data () {
			return {
				picker: null,
				events: [
					{
						id: 1,
						nameEvent: 'Событие 1',
						importance: 'Важное',
						status: 'Планируется',
						date: 'Дата события',
						type: 'Тип события',
						content: 'Контент события 1',
						description: 'Описание события 1'
					},
					{
						id: 2,
						nameEvent: 'Событие 2',
						importance: 'Важное',
						status: 'Планируется',
						date: 'Дата события',
						type: 'Тип события',
						content: 'Контент события 2',
						description: 'Описание события 2'
					},
					{
						id: 3,
						nameEvent: 'Событие 3',
						importance: 'Важное',
						status: 'Планируется',
						date: 'Дата события',
						type: 'Тип события',
						content: 'Контент события 3',
						description: 'Описание события 3'
					},
					{
						id: 4,
						nameEvent: 'Событие 4',
						importance: 'Важное',
						status: 'Планируется',
						date: 'Дата события',
						type: 'Тип события',
						content: 'Контент события 4',
						description: 'Описание события 4'
					}
				]
			}
		}
	}
</script>

<style>
	
</style>
