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
import News from "./views/News.vue"
import World from "./views/World.vue"
import Academic from "./views/Academic.vue"
import Publications from "./views/Publications.vue"
import NotFound from "./views/NotFound.vue"

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
            { path: '/news', component: News },
            { path: '/world', component: World },
            { path: '/academic', component: Academic },
            { path: '/publications', component: Publications },
            { path: '/:pathMatch(.*)*', component: NotFound },
        ]
    },
    // function to have custom setups
    ({ app, router, isClient }: { app: any; router: any; isClient: boolean }) => {
        // install plugins etc.
    }
)
