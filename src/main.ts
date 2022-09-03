import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**
 * Axios
 */

import axios from 'axios'
import VueAxios from 'vue-axios'

/**
 * Fontawesome
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser)

/**
 * App
 * 
 */
createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
