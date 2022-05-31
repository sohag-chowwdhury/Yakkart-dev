<template>
  <div class="filter">
    <b-row>
      <b-col cols="12" sm="12" xl="12" md="12" lg="12">
        <b-card style="width: 100%; background: #fff">
          <div style="margin: auto !important">
            <b-row>
              <b-col cols="10" md="10" lg="11" xl="11" sm="10">
                <form @click="funcShow" @submit.prevent="Search">
                  <vue-bootstrap-typeahead
                    placeholder="What You are looking for?"
                    v-model="filterText"
                    style=""
                    class="input"
                    type="text"
                    name="fname"
                    :data="demo"
                    size="lg"
                  />
                </form>
              </b-col>
              <b-col cols="2" md="2" lg="1" xl="1" sm="2">
                <b-button
                  @click="Search"
                  style="
                    width: 150% !important;
                    height: 50px;
                    background: #4b8f1b;
                    margin-left: -60%;
                  "
                  size="1.4em;"
                  ><i size="1.4em" class="fas fa-search fa-2x"></i
                ></b-button>
              </b-col>
            </b-row>
          </div>

          <b-row v-if="show" style="border-bottom: 1px solid #dcdcde">
            <b-col
              class="mt-1"
              cols="6"
              sm="6"
              md="4"
              lg="4"
              xl="4"
              v-for="(item, index) in itesCat"
              :key="index"
            >
              <b-button
                variant="light"
                class="btn-item"
                size="sm"
                style="cursor: pointer; min-height: 40px"
                @click="routeChange(item.Title)"
              >
                <b-row class="row justify-content-center">
                  <b-row class="row justify-content-center">
                    <b-col cols="3" sm="10" md="4" lg="4" xl="4">
                      <b-img class="btn-img" :src="item.img"></b-img>
                    </b-col>
                    <b-col
                      class="btn-text"
                      cols="9"
                      sm="10"
                      md="8"
                      lg="8"
                      xl="8"
                    >
                      <h3>{{ item.Title }}</h3>
                    </b-col>
                  </b-row>
                </b-row>
              </b-button>
            </b-col>
          </b-row>
          <b-row
            v-if="show && subCatValue"
            style="border-bottom: 2px solid #FFFFFFF"
          >
            <b-col
              class="mt-1"
              cols="6"
              sm="6"
              md="4"
              lg="4"
              xl="4"
              v-for="(item, index) in subCat"
              :key="index"
            >
              <b-button
                @click="SubCatFunc(item)"
                variant="light"
                class="btn-item"
                size="sm"
                style="cursor: pointer; min-height: 40px"
              >
                <b-row class="row justify-content-center">
                  <b-col cols="10" sm="10" md="3" lg="3" xl="3"> </b-col>
                  <b-col class="item" cols="10" sm="10" md="12" lg="12" xl="12">
                    <p style="color: #0a0a0a !important">{{ item }}</p>
                  </b-col>
                </b-row>
              </b-button>
            </b-col>
          </b-row>

          <b-row v-if="show" class="row justify-content-end">
            <b-col cols="2" sm="2" md="1" lg="1" xl="1">
              <b-button
                @click="showFalse"
                variant="light"
                style="height: 20px; width: 30px !important"
              >
                <img
                  width="20"
                  src="https://img.icons8.com/color/96/000000/open-in-window.png"
                />
              </b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <!--
               <b-col  cols="6" size="sm" sm="6" md="3" xl="12" lg="12">
                   <b-button variant="success" class="btn mt-1" v-b-toggle.my-collapse ><span class="btn-icon"><i class="fas fa-th-list"></i></span> Sub Category</b-button>
               </b-col>
               <b-col cols="6" size="sm" sm="6" md="3" xl="3" lg="3">
                     <b-button class="btn mt-1" id="popover-5-bottom" variant="success"><span class="btn-icon"> <i class="fas fa-map-marker-alt"></i></span> Location</b-button>

                        <b-popover
                        target="popover-5-bottom"
                        :placement="placement"
                        triggers="hover focus"
                        >
                      <template >
                            <p >Filter with city and area Range</p>
                          <b-row>
                              <b-col cols="6" sm="6" md="6" lg="6" xl="6"><b-button :style="cityValue ? 'background:red;' :''" @click="cityFun"  variant="success" class="btn">City</b-button></b-col>
                               <b-col cols="6" sm="6" md="6"  lg="6" xl="6"><b-button  :style="rangeValue ? 'background:red;' :''"  @click="rangeFun" variant="success" class="btn">Range</b-button></b-col>
                         </b-row> 
                         <b-row class="mt-2">
                             <div  v-if="cityValue" class="scrollspy " style="margin:auto;">
                             <b-col cols="12" sm="12" md="12" xl="12" lg="12">
                                   <b-row style="width:200px" v-for="i in citys" :key="i.id" class="mt-1">
                                       <b-col cols="4" sm="4" md="3" xl="4" lg="4" >
                                           <b-avatar class="avatr-img" :src="avatarImg"></b-avatar>
                                       </b-col>
                                       <b-col cols="8" md="8" sm="8" xl="8" lg="8">
                                           <p style="" @click="filterCity(i.title)" class="mt-2">{{i.title}} </p>
                                       </b-col>
                                   </b-row>
                             </b-col>
                             </div>
                             <div style="margin:auto;"  v-if="rangeValue">
                                  <b-input placeholder="Range Ex: 5Km">                             
                                    </b-input> 
                                        <p class="mt-1">Or</p>
                                    <b-input v-model="zipCode" class="mt-1" placeholder="Zip Code">
                                    </b-input> 
                                     <b-row>
                             <b-col cols="10" xl="10" lg="10">
                                  <b-button @click="filterMain"  variant="success" class="mt-2 mx-2" size="small" style="width:100px;">Submit</b-button>
                             </b-col>
                         </b-row>
                             </div>
                         </b-row>
                      </template>
                    </b-popover>
               </b-col>
               <b-col cols="6" size="sm" sm="6" md="3" xl="3" lg="3">
                    <b-button class="btn mt-1" id="popover-2" variant="success"><span class="btn-icon"><i class="fas fa-exchange-alt"></i></span> Price</b-button>

                        <b-popover
                        target="popover-2"
                        :placement="placement"
                        triggers="hover focus"
                        >
                      <template >
                           <p >Filter with Price Range</p>
                          <b-input v-model="minPrice" placeholder="Minimum">
                             
                          </b-input> 
                            <p class="mt-1">To</p>
                           <b-input  v-model="maxPrice" class="mt-1" placeholder="Maximum">
                          </b-input> 
                         <b-row>
                             <b-col cols="10" xl="10" lg="10">
                                  <b-button  @click="filterPrice" variant="success" class="mt-2 mx-2" size="small" style="width:100px;">Submit</b-button>
                             </b-col>
                         </b-row>
                          </template>
                    </b-popover>
                  
               </b-col>
               <b-col cols="6"  size="sm" sm="6" md="3" xl="3" lg="3">
                  
                    <b-button class="btn mt-1" id="popover-4-bottom" variant="success"><span class="btn-icon"><i class="fas fa-hat-cowboy-side"></i></span> Latest</b-button>

                        <b-popover
                        target="popover-4-bottom"
                          :placement="placement"
                        triggers="hover focus"
                        >
                      <template >
                          
                        </template>
                    </b-popover>
               </b-col>
               -->
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
      demo: ["Canada", "Caanada", "Caaanada", "USA", "Mexico"],
      subCatValue: false,
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
      selectText: null,
      recent: false,
      catField: "",
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
          Title: "Vehicles",
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
          Title: "Education",
        },
        {
          id: 9,
          img: "https://img.icons8.com/color/480/000000/sports.png",
          icon: "fas fa-running",
          Title: "Sports",
        },
        {
          id: 10,
          img: "https://img.icons8.com/color/480/000000/hang-up-phone.png",
          icon: "fas fa-gifts",
          Title: "Mobile",
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
    subCat() {
      return this.$store.getters.subCat;
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
      this.subCatValue = true;
      this.catField = e;
      this.$store.dispatch("subCatFilter", {
        category: e,
      });
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
    SubCatFunc(e) {
      console.log(e, this.catField);
      this.$store.dispatch("subCatFunc", {
        SubCategory: e,
        category: this.catField,
      });
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
  .btn-img {
    width: 200%;
  }
  h3 {
    text-align: start;
    margin-top: 3% !important;
    font-family: "Maven Pro", sans-serif;
    margin: auto;
    font-weight: 800 !important;
    opacity: 0.9;
    font-size: 13px !important;
  }

  .input {
    width: 100%;
    height: 45px;
    outline: none !important;
    border: 1px solid rgb(255, 255, 255);
    box-shadow: 0 0 10px #719ece;
  }
  .filterInput {
    border-radius: 10px 10px 10px 10px;
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
    background: #1f5e1b;
    border-radius: 10px 0px 0px 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
  .btn {
    width: 100% !important ;
    height: 30px;
    font-size: 12px;
    font-family: "Maven Pro", sans-serif;
    margin-bottom: 2px;
  }
  .btn-sub {
    width: 100% !important ;
    height: 30px;
    border-radius: 5px;
    font-size: 12px;
    font-family: "Maven Pro", sans-serif;
  }
  .input-search {
    width: 100%;
    height: 45px;
    outline: none !important;
    border: 1px solid #fff;
    box-shadow: 0 0 10px #719ece;
  }
  .search-bg {
    margin-top: 10px !important;
    background-color: #10846f;
    padding: 8px;
    border-radius: 25px;
  }
  .search-bg2 {
    margin-top: 10px !important;
    background-color: #10846f;
    padding: 6px;
    border-radius: 25px;
  }
  .serch-nav h1 {
    text-align: center;
    font-family: "Maven Pro", sans-serif;
    font-size: 18px;
    color: #fff;
    margin-bottom: 10px;
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
    background: #ffffff !important;
  }
  .btn-item {
    background: #ffffff !important;
  }
  h3 {
    font-family: Loto;
    font-size: 14px;
    font-weight: 700;
    opacity: 0.95;
    margin-top: 3px;
    color: #0f3124;
    font-family: "Maven Pro", sans-serif;
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
  .btn-img {
    width: 80%;
  }
  .input {
    width: 100%;
    height: 45px;
    outline: none !important;
    border: 1px solid rgb(255, 255, 255);
    box-shadow: 0 0 10px #719ece;
  }
  .filterInput {
    border-radius: 10px 10px 10px 10px;
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
    background: #1f5e1b;
    border-radius: 10px 0px 0px 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
  .btn {
    width: 100% !important ;
    height: 30px;
    font-size: 12px;
    font-family: "Maven Pro", sans-serif;
    margin-bottom: 2px;
  }
  .btn-sub {
    width: 100% !important ;
    height: 30px;
    border-radius: 5px;
    font-size: 12px;
    font-family: "Maven Pro", sans-serif;
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
    background: #ffffff !important;
  }
  .btn-item {
    background: #ffffff !important;
  }
  h3 {
    font-family: Loto;
    font-size: 14px;
    font-weight: 700;
    opacity: 0.95;
    margin-top: 3px;
    color: #0f3124;
    font-family: "Maven Pro", sans-serif;
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
  .btn-img {
    width: 50%;
  }
  .input {
    width: 100%;
    height: 45px;
    outline: none !important;
    border: 1px solid rgb(255, 255, 255);
    box-shadow: 0 0 10px #719ece;
  }
  .filterInput {
    border-radius: 10px 10px 10px 10px;
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
    background: #1f5e1b;
    border-radius: 10px 0px 0px 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
  .btn {
    width: 100% !important ;
    height: 30px;
    font-size: 12px;
    font-family: "Maven Pro", sans-serif;
    margin-bottom: 2px;
  }
  .btn-sub {
    width: 100% !important ;
    height: 30px;
    border-radius: 5px;
    font-size: 12px;
    font-family: "Maven Pro", sans-serif;
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
    background: #ffffff !important;
  }
  .btn-item {
    background: #ffffff !important;
  }
  h3 {
    font-family: Loto;
    font-size: 14px;
    font-weight: 700;
    opacity: 0.95;
    margin-top: 3px;
    color: #0f3124;
    font-family: "Maven Pro", sans-serif;
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