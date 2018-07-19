<template>
  <v-container tag="section">
    <h2>Новости</h2>
    <v-spacer/>
    <section class="panel panel-success" v-if="posts.length">
      
      <!-- <v-subheader class="no-h-pd">Список новостей</v-subheader> -->
      <v-data-table
        :headers="headers"
        :items="posts"
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
      </v-data-table>
    </section>
    <section class="panel panel-danger" v-if="!(posts.length)">
      <p>Новостей пока нет ... Время добавить их!</p>
      <div>
        <router-link :to="{ name: 'NewPost' }">Добавить новость</router-link>
      </div>
    </section>
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
    },

    /*restructingPosts () {
      for (let i in this.posts){
        console.log(this.posts[i].title);
        //this.restructPosts.push({})
      }
    }*/

    /*created () {
      this.restructPosts()
    }*/
  }
</script>