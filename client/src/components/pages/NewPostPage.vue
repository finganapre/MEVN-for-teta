<template>
  <v-container>
        <v-container pa-0 pb-3><h2 class="display-1">Добавление новости</h2></v-container>
        <form action="" @submit.prevent='addPost'>
          <v-text-field
            v-model.trim="post.title"
            label="Заголовок новости"
          ></v-text-field>

          <v-text-field
            v-model.trim="post.description"
            label="Описание новости"
          ></v-text-field>

          <v-textarea
            label="Текст новости"
          >
          </v-textarea>

          <v-btn
            @click="addPost">Добавить новость</v-btn>
          <v-btn @click="goBack()">Все новости</v-btn>
        </form>
  </v-container>    
</template>

<script>
  import PostsService from '@/services/PostsService'
  export default {
    name: 'NewPost',
    data () {
      return {
        post: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      async addPost () {
        if (this.post.title !== '' && this.post.description !== '') {
          await PostsService.addNewPost({
            title: this.post.title,
            description: this.post.description
          })
          this.$router.push({ name: 'Posts' })
        } else {
          alert('Empty fields!')
        }
      },
      goBack () {
        this.$router.push({ name: 'Posts' })
      }
    }
  }
</script>