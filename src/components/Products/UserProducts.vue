<template>
  <div class="card-component" style="overflow-x: hidden">
    <b-modal hide-header hide-footer id="modal-1">
      <b-row class="my-2 row justify-content-end">
        <b-col class="my-2" cols="3" md="2" lg="2" xl="2">
          <b-button pill @click="hideModal"
            ><i class="2x fas fa-times-circle"></i
          ></b-button>
        </b-col>
      </b-row>
      <b-row v-if="deleteCheck == true" class="my-2 row justify-content-end">
        <b-col class="my-2" cols="12" sm="12" md="12" lg="12" xl="12">
          <b-card class="my-2" style="width: 100%; background: red">
            <p style="text-align: center; font-weight: bold; color: white">
              {{ success }}
            </p></b-card
          >
          <i
            style="margin-left: 35% !important; color: red"
            class="fa-10x fas fa-trash-alt"
          ></i>
          <h5
            class="my-2"
            style="
              text-align: center;
              font-weight: bold;
              font-size: 0.9em;
              color: red;
            "
          >
            Are You sure want to delete this post ?
          </h5>
          <b-row class="mt-3 row justify-content-end">
            <b-col cols="4" sm="4" md="3" xl="4" lg="4">
              <b-button @click="deleteCancel" style="width: 98%" variant="info"
                >cancel</b-button
              ></b-col
            >
            <b-col cols="4" sm="4" md="3" xl="4" lg="4">
              <b-button
                @click="deleteFun(modalValue.postUid)"
                style="width: 100%"
                variant="danger"
                >Confirm</b-button
              ></b-col
            >
          </b-row>
        </b-col>
      </b-row>
      <b-row v-if="deleteCheck == false" class="row justify-content-center">
        <b-col cols="12" sm="12" md="12" lg="12" xl="12"
          ><b-card class="my-2">
            <p style="font-weight: bold; font-size: 0.8em">
              Present Status:
              <span style="color: red" v-if="modalValue.sold == true">
                Sold</span
              >
              <span style="color: green" v-if="modalValue.sold == false">
                Unsold</span
              >
              <span style="color: red" v-if="modalValue.onlyMe == true">
                & visible for only you.</span
              >
              <span style="color: green" v-if="modalValue.onlyMe == false">
                & visible for public.</span
              >
            </p>
            <p
              style="font-weight: bold; font-size: 0.8em"
              v-if="soldCheck || onlyMeCheck"
            >
              Reset Status:
              <span style="color: red" v-if="checked1 == true"> Sold</span>
              <span style="color: green" v-if="checked1 == false"> Unold</span>
              <span style="color: red" v-if="checked2 == true">
                & visible for only you.</span
              >
              <span style="color: green" v-if="checked2 == false">
                & visible for public.</span
              >
            </p>
            <p style="font-weight: bold; font-size: 0.75em; color: green">
              Hints:*unsold and public status visible for sell.
            </p>
          </b-card>
        </b-col>
        <b-col cols="6" sm="6" md="3" lg="3" xl="3">
          <b-button variant="light" size="sm" pill>
            <b-form-checkbox
              v-model="checked1"
              name="check-button"
              switch
              @change="checkFun1(modalValue.postUid, modalValue.sold)"
            >
              Sold
            </b-form-checkbox>
          </b-button>
        </b-col>
        <b-col class="mt-1" cols="6" sm="6" md="3" lg="3" xl="3">
          <b-form-checkbox
            v-model="checked2"
            name="check-button"
            switch
            @change="onlyMe(modalValue.postUid, modalValue.sold)"
          >
            Public
          </b-form-checkbox>
        </b-col>
        <b-col cols="6" sm="6" md="3" lg="3" xl="3">
          <b-button @click="deletePost" variant="light" size="sm" pill>
            <i class="fas fa-trash-alt"></i> Delete
          </b-button>
        </b-col>

        <b-col cols="12" sm="12" md="12" xl="12" lg="12"> </b-col>
      </b-row>
    </b-modal>
    <b-row class="row justify-content-center">
      <span v-if="filterValue === 1">
        <b-col
          cols="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
          v-for="(item, index) in items"
          :key="index"
        >
          <b-card
            no-body
            class="card mt-2"
            v-if="item.onlyMe == false && item.sold == false"
          >
            <b-row>
              <b-col cols="3" md="2" lg="2" sm="2" xl="2">
                <b-button
                  variant="light"
                  @click="modalFun(item)"
                  size="sm"
                  pill
                  v-b-modal.modal-1
                  ><i class="fas fa-ellipsis-h"></i
                ></b-button>
              </b-col>
            </b-row>
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
                      <span>{{ item.state }}</span>
                      <span v-if="item.state != undefined">{{
                        item.state
                      }}</span>
                    </h5>
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
                    <p class="card-p">{{ moment(item.time).fromNow() }}</p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </span>
      <span v-if="filterValue === 2">
        <b-col
          cols="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
          v-for="(item, index) in items"
          :key="index"
        >
          <b-card
            no-body
            v-if="item.onlyMe == true || item.sold == true"
            class="card mt-2"
          >
            <b-button
              variant="light"
              @click="modalFun(item)"
              size="sm"
              pill
              v-b-modal.modal-1
              ><i class="fas fa-ellipsis-h"></i
            ></b-button>
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
                      <span>{{ item.state }}</span>
                      <span v-if="item.state != undefined">{{
                        item.state
                      }}</span>
                    </h5>
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
                    <p class="card-p">{{ moment(item.time).fromNow() }}</p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </span>
      <span v-if="filterValue === 3">
        <b-col
          cols="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
          v-for="(item, index) in items"
          :key="index"
        >
          <b-card v-if="item.filterValue == false" class="card mt-2">
            <b-button
              variant="light"
              @click="modalFun(item)"
              size="sm"
              pill
              v-b-modal.modal-1
              ><i class="fas fa-ellipsis-h"></i
            ></b-button>
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
                    <h5>
                      <img
                        style="width: 20px"
                        src="https://img.icons8.com/color/48/000000/google-maps-new.png"
                      />
                      <span>{{ item.state }}</span>
                      <span v-if="item.state != undefined">{{
                        item.state
                      }}</span>
                    </h5>
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
                    <p class="card-p">{{ moment(item.time).fromNow() }}</p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </span>
    </b-row>
  </div>
</template>
<script>
export default {
  props: ["filterValue", "items"],
  data() {
    return {
      deleteCheck: false,
      onlyMeCheck: false,
      soldCheck: false,
      checked1: true,
      checked2: false,
      modalValue: {},
    };
  },
  computed: {
    success() {
      return this.$store.getters.success;
    },
  },
  methods: {
    deleteFun(i) {
      this.$store.dispatch("userPostDelete", {
        postUid: i,
      });
    },
    deleteCancel() {
      this.deleteCheck = false;
    },
    deletePost() {
      this.deleteCheck = true;
    },
    hideModal() {
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
      this.$router.go();
    },
    checkFun1(e) {
      if (this.checked1 == true) {
        this.soldCheck = true;
        this.$store.dispatch("userPostUpdate", {
          sold: this.checked1,
          onlyMe: this.checked2,
          postUid: e,
        });
      }
      if (this.checked1 == false) {
        this.soldCheck = true;
        this.$store.dispatch("userPostUpdate", {
          sold: this.checked1,
          onlyMe: this.checked2,
          postUid: e,
        });
      }
    },
    onlyMe(i) {
      this.onlyMeCheck = true;
      this.$store.dispatch("userPostUpdate", {
        onlyMe: this.checked2,
        postUid: i,
        sold: this.checked1,
      });
    },
    routeChange() {
      this.$router.push("/product");
    },
    modalFun(e) {
      this.modalValue = e;
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
        height: 100px;
      }
      h5 {
        height: 18px;
        overflow: hidden;
        font-size: 16px !important;
        opacity: 0.9;
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
        height: 150px;
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
        width: 200px;
        height: 150px;
        padding: 5px;
        border-radius: 5px 5px 5px 5px;
      }
      h5 {
        font-family: "Maven Pro", sans-serif;
        height: 22px;
        overflow: hidden;
        font-size: 18px !important;
        opacity: 0.8;
        margin-left: 4px;
        margin-top: 6px;
      }
      h4 {
        height: 20px;
        font-family: "Maven Pro", sans-serif;
        overflow: hidden;
        font-size: 18px !important;
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
