<template>
  <div>
    <v-img
      :src="image"
      alt="first step"
      width="260px"
      height="210px"
      contain
      class="mx-auto"
    />
    <v-divider class="mt-0 mb-6" />
    <p
      class="welcome__steps__text"
      v-html="text"
    />
    <v-select
      v-model="selectValue"
      :items="items"
      label="O que você deseja fazer?"
      class="my-12"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    selectValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome__steps__text {
  font-size: 14px;
}

</style>
