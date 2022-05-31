<template>
  <div style="overflow-x: hidden">
    <go-top style="margin-left:90%;" :right="110" :z-index="1100" :bottom="0" :size=100 bg-color="#10846F" :radius="5"></go-top>
    <b-container>
      <b-row class="row justify-content-center">
        <b-col
          v-if="countryInfo.countryCode == undefined"
          cols="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
        >
          <country-list />
        </b-col>
        <b-col
          v-if="countryInfo.countryCode != undefined"
          cols="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
        >
          <cat />
        </b-col>
      </b-row>
      <b-row
        v-if="countryInfo.countryCode != undefined"
        class="row justify-content-start"
      >
        <b-col class="recent" cols="10" sm="8" md="12" lg="12" xl="12">
          <h3>Recent Post</h3>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="12" xl="12">
          <products-home :items="productRecent" />
        </b-col>
        <!--
        <b-col cols="12" class="mt-3" md="12" lg="4" xl="4">
          <b-card style="height: auto">
            <h4>
              <img
                src="https://img.icons8.com/material/24/4a90e2/property.png"
              /><span class="mx-2">Safety tips</span>
            </h4>
            <ul>
              <li>Avoid offers that look unrealistic</li>
              <li>Chat with seller to clarify item details</li>
              <li>Meet in a safe & public place</li>
              <li>Check the item before buying it</li>
              <li>Don’t pay in advance</li>
            </ul>
          </b-card>
        </b-col>
        -->
      </b-row>
    </b-container>
    <footer />
  </div>
</template>
<script>
import GoTop from "@inotom/vue-go-top";

export default {
  components: {
    GoTop,
  },
  data() {
    return {
      sizeButton: 40,
      toggle: false,
      country: "",
      region: "",
      slider: [
        {
          id: "1",
          img: require("@/assets/img/slide/Slider1.jpg"),
          heading: "Heading1",
          title: "I hope you are Havenig Greate Day",
          buttonText: "Shoping Now",
          link: "/",
        },
        {
          id: "2",
          img: require("@/assets/img/slide/slider2.jpg"),
          heading: "Heading2",
          title: "I hope you are Havenig Greate Day",
          buttonText: "Shoping Now",
          link: "/",
        },
        {
          id: "3",
          img: require("@/assets/img/slide/slider3.jpg"),
          heading: "Heading3",
          title: "I hope you are Havenig Greate Day",
          buttonText: "Shoping Now",
          link: "/",
        },
      ],
    };
  },
  methods: {
    toggleFun() {
      this.toggle = !this.toggle;
    },
  },
  created() {
    this.$store.dispatch("productRecent");
  },
  computed: {
    productRecent() {
      return this.$store.getters.productRecent;
    },
    countryInfo() {
      return this.$store.getters.countryInfo;
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .hide-x {
    display: none !important;
  }
  ul li {
    font-family: "Maven Pro", sans-serif;
    font-size: 14px;
    margin: 10px;
    font-weight: 600;
    opacity: 0.8;
    margin-top: 20px;
  }
  h4 {
    font-family: "Maven Pro", sans-serif;
    font-size: 20px;
    text-align: center;
    margin: 10px;
    font-weight: 600;
  }
  .recent h3 {
    color: #000;
    margin-top: 40px !important;
    font-size: 16px !important;
    text-align: start;
    font-family: "Maven Pro", sans-serif;
    margin-top: auto;
    opacity: 0.8;
  }
  .hide-l {
    display: none !important;
  }
  .b-carousel-slides {
    height: 70vh !important ;
    width: 100%;
  }
  .slider {
    margin-left: 0% Important;
    align-content: start;
    margin-bottom: 50% !important;
    margin-right: 80% !important;
  }
  h3 {
    font-family: Loto;
    text-align: start;
    font-weight: 600 !important;
    letter-spacing: 1px;
    font-size: 34px;
  }
  p {
    font-family: Loto;
    text-align: start;

    letter-spacing: 1px;
    font-size: 18px;
  }
  .btn {
    justify-content: start;
    text-align: start;
    margin-right: 50% !important;
    width: 50%;
  }
}

@media (min-width: 601px) and (max-width: 1200px) {
  .hide-m {
    display: none !important;
  }
  ul li {
    font-family: "Maven Pro", sans-serif;
    font-size: 14px;
    margin: 10px;
    font-weight: 600;
    opacity: 0.8;
    margin-top: 20px;
  }
  h4 {
    font-family: "Maven Pro", sans-serif;
    font-size: 20px;
    text-align: center;
    margin: 10px;
    font-weight: 600;
  }
  .recent h3 {
    color: #000;
    margin-top: 40px !important;
    font-size: 16px !important;
    text-align: start;
    font-family: "Maven Pro", sans-serif;
    margin-top: auto;
    opacity: 0.8;
  }

  .b-carousel-slides {
    height: 70vh !important ;
    width: 100%;
  }
  .slider {
    margin-left: 0% Important;
    align-content: start;
    margin-bottom: 50% !important;
    margin-right: 80% !important;
  }
  h3 {
    font-family: Loto;
    text-align: start;
    font-weight: 600 !important;
    letter-spacing: 1px;
    font-size: 34px;
  }
  p {
    font-family: Loto;
    text-align: start;

    letter-spacing: 1px;
    font-size: 18px;
  }
  .btn {
    justify-content: start;
    text-align: start;
    margin-right: 50% !important;
    width: 50%;
  }
}
@media only screen and (min-width: 1201px) {
  ul li {
    font-family: "Maven Pro", sans-serif;
    font-size: 14px;
    margin: 10px;
    font-weight: 600;
    opacity: 0.8;
    margin-top: 20px;
  }
  h4 {
    font-family: "Maven Pro", sans-serif;
    font-size: 20px;
    text-align: center;
    margin: 10px;
    font-weight: 600;
  }
  .recent h3 {
    color: #000;
    margin-top: 40px !important;
    font-size: 16px !important;
    text-align: start;
    font-family: "Maven Pro", sans-serif;
    margin-top: auto;
    opacity: 0.8;
  }
  .hide-l {
    display: none !important;
  }
  .b-carousel-slides {
    height: 70vh !important ;
    width: 100%;
  }
  .slider {
    margin-left: 0% Important;
    align-content: start;
    margin-bottom: 50% !important;
    margin-right: 80% !important;
  }
  h3 {
    font-family: Loto;
    text-align: start;
    font-weight: 600 !important;
    letter-spacing: 1px;
    font-size: 34px;
  }
  p {
    font-family: Loto;
    text-align: start;

    letter-spacing: 1px;
    font-size: 18px;
  }
  .btn {
    justify-content: start;
    text-align: start;
    margin-right: 50% !important;
    width: 50%;
  }
}
</style>
