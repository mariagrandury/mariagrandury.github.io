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
import Forbes30u30 from "./views/Forbes30u30.vue"
import AwardProposal0 from "./views/AwardProposal0.vue"
import AwardProposal1 from "./views/AwardProposal1.vue"
import AwardProposal2 from "./views/AwardProposal2.vue"
import AwardProposal3 from "./views/AwardProposal3.vue"
import AwardProposalB from "./views/AwardProposalB.vue"
import AwardProposalC from "./views/AwardProposalC.vue"

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
            { path: '/forbes30u30', component: Forbes30u30 },
            { path: '/award/0', component: AwardProposal0 },
            { path: '/award/1', component: AwardProposal1 },
            { path: '/award/2', component: AwardProposal2 },
            { path: '/award/3', component: AwardProposal3 },
            { path: '/award/b', component: AwardProposalB },
            { path: '/award/c', component: AwardProposalC },
        ]
    },
    // function to have custom setups
    ({ app, router, isClient }: { app: any; router: any; isClient: boolean }) => {
        // install plugins etc.
    }
)
