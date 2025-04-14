import { createApp } from 'vue'
import App from './App.vue'

import Vue3Toastify from "vue3-toastify"
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import '@/styles/bootstrap-styles.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VueKinesis from 'vue-kinesis'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'fa',
        sets: {
            fa: {
                component: 'v-icon',
            },
        },
    },
})

createApp(App)
    .use(vuetify)
    .use(Vue3Toastify, {
        position: 'top-right',
    })
    .use(router)
    .use(VueKinesis)
    .mount('#app')
