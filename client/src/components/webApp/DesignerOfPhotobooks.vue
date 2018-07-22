<template>
  <div>
  <v-container tag="section">
    <h2>Конструктор фотокниг</h2>
    <v-alert
    	:value="true"
      color="warning"
      icon="priority_high"
      outline
    >
    Сервис в разработке
    </v-alert>
  </v-container>

  <v-container tag="section" class="text-xs-center">  
    <v-layout justify-center>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <h3 class="text-xs-left">{{ photoBooks[0].bookTitle }}</h3>
            <v-pagination
              v-model="photoBooks[0].currentSpread"
              :length="photoBooks[0].spreads.length"
            >
            </v-pagination>
          </v-card-text>
        </v-card>
      </v-flex> 
    </v-layout>
  </v-container>

  <v-container tag="section" class="text-xs-center">  
    <v-layout justify-center>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <h3 class="text-xs-left">{{ photoBooks[1].bookTitle }}</h3>
            <v-pagination
              v-model="photoBooks[1].currentSpread"
              :length="photoBooks[1].spreads.length"
            >
            </v-pagination>
          </v-card-text>
        </v-card>
      </v-flex> 
    </v-layout>
  </v-container>

  </div>
  		
</template>

<script>
export default {
  name: 'DesignerOfPhotobooks',
  data () {
    return {
      photoBooks: [
        {
          bookTitle: 'Название книги 1',
          currentSpread: 15,
          spreads: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        },
        {
          bookTitle: 'Название книги 2',
          currentSpread: 1,
          spreads: [1, 2, 3, 4, 5]
        }
      ]
    }
  }
}
</script>


<style>

</style>