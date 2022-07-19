<template>
  <v-dialog
      :value="value"
      @input="close"
      width="1100px">
    <v-card class="modal">
      <v-btn icon class="modal-close" @click="close">
        <v-icon color="red">mdi-close</v-icon>
      </v-btn>
      <div class="container">
        <v-divider></v-divider>
        <v-row class="modal-portfolio">
          <v-col cols="12" md="3">
            <h2>{{project.title}}</h2>
            <p class="text-justify">{{project.text}}</p>
          </v-col>
          <v-col cols="12" md="9">
            <div class="modal-portfolio-img">
              <v-img contain :src="`https://picsum.photos/500/300?image=${project.image}`"></v-img>
              <p>All variations are organized separately so you can use / customize the template very easily.</p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            <p>Используемые технологии</p>
          </v-col>
          <v-col cols="12" md="9">
            <ul class="modal-list">
              <li v-for="technologi in project.technologies" class="modal-list-item" ><span>{{technologi}}</span></li>
            </ul>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Modal",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    project: {
      type: Object,
      default:()=>({})
    },
  },
  methods: {
    close() {
      this.$emit('input', false);
      this.$emit('m-close');
    }
  }
}
</script>

<style lang="sass">
.modal
  position: relative
  padding: 32px 24px
  &-close
    position: absolute!important
    top: 6px
    right: 8px
  &-portfolio
    padding-top: 8px
    .v-responsive__sizer
      padding-bottom: 60%!important
      margin-bottom: 8px
  h2
    font-size: 34px!important
    line-height: 1.2!important
    font-weight: 500!important
    text-align: center
    margin-bottom: 16px
    color: #e1e1e1
    font-family: 'Source Serif Pro', serif!important
  p
    margin-bottom: 16px!important
    display: block
  h3
    text-align: center
    margin-bottom: 16px
  &-list
    display: flex
    align-items: center
    flex-wrap: wrap
    justify-content: center
    &-item
      margin-right: 8px
      margin-bottom: 16px
      &:last-child
        margin-right: 0
      span
        border: 1px solid #f5ae51
        padding: 4px 10px
        border-radius: 4px
</style>
