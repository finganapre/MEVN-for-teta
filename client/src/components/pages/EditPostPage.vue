<template>
  <v-container tag="section" class="edit">
    <h1>Редактирование новости "{{ post.title }}"</h1>
    <form>
      <v-text-field
        v-model="post.title"
        :error-messages="titleErrors"
        :counter="10"
        label="Заголовок"
        required
        @input="$v.title.$touch()"
        @blur="$v.title.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="post.description"
        :error-messages="descriptionErrors"
        label="Текст новости"
        required
        @input="$v.description.$touch()"
        @blur="$v.description.$touch()"
      ></v-text-field>
  
      <v-btn @click="submit">Сохранить изменения</v-btn>
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
  const { required, maxLength, email } = validators
  const validationMixin = vuelidate.validationMixin
  
  export default {
    name: 'EditPost',
     mixins: [validationMixin],

    validations: {
      title: { required, maxLength: maxLength(25) },
      description: { required }
    },

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
      },
      submit () {
        this.$v.$touch()
      }
    },

    computed: {
      titleErrors () {
        const errors = []
        if (!this.$v.title.$dirty) return errors
        !this.$v.title.maxLength && errors.push('Максимальная длинна заголовка 25 символов')
        !this.$v.title.required && errors.push('Придумайте заголовок')
        return errors
      },
      descriptionErrors () {
        const errors = []
        if (!this.$v.description.$dirty) return errors
        !this.$v.description.required && errors.push('Придумайте краткое описание новости')
        return errors
      }
    },
    mounted () {
      this.getPost()
    }
  }
</script>