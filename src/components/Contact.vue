<template>
  <section class="contact">
    <h2 class="contact-title title-bor">Контакты</h2>
    <v-row>
      <v-col cols="12" md="6">
        <div class="contact-wrap">
          <h3 class="text-center mb-4">Связаться с нами</h3>
          <p class="text-justify mb-auto">
            Мы с удовольствием обсудим с вами все вопросы, идеи и предложения.<br>
            Для получения дополнительной информации или обсуждения,
            как мы можем взаимодействовать с вами, свяжитесь с нами, заполнив форму напротив.</p>
          <v-row>
            <v-col cols="6">
              <ul class="creator-list">
                <li><v-icon size="20">mdi-telegram</v-icon>: <a href="tg://resolve?domain=<shydlovich>">@shydlovich</a> </li>
              </ul>
            </v-col>
            <v-col cols="6">
              <ul class="creator-list text--primary">
                <li><v-icon size="20">mdi-at</v-icon>: <a href="mailto:shydlovich@gmail.com">shydlovich@gmail.com</a></li>
              </ul>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="contact-wrap">
          <v-text-field
              color="#f5ae51"
              label="Ваше имя"
              outlined
          ></v-text-field>
          <v-text-field
              label="Ваш email"
              outlined
          ></v-text-field>
          <v-textarea
              label="Ваше сообщение"
              co
              outlined>
          </v-textarea>
          <v-btn
              outlined
              color="#f5ae51"
              class="font-weight-bold mt-2"
              width="100%">
            Отправить сообщение
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style lang="sass">
.contact
  margin-bottom: 10%
  &-wrap
    display: flex
    flex-direction: column
    height: 100%
    padding: 30px
    .row
      flex-grow: initial!important
    .col
      padding-bottom: 0!important
</style>
