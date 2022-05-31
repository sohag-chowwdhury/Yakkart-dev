import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import { store } from './store'
import CountryFlag from 'vue-country-flag'

//3rd party library 
import L from 'leaflet';
import vSelect from "vue-select";
import moment from 'moment';
import VueChatScroll from 'vue-chat-scroll'
import imageZoom from 'vue-image-zoomer';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

//global Component
import SignUp from './components/Auth/SignUp.vue'
import LogIn from './components/Auth/LogIn.vue'
import AuthItem from './components/Auth/AuthItem.vue'

import PasswordReset from './components/Auth/PasswordReset.vue'
import Navbar from './components/Navbar/Navbar.vue'
import Category from './components/Dashbord/Category.vue'
import Report from './components/Dashbord/Report.vue'

import CountryList from './components/Dashbord/CountryList.vue'
import Footer from './components/Dashbord/Footer.vue'

import ProfileSummery from './components/Profile/ProfileSummery.vue'
import ChatList from './components/Profile/ChatList.vue'
import ProductRecent from './components/Products/ProductRecent.vue'
import ProductsHome from './components/Products/ProductsHome.vue'
import ProductLatest from './components/Products/ProductLatest.vue'

import Filter from './components/Products/Filter.vue'
import FilterLeft from './components/Products/FilterLeft.vue'
import RecentJob from './components/Job/RecentJob.vue'
import ApplayJob from './components/Job/ApplayJob.vue'
import Rating from './components/Rating/Rating.vue'
import AllRating from './components/Rating/AllRating.vue'

import UserProfile from './components/Profile/UserProfile.vue'
import UserProducts from './components/Products/UserProducts.vue'
import Favourite from './components/Products/Favourite.vue'
import vueCountryRegionSelect from 'vue-country-region-select'

Vue.use(VueChatScroll)
Vue.component('sign-up', SignUp)
Vue.component('log-in', LogIn)
Vue.component('navbar', Navbar)
Vue.component('password-reset', PasswordReset)
Vue.component('cat', Category)
Vue.component('profile-summery', ProfileSummery)
Vue.component('chat-list', ChatList)
Vue.component('product-recent', ProductRecent)
Vue.component('filter-data', Filter)
Vue.component('user-profile', UserProfile)
Vue.component('footer-bar', Footer)
Vue.component('auth-item', AuthItem)
Vue.component('filter-left', FilterLeft)
Vue.component('recent-job', RecentJob)
Vue.component('country-list', CountryList)
Vue.component('applay-job', ApplayJob)
Vue.component('rating', Rating)
Vue.component('all-rating', AllRating)
Vue.component('report', Report)
Vue.component('products-home', ProductsHome)
Vue.component('product-latest', ProductLatest)

Vue.component('user-prodects', UserProducts)
Vue.component('favourite', Favourite)
Vue.component("v-select", vSelect);
Vue.use(vueCountryRegionSelect);
Vue.component('country-flag', CountryFlag)
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "vue-select/dist/vue-select.css";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



Vue.use(BootstrapVue)
Vue.use(imageZoom);


Vue.config.productionTip = false
Vue.prototype.moment = moment
new Vue({
  router,
  store,
  moment,
  render: h => h(App),
  created() {
    firebase.initializeApp({
     
    })
    this.$store.dispatch('locationFunc')

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('userDataRead')
        this.$store.dispatch('userPostAction')
        this.$store.dispatch('userFav'),
          this.$store.dispatch('chatDataFunc'),
          this.$store.dispatch("productRecent");


      }
    })
  },

}).$mount('#app')
