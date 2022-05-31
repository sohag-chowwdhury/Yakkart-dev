<template>
  <b-container>
    <div class="card-component" style="overflow-x: hidden">
      <b-row class="row justify-contente-center">
        <b-col cols="12" sm="8" md="8" lg="6" xl="6"
          ><b-button
            variant="light"
            class="my-2"
            style="width: 40%; height: 33px"
            ><span>Favourite List</span></b-button
          ></b-col
        >
        <b-col
          cols="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
          v-for="(item, index) in items"
          :key="index"
        >
          <b-card @click="routeChange" class="card mt-1">
            <b-row>
              <b-col
                cols="12"
                sm="12"
                md="12"
                lg="12"
                xl="12"
                v-for="(item, index) in items"
                :key="index"
              >
                <b-row>
                  <b-col cols="4" sm="4" md="4" lg="4" xl="4">
                    <b-img
                      class="card-img"
                      @click="routeChange(item.postUid, item.creatorId)"
                      :src="item.imgs[0]"
                    >
                    </b-img>
                  </b-col>
                  <b-col cols="8" sm="8" md="8" lg="8" xl="8">
                    <b-row>
                      <b-col
                        @click="routeChange(item.postUid, item.creatorId)"
                        cols="12"
                        sm="12"
                        md="12"
                        lg="12"
                        xl="12"
                        ><h4>{{ item.title }}</h4></b-col
                      >
                      <b-col
                        @click="routeChange(item.postUid, item.creatorId)"
                        cols="4"
                        sm="12"
                        md="12"
                        lg="12"
                        xl="12"
                      >
                      </b-col>

                      <b-col
                        @click="routeChange(item.postUid, item.creatorId)"
                        cols="12"
                        sm=""
                        md="12"
                        lg="12"
                        xl="12"
                        ><p style="color: #00987b">
                          Price: {{ item.price }}
                        </p></b-col
                      >
                      <b-col class="mt-2" cols="6" sm="6" md="6" lg="6" xl="6"
                        ><span
                          v-if="user"
                          class="fav-icon mx-2"
                          @click="favrouteFun(item, index)"
                          ><i
                            :style="index == favValue ? 'color:orange;' : ''"
                            class="fas fa-star"
                          ></i></span
                      ></b-col>
                      <b-col
                        @click="routeChange(item.postUid, item.creatorId)"
                        cols="6"
                        sm="6"
                        md="6"
                        lg="6"
                        xl="6"
                      >
                        <p class="card-p">
                          {{ moment(item.time).fromNow() }}
                        </p>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>
<script>
export default {
  props: ["items"],
  data() {
    return {
      products: [
        {
          image: require("@/assets/img/product/product1.jpg"),
          title: " Watch Kapten Son ",
          place: "Lucerne",
          date: "6 July ",
          time: "06.00 AM",
          price: "200",
        },
        {
          image: require("@/assets/img/product/product2.jpg"),
          title: " Canon Camera M-G10 ",
          place: "Lausanne",
          date: "6 July ",
          time: "10.00 PM",
          price: "200",
        },
        {
          image: require("@/assets/img/product/product3.jpg"),
          title: " Multiy Color Sliper ",
          place: "Montreux",
          date: "5 July ",
          time: "12.00 AM",
          price: "200",
        },
        {
          image: require("@/assets/img/product/product4.jpg"),
          title: "Old Swing ",
          place: "Biel/Bienne",
          date: "7 July ",
          time: "08.00 PM",
          price: "200",
        },
      ],
    };
  },
  methods: {
    routeChange(e, i) {
      this.$store.dispatch("productDetails", {
        postUid: e,
        creatorId: i,
      });
      this.$router.push("/product");
    },
  },
};
</script>
<style  lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .card-component {
    .card {
      font-family: Loto;
      .card-img {
        width: 100%;
        height: 80px;
      }
      h5 {
        height: 18px;
        overflow: hidden;
        font-size: 16px !important;
        opacity: 0.9;
        color: black;
      }
      h4 {
        height: 22px;
        overflow: hidden;
        font-size: 18px !important;
        opacity: 0.9;
      }
      p {
        height: 16px;
        overflow: hidden;
        font-size: 14px !important;
        opacity: 0.9;
      }
      .fav-icon {
        color: #818485;
      }
    }
    .card:hover {
      background: #edf3f5;
      cursor: pointer;
    }
  }
}
@media (min-width: 601px) and (max-width: 1200px) {
  .card-component {
    .card {
      font-family: Loto;
      .card-img {
        width: 100%;
        height: 100px;
      }
      h5 {
        height: 20px;
        overflow: hidden;
        font-size: 18px !important;
        opacity: 0.9;
      }
      h4 {
        height: 24px;
        overflow: hidden;
        font-size: 20px !important;
        opacity: 0.9;
      }
      p {
        height: 18px;
        overflow: hidden;
        font-size: 15px !important;
        opacity: 0.9;
      }
      .fav-icon {
        color: #818485;
      }
    }
    .card:hover {
      background: #edf3f5;
      cursor: pointer;
    }
  }
}
@media only screen and (min-width: 1201px) {
  .card-component {
    .card {
      font-family: Loto;
      .card-img {
        width: 100%;
        height: 100px;
      }
      h5 {
        height: 20px;
        overflow: hidden;
        font-size: 18px !important;
        opacity: 0.9;
      }
      h4 {
        height: 24px;
        overflow: hidden;
        font-size: 20px !important;
        opacity: 0.9;
      }
      p {
        height: 18px;
        overflow: hidden;
        font-size: 15px !important;
        opacity: 0.9;
      }
      .fav-icon {
        color: #818485;
      }
    }
    .card:hover {
      background: #edf3f5;
      cursor: pointer;
    }
  }
}
</style>
