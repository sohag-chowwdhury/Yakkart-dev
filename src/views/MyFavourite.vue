<template>
  <div>
    <b-container>
      <b-row class="row justify-contente-center">
        <b-col cols="12" sm="12" md="12" lg="3" xl="3">
          <user-profile />
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="8" xl="8">
          <favourite :items="favData" class="fav" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    favData() {
      return this.$store.getters.favData;
    },
  },
};
</script>
<style scoped>
</style>