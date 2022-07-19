<template>
  <section class="about">
    <h2 class="about-title title-bor">О нас</h2>
    <v-row>
      <v-col cols="12" md="6">
        <img class="img" src="img/about.png" alt="">
      </v-col>
      <v-col cols="12" md="6">
        <p class="about-text mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis esse id in modi nam numquam pariatur provident sunt unde!
          Aliquam aliquid assumenda beatae blanditiis corporis doloremque, earum eligendi et ex excepturi fugit harum impedit incidunt inventore
          magnam nulla officiis quis quisquam ratione, recusandae reiciendis rem sequi tenetur unde velit voluptas
          voluptate, voluptatem. Dolor fuga quae suscipit tempora. Ad aliquid architecto asperiores assumenda consequuntur dolore dolorem
          ducimus ea eligendi facilis illum ipsum laborum</p>
<!--        <ul class="about-list d-flex align-center flex-wrap">-->
<!--          <li class="about-list__item d-flex flex-column justify-center mr-5">-->
<!--            <v-icon-->
<!--                size="40"-->
<!--                color="#fff">-->
<!--              mdi-language-html5-->
<!--            </v-icon>-->
<!--            <b class="about-b">HTML5</b>-->
<!--          </li>-->
<!--          <li class="about-list__item d-flex flex-column justify-center mr-5">-->
<!--            <v-icon-->
<!--                size="40"-->
<!--                color="#fff">-->
<!--              mdi-language-css3-->
<!--            </v-icon>-->
<!--            <b class="about-b">CSS3</b>-->
<!--          </li>-->
<!--          <li class="about-list__item d-flex flex-column justify-center mr-5">-->
<!--            <v-icon-->
<!--                size="40"-->
<!--                color="#fff">-->
<!--              mdi-language-javascript-->
<!--            </v-icon>-->
<!--            <b class="about-b">javascript</b>-->
<!--          </li>-->
<!--          <li class="about-list__item d-flex flex-column justify-center mr-5">-->
<!--            <v-icon-->
<!--                size="40"-->
<!--                color="#fff">-->
<!--              mdi-language-java-->
<!--            </v-icon>-->
<!--            <b class="about-b">java</b>-->
<!--          </li>-->
<!--          <li class="about-list__item d-flex flex-column justify-center mr-5">-->
<!--            <v-icon-->
<!--                size="40"-->
<!--                color="#fff">-->
<!--              mdi-vuejs-->
<!--            </v-icon>-->
<!--            <b class="about-b">vue.js</b>-->
<!--          </li>-->
<!--          <li class="about-list__item d-flex flex-column justify-center">-->
<!--            <v-icon-->
<!--                size="40"-->
<!--                color="#fff">-->
<!--              mdi-language-php-->
<!--            </v-icon>-->
<!--            <b class="about-b">PHP</b>-->
<!--          </li>-->
<!--        </ul>-->
        <ul class="about-list d-flex align-end flex-wrap">
          <li class="about-list__item">
            <img class="about-img" src="img/about/html5.png" alt="">
            <b class="about-b">HTML5</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/postgresql_elephant.svg" alt="">
            <b class="about-b">PostgreSQL</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/javascript.png" alt="">
            <b class="about-b">Javascript</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/typescript.png" alt="">
            <b class="about-b">Typescript</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/java.png" alt="">
            <b class="about-b">Java</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/vue.png" alt="">
            <b class="about-b">Vue.js</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/vuetify.png" alt="">
            <b class="about-b">Vuetify</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/windows-server.png" alt="">
            <b class="about-b">Windows-server</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/linux.png" alt="">
            <b class="about-b">Lunux</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/spring.png" alt="">
            <b class="about-b">Spring</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/css.png" alt="">
            <b class="about-b">CSS3</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/rabbitmq.svg" alt="">
            <b class="about-b">RabbitMQ</b>
          </li>

          <li class="about-list__item">
            <img class="about-img" src="img/about/apache.svg" alt="">
            <b class="about-b">Apache</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/nginx.png" alt="">
            <b class="about-b">Nginx</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/jade.png" alt="">
            <b class="about-b">Jade</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/node.svg" alt="">
            <b class="about-b">Node.js</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/oracle.png" alt="">
            <b class="about-b">Oracle</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/jira.png" alt="">
            <b class="about-b">Jira</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/docker.png" alt="">
            <b class="about-b">Docker</b>
          </li>
          <li class="about-list__item">
            <img class="about-img" src="img/about/confluence.png" alt="">
            <b class="about-b">Confluence</b>
          </li>
        </ul>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="sass">
.about
  color: #e1e1e1
  margin-bottom: 10%
  &-title
    &-h3
      color: #e1e1e1
      font-size: 24px!important
      font-family: 'Source Serif Pro', serif!important
  &-b
    font-size: 10px!important
    text-align: center
  &-img
    width: 100%
    max-width: 36px
    height: auto!important
    display: flex
    margin: 0 auto
    transition: 0.5s all
  &-list__item
    min-width: 40px
    min-height: 68px
    display: flex
    align-items: center
    justify-content: flex-end
    flex-direction: column
    flex-wrap: wrap
    margin-right: 16px
    cursor: pointer
.about-list__item:hover img
  max-width: 38px
.theme--light
  .about
    color: #000
    &-title
      &-h3
        color: #000
</style>
