<template>
  <div>
    <b-row class="row justify-content-center" style="margin-top: 10px">
      <b-col cols="12" sm="12" md="12" xl="12" lg="12">
        <p style="text-align: start">
          Filter with location
          <img
            style="width: 25px"
            src="https://img.icons8.com/material/24/26e07f/marker--v1.png"
          />
        </p>
      </b-col>

      <b-col
        style="margin-top: -20px"
        cols="12"
        sm="12"
        md="12"
        xl="12"
        lg="12"
      >
        <h3 class="mt-3"><span class="label">State</span></h3>
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
        class="mt-2"
        style="margin-top: -20px"
        v-if="twon.length != 0"
        cols="12"
        sm="12"
        md="12"
        xl="12"
        lg="12"
      >
        <h3 class="mt-2"><span class="label">City</span></h3>
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
      <b-col
        style="margin-top: 2px !important"
        class="mt-4"
        cols="12"
        sm="12"
        md="12"
        xl="12"
        lg="12"
      >
        <h3 class="mt-2"><span class="label mt-4">Zip Code</span></h3>
        <b-form-input
          class="filterInput"
          v-model="zipCode"
          @keyup.enter="zipFunc"
          placeholder="Zip Code"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row class="row justify-content-center" style="margin-top: 20px">
      <b-col cols="12" md="12" sm="12" xl="12" lg="12">
        <b-row>
          <b-col cols="12" md="12" xl="12" lg="12" sm="12">
            <h3>
              <img
                style="width: 30px"
                src="https://img.icons8.com/color/48/000000/price-tag-usd--v2.png"
              />Price
            </h3>
          </b-col>
          <b-col cols="6" sm="12" md="12" xl="12" lg="12">
            <b-input   v-model="minPrice" class="mt-1 filterInput" placeholder=" Minimum">
            </b-input>
          </b-col>
          <b-col class="mt-1" cols="6" sm="12" md="12" xl="12" lg="12">
            <b-input v-model="maxPrice" class="filterInput" placeholder="Maximum"> </b-input>
          </b-col>
          <b-col class="mt-4" cols="12" sm="12" md="12" xl="12" lg="12">
            <b-button
              @click="filterPrice"
              variant="success"
              class="mt-1 mx-2"
              size="small"
              style="width: 90% !important"
              >Submit</b-button
            >
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" md="12" sm="12" xl="12" lg="12">
        <b-row class="row justify-content-center">
          <b-col class="mt-4" cols="12" md="12" sm="12" xl="12" lg="12">
            <h3>
              Latest
              <img
                width="20px"
                src="https://img.icons8.com/material/24/000000/sorting-options--v1.png"
              />
            </h3>
          </b-col>

          <b-col
            class="mt-1 ckeck-item"
            cols="6"
            sm="12"
            md="12"
            lg="10"
            xl="10"
          >
            <b-form-checkbox
              @change="expensiveFilter"
              size="md"
              v-model="expensive"
            >
              <h3>Expensive</h3>
            </b-form-checkbox>
          </b-col>
          <b-col
            class="mt-1 ckeck-item"
            cols="6"
            sm="12"
            md="12"
            lg="10"
            xl="10"
          >
            <b-form-checkbox
              @change="lessExFilter"
              size="md"
              v-model="lessExpensive"
            >
              <h3>Less Expensive</h3>
            </b-form-checkbox>
          </b-col>
          <b-col
            @click="recentDate"
            class="mt-1 ckeck-item"
            cols="6"
            sm="12"
            md="12"
            lg="10"
            xl="10"
          >
            <b-form-checkbox size="md" v-model="recent">
              <h3>Recent</h3>
            </b-form-checkbox>
          </b-col>
          <b-col
            @click="oldDate"
            class="mt-1 ckeck-item"
            cols="6"
            sm="12"
            md="12"
            lg="10"
            xl="10"
          >
            <b-form-checkbox size="md" v-model="old">
              <h3>Old</h3>
            </b-form-checkbox>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { State, City } from "country-state-city";
export default {
  props: ["cat"],
  data() {
    return {
      placement: "bootoms",
      country: {},
      selectCity: {},
      show: false,
      townSelect: {},
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
      avatarImg: require("@/assets/img/chat/profile.jpg"),
      itesCat: [
        {
          id: 1,
          img: "https://img.icons8.com/color/480/000000/womens-shirt.png",
          icon: "fas fa-tshirt",
          Title: "Cloths",
        },
        {
          id: 2,
          img: "https://img.icons8.com/color/480/000000/multiple-devices.png",
          icon: "fas fa-plug",
          Title: "Electronics",
        },
        {
          id: 3,
          img: "https://img.icons8.com/color/480/000000/furniture.png",
          icon: "fas fa-couch",
          Title: "Furnitures",
        },
        {
          id: 4,
          img: "https://img.icons8.com/color/480/000000/carpool.png",
          icon: "fas fa-car",
          Title: "Cars",
        },
        {
          id: 5,
          img: "https://img.icons8.com/color/480/000000/inland.png",
          icon: "fas fa-home",
          Title: "Real Estates",
        },
        {
          id: 6,
          img: "https://img.icons8.com/color/480/000000/lol-surprise.png",
          icon: "fas fa-child",
          Title: "Kids",
        },
        {
          id: 7,
          img: "https://img.icons8.com/color/480/000000/kawaii-french-fries.png",
          icon: "fas fa-utensils",
          Title: "Foods",
        },
        {
          id: 8,
          img: "https://img.icons8.com/color/480/000000/books.png",
          icon: "fas fa-book",
          Title: "Books",
        },
        {
          id: 9,
          img: "https://img.icons8.com/color/480/000000/sports.png",
          icon: "fas fa-running",
          Title: "Sports",
        },
        {
          id: 10,
          img: "https://img.icons8.com/color/480/000000/new-job.png",
          icon: "fas fa-briefcase-medical",
          Title: "Jobs",
        },
        {
          id: 11,
          img: "https://img.icons8.com/color/480/000000/earrings.png",
          icon: "fas fa-gifts",
          Title: "Antiques",
        },
      ],
    };
  },
  computed: {
    countryInfo() {
      return this.$store.getters.countryInfo;
    },
  },
  mounted() {
    this.countryFunc(this.$store.getters.countryInfo.countryCode);
  },
  methods: {
    zipFunc() {
      this.$store.dispatch("zipFunc", {
        zipCode: this.zipCode,
      });
    },
    oldDate() {
      this.$store.dispatch("oldDate");
      this.recent = false;
    },
    recentDate() {
      this.$store.dispatch("recentDate");
      this.old = false;
    },
    expensiveFilter() {
      this.$store.dispatch("expensiveFilter");
      this.lessExpensive = false;
    },
    lessExFilter() {
      this.$store.dispatch("lessExFilter");
      this.expensive = false;
    },
    filterCity() {
      this.$store.dispatch("filterCity", {
        city: this.selectCity.name,
      });
    },
    filterTowns() {
      this.$store.dispatch("filterTowns", {
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
    stateFunc(e, i) {
      this.twon = City.getCitiesOfState(e, i);
      console.log(this.twon);
      this.filterCity();
    },
    filterTown() {
      this.filterTowns();
    },
    Search() {
      this.$store.dispatch("filterSarch", {
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
  .input {
    width: 85%;
    height: 35px;
    margin-left: 7%;
    outline: none !important;
    border: 1px solid rgb(175, 173, 173);
    box-shadow: 0 0 10px #719ece;
    border-radius: 25px 25px 25px 25px;
  }
  .filterInput {
    background: rgb(244, 248, 244);
    height: 30px;
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
    font-family: Loto;
    font-size: 12px;
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
    font-family: Loto;
    font-size: 13px;
    font-weight: 700;
    opacity: 0.95;
    margin-top: 3px;
    color: #0f3124;
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
}
@media (min-width: 601px) and (max-width: 1200px) {
   .input {
    width: 85%;
    height: 45px;
    margin-left: 7%;
    outline: none !important;
    border: 1px solid rgb(175, 173, 173);
    box-shadow: 0 0 10px #719ece;
    border-radius: 25px 25px 25px 25px;
  }
  .filterInput {
    background: rgb(244, 248, 244);
    height: 30px;
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
    background: #cdcecd;
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
    font-family: Loto;
    font-size: 13px;
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
    font-family: Loto;
    font-size: 12px;
    font-weight: 700;
    opacity: 0.95;
    margin-top: 3px;
    color: #0f3124;
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
}
@media only screen and (min-width: 1201px) {
  .input {
    width: 85%;
    height: 45px;
    margin-left: 7%;
    outline: none !important;
    border: 1px solid rgb(175, 173, 173);
    box-shadow: 0 0 10px #719ece;
    border-radius: 25px 25px 25px 25px;
  }
  .filterInput {
    background: rgb(244, 248, 244);
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
    background: #cdcecd;
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
    font-family: Loto;
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
    font-family: Loto;
    font-size: 14px;
    font-weight: 700;
    opacity: 0.95;
    margin-top: 3px;
    color: #0f3124;
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
}
</style>