<template>
    <div class="landing">
        <h1>This is Landing</h1>
        <h2>Go to <router-link to="/one">Page One</router-link>   |   <router-link to="/two">Page Two</router-link></h2>
    </div>
</template>

<script>
    export default {

      name: 'Landing',

      data () {
        return {

        }
    }
}
</script>

<style lang="css" scoped>
.landing {
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