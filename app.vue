<template>
  <div>
    <h1>ログイン</h1>

    <button @click="login">ログイン</button>
    <button @click="logout">ログアウト</button>

    <pre v-if="isAuthenticated">
      <code>{{ user }}</code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
  import { useAuth0 } from '@auth0/auth0-vue'

export default defineComponent({
    setup() {
      const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();
        },
        logout: () => {
          logout();
        },
        user,
        isAuthenticated
      };
    }
})
</script>
