import AboutPage from "@/public/views/AboutPage.vue";
import HomePage from "@/public/views/HomePage.vue";
import OperationsPage from "@/public/views/OperationsPage.vue";
import LocationPage from "@/public/views/LocationPage.vue";
import ESGPage from "@/public/views/ESG.vue";
import HistoryPage from "@/public/views/HistoryPage.vue";
import GaleryPage from "@/public/views/GalleryPage.vue";

export default [
    {
        path: '',
        component: ()=> import("@/layouts/PublicLayout.vue"),
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
                path: 'history',
                name: 'history',
                component: HistoryPage,
                meta:{
                    title: 'Historia'
                },
            },
            {
                path: 'location',
                name: 'location',
                component: LocationPage,
                meta:{
                    title: 'Ubicación'
                },
            },
            {
                path: 'operations',
                name: 'operations',
                component: OperationsPage,
                meta:{
                    title: 'Operaciones'
                },
            },
            {
                path: 'esg',
                name: 'esg',
                component: ESGPage,
                meta:{
                    title: 'ESG'
                },
            },
            {
                path: 'gallery',
                name: 'gallery',
                component: GaleryPage,
                meta:{
                    title: 'Galería'
                },
            }

        ]
    },

]