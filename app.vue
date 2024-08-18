<template>
  <Head>
        <Title>فون پلاس | phone plus</Title>
     </Head>
  <div>
    <NuxtLayout>
      <div>
        <NuxtPage/>
      </div>
    </NuxtLayout>
  </div>
</template>

<script>
import { useUserStore } from '~/store/user'; 


export default {
beforeMount() {
    const userStore = useUserStore();

    // Load token from cookie when the layout is created
    userStore.loadTokenAndUsernameFromCookie();
  },
}
</script>