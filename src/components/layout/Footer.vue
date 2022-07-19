<template>
    <footer class="pt-4 pb-4 ">
      <v-row class="align-center">
        <v-col cols="6">
            <p>&copy;2022</p>
        </v-col>
        <v-col cols="6">
            <ul class="social-list d-flex align-center">
              <li class="social-list__item mr-4">
                <a href="#" target="_blank" title="vk" class="social-list__link">
                  <v-icon
                      size="18">
                    mdi-vk
                  </v-icon>
                </a>
              </li>
              <li class="social-list__item mr-4">
                <a href="#" target="_blank" title="Instagram" class="social-list__link">
                  <v-icon
                      size="18">
                    mdi-instagram
                  </v-icon>
                </a>
              </li>
              <li class="social-list__item mr-4">
                <a href="#" title="facebook" target="_blank" class="social-list__link"> <v-icon
                    size="18">
                  mdi-facebook
                </v-icon>
                </a>
              </li>
              <li class="social-list__item mr-4">
                <a href="#" title="twitter" target="_blank" class="social-list__link">
                  <v-icon
                      size="18">
                    mdi-twitter
                  </v-icon>
                </a>
              </li>
              <li class="social-list__item">
                <a href="#" title="gmail" target="_blank" class="social-list__link"> <v-icon
                    size="18">
                  mdi-gmail
                </v-icon>
                </a>
              </li>
            </ul>
        </v-col>
      </v-row>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',

    };
</script>
