<template>
  <v-app dark>
    <v-main>
      <v-container class="fullHeight">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      height="60px"
      class="footer fontMontserrat"
    >
      <div class="footer__content d-flex justify-center align-center">
        <span>Mantido e feito com <v-icon color="red">mdi-heart-outline</v-icon></span>
        <span class="pl-1 pr-1">COPYRIGHT &copy; {{ new Date().getFullYear() }}</span>
        <v-img
          max-width="50px"
          src="hubvet.svg"
          alt="hubvet logo"
          class="ml-1 mr-1"
        />
        <span>Softwate LTDA</span>
        <v-btn
          icon
          class="footer__faq"
        >
          <v-icon size="40px">
            mdi-help-circle-outline
          </v-icon>
        </v-btn>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: transparent;
  font-size: 9px;
}

.footer__content {
  margin: auto;
}

.footer__faq {
  position: absolute;
  right: 20px;
}
</style>
