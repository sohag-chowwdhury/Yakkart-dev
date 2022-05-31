<template>
  <div id="app">
    <div style="overflow-x: hidden !important" id="full-size">
      <navbar />

      <router-view />
    </div>

    <footer-bar />
  </div>
</template>
<script>
export default {
  data() {
    return {
      auth: true,
      location: null,
      gettingLocation: false,
      errorStr: null,
    };
  },

  computed: {
    canGeolocate() {
      return !!navigator.geolocation;
    },
    user() {
      return this.$store.getters.user;
    },
    userData() {
      return this.$store.getters.userData;
    },
  },
  watch: {
    userData(value) {
      if (value !== null && value !== undefined) {
        this.$store.dispatch("productRecent");
        if (value.activeStatus === false) {
          this.$store.dispatch("logOut");
          this.$router.push("/");
        }
      }
      if (value.firstName == null || value.firstName == undefined) {
        this.$router.push("/update");
      }
    },
  },
  mounted() {
    this.locateMe();
  },
  methods: {
    funcRecent() {
      this.$store.dispatch("productRecent", {});
    },
    async getLocation() {
      return new Promise((resolve, reject) => {
        if (!("geolocation" in navigator)) {
          reject(new Error("Geolocation is not available."));
        }

        navigator.geolocation.getCurrentPosition(
          (pos) => {
            resolve(pos);
            this.funcRecent();
          },
          (err) => {
            reject(err);
          }
        );
      });
    },

    async locateMe() {
      this.gettingLocation = true;
      try {
        this.gettingLocation = false;
        this.location = await this.getLocation();
      } catch (e) {
        this.gettingLocation = false;
        this.errorStr = e.message;
      }
    },
  },
};
</script>

<style>
#app {
  overflow: hidden !important;
}
#full-size {
  margin: auto;
  min-height: 100vh;
  background: #f7f7f7 !important;
}
html {
  height: -webkit-fill-available;
}
</style>
