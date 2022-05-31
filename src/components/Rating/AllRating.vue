<template>
  <div style="width: 100%">
    <b-row>
      <b-card
        style="width: 100%"
        v-for="(item, index) in review"
        :key="index + '1'"
        class="mt-1"
      >
        <b-row>
          <b-col cols="4" sm="4" md="3" lg="3" xl="3">
            <b-avatar :src="item.img" style="height: 6em; width: 6em">
            </b-avatar>
          </b-col>
          <b-col cols="8" sm="8" md="9" lg="9" xl="9">
            <h3>
              <img
                style="width: 25px"
                src="https://img.icons8.com/material/50/26e07f/filled-star--v2.png"
              />
              <span style="margin-top:15px; !important">{{ item.value }}</span>
              <p style="font-size: 15px">
                by {{ item.firstName }} {{ item.lastName }}, {{ item.time }}
              </p>
              <p style="font-size: 15px">{{ item.text }}</p>
            </h3>
          </b-col>
        </b-row>
      </b-card>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    userData() {
      return this.$store.getters.userData;
    },
    review() {
      return this.$store.getters.review;
    },
    reviewInfo() {
      return this.$store.getters.reviewInfo;
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  h3 {
    text-align: start;
    font-size: 17px;
    font-weight: 500;
    color: #000000;
    font-family: "Maven Pro", sans-serif;
    margin-top: 3px;
  }
  h4 {
    text-align: start;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    font-family: "Maven Pro", sans-serif;
    margin-top: 3px;
  }
}
@media (min-width: 601px) and (max-width: 1200px) {
  h3 {
    text-align: start;
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    font-family: "Maven Pro", sans-serif;
    margin-top: 3px;
  }
  h4 {
    text-align: start;
    font-size: 24px;
    font-weight: 500;
    color: #000000;
    font-family: "Maven Pro", sans-serif;
    margin-top: 3px;
  }
}
@media only screen and (min-width: 1201px) {
  h3 {
    text-align: start;
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    font-family: "Maven Pro", sans-serif;
    margin-top: 3px;
  }
  h4 {
    text-align: start;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    font-family: "Maven Pro", sans-serif;
    margin-top: 3px;
  }
  p {
    text-align: start;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    font-family: "Maven Pro", sans-serif;
    opacity: 0.9;
    margin-top: 3px;
    line-height: 25px;
  }
}
</style>