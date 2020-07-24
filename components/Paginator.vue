<template>
  <div class="paginator text-center mt-6">
    <v-btn
      text
      class="paginator__button fontPoppins"
      @click="changeStep(-1)"
    >
      <v-icon>mdi-chevron-left</v-icon>
      Voltar
    </v-btn>

    <v-btn
      v-for="(item, index) in items"
      :key="index"
      rounded
      height="10px"
      width="10px"
      min-width="10px"
      class="pa-0 mx-1"
      depressed
      :color="isActiveStep(item) ? 'green' : 'gray'"
    />

    <v-btn
      text
      class="paginator__button fontPoppins"
      @click="changeStep(1)"
    >
      Próximo
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: [Object, Array],
      default: () => []
    },
    activeStep: {
      type: Number,
      default: null
    }
  },
  methods: {
    isActiveStep (step) {
      return this.activeStep === step
    },
    changeStep (page) {
      this.$emit('changeStep', page)
    }
  }
}
</script>

<style lang="scss" scoped>
.paginator__button {
  color: $grayMenu;
}
</style>
