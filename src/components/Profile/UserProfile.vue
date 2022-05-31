<template>
  <div id="profile-summery">
    <b-row class="row justify-content-center">
      <b-col cols="11" sm="11" md="10" class="hide-lg">
        <b-button
          size="sm"
          @click="toggleFun"
          variant="light"
          class="my-2"
          style="width: 100%; text-align: start"
          v-b-toggle.my-collapse
        >
          <b-row>
            <b-col cols="10" sm="10" md="10">
              <span>{{ userData.firstName }} {{ userData.listName }}</span>
            </b-col>
            <b-col cols="2" sm="2" md="2">
              <i v-if="toggle == false" class="fas fa-chevron-down"></i>
              <i v-if="toggle == true" class="fas fa-chevron-up"></i>
            </b-col>
          </b-row>
        </b-button>
        <div>
          <b-collapse id="my-collapse" class="my-2">
            <b-col cols="12" md="12" lg="12" xl="12">
              <b-card class="card-profile-summery">
                <div id="scrollspyProfile">
                  <b-avatar size="150px" :src="userData.img" />
                  <b-button variant="light" class="btn-profile-summery">
                    Me
                  </b-button>
                  <p>
                    {{ userData.description }}
                  </p>
                  <br />
                  <h4>
                    <i class="fas fa-envelope"></i>
                    <span class="mx-2">{{ userData.email }}</span>
                  </h4>
                  <h4>
                    <i class="fas fa-phone-square-alt"></i>
                    <span class="mx-2">{{ userData.phoneNumber }}</span>
                  </h4>
                  <h4>
                    <i class="fas fa-address-card"></i>
                    <span class="mx-2">{{ userData.address }}</span>
                  </h4>
                </div>
              </b-card>
            </b-col>
          </b-collapse>
        </div>
      </b-col>
      <b-col md="12" lg="12" xl="12" class="hide-xs hide-md">
        <b-card class="card-profile-summery">
          <div id="scrollspyProfile">
            <b-avatar size="150px" :src="userData.img" />
            <b-button variant="light" class="btn-profile-summery">
              Me
            </b-button>
            <p>
              {{ userData.description }}
            </p>
            <br />
            <h4>
              <img
                style="width: 22px"
                class="mr-2"
                src="https://img.icons8.com/material/24/26e07f/worldwide-location.png"
              />
              <span>{{ userData.address }} </span>
            </h4>
            <h4>
              <img
                style="width: 22px"
                class="mr-2"
                src="https://img.icons8.com/material/24/26e07f/new-post--v1.png"
              /><span>{{ userData.email }}</span>
            </h4>
            <h4>
              <img
                style="width: 22px"
                class="mr-2"
                src="https://img.icons8.com/material/24/26e07f/phone.png"
              />
              <span>{{ userData.phoneNumber }}</span>
            </h4>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script >
export default {
  data() {
    return {
      toggle: false,
      avatarImg: require("@/assets/img/chat/profile.jpg"),
    };
  },
  methods: {
    toggleFun() {
      this.toggle = !this.toggle;
    },
  },
  computed: {
    userData() {
      return this.$store.getters.userData;
    },

    success() {
      return this.$store.getters.success;
    },
  },
};
</script>
<style lang="scss" scoped >
@media (min-width: 601px) and (max-width: 1200px) {
  .hide-md {
    display: none;
  }
  .card-profile-summery {
    width: 100%px;

    background: #ffffff;
    border-radius: 0px 60px 20px 0px;
    font-family: Lato;
    font-style: normal;
    .btn-profile-summery {
      position: absolute;
      margin-top: 32%;
      margin-left: -20%;
      width: 182px;
      height: 46px;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      border-radius: 20px;
    }
    .button-waiting {
      width: 257px;
      height: 52px;
      background: #ffffff;
      box-shadow: 0.5px 0.5px 4px #e86830;
      border-radius: 15px;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #0a0a0a;
    }
    p {
      font-family: "Maven Pro", sans-serif;
      margin-top: 10%;
      background: #ffffff;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      text-align: justify;
      opacity: 0.8;
      color: #0a0a0a;
    }
    h4 {
      font-family: "Maven Pro", sans-serif;
      margin-top: 10%;
      font-weight: bold;
      font-size: 18px;
      line-height: 29px;
      color: #0a0a0a;
      text-align: center;
      text-align: start;
      opacity: 0.8;
    }
    h5 {
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
    }
    #scrollspyProfile {
      position: relative;
      height: 704px;
      margin-top: -5%;
      width: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      flex-direction: column-reverse;
      border-radius: 20px 50px 20px 20px;
    }
    ::-webkit-scrollbar {
      width: 16px;
      height: 100px !important;
    }

    ::-webkit-scrollbar-button {
      height: 100px !important;
    }

    ::-webkit-scrollbar-thumb {
      background: #4698ca;
      height: 100px !important;
      border-radius: 10px 0px 0px 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #b30000;
    }
  }
}
@media only screen and (max-width: 600px) {
  .hide-xs {
    display: none;
  }
  .card-profile-summery {
    width: 100%;

    background: #ffffff;

    font-family: Lato;
    font-style: normal;
    .btn-profile-summery {
      position: absolute;
      margin-top: 32%;
      margin-left: -20%;
      width: 182px;
      height: 46px;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      border-radius: 20px;
    }
    .button-waiting {
      width: 257px;
      height: 52px;
      background: #ffffff;
      box-shadow: 0.5px 0.5px 4px #e86830;
      border-radius: 15px;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #0a0a0a;
    }
    p {
      font-family: "Maven Pro", sans-serif;
      margin-top: 10%;
      background: #ffffff;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      text-align: justify;
      opacity: 0.8;
      color: #0a0a0a;
    }
    h4 {
      font-family: "Maven Pro", sans-serif;
      margin-top: 10px;
      font-weight: bold;
      font-size: 13px;
      line-height: 29px;
      color: #0a0a0a;
      text-align: center;
      text-align: start;
      opacity: 0.8;
    }
    h5 {
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
    }
    #scrollspyProfile {
      position: relative;

      margin-top: -5%;
      width: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      flex-direction: column-reverse;
      border-radius: 20px 50px 20px 20px;
    }
    ::-webkit-scrollbar {
      width: 16px;
      height: 100px !important;
    }

    ::-webkit-scrollbar-button {
      height: 100px !important;
    }

    ::-webkit-scrollbar-thumb {
      background: #4698ca;
      height: 100px !important;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #b30000;
    }
  }
}
@media only screen and (min-width: 1200px) {
  .hide-lg {
    display: none;
  }
  .card-profile-summery {
    background: #ffffff;
    font-family: Lato;
    font-style: normal;
    .btn-profile-summery {
      position: absolute;
      margin-top: 55%;
      margin-left: -30%;
      width: 100px;
      height: 46px;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      background: #149777;
      border-radius: 20px;
    }
    .button-waiting {
      width: 257px;
      height: 52px;
      background: #ffffff;
      box-shadow: 0.5px 0.5px 4px #e86830;
      border-radius: 15px;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #0a0a0a;
    }
    p {
      font-family: "Maven Pro", sans-serif;
      margin-top: 10%;
      background: #ffffff;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      text-align: justify;
      opacity: 0.8;
      color: #0a0a0a;
    }
    h4 {
      font-family: "Maven Pro", sans-serif;
      margin-top: 10%;
      font-weight: bold;
      font-size: 16px;
      line-height: 29px;
      color: #0a0a0a;
      text-align: center;
      text-align: start;
      opacity: 0.9;
    }
    h5 {
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
    }
    #scrollspyProfile {
      position: relative;
      height: 704px;
      margin-top: -5%;
      width: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      flex-direction: column-reverse;
      border-radius: 20px 50px 20px 20px;
    }
    ::-webkit-scrollbar {
      width: 16px;
      height: 100px !important;
    }

    ::-webkit-scrollbar-button {
      height: 100px !important;
    }

    ::-webkit-scrollbar-thumb {
      background: #4698ca;
      height: 100px !important;
      border-radius: 10px 0px 0px 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #b30000;
    }
  }
}
</style>
