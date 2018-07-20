<template>
  <v-container tag="section">
    <h2>Новости</h2>
    <v-spacer/>
      
      <!-- <v-subheader class="no-h-pd">Список новостей</v-subheader> -->
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Поиск"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn :to="{ name: 'NewPost' }">Добавить новость</v-btn>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="posts"
          :search="search"
          :loading="loadingPosts"
          class="elevation-1"
          :rows-per-page-text="'Новостей на странице:'"
        >
          <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
          <template slot="items" slot-scope="props">
            <td>{{ props.item.title }}</td>
            <td class="text-xs-left">{{ props.item.description}}</td>
            <td class="text-xs-left">
              <v-btn
                flat
                icon
                :to="{ name: 'EditPost', params: { id: props.item._id } }"
              >
                <v-icon
                  small
                >
                edit
                </v-icon>
              </v-btn>
            </td>
          </template>

          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Поиск по запросу "{{ search }}" не дал результатов.
          </v-alert>

          <template slot="no-data" v-if="!loadingPosts">
            <v-alert :value="true" color="error" icon="warning">
              Новостная база данных пуста
            </v-alert>
          </template>

        </v-data-table>

      </v-card>
  </v-container>
</template>

<script>
  import PostsService from '@/services/PostsService'

  export default {
    name: 'PostsPage',
    data () {
      return {
        loadingPosts: true,
        posts: [],
        postsGet: false,
        restructPosts: [],
        search: '',
        headers: [
          {
            text: 'Заголовок',
            align: 'left',
            sortable: true,
            value: 'title'
          },
          {
            text: 'Описание',
            align: 'left',
            sortable: true,
            value: 'description'
          },
          {
            text: 'Действие',
            align: 'left',
            sortable: false,
            value: 'action'
          }
        ]
      }
    },

    methods: {
      async getPosts () {
        const response = await PostsService.fetchPosts()
        // console.log(response.data.posts)
        this.posts = response.data.posts;
        this.loadingPosts = false;
        
        
       
        // console.log(this.posts.length)
      }
    },

    mounted () {
      this.getPosts()
    }
  }
</script>