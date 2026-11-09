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
import Forbes30under30 from "./views/Forbes30under30.vue"
import Research2 from "./views/Research2.vue"
import Home1 from "./views/Home1.vue"
import Home2 from "./views/Home2.vue"
import Divulgation2 from "./views/Divulgation2.vue"
import Projects2 from "./views/Projects2.vue"

export const createApp = ViteSSG(
    App,
    {
        scrollBehavior: () => ({ top: 0 }),
        routes: [
            { path: '/', component: Home },
            { path: '/projects', component: Projects },
            { path: '/research', component: Research },
            { path: '/divulgation', component: Divulgation },
            { path: '/about', component: About },
            { path: '/contact', component: Contact },
            { path: '/cv', component: CV },
            { path: '/cookie-policy', component: Cookies },
            { path: '/forbes30under30', component: Forbes30under30 },
            // Proposals to compare with the current pages (remove before merging)
            { path: '/home1', component: Home1 },
            { path: '/home2', component: Home2 },
            { path: '/research2', component: Research2 },
            { path: '/divulgation2', component: Divulgation2 },
            { path: '/projects2', component: Projects2 },
        ]
    },
    // function to have custom setups
    ({ app, router, isClient }: { app: any; router: any; isClient: boolean }) => {
        // install plugins etc.
    }
)
