<template>
    <div class="home">
        <div class='fullh'>
            <h1>This is home</h1>
            <h2>Go to <router-link to="/one">Page One</router-link>   |   <router-link to="/two">Page Two</router-link></h2>
        </div>

        <div class="container projects">
            <label><input type="radio" v-model="selectedProject" value="All">all</label> 
            <label><input type="radio" v-model="selectedProject" value="dev">dev</label> 
            <label><input type="radio" v-model="selectedProject"  value="ux">ux</label> 
            <label><input type="radio" v-model="selectedProject"  value="ui">ui</label>
            <transition-group class="row" name='row' mode="out-in"> 
                    <div class="col-md-4 box" v-for="(project,index) in filteredProjects" :key="index" @click='changeBg(project)' :class="project.color" @mouseover="thmbAnimateIn(project)" @mouseout="thmbAnimateOut(project)">
                            <div>
                                <h2 class='thmb-title' :id="`thmb-title-${project.id}`" >{{project.title}}</h2>
                                <p class='thmb-client' :id="`thmb-client-${project.id}`" >{{project.client}}</p> 
                                <span class='thmb-cat' :id="`thmb-category-${project.id}`">{{project.categories}}</span>
                            </div>
                    </div>
            </transition-group>
        </div>
    </div>
</div>
</template>

<script>
export default {

    name: 'Home',

    data: function() {
        return {
            projects: [
            {title: 'Stackoverflow', client: 'mcdonalds',categories:'ux/ui/dev', category: 'dev', color:'bg-1', id:'1'},
            {title: 'Game of Thrones',client: 'qwe',categories:'ux/ui/dev', category: 'dev', color:'bg-2', id:'2'},
            {title: 'Jon Snow', client: 'mcdonalds',categories:'ux/ui/dev', category: 'dev', color:'bg-1', id:'3'},
            {title: 'Stackoverflow', client: 'mcdonalds',categories:'ux/ui/dev', category: 'dev', color:'bg-3', id:'4'},
            {title: 'Some other title', client: 'mcdonalds',categories:'ux/ui/dev', category: 'dev', color:'bg-1', id:'5'},
            {title: 'Horn Blower', client: 'mcdonalds',categories:'ux/ui/dev', category: 'dev', color:'bg-2', id:'6'},
            {title: 'Elfo', client: 'mcdonalds',categories:'ux/ui/dev', category: 'ux', color:'bg-1', id:'7'},
            {title: 'Parham', client: 'mcdonalds',categories:'ux/ui/dev', category: 'dev', color:'bg-2', id:'8'},
            {title: 'Toronto', client: 'mcdonalds',categories:'ux/ui/dev', category: 'dev', color:'bg-1', id:'9'},
            {title: 'Canoe', client: 'mcdonalds',categories:'ux/ui/dev', category: 'dev', color:'bg-3', id:'10'},
            ],
            selectedProject: "All",
        }
    },
    methods: {
        thmbAnimateIn: function(project){
            
            // project.thmbShow = true;
            
            let title = `#thmb-title-${project.id}`
            let client = `#thmb-client-${project.id}`
            let cat = `#thmb-category-${project.id}`

            let tl = new TimelineMax();
            tl.to(title, 0.2, { opacity: 1 })
              .to(client, 0.2, { opacity: 1 }) 
              .to(cat, 0.2, { opacity: 1 }) 
        },
        thmbAnimateOut: function(project){
            
            let title = `#thmb-title-${project.id}`
            let client = `#thmb-client-${project.id}`
            let cat = `#thmb-category-${project.id}`

            let tl = new TimelineMax();
            tl.to(title, 0.2, { opacity: 0 })
              .to(client, 0.2, { opacity: 0 }) 
              .to(cat, 0.2, { opacity: 0 }) 

            // project.thmbShow = false;  
        },
        changeBg(project){
            var colour = Math.floor(Math.random() * 3) + 1
            project.color = 'bg-'+colour;  
        }
        
    },
    computed: {

        filteredProjects() {

            var vm = this;
            var category = vm.selectedProject;

            if(category === "All") {
                return vm.projects
            } else {
                return vm.projects.filter(function(project) {
                    return project.category === category;
                });
            }
        }
    }
}


</script>

<style lang="scss">

.box {

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    background-color: purple;
    height: 300px;

}

.fullh {
    height: 100vh;
}

.row-item {
  display: inline-block;
  margin-right: 10px;
}
.row-enter-active, .row-leave-active {
  transition: all 700ms;
}
.row-enter, .row-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.projects {
    min-height: 1000px;
}

.thmb-title  {
    opacity: 0;
}

.thmb-client {
    opacity: 0;
}

.thmb-cat {
    opacity: 0; 
}

.bg-1 {
  background: red; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(top,#CA6CEB, #EC6A96); /*Safari 5.1-6*/
  background: -o-linear-gradient(bottom,#CA6CEB, #EC6A96); /*Opera 11.1-12*/
  background: -moz-linear-gradient(bottom,#CA6CEB, #EC6A96); /*Fx 3.6-15*/
  background: linear-gradient(to bottom, #CA6CEB, #EC6A96); /*Standard*/
}

.bg-2 {
  background: red; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(top,#00C9FF, #E5EA6D); /*Safari 5.1-6*/
  background: -o-linear-gradient(bottom,#00C9FF, #E5EA6D); /*Opera 11.1-12*/
  background: -moz-linear-gradient(bottom,#00C9FF, #E5EA6D); /*Fx 3.6-15*/
  background: linear-gradient(to bottom, #00C9FF, #E5EA6D); /*Standard*/
}


.bg-3 {
  background: red; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(top,#00C9FF,#92FE9D); /*Safari 5.1-6*/
  background: -o-linear-gradient(bottom,#00C9FF,#92FE9D); /*Opera 11.1-12*/
  background: -moz-linear-gradient(bottom,#00C9FF,#92FE9D); /*Fx 3.6-15*/
  background: linear-gradient(to bottom, #00C9FF, #92FE9D); /*Standard*/
}

</style>