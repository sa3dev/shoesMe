import { createApp , markRaw , ref } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// const app = createApp(App)
// const pinia = createPinia();

// pinia.use(({ store }) => {
//     store.$router = markRaw(router)
// });

// app.use(router)
// app.use(pinia)
// app.mount('#app')


const pinia = createPinia();

pinia.use(({ store , options }) => {
    // store correspond a chaque store declaré avec les alias avec $
    // les options sera réellement l'objet en question du store
    // console.log(store , options)

    // if(options.usePlugin) {
    //     let msg = ref('Hi from plugin')
    //     store.$state.msg = msg // msg sera dispo avec les alias $msg
    //     store.msg = msg   // msg sera dispo dans les stores
    // }

    console.log(options)

    store.$router = markRaw(router)
});

window.vm = createApp(App).use(pinia).use(router).mount('#app')


