// mainMenu
import Start from '@/components/pages/StartPage'
import Posts from '@/components/pages/PostsPage'
import Contacts from '@/components/pages/Contacts'
import About from '@/components/pages/About'

import NewPost from '@/components/pages/NewPostPage'
import EditPost from '@/components/pages/EditPostPage'

// webApp
import DesignerOfPhotobooks from '@/components/webApp/DesignerOfPhotobooks'
import BaguetteDesigner from '@/components/webApp/BaguetteDesigner'

import Page404 from '@/components/pages/Page404'

const routes = [
  // mainMenu
  
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/new',
    name: 'NewPost',
    component: NewPost
  },
  {
    path: '/posts/:id',
    name: 'EditPost',
    component: EditPost
  },

  // webApp
  {
    path: '/designer-of-photobooks',
    name: 'DesignerOfPhotobooks',
    component: DesignerOfPhotobooks
  },
  {
    path: '/baguette-designer',
    name: 'BaguetteDesigner',
    component: BaguetteDesigner
  },

  // внешние ссылки
  {
    path: '/tetadesign',
    beforeEnter(to, from, next) {
            window.location = "http://www.tetadesign.ru/";
    }
  },
  {
    path: '/superclass',
    beforeEnter(to, from, next) {
            window.location = "http://fotostoriya.ru/";
    }
  },
  {
    path: '*',
    name: 'Page404',
    component: Page404
  }
]

export default routes