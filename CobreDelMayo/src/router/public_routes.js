import AboutPage from "@/public/views/AboutPage.vue";
import HomePage from "@/public/views/HomePage.vue";
import ContactPage from "@/public/views/ContactPage.vue";
import Investors from "@/public/views/InvestorsPage.vue";
import SustainabilityPage from "@/public/views/SustainabilityPage.vue";


export default [
    {
        path: '',
        component: ()=> import(/* webpackChunkName "public" */"@/layouts/PublicLayout.vue"),
        meta:{
            requireAuth: false
        },
        children:[
            {
                path: 'home',
                name: 'home',
                component: HomePage,
                meta:{
                    title: 'Inicio'
                },
            },
            {
                path: 'about',
                name: 'nosotros',
                component: AboutPage,
                meta:{
                    title: 'Acerca de nosotros'
                },
            },
            {
                path: 'contact',
                name: 'contacto',
                component: ContactPage,
                meta:{
                    title: 'Noticias'
                },
            },
            {
                path: 'investors',
                name: 'inversionistas',
                component: Investors,
                meta:{
                    title: 'Inversionistas'
                },
            },
            {
                path: 'sustainability',
                name: 'sostenibilidad',
                component: SustainabilityPage,
                meta:{
                    title: 'Sostenibilidad'
                },
            },

        ]
    },

]