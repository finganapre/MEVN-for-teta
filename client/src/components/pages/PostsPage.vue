<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h2>Новости</h2>
        <h3>Все новости</h3>
        <section class="panel panel-success" v-if="posts.length">
          <div class="panel-heading">Список новостей</div>
          <table class="table table-striped">
            <tr>
              <th>Заголовок</th>
              <th>Описание</th>
              <th>Действие</th>
            </tr>
            <tr v-for="(post, index) in posts" :key="post.title" >
              <td>{{ post.title }}</td>
              <td>{{ post.description }}</td>
              <td><router-link :to="{ name: 'EditPost', params: { id: post._id } } ">Редактировать</router-link></td>
            </tr>
          </table>
        </section>
        <section class="panel panel-danger" v-if="!(posts.length)">
          <p>Новостей пока нет ... Время добавить их!</p>
          <div>
            <router-link :to="{ name: 'NewPost' }">Добавить новость</router-link>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import PostsService from '@/services/PostsService'


  export default {
    name: 'PostsPage',
    data () {
      return {
        posts: []
      }
    },

    methods: {
      async getPosts () {
        const response = await PostsService.fetchPosts()
        // console.log(response.data.posts)
        this.posts = response.data.posts
        // console.log(this.posts.length)
      }
    },

    mounted () {
      this.getPosts()
    }
  }
</script>