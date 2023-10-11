<template>
    <div>
        Loading ...
    </div>
</template>
<script>
export default {
    name: 'AuthView',
    data () {
        return {

        }
    },
    mounted () {
        const token = this.$route.query.token
        if(token){
            localStorage.setItem('token',token)
            window.location.href = 'https://dash.intelligo.id/user/booth'
        }else{
            this.$router.push('/');
        }
    }
}
</script>