import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "./views/Home.vue"
import Projects from "./views/Projects.vue"
import Skills from "./views/Skills.vue"
import About from "./views/About.vue"
import Contact from "./views/Contact.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/projects', component: Projects },
        { path: '/skills', component: Skills },
        { path: '/about', component: About },
        { path: '/contact', component: Contact },
    ]
})