<template>
  <section class="hr">
    <h2 class="hr-title title-bor">HR'ам</h2>
    <v-row>
      <v-col cols="12">
        <v-expansion-panels>
          <v-expansion-panel
              v-for="(item,i) in 5"
              :key="i">
            <v-expansion-panel-header color="rgba(0,0,0,0)">
              Давно ли Вы в IT?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "Hr"
}
</script>

<style lang="sass">
.hr
  color: #e1e1e1
  margin-bottom: 10%
.theme--dark.v-expansion-panels .v-expansion-panel
  background-color: #100e17
.theme--light.v-expansion-panels .v-expansion-panel
  background-color: #fff!important
</style>
