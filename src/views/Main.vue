<template>
  <div>
    <First class="anchor-item"  id="mh-home" v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [1.0]
            }
          }"/>
    <About class="anchor-item" id="mh-about" v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [1.0]
            }
          }"/>
    <Creator class="anchor-item" id="mh-creator" v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [1.0]
            }
          }"/>
    <Command class="anchor-item" id="mh-command" v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [1.0]
            }
          }"/>
    <Projects class="anchor-item" id="mh-project" v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [1.0]
            }
          }"/>
    <Hr class="anchor-item" id="mh-hr" v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [1.0]
            }
          }"/>
    <Contact class="anchor-item" id="mh-contact" v-intersect="{
            handler: onIntersect,
            options: {
              threshold: [1.0]
            }
          }"/>
  </div>
</template>

<script>
    import About from "@/components/About";
    import First from "@/components/First";
    import Creator from "@/components/Creator";
    import Command from "@/components/Command";
    import Contact from "@/components/Contact";
    import Hr from "@/components/Hr";
    import Projects from "@/components/Projects";
    import {mapMutations} from "vuex";
    export default {
        name: "Main",
      components: {
        Projects,
        Hr,
        First,
        Contact,
        Command,
        Creator,
          About
      },
      methods: {
        ...mapMutations(['setCurrentBlock']),
        onIntersect (entries, observer) {

          if (entries[0].intersectionRatio >= 0.7){
            this.setCurrentBlock('#' + entries[0].target.id);
          }
        },
      },

    };
</script>

<style >
</style>
