<template>

</template>
<script>
 
export default{
    mounted() {
        useUserStore().logout()
        this.$router.push("/");             
    },
}
</script>