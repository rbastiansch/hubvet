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
    <div
      v-else
      class="welcome__steps"
    >
      <step-content
        v-model="stepContentSelect"
        :image="selectData.img"
        :text="stepData.text"
        :items="stepData.items"
      />
      <div class="text-center">
        <v-btn
          color="welcome__steps__button green fontRoboto"
          @click="doSetup"
        >
          Realizar setup
        </v-btn>
      </div>
      <paginator
        :active-step="step"
        :items="stepsToPaginator"
        @changeStep="changeStep"
      />
    </div>
  </div>
</template>

<script>
import StepContent from '@/components/StepContent'
import Paginator from '@/components/Paginator'
import { STEPS, STEPS_DATA } from '@/enum/steps.enum'

export default {
  components: {
    StepContent,
    Paginator
  },
  data () {
    return {
      user: 'leolands',
      step: 0,
      stepsEnum: STEPS,
      page: 1,
      stepContentSelect: null
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
        return STEPS_DATA.first
      }

      return STEPS_DATA[currentStepKey]
    },
    selectData () {
      const { stepData, stepContentSelect } = this
      if (!stepData) {
        return {}
      }

      if (!stepContentSelect) {
        const firstKey = Object.keys(stepData.images)[0]
        return stepData.images[firstKey]
      }

      return stepData.images[stepContentSelect]
    },
    stepsToPaginator () {
      const copySteps = { ...this.stepsEnum }
      delete copySteps.start
      return copySteps
    }
  },
  methods: {
    doSetup () {
      const { user, currentStepKey, stepContentSelect } = this
      const info = {
        user,
        step: currentStepKey,
        option: stepContentSelect
      }
      this.$router.push({ name: 'result', params: { info } })
    },
    isStepActive (step) {
      return step === this.step
    },
    changeStep (number) {
      this.step = this.step + number
      this.resetSelection()
    },
    resetSelection () {
      this.stepContentSelect = null
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

.welcome__steps {
  max-width: 600px;
}

.welcome__steps__button {
  color: white;
  font-weight: 500;
}
</style>
