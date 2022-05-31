<template>
  <div style="background: #ffffff">
    <div>
      <b-modal
        hide-header
        hide-footer
        ref="my-modal"
        size="lg"
        title="Using Component Methods"
      >
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
            <b-col
              class="hiden-xs hiden-md"
              cols="12"
              sm="5"
              md="5"
              lg="5"
              xl="5"
            >
              <auth-item />
            </b-col>
            <b-col cols="12" sm="10" md="10" lg="7" xl="7">
              <log-in v-if="logValue == true" />
              <sign-up v-if="signValue == true" />
              <b-col
                style="margin-left: 5%"
                cols="12"
                md="12"
                sm="12"
                xl="12"
                lg="12"
              >
                <b-row v-if="logValue == true">
                  <b-col cols="7" md="7" sm="7" lg="6" xl="6">
                    <p style="margin-top: 10px">Create an account?</p>
                  </b-col>
                  <b-col cols="5" md="5" sm="5" lg="4" xl="4">
                    <b-button
                      @click="signCheck"
                      variant="light"
                      size="sm"
                      style="width: 100%"
                      class="mt-2"
                      ><span style="color: blue">To Sign Up</span></b-button
                    >
                  </b-col>
                </b-row>
                <b-row v-if="signValue == true">
                  <b-col cols="7" md="7" sm="7" lg="6" xl="6">
                    <p style="margin-top: 10px">Create an account?</p>
                  </b-col>
                  <b-col cols="5" md="5" sm="5" lg="4" xl="4">
                    <b-button
                      @click="logCheck"
                      variant="light"
                      size="sm"
                      style="width: 100%"
                      class="mt-2"
                      ><span style="color: blue">To Log in</span></b-button
                    >
                  </b-col>
                </b-row>
              </b-col>
            </b-col>
          </b-row>
        </div>
      </b-modal>
    </div>
    <b-navbar
      toggleable="lg"
      type="light"
      style="height: 55px; background: #ffffff"
    >
      <b-navbar-brand to="/"
        ><h2 class="nav-brand">
          <b-img class="nav-img" :src="logo"></b-img
          ><span class="mx-2 mt-2">Yakkart</span>
        </h2></b-navbar-brand
      >
      <b-navbar-nav class="ml-auto hide-md hide-xs hiden-md">
        <country-flag :country="countryInfo.countryCode" size="normal" />
        <p
          style="
            font-size: 0.6em;
            margin-top: 5px;
            margin-left: -8px;
            font-weight: bold;
            color: #000000;
          "
        >
          {{ countryInfo.countryCode }}
        </p>
      </b-navbar-nav>

      <b-collapse id="nav-collapse" is-nav class="hide-xs hide-md">
        <b-navbar-nav class="ml-auto">
          <span v-if="!user">
            <b-button
              v-if="countryInfo.countryName != undefined"
              class="mx-1"
              id="show-btn"
              variant="light"
              style="color: black; font-weight: bold"
              size="sm"
              to="/jobs"
              ><img
                style="width: 20px"
                src="https://img.icons8.com/material/24/000000/find-matching-job.png"
              />Jobs</b-button
            >
            <b-button
              class="mx-1"
              id="show-btn"
              variant="light"
              style="color: #000000; font-weight: bold; opacity: 0.9"
              size="sm"
              @click="showModal"
              ><img
                style="width: 20px"
                src="https://img.icons8.com/glyph-neue/64/000000/communication.png"
              />Chat</b-button
            >

            <b-button
              class="mx-1"
              id="show-btn"
              variant="light"
              style="color: #000000; font-weight: bold; opacity: 0.9"
              size="sm"
              @click="showModal"
              ><img
                src="https://img.icons8.com/material/24/000000/user.png"
              />LogIn</b-button
            >
            <b-button
              class="mx-1"
              id="show-btn"
              variant="light"
              style="color: #000000; font-weight: bold; opacity: 0.9"
              size="sm"
              @click="showModal"
              ><img
                class="mx-1"
                style="width: 20px"
                src="https://img.icons8.com/small/48/000000/add.png"
              />Post Your Add</b-button
            >
          </span>
          <span
            v-if="user"
            style="
              cursor: pointer;
              background: #ffc800;
              color: black;
              font-weight: bold;
              height: 30px;
              padding: 2px;
              paddding-right: 4px !important;
              border-radius: 5px;
            "
            @click="routerChangeJob"
            class="nav-item-right"
            ><img
              style="width: 22px"
              src="https://img.icons8.com/material/24/000000/find-matching-job.png"
            />Jobs</span
          >
          <span
            v-if="user"
            style="cursor: pointer; padding: 2px"
            @click="routerChangeUpload"
            class="nav-item-right"
            ><img
              style="width: 22px"
              src="https://img.icons8.com/material/24/000000/add.png"
            />
            Upload Add</span
          >

          <span
            v-if="user"
            style="cursor: pointer ; !important;padding:2px"
            @click="routerChange"
            class="nav-item-right"
            ><span style="font-size: 1.1em"
              ><i
                :style="chatDataSize.length != 0 ? 'color: #FFFFFF' : ''"
                style="color: black"
                class="fas fa-comments 2x"
              ></i> </span
            ><span
              v-if="chatDataSize.length != 0"
              style="
                font-weight: 900;
                font-family: Loto;
                margin-left: -13%;
                margin-bottom: 15%;
                color: #f23d67;
                font-size: 1.2em;
              "
              >{{ chatDataSize.length }}</span
            >
            Chat
          </span>
          <b-nav-item-dropdown
            style="padding: 2px"
            v-if="user"
            right
            class="drop-down-right"
          >
            <template #button-content>
              <em>
                <span class="user-details" v-if="userData != null"
                  ><b-avatar
                    style="width: 30px; height: 30px; border: 2px solid #fff"
                    :src="userData.img"
                  ></b-avatar
                  ><span
                    style="
                      color: #000000;
                      font-weight: 400;
                      letter-spacing: 1px;
                    "
                    class="mx-1"
                    >{{ userData.firstName }} {{ userData.listName }}</span
                  ></span
                >
                <span v-if="userData == null" class="user-details"
                  ><b-avatar
                    style="width: 30px; height: 30px"
                    :src="avatarImg"
                  ></b-avatar
                  ><span style="color: green" class="mx-1">User</span>
                </span>
              </em>
            </template>
            <b-dropdown-item class="my-2" to="/favourite"
              ><span class="mx-2"><i class="fas fa-star"></i></span> My
              favourite</b-dropdown-item
            >
            <b-dropdown-item class="my-2" to="/profile"
              ><span class="mx-2"><i class="fas fa-user"></i></span> My
              Profile</b-dropdown-item
            >
            <b-dropdown-item class="my-2" to="/setting">
              <span class="mx-2"><i class="fas fa-cog"></i></span>
              Seeting</b-dropdown-item
            >
            <b-dropdown-item class="my-2" @click="logOut">
              <span class="mx-2"><i class="fas fa-sign-out-alt"></i></span> Sign
              Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
      <span v-b-toggle.sidebar-backdrop class="hide-xl"
        ><i style="color: #000000" class="fas fa-align-justify"></i
      ></span>
    </b-navbar>
    <b-sidebar id="sidebar-backdrop" backdrop shadow>
      <div class="px-3 py-2">
        <b-navbar-brand href="#"
          ><b-img class="nav-img" :src="logo"></b-img
          ><span class="nav-brand2">Yakkart</span></b-navbar-brand
        >
        <br />
        <br />
        <b-row class="hide-l">
          <b-col v-if="user" cols="12" sm="12" md="12">
            <b-button
              @click="toggleFun"
              variant="light"
              class="my-2"
              style="width: 100%"
              v-b-toggle.my-collapse
            >
              <b-row>
                <b-col cols="10" sm="10" md="10">
                  <b-avatar :src="avatarImg"></b-avatar>
                  <span class="mx-2">Sohag Chowdhury</span>
                </b-col>
                <b-col cols="2" sm="2" md="2">
                  <i v-if="toggle == false" class="fas fa-chevron-down"></i>
                  <i v-if="toggle == true" class="fas fa-chevron-up"></i>
                </b-col>
              </b-row>
            </b-button>
          </b-col>
        </b-row>
        <div v-if="user">
          <b-collapse id="my-collapse" class="my-2">
            <h5
              style="cursor: pointer"
              @click="routeFunc('/favourite')"
              class="my-2"
            >
              <span class="mx-2"><i class="fas fa-star"></i></span> My favourite
            </h5>
            <h5
              style="cursor: pointer"
              @click="routeFunc('/setting')"
              class="my-2"
            >
              <span class="mx-2"><i class="fas fa-cog"></i></span> Seeting
            </h5>

            <h5
              style="cursor: pointer"
              @click="routeFunc('/profile')"
              class="my-2"
            >
              <span class="mx-2"><i class="fas fa-user"></i></span> My Profile
            </h5>
            <h5 style="cursor: pointer" @click="logOut" class="my-2">
              <span class="mx-2"><i class="fas fa-sign-out-alt"></i></span> Sign
              Out
            </h5>
          </b-collapse>
        </div>
        <h5 v-if="user" style="cursor: pointer" @click="routeFunc('/demo')">
          <span class="my-2"><i class="fas fa-plus"></i> Upload Products</span>
        </h5>

        <h5
          v-if="user"
          style="cursor: pointer"
          @click="routeFunc('/chat/' + 672346324)"
        >
          <span class="my-2"><i class="fas fa-comments"></i> Chat</span>
        </h5>
        <h5 v-if="user" style="cursor: pointer" @click="routeFunc('/jobs')">
          <img
            style="width: 20px"
            src="https://img.icons8.com/material/24/000000/find-matching-job.png"
          />
          Jobs
        </h5>
        <h5 v-if="!user" style="cursor: pointer" @click="showModal">
          <span class="my-2"><i class="fas fa-plus"></i> Upload Products</span>
        </h5>
        <h5 v-if="!user" style="cursor: pointer" @click="showModal">
          <img
            style="width: 20px"
            src="https://img.icons8.com/material/24/000000/find-matching-job.png"
          />
          Jobs
        </h5>

        <h5 v-if="!user" style="cursor: pointer" @click="showModal">
          <span class="my-2"><i class="fas fa-comments"></i> Chat</span>
        </h5>
        <h5
          v-if="!user"
          style="cursor: pointer"
          @click="showModal"
          class="my-2"
        >
          <span class="my-2"><i class="fas fa-sign-in-alt"></i></span> Sign in
        </h5>
      </div>
    </b-sidebar>
    <b-row
      v-if="countryInfo.countryName == undefined"
      v-show="$route.name == 'Dashbord'"
      class="row justify-content-center"
    >
      <b-col class="serch-nav mt-3" cols="10" md="7" sm="7" xl="7" lg="7">
        <div class="location-error">
          <h1 class="text-align:center">
            <b-button class="search-bg2" @click="showModal" size="sm">
              <img
                style="width: 18px"
                class="mx-2"
                src="https://img.icons8.com/material/24/ffffff/info--v1.png"
              />
              <span style="margin-top: 6px !important"
                >For Best Result Please Access your Location Or Login</span
              >
            </b-button>
          </h1>
        </div>
      </b-col>
    </b-row>
    <b-row
      v-if="countryInfo.countryName != undefined"
      v-show="$route.name == 'Dashbord'"
      class="row justify-content-center"
    >
      <b-col class="serch-nav xm" cols="10" md="8" sm="8" xl="8" lg="8">
        <h1>
          <span class="search-bg"
            ><img
              style="width: 25px"
              src="https://img.icons8.com/material/24/ffffff/marker.png"
            />
            All of {{ countryInfo.countryName }}</span
          >
        </h1>
        <div class="input-field">
          <input
            class="input-search"
            @keyup.enter="Search"
            v-model="filterText"
            placeholder="What You are looking for?"
            style=""
            type="text"
            name="fname"
          />
          <b-button @click="Search" class="input-btn" style="" size="1.4em;"
            ><i size="1.4em" class="fas fa-search"></i
          ></b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle: false,
      signValue: false,
      location: null,
      gettingLocation: false,
      errorStr: null,
      logValue: true,
      filterText: "",
      logo: require("@/assets/logo.png"),
      avatarImg: require("@/assets/img/chat/profile.jpg"),
    };
  },
  methods: {
    signCheck() {
      this.signValue = true;
      this.logValue = false;
    },
    logCheck() {
      this.logValue = true;
      this.signValue = false;
    },

    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    logOut() {
      this.$store.dispatch("logOut");
      this.$router.push("/");
    },
    toggleFun() {
      this.toggle = !this.toggle;
    },
    routerChange() {
      this.$router.push("/chat/" + 2432);
    },
    routerChangeJob() {
      this.$router.push("/jobs");
    },
    routerChangeUpload() {
      this.$router.push("/demo");
    },
    routeFunc(e) {
      console.log("route");

      this.$router.push(e);
      console.log("route");
    },
    Search() {
      this.$store.dispatch("filterSarch", {
        text: this.filterText,
      });
      this.$router.push("/products/" + "Search  Result");
    },

    async locateMe() {
      navigator.geolocation.getCurrentPosition(
        () => {
          this.gettingLocation = true;
          this.$store.dispatch("productRecent");
        },
        () => {
          this.gettingLocation = false;
        }
      );
    },
  },

  computed: {
    userData() {
      return this.$store.getters.userData;
    },
    chatDataSize() {
      return this.$store.getters.chatDataSize;
    },
    countryInfo() {
      return this.$store.getters.countryInfo;
    },
    user() {
      return this.$store.getters.user;
    },
  },
  mounted() {
    this.locateMe();
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        //this.$router.push("/");
        this.hideModal();
      }
    },
    userData(value) {
      if (value == null || value == undefined) {
        // this.$router.push("/update");
      }
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .hiden-xs {
    display: none;
  }
  .xm {
    margin-top: 10px;
  }
  .location-error {
    height: 90px;
  }
  p {
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    font-family: "Maven Pro", sans-serif;
  }
  .input-field {
    min-height: 80px !important;
  }
  .input-btn {
    width: 14%;
    height: 40px;
    margin-bottom: 6px;
    margin-left: -15%;
    background: green;
  }
  .input-search {
    width: 100%;
    height: 45px;
    outline: none !important;
    border: 1px solid #fff;
    box-shadow: 0 0 10px #719ece;
    border-radius: 0px 0px 0px 0px;
  }
  .search-bg {
    margin-top: 10px !important;
    background-color: #4b8f1b;
    padding: 8px;
    border-radius: 25px;
  }
  .search-bg2 {
    margin-top: 10px !important;
    background-color: #4b8f1b;
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
  .hide-xs {
    display: none;
  }
  .nav-img {
    width: 30px;
    margin-left: 0px;
  }
  .nav-brand {
    font-family: "Maven Pro", sans-serif;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff !important;
  }
  .nav-brand2 {
    font-family: "Maven Pro", sans-serif;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;
    color: #000000 !important;
  }
  .nav-lang {
    margin-top: 4%;
    margin-left: 20px;
    font-size: 1.3em;
  }
  .nav-item-right {
    margin: 0 10px;
    margin-top: 4%;
  }
  .drop-down-right {
    margin-top: 2%;
    color: rgba(59, 52, 52, 0) !important;
  }
  .user-details {
    color: black;
  }
  h5 {
    font-family: "Maven Pro", sans-serif;
    font-size: 18px;
    margin-top: 15px !important;
    margin-left: 10%;
    color: #000000;
  }
}
@media (min-width: 601px) and (max-width: 1200px) {
  .hiden-md {
    display: none;
  }
  .location-error {
    height: 90px;
  }
  p {
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    font-family: "Maven Pro", sans-serif;
  }
  .input-field {
    min-height: 80px !important;
  }
  .input-btn {
    width: 14%;
    height: 40px;
    margin-bottom: 6px;
    margin-left: -15%;
    background: green;
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
    background-color: #4b8f1b;
    padding: 8px;
    border-radius: 25px;
  }
  .search-bg2 {
    margin-top: 10px !important;
    background-color: #4b8f1b;
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
  .hide-xs {
    display: none;
  }
  .nav-img {
    width: 30px;
    margin-left: 0px;
  }
  .nav-brand {
    font-family: "Maven Pro", sans-serif;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff !important;
  }
  .nav-brand2 {
    font-family: "Maven Pro", sans-serif;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;
    color: #000000 !important;
  }
  .nav-lang {
    margin-top: 4%;
    margin-left: 20px;
    font-size: 1.3em;
  }
  .nav-item-right {
    margin: 0 10px;
    margin-top: 4%;
  }
  .drop-down-right {
    margin-top: 2%;
    color: rgba(59, 52, 52, 0) !important;
  }
  .user-details {
    color: black;
  }
  h5 {
    font-family: "Maven Pro", sans-serif;
    font-size: 18px;
    margin-top: 15px !important;
    margin-left: 10%;
    color: #000000;
  }
}
@media only screen and (min-width: 1201px) {
  .hide-xl {
    display: none;
  }
  .nav-img {
    width: 45px;
    margin-left: 30px;
  }
  .nav-brand {
    font-family: "Maven Pro", sans-serif;
    margin-left: 10px;
    margin-top: 15px !important;
    font-size: 40px;
    font-weight: 900;
    color: #000000 !important;
  }
  .nav-lang {
    margin-top: 4%;
    margin-left: 20px;
    font-size: 1.3em;
  }
  .nav-item-right {
    margin: 0 10px;
    margin-top: 4%;
    font-family: "Maven Pro", sans-serif;
    font-weight: 800;
    color: #000000;
  }
  .serch-nav h1 {
    text-align: center;
    font-family: "Maven Pro", sans-serif;
    font-size: 18px;
    color: #fff;
    margin-bottom: 10px;
  }
  .search-bg {
    background-color: #4b8f1b;
    padding: 6px;
    border-radius: 10px;
  }
  .search-bg2 {
    background-color: #4b8f1b;
    padding: 6px;
    border-radius: 10px;
  }
  .drop-down-right {
    margin-top: 2%;
    color: rgba(59, 52, 52, 0) !important;
  }
  p {
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    font-family: "Maven Pro", sans-serif;
  }
  .user-details {
    color: black;
  }
  .input-search {
    width: 100%;
    height: 45px;
    outline: none !important;
    border: 1px solid #fff;
    box-shadow: 0 0 10px #719ece;
    border-radius: 5px 5px 5px 5px;
  }
  .input-btn {
    width: 8%;
    height: 45px;
    margin-bottom: 6px;
    margin-left: -8%;
    background: #4b8f1b;
  }
  .input-field {
    height: 70px;
  }
  .location-error {
    height: 50px;
  }
}
</style>