<template>
    <div v-show="loader.show" id="loader" class="zin-999">
        <v-dialog
                :value="loader.show"
                fullscreen
                hide-on-leave
                hide-overlay
                transition="dialog-top-transition"
                class="zin-999">
            <v-card class="d-flex align-center justify-center"
                    color="#040d21">
              <img src="img/logo.png">
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'Loader',
        computed:{
            ...mapGetters([
                'loader'
            ]),
        },
      updated(){
        console.log('loader u')
      },
      mounted(){
        console.log('loader m')
      },
      created(){
        console.log('loader c')
      },
    };
</script>
<style>
    #loader {
        width: 100vw;
        height: 100vh;
        z-index: 100;
        position: fixed;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.59);
    }
    .zin-999 {
        z-index: 999!important
    }
</style>
