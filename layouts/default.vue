
<template>

  <Navbar :buttons="buttons" />

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
      buttons:[{
        'name':'محبوب ترین محصولات',
        'func':null,
        'href':'/search/?sort_product=-rate',
      }]
    }),
  }
</script>