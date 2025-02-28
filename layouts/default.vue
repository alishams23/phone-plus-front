
<template>

  <Navbar :buttons="buttons" />

  <slot  />  

  <Footer />
  <SectionPwaPrompt />

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
        'href':'/p/search/?sort_product=-rate',
      }]
    }),
  }
</script>