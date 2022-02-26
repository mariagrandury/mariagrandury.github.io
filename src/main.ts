import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import 'virtual:windi.css'

import Home from "./views/Home.vue"
import Projects from "./views/Projects.vue"
import Talks from "./views/Talks.vue"
import Skills from "./views/Skills.vue"
import About from "./views/About.vue"
import Contact from "./views/Contact.vue"

export const createApp = ViteSSG(
    App,
    {
        routes: [
            { path: '/', component: Home },
            { path: '/projects', component: Projects },
            { path: '/talks', component: Talks },
            { path: '/skills', component: Skills },
            { path: '/about', component: About },
            { path: '/contact', component: Contact },
        ]
    },
    // function to have custom setups
    ({ app, router, isClient }) => {
        // install plugins etc.
    }
)
