<template>
  <div>
  <section class="project">
    <h2 class="project-title title-bor">Проэкты</h2>
    <v-row>
      <v-col
          v-for="(item, i) in projects"
          class="d-flex child-flex"
          cols="4">
        <v-img
          :src="`https://picsum.photos/500/300?image=${item.image}`"
          aspect-ratio="1"
          @click="openProject(i)"
          class="primary">
          <section class="project-description">
            <h3>{{item.title}}</h3>
            <p>{{item.text}}</p>
          </section>
        </v-img>
      </v-col>
    </v-row>
  </section>
    <modal
        v-model="showProject"
        :project="itemProject"
    />
  </div>
</template>

<script>

import Modal from "@/components/Modal";
export default {
  name: "Projects",
  components: {Modal},
  data() {
    return {
      itemProject: {},
      showProject: false,
      projects: [{
        title: "Мосенерго",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at beatae consequatur doloribus eaque error et fugit incidunt natus omnis," +
            " quis quos reprehenderit sint vel velit vero voluptatem. A, repellendus?",
        image: "5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        technologies: ["html", "css", "php"]
        },
        {
          title: "Русгидро",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at beatae consequatur doloribus eaque error et fugit incidunt natus omnis," +
              " quis quos reprehenderit sint vel velit vero voluptatem. A, repellendus?",
          image: "50",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          technologies: ["html", "css", "php", "jvascript", "java", "vue.js"]
        },
        {
          title: "Гугл",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum explicabo nemo quasi reiciendis? Adipisci alias aliquam architecto at autem blanditiis commodi consectetur corporis debitis deleniti dolore dolores ea enim eos error et expedita fuga in ipsum iste iure laborum magnam necessitatibus officia placeat quae qui quidem quisquam quod quos, rem soluta, sunt temporibus tenetur voluptas voluptate voluptatibus! Accusamus alias aperiam consectetur, eius fugit illo modi mollitia neque nostrum placeat quo quos reiciendis rem, saepe soluta, ut vitae." +
              " Alias, cupiditate, labore! Accusantium dolore ducimus enim, eos error est expedita facere iste maxime nisi numquam pariatur perspiciatis placeat quibusdam reiciendis sequi velit?",
          image: "15",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          technologies: ["html", "css", "php", "jvascript", "java", "vue.js"]
        },
        {
          title: "Яндекс",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at beatae consequatur doloribus eaque error et fugit incidunt natus omnis," +
              " quis quos reprehenderit sint vel velit vero voluptatem. A, repellendus?",
          image: "28",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          technologies: ["html", "css", "php", "jvascript", "java", "vue.js"]
        },
        {
          title: "Ифр",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum explicabo nemo quasi reiciendis? Adipisci alias aliquam architecto at autem blanditiis commodi consectetur corporis debitis deleniti dolore dolores ea enim eos error et expedita fuga in ipsum iste iure laborum magnam necessitatibus officia placeat quae qui quidem quisquam quod quos, rem soluta, sunt temporibus tenetur voluptas voluptate voluptatibus! Accusamus alias aperiam consectetur, eius fugit illo modi mollitia neque nostrum placeat quo quos reiciendis rem, saepe soluta, ut vitae." +
              " Alias, cupiditate, labore! Accusantium dolore ducimus enim, eos error est expedita facere iste maxime nisi numquam pariatur perspiciatis placeat quibusdam reiciendis sequi velit?",
          image: "69",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          technologies: ["html", "css", "php", "jvascript", "java", "vue.js"]
        },
        {
          title: "21 Век",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at beatae consequatur doloribus eaque error et fugit incidunt natus omnis," +
              " quis quos reprehenderit sint vel velit vero voluptatem. A, repellendus?",
          image: "72",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          technologies: ["html", "css", "php", "jvascript", "java", "vue.js"]
        },

      ]
    }
  },
  methods: {
    openProject(i) {
      this.itemProject = this.projects[i]
      this.showProject = true

    }
  }
}
</script>

<style lang="sass">
.project
  color: #e1e1e1
  margin-bottom: 10%
  &-description
    width: 100%
    height: 100%
    padding: 16px
    display: none
    align-items: center
    justify-content: center
    flex-direction: column
    background-color: rgba(0,0,0,0.72)
    transition: 0.3s all
    cursor: pointer
  p
    width: 100%
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
.project .v-image:hover .project-description
  display: flex
</style>
