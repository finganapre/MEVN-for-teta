<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Добавить новость</h1>
        <form action="" @submit.prevent='addPost'>
          <div class="form-group">
            <input type="text" class="form-control" name="title" id="title" placeholder="Заголовок новости" v-model.trim="post.title">
          </div>
          <div class="form-group">
            <textarea class="form-control" type="text" rows="5" name="description" id="description" placeholder="Текст новости" v-model.trim="post.description"></textarea>
          </div>
          <div class="form-group">
            <button class="btn btn-block btn-primary" type="submit" name="addPost" id="addPost">добавить новость</button>
          </div>
          <section>
            <button class="btn btn-success btn-block" type="button" @click="goBack()">перейти к новостям</button>
          </section>
        </form>
      </div>
    </div>
  </div>
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