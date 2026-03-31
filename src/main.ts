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
// import Forbes30u30 from "./views/Forbes30u30.vue"
import AwardProposal2 from "./views/AwardProposal2.vue"

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
            // { path: '/forbes30u30', component: Forbes30u30 },
            { path: '/award/2', component: AwardProposal2 },
        ]
    },
    // function to have custom setups
    ({ app, router, isClient }: { app: any; router: any; isClient: boolean }) => {
        // install plugins etc.
    }
)
