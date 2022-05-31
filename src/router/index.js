import Vue from 'vue'
import VueRouter from 'vue-router'

import PasswordReset from '../views/PasswordReset.vue'
import Dashbord from '../views/Dashbord.vue'
import Chat from '../views/Chat.vue'
import Products from '../views/Products.vue'
import UserProfile from '../views/UserProfile.vue'
import MyFavourite from '../views/MyFavourite.vue'
import Seeting from '../views/Seeting.vue'
import Product from '../views/Product.vue'
import Update from '../views/Update.vue'
import Upload from '../views/Upload.vue'
import Disabled from '../views/Disabled.vue'
import Demo from '../views/Demo.vue'
import Job from '../views/Job.vue'
import JobDetails from '../views/JobDetails.vue'
import SingleJob from '../views/SingleJob.vue'










Vue.use(VueRouter)

const routes = [
  {
    path: '/reset',
    name: 'PasswordReset',
    component: PasswordReset
  },
  {
    path: '/',
    name: 'Dashbord',
    component: Dashbord

  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo

  },
  {
    path: '/job',
    name: 'JobDetails',
    component: JobDetails

  },
  {
    path: '/jobs',
    name: 'Job',
    component: Job

  },
  {
    path: '/products/:id',
    name: 'Products',
    component: Products,
    props: true

  },
  {
    path: '/chat/:id',
    name: 'Chat',
    component: Chat,
    props: true
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/favourite',
    name: 'MyFavourite',
    component: MyFavourite
  },
  {
    path: '/disabled',
    name: 'Disabled',
    component: Disabled
  },

  {
    path: '/setting',
    name: 'Seeting',
    component: Seeting
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/job/details',
    name: 'SingleJob',
    component: SingleJob
  },
  {
    path: '/update',
    name: 'Update',
    component: Update
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
