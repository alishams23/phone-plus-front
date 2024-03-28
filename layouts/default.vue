
<template>
  
  
      <Navbar   />
  
 
        <slot />  
   
        <Footer />
   
  </template>
  <script>
import Navbar from "@/components/section/Navigation.vue"
 import Footer from "@/components/section/Footer.vue"
export default {
  components:{
    Navbar,
    Footer
  },
  data: () => ({
    
  }),
}
</script>