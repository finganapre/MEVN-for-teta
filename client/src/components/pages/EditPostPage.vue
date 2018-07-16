<template>
  <section class="edit">
    <h1>Редактировать новость</h1>
    <form action="editPost()">
      <div><input type="text" name="title" id="title" placeholder="Заголовок новости" v-model.trim="post.title"></div>
      <div><input type="text" name="description" id="description" placeholder="Текст новости" v-model.trim="post.description"></div>
      <div><button type="submit" name="editPost">редактировать новость</button></div>
      <div>
        <router-link :to="{name:'Posts'}">перейти к списку новостей</router-link>
      </div>
    </form>
  </section>
</template>

<script>
  import PostsService from '@/services/PostsService'
  
  export default {
    name: 'EditPost',
    data () {
      return {
        post: {
          title: '',
          description: ''
        }
      }
    },
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
    mounted () {
      this.getPost()
    }
  }
</script>