<template>
  <div>
    <b-container>
    <b-row>
      <b-col xl="3" lg="3">
        <user-profile />
      </b-col>
      <b-col xl="9" lg="9">
        <b-card>
        <b-row class="row justify-content-center">
          <b-col cols="6" sm="6" md="3" xl="2" lg="2">
            <b-button class="btn mt-1" @click="activePost(1)" variant="danger"
              > <img style="width:25px;" src="https://img.icons8.com/material/24/26e07f/checkmark--v1.png"/>Active Post</b-button
            >
          </b-col>
          <b-col cols="6" sm="6" md="3" xl="2" lg="2">
            <b-button class="btn mt-1" @click="activePost(2)" variant="danger"
              ><img style="width:25px;" src="https://img.icons8.com/ios-filled/50/26e07f/multiply.png"/> Previous </b-button
            >
          </b-col>
           <b-col cols="6" sm="6" md="3" xl="2" lg="2">
            <b-button class="btn mt-1" @click="activePost(3)" variant="danger"
              ><img style="width:20px;" src="https://img.icons8.com/material/24/26e07f/save-archive.png"/> Draft </b-button
            >
          </b-col>
          <b-col cols="6" sm="6" md="3" xl="2" lg="2">
            <b-button class="btn mt-1" to="/setting" variant="danger"
              ><img style="width:20px;" src="https://img.icons8.com/ios-filled/50/26e07f/sync-settings.png"/> Setting</b-button
            >
          </b-col>
         
        </b-row>
        </b-card>
        <b-row>
          <b-container>
            <user-prodects :items="userPost" :filterValue="btnValue" />
          </b-container>
        </b-row>
        <b-col
          cols="10"
          sm="10"
          md="10"
          lg="10"
          xl="10"
          v-if="userPost.length == 0"
        >
          <b-card class="mt-2" style="width: 100%">
            <h3 style="font-weight: bold">Your Post is empty !!</h3>
          </b-card>
        </b-col>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnValue: 1,
    };
  },
  methods: {
    activePost(e) {
      this.btnValue = e;
    },
  },

  computed: {
    userPost() {
      return this.$store.getters.userPost;
    },
  },
};
</script>
<style scoped>
h3 {
  font-size: 20px;
  font-family: Loto;
}
.btn {
 width: 120px;
  height: 40px;
  font-size: 12px;
  background: #149777;
  color: #FFFFFF;
  font-weight: 600;
  ;
}
.border-btn {
  border-bottom: 3px solid grey;
 width: 120px;
  margin-top: 2px;
}
</style>