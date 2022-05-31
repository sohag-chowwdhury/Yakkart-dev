<template>
  <div>
    <b-row>
      <b-card style="width: 100%">
        <b-row>
          <b-col cols="12" sm="4" md="5" xl="5" lg="5">
            <h5>
              Review:<img
                src="https://img.icons8.com/material/24/26e07f/star.png"
              />
              {{ reviewInfo.total / reviewInfo.number }}({{
                reviewInfo.number
              }})
            </h5>
          </b-col>
          <b-col cols="12" sm="8" md="7" xl="7" lg="7">
            <h4>
              <img
                src="https://img.icons8.com/material/24/26e07f/sorting-options.png"
              />
              <b-button
                size="sm"
                @click="funceStarDate('recent')"
                variant="light"
                >Recent</b-button
              >
              <b-button size="sm" @click="funceStarDate('old')" variant="light"
                >0ld</b-button
              >
              <b-button size="sm" variant="light">Helpful</b-button>
              <b-dropdown
                variant="light"
                size="sm"
                id="dropdown-offset"
                offset="25"
                text="All stars"
              >
                <b-dropdown-item @click="funceStar(5)" href="#"
                  >5 Star</b-dropdown-item
                >
                <b-dropdown-item @click="funceStar(4)" href="#"
                  >4 Star
                </b-dropdown-item>
                <b-dropdown-item @click="funceStar(3)" href="#"
                  >3 Star</b-dropdown-item
                >
                <b-dropdown-item @click="funceStar(2)" href="#"
                  >2 Star
                </b-dropdown-item>
                <b-dropdown-item @click="funceStar(1)" href="#"
                  >1 Star</b-dropdown-item
                >
              </b-dropdown>
            </h4>
          </b-col>
        </b-row>
      </b-card>
    </b-row>
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="12" xl="12">
        <all-rating />
      </b-col>
    </b-row>
    <b-row>
      <b-card v-if="user" class="mt-1" style="width: 100%">
        <b-row class="mt-2">
          <b-col
            v-if="reviewInfo.userStatus == false && reviewCheck == false"
            cols="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
          >
            <b-form-rating
              style="color: #4b8f1b"
              v-model="value"
            ></b-form-rating>
          </b-col>
        </b-row>
        <b-row v-if="reviewInfo.userStatus == false && reviewCheck == false">
          <b-col cols="12" sm="12" md="12" xl="12" lg="12" class="mt-1">
            <b-form-textarea
              class="input-field-text"
              type="text"
              v-model="text"
              placeholder="Write Your Comments"
            ></b-form-textarea>
          </b-col>
        </b-row>
        <b-row
          class="mt-2"
          v-if="reviewInfo.userStatus == false && reviewCheck == false"
        >
          <b-col cols="8" sm="8" xl="8" lg="8" md="8">
            <p>You could not able to update or delete.</p>
          </b-col>
          <b-col cols="4" sm="4" xl="4" lg="4" md="4">
            <b-button
              @click="reviewFunc"
              style="width: 98%; background: #4b8f1b"
              size="sm"
            >
              PUBLISH</b-button
            >
          </b-col>
        </b-row>
      </b-card>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      value: null,
      time: new Date().toLocaleString(),
      text: "",
      reviewCheck: false,
    };
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
    user() {
      return this.$store.getters.user;
    },
  },

  methods: {
    funceStar(e) {
      this.$store.dispatch("funceStar", {
        value: e,
      });
    },
    funceStarDate(e) {
      this.$store.dispatch("funceStarDate", {
        value: e,
      });
    },
    reviewFunc() {
      this.$store.dispatch("reviewFunc", {
        text: this.text,
        postId: this.item,
        img: this.$store.getters.userData.img,
        firstName: this.$store.getters.userData.firstName,
        lastName: this.$store.getters.userData.listName,
        creatorId: this.$store.getters.userData.creatorId,
        time: this.time,
        value: this.value,
      });
      this.reviewCheck = true;
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  h5 {
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
  p {
    text-align: start;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    font-family: "Maven Pro", sans-serif;
    margin-top: 3px;
  }
}
@media (min-width: 601px) and (max-width: 1200px) {
  h5 {
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
  p {
    text-align: start;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    font-family: "Maven Pro", sans-serif;
    margin-top: 3px;
  }
}
@media only screen and (min-width: 1201px) {
  h5 {
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
    margin-top: 3px;
  }
}
</style>