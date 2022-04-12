import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            auth0: {
                domain: process.env.AUTH0_DOMAIN,
                client_id: process.env.AUTH0_CLIENT_ID,
                redirect_uri: process.env.AUTH0_REDIRECT_URL
            }
        }
    }
})
