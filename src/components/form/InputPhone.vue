<template>
  <v-layout row wrap>
    <v-flex md8 xs12>
      <v-text-field
          :label="data.label"
          :name="data.name"
          :value="value"
          @focus="focus"
          @input="input"
          @blur="blur"
          mask="+## (###) ###-##-##"
      >
      </v-text-field>
    </v-flex>
    <v-flex md4 xs12>
      <FormAlert
          :error="error"
          :hint="data.hint"
          :showHint="showHint"
      />
    </v-flex>
  </v-layout>
</template>

<script>
  import inputMixin from '../../mixins/inputMixin';
  import FormAlert from "./FormAlert";

  export default {
    name: "InputPhone",
    components: {FormAlert},
    mixins: [inputMixin]
  }
</script>

<style scoped>

</style>