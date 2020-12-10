import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(fab)
library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)
