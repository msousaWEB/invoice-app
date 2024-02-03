import {createRouter, createWebHistory} from "vue-router";
import invoiceIndex from '../components/invoices/Index.vue'
import notFound from '../components/NotFound.vue'

const routes = [
    {
        path: '/',
        component: invoiceIndex
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;
