<template>
  <div class="main-div">
    <b-container>
      <b-modal hide-header hide-footer ref="my-modal" size="lg">
        <div class="d-block text-center">
          <b-row class="justify-content-end">
            <b-col cols="3" md="2" xl="2" lg="2" sm="2">
              <b-button
                size="sm"
                pill
                style="width: 40px; height: 35px"
                class=""
                variant="light"
                block
                @click="hideModal"
                ><img
                  style="width: 20px"
                  src="https://img.icons8.com/material-outlined/64/000000/delete-sign.png"
                />
              </b-button>
            </b-col>
          </b-row>
          <b-row class="row justify-content-center">
            <b-col cols="12" sm="12" md="12" lg="12" xl="12"
              ><h2 style="text-align: start; margin-left: 10%">
                Brows Your Job
              </h2></b-col
            >
            <b-col
              class="mt-1"
              style="background: #ffffff"
              v-for="(item, index) in subCat"
              :key="index"
              cols="6"
              md="6"
              xl="5"
              sm="6"
              lg="6"
            >
              <b-button
                @click="filterJob(item)"
                style="height: 40px"
                v-if="index < 56"
                variant="light"
                ><h5 style="text-align: start">{{ item }}</h5></b-button
              >
            </b-col>
          </b-row>
        </div>
      </b-modal>
      <b-row class="row justify-content-center">
        <b-col
          class="hide-xs"
          style="
            background: #ffffff;
            min-height: 100vh;
            border: 2px solid #d6d6d4;
          "
          cols="12"
          sm="12"
          md="3"
          lg="3"
          xl="3"
        >
          <b-row>
            <b-col class="mt-4" style="margin-top: 0px" lg="12" xl="12">
              <h3 style="margin-top: 20px">
                <img
                  src="https://img.icons8.com/material/24/26e07f/marker.png"
                /><span class="label mt-5">Select Location</span>
              </h3>
            </b-col>
            <b-col class="mt-0" cols="12" sm="10" md="12" xl="12" lg="12">
              <span class="label">State</span>
              <b-form-select
                class="filterInput"
                @change="stateFunc(countryInfo.countryCode, selectCity.isoCode)"
                v-model="selectCity"
              >
                <b-form-select-option
                  @click="filterCity"
                  v-for="item in allCitys"
                  :key="item.id"
                  :value="item"
                  >{{ item.isoCode }} {{ item.name }}</b-form-select-option
                >
              </b-form-select>
            </b-col>
            <b-col
              class="mt-4"
              cols="12"
              v-if="twon.length != 0"
              sm="12"
              md="12"
              xl="12"
              lg="12"
            >
              <span class="label">City</span>
              <b-form-select
                class="filterInput"
                @change="filterTown(item.name)"
                v-model="townSelect"
              >
                <b-form-select-option
                  v-for="item in twon"
                  :key="item.id"
                  :value="item"
                  >{{ item.name }}</b-form-select-option
                >
              </b-form-select>
            </b-col>
            <b-col cols="12" sm="12" md="12" lg="12" xl="12">
              <b-row>
                <b-col cols="12" sm="12" md="12" lg="12" xl="12">
                  <h3 style="margin-top: 20px">
                    <img
                      src="https://img.icons8.com/material/24/26e07f/calendar-12.png"
                    /><span class="label mt-5">Filter With Date</span>
                  </h3>
                </b-col>
                <b-col
                  class="mt-1 ckeck-item"
                  cols="12"
                  sm="12"
                  md="12"
                  lg="10"
                  xl="10"
                >
                  <b-form-checkbox
                    size="md"
                    @change="recentDate"
                    v-model="recent"
                  >
                    <h3>Recent</h3>
                  </b-form-checkbox>
                </b-col>
                <b-col
                  class="mt-1 ckeck-item"
                  cols="12"
                  sm="12"
                  md="12"
                  lg="10"
                  xl="10"
                >
                  <b-form-checkbox size="md" @change="oldDate" v-model="old">
                    <h3>Old</h3>
                  </b-form-checkbox>
                </b-col>
                <b-col class="mt-3" cols="12" sm="12" md="12" lg="11" xl="11">
                  <b-button
                    class=""
                    id="show-btn"
                    variant="light"
                    size="sm"
                    @click="showModal"
                  >
                    <b-row>
                      <b-col cols="12" md="12" xl="11" lg="11" sm="12">
                        <h3 style="text-align: start">
                          <img
                            class="mr-2"
                            src="https://img.icons8.com/material/24/26e07f/find-matching-job--v1.png"
                          />Change Category
                        </h3>
                      </b-col>
                    </b-row>
                  </b-button>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" sm="12" md="9" lg="9" xl="9">
          <b-row class="mt-2">
            <b-col cols="12" sm="12" md="12" xl="12" lg="12">
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
                    width: 12% !important;
                    height: 50px;
                    margin-bottom: 6px;
                    margin-left: -12%;
                    background: #4b8f1b;
                  "
                  size="1.4em;"
                  ><i size="1.4em" class="fas fa-search fa-2x"></i
                ></b-button>
              </div>
            </b-col>
            <b-col class="hide-md hide-lg my-2" cols="12" md="6" lg="3" xl="3">
              <div>
                <b-row style="background: #149777">
                  <b-col style="border-right: 2px solid #ffffff">
                    <b-button
                      disabled
                      style="
                        width: 100%;
                        background: #149777;
                        height: 40px;
                        border: 1px solid #149777;
                        font-size: 20px;
                        color: #ffffff;
                      "
                      variant="light"
                    >
                      Filter
                    </b-button>
                  </b-col>
                  <b-col>
                    <b-button
                      @click="showdiv"
                      style="
                        width: 100%;
                        background: #149777;
                        height: 40px;
                        border: 1px solid #149777;
                      "
                      variant="light"
                    >
                      <img
                        style="width: 25px"
                        src="https://img.icons8.com/material/48/ffffff/sorting-options--v1.png"
                      />
                    </b-button>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col
              :class="valueCheck ? 'hide-xs' : ''"
              style="
                background: #ffffff;

                border: 2px solid #d6d6d4;
              "
              class="my-2 hide-md hide-lg"
              cols="12"
              sm="12"
              md="3"
              lg="3"
              xl="3"
            >
              <b-row>
                <b-col class="mt-4" style="margin-top: 0px" lg="12" xl="12">
                  <h3 style="margin-top: 20px">
                    <img
                      src="https://img.icons8.com/material/24/26e07f/marker.png"
                    /><span class="label mt-5">Select Location</span>
                  </h3>
                </b-col>
                <b-col class="mt-0" cols="12" sm="10" md="12" xl="12" lg="12">
                  <span class="label">State</span>
                  <b-form-select
                    class="filterInput"
                    @change="
                      stateFunc(countryInfo.countryCode, selectCity.isoCode)
                    "
                    v-model="selectCity"
                  >
                    <b-form-select-option
                      @click="filterCity"
                      v-for="item in allCitys"
                      :key="item.id"
                      :value="item"
                      >{{ item.isoCode }} {{ item.name }}</b-form-select-option
                    >
                  </b-form-select>
                </b-col>
                <b-col
                  class="mt-4"
                  cols="12"
                  v-if="twon.length != 0"
                  sm="12"
                  md="12"
                  xl="12"
                  lg="12"
                >
                  <span class="label">City</span>
                  <b-form-select
                    class="filterInput"
                    @change="filterTown(item.name)"
                    v-model="townSelect"
                  >
                    <b-form-select-option
                      v-for="item in twon"
                      :key="item.id"
                      :value="item"
                      >{{ item.name }}</b-form-select-option
                    >
                  </b-form-select>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="12" xl="12">
                  <b-row>
                    <b-col cols="12" sm="12" md="12" lg="12" xl="12">
                      <h3 style="margin-top: 20px">
                        <img
                          src="https://img.icons8.com/material/24/26e07f/calendar-12.png"
                        /><span class="label mt-5">Filter With Date</span>
                      </h3>
                    </b-col>
                    <b-col
                      class="mt-1 ckeck-item"
                      cols="12"
                      sm="12"
                      md="12"
                      lg="10"
                      xl="10"
                    >
                      <b-form-checkbox
                        size="md"
                        @change="recentDate"
                        v-model="recent"
                      >
                        <h3>Recent</h3>
                      </b-form-checkbox>
                    </b-col>
                    <b-col
                      class="mt-1 ckeck-item"
                      cols="12"
                      sm="12"
                      md="12"
                      lg="10"
                      xl="10"
                    >
                      <b-form-checkbox
                        size="md"
                        @change="oldDate"
                        v-model="old"
                      >
                        <h3>Old</h3>
                      </b-form-checkbox>
                    </b-col>
                    <b-col
                      class="mt-3"
                      cols="12"
                      sm="12"
                      md="12"
                      lg="11"
                      xl="11"
                    >
                      <b-button
                        class=""
                        id="show-btn"
                        variant="light"
                        size="sm"
                        @click="showModal"
                      >
                        <b-row>
                          <b-col cols="12" md="12" xl="11" lg="11" sm="12">
                            <h3 style="text-align: start">
                              <img
                                class="mr-2"
                                src="https://img.icons8.com/material/24/26e07f/find-matching-job--v1.png"
                              />Change Category
                            </h3>
                          </b-col>
                        </b-row>
                      </b-button>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12" sm="12" md="12" xl="12" lg="12">
              <b-row class="mt-2">
                <b-col cols="12" sm="12" md="12" lg="12" xl="12">
                  <h5
                    style="
                      font-size: 16px;
                      margin-left: 2%;
                      color: black !important;
                      opacity: 0.8;
                      font-weight: 500;
                    "
                  >
                    <span style="cursor: pointer">Home/</span>
                    <span style="cursor: pointer">Job/</span>
                    <span style="cursor: pointer">Doctor</span>
                  </h5></b-col
                >
              </b-row>
              <recent-job />
              <b-row>
                <b-col
                  v-if="jobFilter.length == 0"
                  cols="10"
                  sm="10"
                  md="12"
                  xl="12"
                  lg="12"
                >
                  <b-row class="row justify-content-center">
                    <b-col cols="6" sm="8" md="6" lg="4" xl="4">
                      <img
                        style="width: 150px"
                        src="https://img.icons8.com/color/360/000000/spill.png"
                      />
                    </b-col>
                  </b-row>
                  <b-col cols="12" sm="12" md="12" lg="12" xl="12">
                    <b-row class="row justify-content-center">
                      <b-col cols="12" sm="8" md="6" lg="4" xl="4">
                        <h1 style="text-align: center; font-size: 13px">
                          No results found!
                          <img
                            width="34"
                            src="https://img.icons8.com/color/48/000000/disappointed.png"
                          />
                        </h1>
                      </b-col>
                    </b-row>
                  </b-col>
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
import { State, City } from "country-state-city";
export default {
  data() {
    return {
      placement: "bootoms",
      country: {},
      selectCity: {},
      show: false,
      townSelect: {},
      valueCheck: true,
      twon: [],
      allCitys: {},
      cityList: [],
      filterText: "",
      city: "",
      minPrice: "",
      maxPrice: "",
      zipCode: "",
      cityValue: true,
      rangeValue: false,
      expensive: false,
      lessExpensive: false,
      recent: false,
      old: false,
    };
  },
  computed: {
    countryInfo() {
      return this.$store.getters.countryInfo;
    },
    subCat() {
      return this.$store.getters.subCat;
    },
    jobFilter() {
      return this.$store.getters.jobFilter;
    },
  },
  mounted() {
    this.countryFunc(this.$store.getters.countryInfo.countryCode);
    this.$store.dispatch("subCatFilter", {
      category: "Jobs",
    });
  },
  methods: {
    showdiv() {
      this.valueCheck = !this.valueCheck;
    },
    zipFunc() {
      this.$store.dispatch("zipFunc", {
        zipCode: this.zipCode,
      });
    },
    oldDate() {
      this.$store.dispatch("oldDateJob");
      this.recent = false;
    },
    recentDate() {
      this.$store.dispatch("recentDateJob");
      this.old = false;
    },

    filterCity() {
      this.$store.dispatch("filterCityJob", {
        city: this.selectCity.name,
      });
    },
    filterTowns() {
      this.$store.dispatch("filterTownsJob", {
        town: this.townSelect.name,
      });
    },
    funcShow() {
      this.show = true;
    },
    countryFunc(e) {
      console.log(e);
      this.allCitys = State.getStatesOfCountry(e);
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    filterJob(e) {
      this.$store.dispatch("jobFilterSelect", {
        select: e,
      });
      this.$refs["my-modal"].hide();
    },
    filterFunc() {
      this.$refs["my-modal"].hide();
    },
    stateFunc(e, i) {
      this.twon = City.getCitiesOfState(e, i);
      console.log(this.twon);
      this.filterCity();
    },
    filterTown() {
      this.filterTowns();
    },
    Search() {
      this.$store.dispatch("jobSarch", {
        text: this.filterText,
      });
    },
    routeChange(e) {
      this.$store.dispatch("categoryFilter", {
        type: e,
      });
      this.filterText = e;
      this.$router.push("/products/" + e);
    },
    filterSub(e) {
      this.subCategoryValue = e;
      this.filterMain();
    },

    filterPrice() {
      this.$store.dispatch("filterPrice", {
        maxPrice: this.maxPrice,
        minPrice: this.minPrice,
      });
    },
    cityFun() {
      this.cityValue = true;
      this.rangeValue = false;
    },
    rangeFun() {
      this.rangeValue = true;
      this.cityValue = false;
    },
    showFalse() {
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .hide-xs {
    display: none;
  }
}
@media (min-width: 601px) and (max-width: 1200px) {
  .hide-md {
    display: none;
  }
}
@media only screen and (min-width: 1201px) {
  .hide-lg {
    display: none;
  }
}
.main-div {
  overflow-x: hidden !important;
}
h1 {
  font-family: "Maven Pro", sans-serif;
  text-align: start;
  font-weight: 900 !important;
  font-size: 19px;
  opacity: 1 !important;
  color: #181a52;
}
.input {
  width: 85%;
  height: 55px;
  margin-left: 7%;
  outline: none !important;
  border: 1px solid rgb(255, 255, 255);
  box-shadow: 0 0 10px #719ece;
}
.filterInput {
  background: rgb(222, 228, 223);
}
.scrollspy {
  position: relative;
  height: 180px;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-direction: column-reverse;
  border-radius: 20px 50px 20px 20px;
  .avatar-img {
    margin-left: 20%;
  }
  .text {
    justify-content: center;
    font-size: 16px;
    line-height: 19px;
    color: #0a0a0a;

    .user-text p {
      text-align: left;
      margin-right: 30%;
    }
    .sender-text p {
      text-align: left;
      margin-left: 30%;
    }
  }
}
::-webkit-scrollbar {
  width: 16px;
  height: 29px !important;
}

::-webkit-scrollbar-button {
  height: 29px !important;
}

::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 0px 0px 0px 0px;
}

::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}
.btn {
  width: 110% !important ;
  height: 30px;
  font-size: 12px;
}
.btn-sub {
  width: 100% !important ;
  height: 30px;
  border-radius: 5px;
  font-size: 12px;
}
p {
  font-weight: 700;
  text-align: center;
  opacity: 0.8;
  font-family: "Maven Pro", sans-serif;
}
.item p {
  font-family: "Maven Pro", sans-serif;
  text-align: start;
  font-weight: 900 !important;
  font-size: 13px;
  opacity: 1 !important;
  color: #181a52;
}
.btn-item:hover {
  background: #b3b0b0 !important;
}
h3 {
  font-family: "Maven Pro", sans-serif;

  font-size: 14px;
  font-weight: 700;
  opacity: 0.95;
  margin-top: 3px;
  color: #0f3124;
}
h2 {
  font-family: "Maven Pro", sans-serif;

  font-size: 16px;
  font-weight: 800;
  opacity: 0.95;
  margin-top: 3px;
  color: #0f3124;
}
h5 {
  font-family: "Maven Pro", sans-serif;
  font-size: 13px;
  font-weight: 600;
  opacity: 1;
  margin-top: 3px;
  color: #63aad5 !important;
}
.ckeck-item {
  background: #fafcfa;
  margin: 0 auto;
  padding: 8px;
  border-radius: 0px 15px 0px 15px;
}
.avatr-img {
  width: 35px;
  height: 35px;
}
</style>