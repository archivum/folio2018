<template>
  <div id="app">
    <!-- Important : mode="out-in" and appear -->
    <transition @enter="enter" @leave="leave" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      animations: {
        landing: {
          one: 'red',
          two: 'green',
          three: 'olive'
        },
        pageone: {
          one: 'pink',
          two: 'blue',
          three: 'green'
        },
        pagetwo: {
          one: 'purple',
          two: 'orange',
          three: 'pink'
        }
      }
    }
  },
  methods: {
      enter(el,done){
        let className = el.className.split(' ')[0]
        let tl = new TimelineMax();
        tl.to('.' + className, 1, { backgroundColor: this.animations[className].one, scale: 3 })
          .to('.' + className, 1, { backgroundColor: this.animations[className].two, scale: 1 })
          .to('.' + className, 1, { backgroundColor: this.animations[className].three, rotation: '+360' })
    },
    leave(el,done){
        let className = el.className.split(' ')[0]
        TweenMax.fromTo('.' + className, 1,
        {
          opacity: 1,
      },{
          opacity: 0,
          //Important : have the onComplete triggered when the animations is done
          onComplete: done
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
