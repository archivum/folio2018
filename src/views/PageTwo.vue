<template>
    <div class="pagetwo">
        <h1>This is Page Two</h1>
        <h2>Go to <router-link to="/">Landing</router-link>   |   <router-link to="/one">Page One</router-link></h2>
    </div>
</template>

<script>
    export default {

      name: 'PageTwo',

      data () {
        return {

        }
    }
}
</script>

<style lang="css" scoped>
.pagetwo {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>