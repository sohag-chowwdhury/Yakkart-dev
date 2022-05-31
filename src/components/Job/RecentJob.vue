<template >
  <div class="card-component">
    <b-row class="row justify-contente-start">
      <b-col
        cols="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
        v-for="(item, index) in jobFilter"
        :key="index + 1"
      >
        <b-card no-body style="width: 100%" class="card mt-1">
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
                  ><h4 class="mt-1">{{ item.title }}</h4></b-col
                >
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
                      src="https://img.icons8.com/color/360/000000/google-maps-new.png"
                    />
                    <span>{{ item.city }}</span>
                    <span v-if="item.state != ''">,</span>
                    <span v-if="item.state != ''">{{ item.state }}</span>
                  </h5>
                </b-col>

                <b-col
                  @click="routeChange(item.postUid, item.creatorId)"
                  cols="12"
                  sm="12"
                  md="12"
                  lg="12"
                  xl="12"
                  ><p style="color: #00987b">
                    Price: {{ item.minSallary }}-{{ item.maxSallary }}
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
      this.$store.dispatch("jobDetails", {
        postUid: e,
        creatorId: i,
      });
      this.$router.push("/job/details");
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
    jobFilter() {
      return this.$store.getters.jobFilter;
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
        height: 130px;
      }
      h5 {
        height: 18px;
        overflow: hidden;
        font-size: 14px !important;
        opacity: 0.9;
      }
      h4 {
        height: 18px;
        overflow: hidden;
        font-size: 16px !important;
        opacity: 0.9;
      }
      p {
        height: 18px;
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
        width: 90%;
        height: 150px;
      }
      h5 {
        height: 28px;
        overflow: hidden;
        font-size: 15px !important;
        opacity: 0.9;
      }
      h4 {
        height: 24px;
        margin-left: 2px;
        overflow: hidden;
        font-size: 16px !important;
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
        width: 190px;
        height: 140px !important;
        padding: 5px;
        border-radius: 5px 5px 5px 5px;
      }
      h5 {
        font-family: "Maven Pro", sans-serif;
        height: 20px;
        overflow: hidden;
        font-size: 16px !important;
        opacity: 0.8;
        margin-left: 4px;
        margin-top: 4px;
      }
      h4 {
        height: 18px;
        font-family: "Maven Pro", sans-serif;
        overflow: hidden;
        font-size: 16px !important;
        margin-left: 10px !important ;
        margin-left: 4px;
        font-weight: 600;
        margin-top: 4px;
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
