<template>
  <div>
    <b-row>
      <b-col cols="12" sm="12">
        <p style="margin-left: 2%">Select Your Country</p>
      </b-col>
      <b-col
        cols="4"
        sm="6"
        md="4"
        lg="4"
        xl="4"
        v-for="(item, index) in country"
        :key="index + '1'"
      >
        <b-card
          @click="countryFunc(item.isoCode, item.name)"
          size="sm"
          variant="light"
          style="width: 99%; cursor: pointer"
          class="my-1"
        >
          <b-row>
            <b-col cols="2" sm="2" md="2" lg="2" xl="2">
              <country-flag
                style="height: 35px"
                :country="item.isoCode"
                size="normal"
              />
            </b-col>
            <b-col cols="12" sm="10" md="10" lg="10" xl="10">
              <p class="mx-2 my-1" style="text-align: start">
                <span style="color: black">{{ item.name }}</span>
              </p>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { Country } from "country-state-city";
// DE FR CH IT AT CA US  NP IN BT AU ES KP JP TW
//Germany, france, switzerland, italy, austria, Canada, US, nepal, india, bhutan, australia, spain, korea, japan, taiwan ? These are target countries for userss .
export default {
  data() {
    return {
      country: [],
    };
  },
  created() {
    let data = Country.getAllCountries();
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].isoCode == "DE" ||
        data[i].isoCode == "FR" ||
        data[i].isoCode == "CH" ||
        data[i].isoCode == "IT" ||
        data[i].isoCode == "AT" ||
        data[i].isoCode == "CA" ||
        data[i].isoCode == "US" ||
        data[i].isoCode == "NP" ||
        data[i].isoCode == "IN" ||
        data[i].isoCode == "BT" ||
        data[i].isoCode == "AU" ||
        data[i].isoCode == "ES" ||
        data[i].isoCode == "KP" ||
        data[i].isoCode == "JP" ||
        data[i].isoCode == "TW"
      ) {
        this.country.push(data[i]);
        console.log;
      }
    }
  },
  methods: {
    countryFunc(i, j) {
      this.$store.dispatch("countrySet", {
        countryCode: i,
        countryName: j,
      });
    },

    allFunc() {
      this.checkValue = 240;
    },
    minFunc() {
      this.checkValue = 44;
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  p {
    font-weight: 700;
    opacity: 0.9;
    font-family: "Maven Pro", sans-serif;
    color: black;
    font-size: 10px;
  }
}
@media only screen and (min-width: 1201px) {
  p {
    font-weight: 700;
    opacity: 0.9;
    font-family: "Maven Pro", sans-serif;
    color: black;
  }
}
</style>