<template>
  <b-container>
    <div>
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
            <b-row cols="12" sm="12" md="12" lg="12" xl="12">
              <report />
            </b-row>
          </b-row>
        </div>
      </b-modal>
    </div>
    <b-row class="row justify-content-center">
      <b-col cols="12" sm="12" md="12" xl="12" lg="12">
        <b-button variant="light" size="sm" class="mt-2 btn-route" to="/">
          Home
          <img
            style="width: 18px"
            src="https://img.icons8.com/material/24/000000/chevron-right.png"
          />
        </b-button>
        <b-button
          @click="catFunc(postDetails.select)"
          variant="light"
          size="sm"
          class="mt-2 btn-route"
        >
          {{ postDetails.select }}
          <img
            style="width: 18px"
            src="https://img.icons8.com/material/24/000000/chevron-right.png"
          />
        </b-button>
        <b-button
          @click="subCatFunc(postDetails.select, postDetails.subSelect)"
          variant="light"
          size="sm"
          class="mt-2 btn-route"
        >
          {{ postDetails.subSelect }}
          <img
            style="width: 18px"
            src="https://img.icons8.com/material/24/000000/chevron-right.png"
          />
        </b-button>
        <b-button disabled variant="light" size="sm" class="mt-2 hide-xs">
          {{ postDetails.title }}
        </b-button>
      </b-col>
      <b-col cols="12" sm="12" md="12" xl="7" lg="7">
        <div class="img-row-main">
          <b-row class="row justify-content-center">
            <b-col
              class="img-container-list hide-xs hide-md"
              cols="11"
              sm="10"
              md="2"
              lg="2"
              xl="2"
            >
              <b-row class="row justify-content-center">
                <b-col
                  class="my-1"
                  @click="imageChange(i)"
                  v-for="(i, index) in postDetails.imgs"
                  :key="index"
                  cols="2"
                  sm="2"
                  md="12"
                  xl="12"
                  lg="12"
                >
                  <b-img class="product-img-list img-container-item" :src="i">
                  </b-img>
                </b-col>
              </b-row>
            </b-col>
            <b-col
              cols="12"
              class="img-container"
              sm="12"
              md="10"
              xl="10"
              lg="10"
            >
              <div class="full-img-container">
                <inner-image-zoom
                  v-if="postDetails.imgs[0]"
                  class="product-img"
                  :src="imageNext || postDetails.imgs[0]"
                  :zoomSrc="imageNext || postDetails.imgs[0]"
                />
              </div>
            </b-col>
            <b-col
              class="img-container-list hide-lg"
              cols="11"
              sm="11"
              md="2"
              lg="2"
              xl="2"
            >
              <b-row class="row justify-content-center">
                <b-col
                  class="my-1"
                  @click="imageChange(i)"
                  v-for="(i, index) in postDetails.imgs"
                  :key="index"
                  cols="2"
                  sm="2"
                  md="12"
                  xl="12"
                  lg="12"
                >
                  <b-img class="product-img-list img-container-item" :src="i">
                  </b-img>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>

        <div class="img-row mt-1">
          <b-row class="row justify-content-center mt-1">
            <b-col cols="12" sm="12" md="12" xl="12" lg="12">
              <h4>
                {{ postDetails.title }}
                <b-button
                  class=""
                  id="show-btn"
                  variant="light"
                  size="sm"
                  @click="showModal"
                >
                  <img
                    class="mr-2"
                    style="width: 18px"
                    src="https://img.icons8.com/material/24/fa314a/cancel-2.png"
                  />
                </b-button>
              </h4>
            </b-col>
            <b-col cols="12" sm="12" md="12" xl="12" lg="12">
              <h5>
                <img
                  style="width: 22px; margin-bottom: 8px"
                  class="mr-2"
                  src="https://img.icons8.com/glyph-neue/64/fa314a/marker.png"
                />{{ postDetails.address }}
              </h5>
              <div class="border-description"></div>
            </b-col>
            <b-col cols="12" sm="12" md="12" xl="12" lg="12">
              <b-row class="row justify-content-center">
                <b-col>
                  <p
                    style="
                      color: #26e07f;
                      font-weight: bold;
                      opacity: 1 !important;
                    "
                  >
                    Price: {{ postDetails.price }}
                  </p>
                </b-col>
                <b-col>
                  <p
                    v-if="user"
                    style="
                      color: #26e07f;
                      font-weight: bold;
                      opacity: 1 !important;
                    "
                  >
                    <img
                      src="https://img.icons8.com/material/24/26e07f/phone--v1.png"
                    />: {{ postDetails.contact }}
                  </p>

                  <p
                    v-if="!user"
                    style="
                      color: #26e07f;
                      font-weight: bold;
                      opacity: 1 !important;
                    "
                  >
                    <img
                      src="https://img.icons8.com/material/24/26e07f/phone--v1.png"
                    />: {{ postDetails.contact.slice(0, 4)
                    }}<img
                      v-for="i in 5"
                      style="width: 18px"
                      :key="i"
                      src="https://img.icons8.com/material/24/26e07f/cancel--v1.png"
                    />
                  </p>

                  <p v-if="!user" style="font-size: 13px; font-weight: bold">
                    <img
                      style="width: 20px"
                      src="https://img.icons8.com/material/24/000000/info--v1.png"
                    />For contact Details you have to login.
                  </p>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12" sm="12" md="12" xl="12" lg="12">
              <p>
                {{ postDetails.description }}
              </p>

              <b-row class="row justify-content-center">
                <b-col cols="12" md="12" sm="12" xl="12"
                  ><h5>
                    <img
                      style="width: 22px"
                      src="https://img.icons8.com/small/30/4a90e2/planner.png"
                    />{{ postDetails.time }}
                  </h5></b-col
                >
                <b-col class="deals" cols="6" sm="6" md="6" xl="6" lg="6">
                  <p>Type: Deals</p>
                </b-col>
                <b-col class="post-code" cols="6" sm="6" md="6" xl="6" lg="6">
                  <p>ZIP code: {{ postDetails.postalCode }}</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col
              class="hide-xs hide-md"
              cols="12"
              sm="12"
              md="12"
              xl="12"
              lg="12"
            >
              <rating :item="postDetails.postUid" />
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col cols="12" sm="12" md="12" xl="5" lg="5">
        <div>
          <b-row class="row justify-content-center">
            <b-col v-if="!user" cols="10" sm="10" md="10" xl="12" lg="12"
              ><p>
                <img
                  src="https://img.icons8.com/material/24/26e07f/info--v1.png"
                />
                Log in for User Details
              </p></b-col
            >

            <b-col
              v-if="user && postUser.creatorId != authId"
              cols="10"
              sm="12"
              md="12"
              xl="12"
              lg="12"
            >
              <b-button
                @click="chatFunc(postUser)"
                :to="/chat/ + postUser.creatorId"
                variant="light"
                size="sm"
                class="mt-2"
                style="
                  width: 100%;
                  background: #cacacf;
                  color: #00987b;
                  font-weight: bold;
                  font-family: 'Maven Pro', sans-serif;
                "
              >
                <i class="fas fa-comments"></i> Chat with
                {{ postUser.firstName }} {{ postUser.listName }}
              </b-button>
            </b-col>
            <b-col
              v-if="user && postUser.creatorId != authId"
              cols="10"
              sm="10"
              md="10"
              xl="12"
              lg="12"
            >
              <b-button
                @click="chatFuncWhatsApp(postUser)"
                variant="light"
                size="sm"
                class="mt-2"
                style="
                  width: 100%;
                  background: #4b8f1b;
                  color: #ffffff;
                  font-weight: bold;
                  font-family: 'Maven Pro', sans-serif;
                "
              >
                <i class="fas fa-comments"></i> Coonect with WhatsApp
              </b-button>
            </b-col>
            <b-col v-if="user" cols="12" sm="12" md="12" xl="12" lg="12">
              <b-button
                size="sm"
                @click="toggleFun"
                variant="light"
                class="my-2"
                style="width: 100%; font-family: 'Maven Pro', sans-serif"
                v-b-toggle.my-collapse
              >
                <b-row class="row justify-content-center">
                  <b-col cols="10" sm="10" md="10" v-if="user">
                    <span
                      >{{ postUser.firstName }} {{ postUser.listName }}</span
                    >
                  </b-col>
                  <b-col cols="2" sm="2" md="2">
                    <i v-if="toggle == false" class="fas fa-chevron-down"></i>
                    <i v-if="toggle == true" class="fas fa-chevron-up"></i>
                  </b-col>
                </b-row>
              </b-button>
              <div>
                <b-card class="card-collaps" style="width: 100%">
                  <b-collapse id="my-collapse" visible class="my-2">
                    <h5>
                      <i class="fas fa-envelope mx-2"></i>
                      <span>{{ postUser.email }}</span>
                    </h5>
                    <h5>
                      <i class="fas fa-address-card mx-2"></i>
                      <span>{{ postUser.address }}</span>
                    </h5>
                    <h5>
                      <i class="fas fa-phone-square-alt mx-2"></i>
                      <span>{{ postUser.phoneNumber }}</span>
                    </h5>
                  </b-collapse>
                </b-card>
              </div>
            </b-col>
          </b-row>
          <h5 style="color: #00987b; opacity: 1; font-weight: 700">
            <img
              style="width: 30px"
              class="mx-2"
              src="https://img.icons8.com/glyph-neue/64/fa314a/marker.png"
            />Location
          </h5>
          <div style="border: 1px solid #00987b">
            <l-map
              :zoom="zoom"
              :options="{ zoomControl: false }"
              :center="postDetails.locationMap"
              style="height: 300px; width: 100%"
            >
              <l-tile-layer :url="url" :attribution="attribution" />
              <l-marker :lat-lng="postDetails.locationMap" />
              <l-icon-default :image-path="path" />
            </l-map>
          </div>
        </div>
        <b-row class="hide-md hide-xs">
          <b-col cols="12" sm="12" md="12" lg="12" xl="12">
            <product-latest :items="productRecent" />
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <b-row
          class="hide-lg row justify-content-start"
          cols="12"
          sm="12"
          md="12"
          xl="12"
          lg="6"
        >
          <b-col class="hide-lg" cols="12" sm="12" md="12" xl="12" lg="6">
            <rating :item="postDetails.postUid" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import InnerImageZoom from "vue-inner-image-zoom";
import { Country } from "country-state-city";
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LIconDefault } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
export default {
  name: "CustomPath",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIconDefault,
    "inner-image-zoom": InnerImageZoom,
  },
  data() {
    return {
      imageNext: "",
      countryValue: "",
      toggle: false,
      image: [
        require("@/assets/img/product/product1.jpg"),
        require("@/assets/img/product/product2.jpg"),
        require("@/assets/img/product/product3.jpg"),
        require("@/assets/img/product/product4.jpg"),
        require("@/assets/img/product/product1.jpg"),
        require("@/assets/img/product/product2.jpg"),
      ],
      zoom: 17,
      path: "/images/",
      center: [23.810331, 90.412521],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(23.382787, 90.0534899),
    };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    catFunc(e) {
      this.$store.dispatch("categoryFilter", {
        type: e,
      });
      this.$router.push("/products/" + e);
    },
    chatFuncWhatsApp(e) {
      var j = this.countryValue.phonecode + e.phoneNumber;
      window.open(
        "https://api.whatsapp.com/send?phone=" + j + "&text=%23From+Yakkart",
        "_blank"
      );

      console.log(j);
    },
    subCatFunc(e, j) {
      this.$store.dispatch("subCategoryFilter", {
        type: e,
        subSelect: j,
      });
      this.$router.push("/products/" + e);
    },
    imageChange(e) {
      this.imageNext = e;
    },
    toggleFun() {
      this.toggle = !this.toggle;
    },
    chatFunc(e) {
      this.$store.dispatch("chatBoot", {
        userId: e.creatorId,
        img: e.img,
        key: Math.random().toString(36).substring(7),
        listName: e.listName,
        firstName: e.firstName,
        startConv: true,
      });
    },
  },
  mounted() {
    this.countryValue = Country.getCountryByCode(
      this.$store.getters.countryInfo.countryCode
    );
  },
  computed: {
    productRecent() {
      return this.$store.getters.productRecent.slice(0, 5);
    },
    postDetails() {
      return this.$store.getters.postDetails;
    },
    postUser() {
      return this.$store.getters.postUser;
    },
    authId() {
      return this.$store.getters.user.id;
    },
    user() {
      return this.$store.getters.user;
    },
    countryInfo() {
      return this.$store.getters.countryInfo;
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .btn-route {
    font-size: 10px;
  }
  .hide-xs {
    display: none;
  }
  .card-collaps h5 {
    font-family: "Maven Pro", sans-serif;
    margin-top: 5%;
    font-weight: bold;
    font-size: 12px !important;

    color: #0a0a0a;
    text-align: start;
    opacity: 0.8;
  }
  .img-container {
    height: 200px;
  }
  .img-container-list {
    height: 60x;
    border: 2px solid #bec4c0;
  }
  .img-container-item {
    width: 100% !important;
    height: 58px;
  }
  .img-row {
    width: 90%;
    margin-top: 2px;
  }
  .img-row-main {
    width: 90%;
    margin-top: 2px;
    background: #f0f0f0;
  }
  .full-img-container {
    height: 330px !important;
    overflow: hidden;
  }
  .product-img {
    width: 100% !important;
    height: 200px;
  }
  .card {
    margin: 0 auto;
  }
  .product-img-list {
    width: 100%;
    height: 50px;
    margin: 2px;
    margin-bottom: 2px !important;
    cursor: pointer;
  }
  h3 {
    font-family: "Maven Pro", sans-serif;
    margin-top: 2%;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    color: #0a0a0a;
    text-align: start;
    opacity: 0.8;
  }
  h4 {
    text-align: start;
    font-family: "Maven Pro", sans-serif;
    font-weight: 700;
    font-size: 18px !important;
    color: #0a0a0a;
    opacity: 0.9;
    margin-top: 10px !important;
    margin-left: 0% !important;
  }
  h5 {
    text-align: start;
    font-family: "Maven Pro", sans-serif;
    font-weight: 600;
    font-size: 15px !important;
    margin-left: 0% !important;
    margin-top: 10px;
    color: #0a0a0a;
    opacity: 0.8;
  }
  p {
    text-align: start;
    margin: 0 auto !important;
    font-family: "Maven Pro", sans-serif;
    margin-top: 5px !important;
    line-height: 28px;
    font-size: 13px;
    font-weight: 500;
    margin-left: 1% !important;
  }

  .deals {
    font-weight: 700;
  }
}
@media (min-width: 601px) and (max-width: 1200px) {
  .hide-md {
    display: none;
  }
  .img-container {
    height: 340px;
  }
  .full-img-container {
    height: 330px !important;
    overflow: hidden;
  }
  .img-container-list {
    border: 2px solid #bec4c0;
    width: 100% !important;
  }
  .img-row {
    width: 90%;
    margin-top: 2px;
  }
  .img-row-main {
    width: 90%;
    margin-top: 2px;
    background: #f0f0f0;
  }
  .product-img {
    width: 100% !important;
    height: 320px;
  }
  .card {
    margin: 0 auto;
  }
  .product-img-list {
    width: 100%;
    height: 50px;
    margin: 2px;
    margin-bottom: 2px !important;
    cursor: pointer;
  }
  h3 {
    font-family: "Maven Pro", sans-serif;
    margin-top: 5%;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    color: #0a0a0a;
    text-align: start;
    opacity: 0.8;
  }
  h4 {
    text-align: start;
    font-family: "Maven Pro", sans-serif;
    font-weight: 700;
    font-size: 28px !important;
    opacity: 0.8;
    margin-top: 30px !important;
    margin-left: 0% !important;
  }
  h5 {
    text-align: start;
    font-family: "Maven Pro", sans-serif;
    font-weight: 600;
    font-size: 16px !important;
    margin-left: 0% !important;
    margin-top: 10px;
    opacity: 0.8;
  }
  p {
    text-align: start;
    margin: 0 auto !important;
    font-family: "Maven Pro", sans-serif;
    margin-top: 5px !important;
    font-size: 14px !important;
    line-height: 35px;
    font-weight: 500;
    opacity: 0.9;
    margin-left: 1% !important;
  }

  .deals {
    font-weight: 700;
  }
}
@media only screen and (min-width: 1201px) {
  .hide-lg {
    display: none;
  }
  .full-img-container {
    height: 330px !important;
    overflow: hidden;
  }
  .img-container {
    height: 340px;
  }
  .img-container-list {
    height: 320px;
    border: 2px solid #bec4c0;
    width: 90% !important;
  }
  .img-row {
    width: 90%;
    margin-top: 2px;
  }
  .img-row-main {
    width: 90%;
    margin-top: 2px;
    background: #f0f0f0;
  }
  .product-img {
    width: 100%;
    height: 320px;
  }
  .card {
    margin: 0 auto;
  }
  .product-img-list {
    width: 100%;
    height: 50px;
    margin: 2px;
    margin-bottom: 2px !important;
    cursor: pointer;
  }
  h3 {
    font-family: "Maven Pro", sans-serif;
    margin-top: 5%;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    color: #0a0a0a;
    text-align: start;
    opacity: 0.8;
  }
  h4 {
    text-align: start;
    font-family: "Maven Pro", sans-serif;
    font-weight: 700;
    font-size: 26px !important;
    opacity: 0.8;
    margin-top: 10px !important;
    margin-left: 0% !important;
  }
  h5 {
    text-align: start;
    font-family: "Maven Pro", sans-serif;
    font-size: 15px !important;
    margin-left: 0% !important;
    margin-top: 10px;
    opacity: 0.9;
  }
  p {
    text-align: start;
    margin: 0 auto !important;
    font-family: "Maven Pro", sans-serif;
    margin-top: 20px !important;
    line-height: 35px;
    font-weight: 500;
    margin-left: 1% !important;
  }

  .deals {
    font-weight: 700;
  }
}
</style>