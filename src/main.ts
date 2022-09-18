import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import Calendar from 'primevue/calendar'
import Divider from 'primevue/divider'
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import Dropdown from 'primevue/dropdown';


import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component("Button", Button)
app.component("InputText", InputText)
app.component('Checkbox', Checkbox)
app.component('Dialog', Dialog)
app.component('Calendar', Calendar)
app.component('Divider', Divider)
app.component('RadioButton', RadioButton)
app.component('Slider', Slider)
app.component('Dropdown', Dropdown)

app.mount('#app')
