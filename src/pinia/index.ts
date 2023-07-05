import { createPinia } from 'pinia';
import { Router } from 'vue-router';
import { router } from '@/router';

export const pinia = createPinia();

pinia.use(({ store })=>{
    store.router = router;
})

declare module 'pinia' {
    export interface PiniaCustomProperties {
        router: Router;
    }
}