<template>
  <section class="creator">
    <h2 class="creator-title title-bor">Создатель</h2>
    <v-row>
      <v-col cols="12" md="5">
        <div class="creator-img mt-1">
          <img class="img img-border" src="img/avatar.jpeg" alt="">
        </div>
      </v-col>
      <v-col cols="12" md="7">
        <h3 class="creator-title-3">Andrey Shydlovich</h3>
        <b class="d-flex mb-4">Web Designer &amp; Developer</b>
        <p class="mb-2">Привет! Я <strong class="color-text">Андрей Шидлович</strong>. Веб-разработчик с более чем 3-летним опытом работы. Опыт работы со всеми
          этапами цикла разработки динамических веб-проектов. Обладая глубокими знаниями, включая продвинутые
          <strong class="color-text">HTML5, CSS3, JavaScript, jQuery, Typescript, Vue.js, Pug/Jade</strong>.
          Я стремлюсь изменить ситуацию с помощью своего творческого решения.</p>
        <v-row>
          <v-col cols="6">
            <ul class="creator-list">
              <li> <span class="creator-list-title mr-2">Возраст</span> <span class="creator-value">32 года</span> </li>
            </ul>
          </v-col>
          <v-col cols="6">
            <ul class="creator-list">
              <li> <span class="creator-list-title mr-2">Адрес</span> <span class="creator-value">Берёза</span> </li>
            </ul>
          </v-col>
          <v-col cols="12">
            <div>
              <h3 class="mb-4 d-flex justify-center">Профессиональные навыки</h3>
              <v-row>
                <v-col cols="6" md="3" class="d-flex justify-center flex-column align-center">
                    <v-progress-circular
                        :rotate="360"
                        :size="90"
                        :width="4"
                        value="76"
                        color="#f5ae51"
                        class="mb-2">
                     76%
                    </v-progress-circular>
                    <p>Коммуникация</p>
                </v-col>
                <v-col cols="6" md="3" class="d-flex justify-center flex-column align-center">
                  <v-progress-circular
                      :rotate="360"
                      :size="90"
                      :width="4"
                      value="76"
                      color="#f5ae51"
                      class="mb-2">
                    76%
                  </v-progress-circular>
                  <p>Работа в команде</p>
                </v-col>
                <v-col cols="6" md="3" class="d-flex justify-center flex-column align-center">
                  <v-progress-circular
                      :rotate="360"
                      :size="90"
                      :width="4"
                      value="76"
                      color="#f5ae51"
                      class="mb-2">
                    76%
                  </v-progress-circular>
                  <p style="white-space: nowrap">Управление проектом</p>
                </v-col>
                <v-col cols="6" md="3" class="d-flex justify-center flex-column align-center">
                  <v-progress-circular
                      :rotate="360"
                      :size="90"
                      :width="4"
                      value="76"
                      color="#f5ae51"
                      class="mb-2">
                    76%
                  </v-progress-circular>
                  <p>Креативность</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "Creator"
}
</script>

<style lang="sass">
  .creator
    color: #e1e1e1
    margin-bottom: 10%
    //img
    //  border: 10px solid rgba(255, 255, 255, 0.03)
    //  border-radius: 4px
    //  box-shadow: 0 0 30px rgb(0 0 0 / 20%)
    &-list
      li
        display: flex
        align-items: center
        padding-top: 5px
        padding-bottom: 5px
      &-title
        position: relative
        color: #a1a1a1
        margin-right: 10px
        padding-bottom: 1px
        font-weight: 700
        &::before
          content: ''
          position: absolute
          bottom: -4px
          display: flex
          width: 100%
          border-radius: 2px
          height: 2px
        &::after
          position: absolute
          content: ':'
          right: -5px
    &-title-3
      font-family: 'Source Serif Pro', serif!important
    b
      font-size: 18px!important
      font-family: 'Source Serif Pro', serif!important
.technical-skills
  li
    margin-bottom: 12px
    &:last-child
      margin-bottom: 0
  &-title
    font-family: 'Source Serif Pro', serif!important
  div span:first-child
    padding-left: 2px
</style>
