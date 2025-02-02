<template>
    <VitePwaManifest />
    <NuxtLoadingIndicator />
  <Head>
        <Title>فون پلاس | قدم به قدم رو به جلو </Title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <meta name="enamad" content="۴۴۵۴۱۷۰۳">

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