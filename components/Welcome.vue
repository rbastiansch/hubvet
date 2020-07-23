<template>
  <div class="welcome d-flex align-center fullHeight">
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
    <div class="welcome__steps">
      <div v-if="isStepActive(stepsEnum.first)">
        <v-img
          :src="selectData.img"
          alt="first step"
          width="260px"
          height="210px"
          contain
          class="mx-auto"
        />
        <p
          class="welcome__steps__text"
          v-html="selectData.text"
        />
        <v-select
          v-model="selectValue"
          :items="[{value: 'option1', text: 'Opção 1'}, {value: 'option2', text: 'Opção 2'}]"
          label="O que você deseja fazer?"
          class="my-12"
        />
      </div>
    </div>
  </div>
</template>

<script>

const stepDataInfos = {
  default: {
    option1: {
      img: '/step1option1.svg',
      text: '<b>Cuide</b> e <b>Aumente</b> a <b>receita</b> do seu <b>Laboratório</b>. Ofereça à seus clientes um ambiente <b>seguro</b> e <b>eficaz</b>.'
    },
    option2: {
      img: '/step1option2.svg',
      text: '<b>Cuide</b> e <b>Aumente</b> a <b>receita</b> do seu <b>Laboratório</b>. Ofereça à seus clientes um ambiente <b>seguro</b> e <b>eficaz</b>.'
    }
  },
  first: {
    option1: {
      img: '/step1option1.svg',
      text: '<b>Cuide</b> e <b>Aumente</b> a <b>receita</b> do seu <b>Laboratório</b>. Ofereça à seus clientes um ambiente <b>seguro</b> e <b>eficaz</b>.'
    },
    option2: {
      img: '/step1option2.svg',
      text: '<b>Cuide</b> e <b>Aumente</b> a <b>receita</b> do seu <b>Laboratório</b>. Ofereça à seus clientes um ambiente <b>seguro</b> e <b>eficaz</b>.'
    }
  }
}

export default {
  data () {
    return {
      user: 'leolands',
      step: 1,
      stepsEnum: {
        start: 0,
        first: 1,
        second: 2,
        third: 3
      },
      selectValue: null
    }
  },
  computed: {
    currentStepKey () {
      const { step, stepsEnum } = this
      let result = null
      for (const key in stepsEnum) {
        const value = stepsEnum[key]
        if (value === step) {
          result = key
        }
      }

      return result
    },
    stepData () {
      const { currentStepKey } = this
      if (!currentStepKey) {
        return stepDataInfos.default
      }

      return stepDataInfos[currentStepKey]
    },
    selectData () {
      const { stepData, selectValue } = this
      if (!selectValue) {
        return stepData.option1
      }

      return stepData[selectValue]
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

.welcome__steps__text {
  font-size: 14px;
}
</style>
