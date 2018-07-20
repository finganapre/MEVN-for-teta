<template>
  <v-container tag="section" class="edit">
    <h1>Редактирование новости &laquo;{{ post.title }}&raquo;</h1>
    <form>
      <v-text-field
        label="Заголовок"
        v-model.trim="post.title"
      ></v-text-field>
      <v-text-field
        label="Краткое описание"
        v-model.trim="post.description"
      ></v-text-field>
  
      <v-btn type="submit" color="primary" name="EditPost">Сохранить изменения</v-btn>
      <v-btn color="primary" outline :to="{name:'Posts'}">Перейти к списку новостей</v-btn>
    </form>
    <!-- 
    <form action="">
      <div><input type="text" name="title" id="title" placeholder="Заголовок новости" v-model.trim="post.title"></div>
      <div><input type="text" name="description" id="description" placeholder="Текст новости" v-model.trim="post.description"></div>
      <div><v-btn type="submit" color="primary" name="EditPost">Применить</v-btn></div>
      <div>
        <v-btn color="primary" outline :to="{name:'Posts'}">перейти к списку новостей</v-btn>
      </div>
    </form>
    -->
  </v-container>
</template>

<script>
  import PostsService from '@/services/PostsService'

  export default {
    name: 'EditPost',

    data: () => ({
      
      post: {
        title: '',
        description: ''
      },
    }),

    methods: {
      async getPost () {
        const response = await PostsService.getPost({ id: this.$route.params.id })
        this.post.title = response.data.title
        this.post.description = response.data.description
      },
      async editPost () {
        if (this.post.title !== '' && this.post.description !== '') {
          await PostsService.updatePost({
            id: this.$route.params.id,
            title: this.post.title,
            description: this.post.description
          })
          this.$router.push({ name: 'Posts' })
        }
      }
    },

    computed: {
    },
    mounted () {
      this.getPost()
    }
  }
</script>