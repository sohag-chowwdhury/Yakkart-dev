<template>
  <div style="overflow-x: hidden">
    <b-container>
      <b-row class="row justify-content-center">
        <b-row>
          <b-col class="hide-xs"
            style="background: #ffffff"
            cols="12"
            sm="12"
            md="3"
            xl="3"
            lg="3"
          >
            <filter-left />
          </b-col>
          <b-col>
            <b-row>
              <b-col cols="12" sm="12" md="12" lg="12" xl="12">
                <filter-data :cat="$route.params.id" />
              </b-col>
              <b-col cols="12" sm="6" md="12" lg="12" xl="12">
                 <b-col class="hide-md hide-lg" cols="12" md="6" lg="3" xl="3">
                       <div>
                         <b-row style="background: #149777;">
                           <b-col style=" border-right: 2px solid #FFFFFF;">
                             <b-button disabled style="width:100%; background: #149777; height:35px ; border: 1px solid #149777; font-size:18px; color:#FFFFFF" variant="light">
                                 Filter
                             </b-button>
                           </b-col>
                           <b-col>
                             <b-button  @click="showdiv" style="width:100%; background: #149777;height:35px;border: 1px solid #149777;" variant="light">
                               <img v-if="checkValue === true" style="width:23px" src="https://img.icons8.com/material/48/ffffff/sorting-options--v1.png"/>
                               <img  v-if="checkValue === false" style="width:23px" src="https://img.icons8.com/material/24/ffffff/multiply--v1.png"/>
                             </b-button>
                           </b-col>
                         </b-row>
                       </div>
                     
                  </b-col>
                 <b-col  :class="checkValue? 'hide-xs':''" class="hide-md hide-lg" cols="12" md="6" lg="3" xl="3">
                       <filter-left />
                  </b-col>
                  
                <b-col cols="10" sm="8" md="6" lg="3" xl="3">
                  <h3>
                    <img
                      style="width: 22px"
                      src="https://img.icons8.com/color/96/000000/tag-window.png"
                    />
                    <span style="cursor:pointer" @click="routeHome">Home<img style="width:18px" src="https://img.icons8.com/material/24/000000/chevron-right.png"/>
       </span> {{ $route.params.id }}
                  </h3>
                </b-col>
                 
                <product-recent
                  v-if="filterData.length != 0"
                  :items="filterData"
                />
              </b-col>
              <b-col
                v-if="filterData.length == 0"
                cols="10"
                sm="10"
                md="12"
                xl="12"
                lg="12"
              >
                <b-row class="row justify-content-center">
                  <b-col cols="8" sm="8" md="6" lg="4" xl="4">
                    <img
                      style="width: 150px"
                      src="https://img.icons8.com/color/360/000000/spill.png"
                    />
                  </b-col>
                </b-row>
                <b-col cols="12" sm="12" md="12" lg="12" xl="12">
                  <b-row class="row justify-content-center">
                    <b-col cols="10" sm="8" md="6" lg="4" xl="4">
                      <h1>
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
      </b-row>
    </b-container>
  </div>
</template>
<script>
import FilterLeft from "../components/Products/FilterLeft.vue";
export default {
  components: { FilterLeft },
  data() {
    return {
      keyValue: [],
      key: "",
      checkValue: true,
    };
  },
  methods:{
    showdiv(){
      this.checkValue =  !this.checkValue
    },
    routeHome(){
      this.$router.push("/")
    }
  },
  computed: {
    filterData() {
      return this.$store.getters.filterData;
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .hide-xs {
    display: none;
  }
  h1 {
    font-family: "Maven Pro", sans-serif;
    text-align: center;
    font-weight: 900 !important;
    font-size: 16px;
    opacity: 1 !important;
    color: #181a52;
  }
}
@media (min-width: 601px) and (max-width: 1200px) {
   .hide-md {
    display: none;
  }
   h1 {
    font-family: "Maven Pro", sans-serif;
    text-align: start;
    font-weight: 900 !important;
    font-size: 17px;
    opacity: 1 !important;
    color: #181a52;
  }
  }
@media only screen and (min-width: 1201px) {
   .hide-lg {
    display: none;
  }
  h1 {
    font-family: "Maven Pro", sans-serif;
    text-align: start;
    font-weight: 900 !important;
    font-size: 19px;
    opacity: 1 !important;
    color: #181a52;
  }
}

h3 {
  font-family: "Maven Pro", sans-serif;
  text-align: start;
  font-weight: 500 !important;
  font-size: 16px;
  opacity: 1 !important;
  opacity: 0.9;
  color: #000000;
}
.btn {
  width: 110% !important ;
  height: 30px;
  border-radius: 25px;
  font-size: 12px;
}
</style>