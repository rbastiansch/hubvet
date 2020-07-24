<template>
  <h1 v-if="!role">
    Usuário sem papel definido
  </h1>
  <h1 v-else-if="info">
    {{ info.user }}, seja bem vindo ao Ambiente: {{ role }}
  </h1>
</template>

<script>
import { SECTOR_TYPES_TRANSLATION } from '@/enum/steps.enum'

export default {
  data () {
    return {
      info: null,
      typesEnum: SECTOR_TYPES_TRANSLATION
    }
  },
  computed: {
    role () {
      const { typesEnum, info } = this
      if (!info) {
        return
      }
      return typesEnum[info.option]
    }
  },
  mounted () {
    this.info = this.$route.params.info
  }
}
</script>
