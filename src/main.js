import VueGtag  from 'vue-gtag';

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


/* add icons to the library */
library.add(faUserSecret, faGithub, faTwitter)

const app = createApp(App);


app.use(router);

app.use(VueGtag, {
    appName: "My App",
    pageTrackerScreenviewEnabled: true,
    config: { id: "G-0Q809JJD34" },
    onBeforeTrack() {
        console.log("before!");
        // before!
    },
    onAfterTrack() {
        console.log("after!");
        // after!
    }

}, router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
