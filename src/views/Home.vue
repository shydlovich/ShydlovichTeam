<template>
  <div>
    <Header/>
    <v-sheet
        id="scrolling-techniques"
        color="background"
        class="overflow-y-auto fox-scroll"
        :style="cssProps">
      <v-container class="main">
        <router-view></router-view>
      </v-container>
    </v-sheet>
    <!--      <Footer/>-->
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import Footer from '../components/layout/Footer';

export default {
  name: 'Home',
  components: {
    Footer,
    Header,

  },
  computed: {
    cssProps() {
      return {
        '--light-scroll-color': this.$vuetify.theme.themes.dark.background,
        '--dark-scroll-color': this.$vuetify.theme.themes.dark.primary,
      }
    },

  },
}
</script>
<style>
.main {
  max-height: calc(100vh - 64px);

}

/*Google*/
::-webkit-scrollbar-track {
  background-color: #f5f5f500;
}

::-webkit-scrollbar {
  width: 5px;
  height: 10px
}

::-webkit-scrollbar-thumb:hover {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .4);
}

.theme--dark ::-webkit-scrollbar-thumb {
  background-color: var(--dark-scroll-color);
}

.theme--light ::-webkit-scrollbar-thumb {
  background-color: var(--light-scroll-color);
}

/*FireFox*/
.theme--dark .fox-scroll {
  scrollbar-width: thin;
  scrollbar-color: var(--dark-scroll-color) rgba(19, 0, 0, 0)
}

.theme--light .fox-scroll {
  scrollbar-width: thin;
  scrollbar-color: var(--light-scroll-color) rgba(19, 0, 0, 0)
}

</style>
