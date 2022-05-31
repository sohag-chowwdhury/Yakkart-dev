<template>
  <div class="card-component" style="overflow-x: hidden">
    <b-row class="row justify-contente-start">
      <b-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
        v-for="(item, index) in items"
        :key="index"
      >
        <b-card no-body style="width: 105%" class="card2">
          <b-row>
            <b-col cols="12" sm="12" md="12" lg="12" xl="12">
              <b-img
                class="card-img"
                @click="routeChange(item.postUid, item.creatorId)"
                :src="item.imgs[0]"
              >
              </b-img>
            </b-col>
            <b-col cols="12" sm="12" md="12" lg="12" xl="12">
              <b-row>
                <b-col
                  @click="routeChange(item.postUid, item.creatorId)"
                  cols="12"
                  sm="12"
                  md="12"
                  lg="12"
                  xl="12"
                  ><h4>
                    {{ item.title }}
                    <img
                      v-if="item.newValue == true"
                      style="width: 18px"
                      src="https://img.icons8.com/color-glass/360/000000/new.png"
                    /></h4
                ></b-col>
                <b-col
                  @click="routeChange(item.postUid, item.creatorId)"
                  cols="12"
                  sm="12"
                  md="12"
                  lg="12"
                  xl="12"
                >
                  <h5>
                    <img
                      style="width: 20px"
                      src="https://img.icons8.com/color/48/000000/google-maps-new.png"
                    />
                    <span v-if="item.city != undefined">{{ item.city }}</span>
                    <span v-if="item.state != undefined">{{ item.state }}</span>
                  </h5>
                </b-col>

                <b-col
                  @click="routeChange(item.postUid, item.creatorId)"
                  cols="12"
                  sm=""
                  md="12"
                  lg="12"
                  xl="12"
                  ><p style="color: #00987b">Price: {{ item.price }}</p></b-col
                >
                <b-col class="mt-2" cols="4" sm="4" md="4" lg="4" xl="4"
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
                  cols="8"
                  sm="8"
                  md="8"
                  lg="8"
                  xl="8"
                >
                  <p class="card-p">{{ moment(item.time).fromNow() }}</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  props: ["items"],
  data() {
    return {
      favValue: null,
    };
  },

  methods: {
    routeChange(e, i) {
      this.$store.dispatch("productDetails", {
        postUid: e,
        creatorId: i,
      });

      this.$store.dispatch("reviewGet", {
        postId: e,
      });
      this.$router.push("/product");
    },
    favrouteFun(e, i) {
      this.favValue = i;
      this.$store.dispatch("favorouteAction", {
        postUid: e,
      });
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>
<style  lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .card-component {
    .card {
      font-family: "Maven Pro", sans-serif;
      .card-img {
        width: 100%;
        margin-top: 2px;
        height: 270px !important;
      }
      h5 {
        height: 18px;
        overflow: hidden;
        font-size: 14px !important;
        opacity: 0.8;
        color: black;
        margin: 3px;
      }
      h4 {
        height: 20px;
        overflow: hidden;
        font-size: 18px !important;
        opacity: 0.9;
        font-weight: 800;
        color: black;
        margin: 3px;
      }
      p {
        height: 18px;
        overflow: hidden;
        font-size: 14px !important;
        opacity: 0.8;
        margin: 3px;
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
        height: 150px;
        padding: 5px;
        border-radius: 5px 5px 5px 5px;
      }
      h5 {
        font-family: "Maven Pro", sans-serif;
        height: 22px;
        overflow: hidden;
        font-size: 16px !important;
        opacity: 0.8;
        margin-left: 4px;
        margin-top: 6px;
      }
      h4 {
        height: 20px;
        font-family: "Maven Pro", sans-serif;
        overflow: hidden;
        font-size: 16px !important;
        margin-left: 10px !important ;
        margin-left: 4px;
        font-weight: 600;
        margin-top: 6px;
      }
      .card-p {
        height: 20px !important;
        margin-top: 5px;
        margin-left: 10px !important;
        font-family: "Maven Pro", sans-serif;
        font-size: 13px !important;
        opacity: 0.8;
        margin-left: 4px;
        font-weight: 600;
        text-align: center;
      }
      p {
        height: 20px !important;
        margin-top: 5px;
        margin-left: 10px !important;
        overflow: hidden;
        font-family: "Maven Pro", sans-serif;
        font-size: 14px !important;
        opacity: 0.9;
        margin-left: 4px;
        font-weight: 700;
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
        height: 200px;
        padding: 5px;
        border-radius: 5px 5px 5px 5px;
      }
      h5 {
        font-family: "Maven Pro", sans-serif;
        height: 24px;
        overflow: hidden;
        font-size: 18px !important;
        opacity: 0.8;
        margin-left: 4px;
        margin-top: 4px;
      }
      h4 {
        height: 24px;
        font-family: "Maven Pro", sans-serif;
        overflow: hidden;
        font-size: 18px !important;
        margin-left: 10px !important ;
        margin-left: 4px;
        opacity: 0.9;
        font-weight: 500;
        margin-top: 6px;
      }
      .card-p {
        height: 20px !important;
        margin-top: 5px;
        margin-left: 10px !important;
        font-family: "Maven Pro", sans-serif;
        font-size: 14px !important;
        opacity: 0.8;
        margin-left: 4px;
        font-weight: 600;
        text-align: center;
      }
      p {
        height: 20px !important;
        margin-top: 5px;
        margin-left: 10px !important;
        overflow: hidden;
        font-family: "Maven Pro", sans-serif;
        font-size: 15px !important;
        opacity: 0.9;
        margin-left: 4px;
        font-weight: 700;
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
