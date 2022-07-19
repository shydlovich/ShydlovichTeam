<template>
    <v-app id="app" >
        <Loader/>
        <router-view></router-view>
    </v-app>
    
</template>

<script>

import Loader from "@/components/Loader";
import {mapActions} from "vuex";

    export default {
        name: 'App',
      components: {
        Loader,

      },
      methods: {
        ...mapActions([
          'setLoader',
        ]),
      },
      created() {
        this.setLoader({show: true, manual:false});
      }
    }
</script>
<style lang="sass">
  @import 'src/assets/style/main'
  @import 'src/assets/style/header'
  @import 'src/assets/style/dropping'


</style>
