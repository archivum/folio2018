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
        home: {
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
        tl.to('.' + className, 0.5, { backgroundColor: this.animations[className].one, scale: 3 })
          .to('.' + className, 0.5, { backgroundColor: this.animations[className].two, scale: 1 })
          .to('.' + className, 0.5, { backgroundColor: this.animations[className].three })
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

<style lang="scss">
@import './../node_modules/bootstrap/scss/bootstrap.scss';
</style>
