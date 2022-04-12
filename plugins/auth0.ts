
import { createAuth0 } from '@auth0/auth0-vue';

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const auth0 = createAuth0({
        domain: config.public.auth0.domain as string,
        client_id: config.public.auth0.client_id as string,
        redirect_uri: config.public.auth0.redirect_uri as string,
    })

    nuxtApp.vueApp.use(auth0)
})