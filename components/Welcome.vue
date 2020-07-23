<template>
  <div class="welcome">
    <v-row
      v-if="isStepActive(stepsEnum.start)"
      align="center"
    >
      <v-col cols="5">
        <h1 class="welcome__title mb-2">
          Bem Vindo(a)!
        </h1>
        <p class="welcome__text">
          <b>{{ user }}</b>, Obrigado por ter escolhido a <b>Hubvet</b> como sua plataforma veterinária preferida. ;) Agora que você já está cadastrado, poderá usufluir da plataforma de diversas formas. Armazenar <b>informações do seu animal</b> em nuvem com total segurança, criar um Ambiente para Laboratório Veterinário ou Clínica Veterinária clicando no botão de setup logo abaixo.
        </p>
        <div class="d-flex justify-center">
          <v-tooltip
            bottom
            content-class="welcome__tooltip px-3 py-1"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
                @click="step = 1"
              >
                <v-icon size="34px">
                  mdi-play-circle-outline
                </v-icon>
              </v-btn>
            </template>
            <span>Iniciar meu ambiente</span>
          </v-tooltip>
        </div>
      </v-col>
      <v-col cols="7">
        <v-img
          src="/initial_drawer.svg"
          alt="initial drawer"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: 'leolands',
      step: 0,
      stepsEnum: {
        start: 0,
        first: 1,
        second: 2,
        third: 3
      }
    }
  },
  methods: {
    isStepActive (step) {
      return step === this.step
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  color: $accent;
}

.welcome__title {
  font-size: 32px;;
}

.welcome__text {
  font-size: 24px;
}
</style>
