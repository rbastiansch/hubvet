<template>
  <v-layout
    column
    justify-center
    align-center
    class="fullHeight"
  >
    <v-row justify="center">
      <v-col cols="8">
        <welcome />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import Welcome from '~/components/Welcome'

export default {
  components: {
    Welcome
  }
}
</script>
