import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Chart from 'primevue/chart';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';

import InputText from 'primevue/inputtext';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import 'primeflex/primeflex.css';


const app = createApp(App)
app.use(router)
app.use(PrimeVue)

app.component('Button',Button)
app.component('Menu',Menu)
app.component('Menubar',Menubar)
app.component('InputText',InputText)
app.component('Chart',Chart)


app.mount('#app')
