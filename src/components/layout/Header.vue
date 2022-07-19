<template>
  <div>
    <v-app-bar
        height="64"
        elevate-on-scroll
        color="background"
        scroll-target="#scrolling-techniques"
        class="mt-0 mb-0 pb-0 pt-0">
      <div class="container d-flex align-center justify-space-between">
        <a class="navbar-brand pt-2" href="/#">
          <img src="img/logo.png" style=" height: 40px" alt="logo" class="img-fluid">
        </a>
        <v-spacer></v-spacer>
        <nav class="nav-desktop">
          <ul class="nav">
            <li v-for="block in blocks" :class="block.id == getCurrentBlock ? 'active nav-item': 'nav-item'">
              <a class="nav-link" @click="goToAnchor(block.id)">{{block.name}}</a>
            </li>
          </ul>
        </nav>
        <v-spacer/>
        <div class="button-cover mt-4">
          <div class="button r" id="button-1">
            <input type="checkbox" class="checkbox"
                   v-model="$vuetify.theme.dark">
            <div class="knobs">
              <v-icon class="knobs-icon"
                      size="21">
                mdi-brightness-5
              </v-icon>
            </div>
            <div class="layer">
              <v-icon class="layer-icon"
                      size="21">
                mdi-brightness-3
              </v-icon>
            </div>
          </div>
        </div>
        <v-btn icon class="ml-2 d-block d-md-none" @click="openNav">
          <v-icon
                  color="#fff"
                  size="24">
            mdi-menu
          </v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <nav class="nav-mobile" v-if="showNav">
      <v-btn icon class="d-block d-md-none close-nav ml-auto" @click="closeNav">
        <v-icon color="red">mdi-close</v-icon>
      </v-btn>
      <ul class="nav">
        <li v-for="block in blocks" :class="block.id == getCurrentBlock ? 'active nav-item': 'nav-item'">
          <a class="nav-link" @click="goToAnchor(block.id)">{{block.name}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
  export default {
    name: 'Header',
    data: () => ({
      actives: 0,
      showNav: false,
      activatedAnchorFlag: false,
      isIntersecting: false,
      blocks: [{name: 'Главная', id: '#mh-home'},{name: 'О нас', id: '#mh-about'},{name: 'Создатель', id: '#mh-creator'}
        ,{name: 'Команда', id: '#mh-command'},{name: 'Проэкты', id: '#mh-project'}
        ,{name: 'HR\'ам', id: '#mh-hr'},{name: 'Контакты', id: '#mh-contact'},]
    }),
    computed: {
      ...mapGetters([
        'getCurrentBlock'
      ]),
    },
    methods: {
      ...mapMutations(['setCurrentBlock']),
      goToAnchor(anchor) {
        this.showNav = false;
        this.setCurrentBlock(anchor);
        this.$vuetify.goTo(anchor, {container: '#scrolling-techniques'});
      },
      onIntersect (entries, observer) {
        this.isIntersecting = entries[0].isIntersecting
      },
      closeNav() {
        this.showNav = false;
      },
      openNav() {
        this.showNav = true
      }
    },

  }
</script>
<style lang="sass">

.button-cover
  width: 100px
  height: 40px
  border-radius: 4px

.button-cover:before
  counter-increment: button-counter
  content: ''
  position: absolute
  right: 0
  bottom: 0
  color: #d7e3e3
  font-size: 12px
  line-height: 1
  padding: 5px

.knobs
  position: absolute
  top: 1px
  bottom: 0
  left: 1px
.layer
  position: absolute
  top: 1px
  right: 1px
  left: 25px
  bottom: 0

.button
  position: relative
  top: 50%
  width: 50px
  height: 25px
  margin: -20px 0 0 auto
  overflow: hidden

.button.r
  background-color: #e1e1e1
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px


.button.r, .button.r .layer
  border-radius: 100px


.button.b2
  border-radius: 2px

.checkbox
  position: relative
  width: 100%
  height: 100%
  padding: 0
  margin: 0
  opacity: 0
  cursor: pointer
  z-index: 9

.knobs
  z-index: 1
.layer
  transition: 0.3s ease all
  z-index: 1

.knobs-icon
  padding-left: 1px
  color: black!important
  z-index: 5!important
  transform: translateX(1px)

.layer-icon
  color: black!important
  z-index: 6!important
  transform: translateX(3px)


#button-1 .knobs:before
  content: ''
  position: absolute
  top: 0
  left: 1px
  width: 23px
  height: 23px
  color: #fff
  font-size: 10px
  font-weight: bold
  text-align: center
  line-height: 1
  background-color: rgba(#f5ae51, 1)
  border-radius: 50%
  transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all
  z-index: 1

#button-1 .checkbox:checked + .knobs:before
  content: ''
  left: 25px
  background-color: #000
  z-index: 1

#button-1 .checkbox:checked ~ .layer
  z-index: 2

#button-1 .checkbox:checked ~ .layer .layer-icon
  color: #fff!important

#button-1 .knobs, #button-1 .knobs:before, #button-1 .layer
  transition: 0.3s ease all

</style>
