import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import 'virtual:windi.css'

import Home from "./views/Home.vue"
import Projects from "./views/Projects.vue"
import Research from "./views/Research.vue"
import Divulgation from "./views/Divulgation.vue"
import About from "./views/About.vue"
import Contact from "./views/Contact.vue"
import CV from "./views/CV.vue"
import Cookies from "./views/Cookies.vue"

export const createApp = ViteSSG(
    App,
    {
        routes: [
            { path: '/', component: Home },
            { path: '/projects', component: Projects },
            { path: '/research', component: Research },
            { path: '/divulgation', component: Divulgation },
            { path: '/about', component: About },
            { path: '/contact', component: Contact },
            { path: '/cv', component: CV },
            { path: '/cookie-policy', component: Cookies }
        ]
    },
    // function to have custom setups
    ({ app, router, isClient }) => {
        // install plugins etc.
    }
)
