<template>
  <div>
    <b-container>
      <b-row class="row justify-content-center mt-2">
        <b-col cols="12" md="12" xl="12" lg="12" sm="12">
          <b-row class="row justify-content-center mt-2">
            <b-col cols="12" sm="10" md="10" xl="10" lg="10">
              <div style="margin: auto !important">
                <input
                  @keyup.enter="Search"
                  placeholder="Browse Your Job?"
                  v-model="filterText"
                  style=""
                  class="input"
                  type="text"
                  name="fname"
                />
                <b-button
                  @click="Search"
                  style="
                    width: 10% !important;
                    height: 45px;
                    margin-bottom: 6px;
                    margin-left: -10%;
                    background: #4b8f1b;
                  "
                  size="1.2em;"
                  ><i size="1.2em" class="fas fa-search fa-x"></i
                ></b-button>
              </div>
            </b-col>
            <b-col cols="6" sm="6" md="6" xl="6" lg="6">
              <h4 class="my-2" style="font-weight: 700; font-size: 15px">
                Brows Job
              </h4>
            </b-col>
            <b-col cols="6" sm="6" md="6" xl="6" lg="6">
              <h4
                class="my-2"
                style="
                  font-weight: 700;
                  font-size: 15px;
                  text-align: center !important;
                "
              >
                <b-button
                  @click="allJob('allJob')"
                  style="color: #4b8f1b"
                  variant="light"
                  >All Job
                  <img
                    src="https://img.icons8.com/material/24/26e07f/long-arrow-right--v2.png"
                /></b-button>
              </h4>
            </b-col>
            <b-col cols="12" md="12" sm="12" xl="12" lg="12">
              <b-row>
                <b-col
                  v-for="(item, index) in subCat"
                  :key="index"
                  class="6"
                  cols="6"
                  sm="6"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <b-row class="mt-3">
                    <b-button
                      @click="subSelectFunc(item)"
                      style="width: 98%; color: #63aad5"
                      variant="light"
                      size="sm"
                      class="mt-1"
                    >
                      <b-row>
                        <b-col cols="10" md="10" xl="10" lg="10" sm="10">
                          <h3>
                            {{ item }}
                          </h3>
                        </b-col>
                      </b-row>
                    </b-button>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      limitValue: 21,
    };
  },
  mounted() {
    this.$store.dispatch("subCatFilter", {
      category: "Jobs",
    });
  },
  methods: {
    allJob(e) {
      this.$store.dispatch("allJob", {
        all: e,
      });
      this.$router.push("/job");
    },
    jobFilter() {
      this.$store.dispatch("JobRecent", {
        text: this.filterText,
      });
    },
    Search() {
      this.$store.dispatch("jobSarch", {
        text: this.filterText,
      });
      this.$router.push("/job");
    },
    valuCheckFalse() {
      this.limitValue = 21;
    },
    subSelectFunc(e) {
      console.log(e);
      this.$store.dispatch("JobRecent", {
        select: e,
      });
      this.$router.push("/job");
    },
    valuCheckTrue() {
      this.limitValue = 100;
    },
  },

  computed: {
    subCat() {
      return this.$store.getters.subCat;
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
}
.input {
  width: 85%;
  height: 55px;
  margin-top: 20px;
  outline: none !important;
  border: 1px solid rgb(255, 255, 255);
  box-shadow: 0 0 10px #719ece;
}
h3 {
  margin: 0 !important;
  text-align: start !important;
  font-size: 14px !important;
  opacity: 1 !important;
  font-weight: 500;
  font-family: "Maven Pro", sans-serif;
}
h4 {
  margin-left: 0 !important;
  margin-top: 20px !important;
  text-align: start !important;
  font-size: 16px;
  font-weight: 500;
  font-family: "Maven Pro", sans-serif;
}
@media only screen and (min-width: 1201px) {
  .input {
    width: 85%;
    height: 46px;
    margin-top: 0px;
    outline: none !important;
    border: 1px solid rgb(255, 255, 255);
    box-shadow: 0 0 10px #719ece;
  }
  h3 {
    margin: 0 !important;
    text-align: start !important;
    font-size: 16px;
    font-weight: 500;
    font-family: "Maven Pro", sans-serif;
  }
  h4 {
    margin-left: 0 !important;
    margin-top: 20px !important;
    text-align: start !important;
    font-size: 16px;
    font-weight: 500;
    font-family: "Maven Pro", sans-serif;
  }
}
</style>