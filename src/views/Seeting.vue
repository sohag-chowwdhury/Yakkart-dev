<template>
  <div>
    <b-container>
      <b-row class="row justify-content-center">
        <b-col cols="12" sm="12" md="12" xl="3" lg="3">
          <user-profile />
        </b-col>
        <b-col cols="11" sm="12" md="12" xl="8" lg="8">
          <b-row class="row justify-content-center">
            <b-col cols="12" sm="12" md="6" xl="6" lg="6">
              <b-card style="width: 100% !important" class="my-2">
                <b-row>
                  <b-col cols="12" sm="6" md="8" lg="8" xl="8">
                    <span class="mx-2"><i class="fas fa-cog fa-2x"></i></span>
                  </b-col>
                </b-row>
                <b-row class="row justify-content-center">
                  <b-col cols="6" sm="6" md="8" lg="8" xl="8">
                    <b-button
                      class="btn mt-1"
                      @click="activeBtn(1)"
                      variant="light"
                      >Change Name</b-button
                    >
                    <div :class="btnValue == 1 ? 'border-btn' : ''"></div>
                  </b-col>
                  <b-col cols="6" sm="6" md="8" lg="8" xl="8">
                    <b-button
                      class="btn mt-1"
                      @click="activeBtn(2)"
                      variant="light"
                      >Edit Address</b-button
                    >
                    <div :class="btnValue == 2 ? 'border-btn' : ''"></div>
                  </b-col>
                  <b-col cols="6" sm="6" md="8" lg="8" xl="8">
                    <b-button
                      class="btn mt-1"
                      @click="activeBtn(3)"
                      variant="light"
                      >Change Contact</b-button
                    >
                    <div :class="btnValue == 3 ? 'border-btn' : ''"></div>
                  </b-col>
                  <b-col cols="6" sm="6" md="8" lg="8" xl="8">
                    <b-button
                      class="btn mt-1"
                      @click="activeBtn(4)"
                      variant="light"
                      >Edit Description</b-button
                    >
                    <div :class="btnValue == 4 ? 'border-btn' : ''"></div>
                  </b-col>
                  <b-col cols="6" sm="6" md="8" lg="8" xl="8">
                    <b-button
                      class="btn mt-1"
                      @click="activeBtn(5)"
                      variant="light"
                      >Change Avatar</b-button
                    >
                    <div :class="btnValue == 5 ? 'border-btn' : ''"></div>
                  </b-col>
                  <b-col cols="6" sm="6" md="8" lg="8" xl="8">
                    <b-button
                      class="btn mt-1"
                      @click="activeBtn(6)"
                      variant="light"
                      >Change Password</b-button
                    >
                    <div :class="btnValue == 6 ? 'border-btn' : ''"></div>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>

            <b-col cols="12" sm="12" md="6" xl="6" lg="6">
              <b-card
                style="
                  background: black;
                  font-weight: bold;
                  color: white;
                  text-align: center;
                "
                class="mt-1"
                v-if="success"
              >
                <b-col>
                  <b-button
                    @click="hideCard"
                    style="width: 20% !important"
                    pill
                    variant="light"
                    ><i class="fa-2x fas fa-times-circle"></i
                  ></b-button>
                </b-col>

                <span class="my-3"> {{ success }}</span>
              </b-card>
              <b-row class="mt-3 seeting-row" v-if="btnValue == 1">
                <b-button disabled class="btn2 mt-1" variant="light"
                  >Change Name</b-button
                >
                <b-col
                  class="form-input"
                  cols="12"
                  sm="12"
                  md="12"
                  xl="12"
                  lg="12"
                >
                  <b-form-input
                    class="sign-up-input"
                    v-model="firstName"
                    placeholder="First Name"
                  ></b-form-input>
                </b-col>
                <b-col
                  class="form-input"
                  cols="12"
                  sm="12"
                  md="12"
                  xl="12"
                  lg="12"
                >
                  <b-form-input
                    class="sign-up-input"
                    v-model="lastName"
                    placeholder="Last Name"
                  ></b-form-input>
                </b-col>
                <b-button
                  @click="userDataUpdate(nameMsg)"
                  class="btn2 mt-1"
                  variant="success"
                  >Submit</b-button
                >
              </b-row>
              <b-row class="mt-3 seeting-row" v-if="btnValue == 2">
                <b-button disabled class="btn2 mt-1" variant="light"
                  >Change Address</b-button
                >
                <b-col
                  class="form-input"
                  cols="12"
                  sm="12"
                  md="12"
                  xl="12"
                  lg="12"
                >
                  <b-form-textarea
                    class="sign-up-input"
                    v-model="address"
                    placeholder="Address"
                  ></b-form-textarea>
                </b-col>

                <b-button
                  @click="userDataUpdate(addressMsg)"
                  class="btn2 mt-1"
                  variant="success"
                  >Submit</b-button
                >
              </b-row>
              <b-row class="mt-3 seeting-row" v-if="btnValue == 3">
                <b-button disabled class="btn2 mt-1" variant="light"
                  >Change Contract</b-button
                >
                <b-col
                  class="form-input"
                  cols="12"
                  sm="12"
                  md="12"
                  xl="12"
                  lg="12"
                >
                  <b-form-input
                    class="sign-up-input"
                    v-model="contact"
                    placeholder="Contact"
                  ></b-form-input>
                </b-col>

                <b-button
                  @click="userDataUpdate(contactMsg)"
                  class="btn2 mt-1"
                  variant="success"
                  >Submit</b-button
                >
              </b-row>
              <b-row class="mt-3 seeting-row" v-if="btnValue == 4">
                <b-button disabled class="btn2 mt-1" variant="light"
                  >Edit Description</b-button
                >
                <b-col
                  class="form-input"
                  cols="12"
                  sm="12"
                  md="12"
                  xl="12"
                  lg="12"
                >
                  <b-form-textarea
                    class="sign-up-input"
                    v-model="description"
                    placeholder="Description"
                  ></b-form-textarea>
                </b-col>

                <b-button
                  @click="userDataUpdate(descriptionMsg)"
                  class="btn2 mt-1"
                  variant="success"
                  >Submit</b-button
                >
              </b-row>
              <b-row class="mt-3 seeting-row" v-if="btnValue == 6">
                <b-button disabled class="btn2 mt-1" variant="light"
                  >Change Password</b-button
                >
                <b-col
                  class="form-input"
                  cols="12"
                  sm="12"
                  md="12"
                  xl="12"
                  lg="12"
                >
                  <b-form-input
                    class="sign-up-input"
                    type="email"
                    v-model="email"
                    placeholder="Email"
                  ></b-form-input>
                </b-col>

                <b-button class="btn2 mt-1" variant="success">
                  Send A Link To Email</b-button
                >
              </b-row>

              <b-row class="mt-3 seeting-row" v-if="btnValue == 5">
                <b-col cols="12" md="12" sm="12" lg="12" xl="12">
                  <b-button disabled class="btn2 mt-1" variant="light"
                    >Change Avatar</b-button
                  ></b-col
                >
                <b-col class="mt-2" cols="12" sm="12" md="12" lg="10" xl="10">
                  <div class="avatar-section">
                    <b-avatar size="150px" :src="avatarImg" />
                    <b-button
                      class="btn-avatar"
                      v-if="loadingUpload == true"
                      variant="primary"
                      disabled
                    >
                      <b-spinner small type="grow"></b-spinner>
                      uploading...
                    </b-button>
                    <label v-if="loadingUpload == false">
                      UPLOAD VIDEO
                      <input
                        type="file"
                        style="display: none"
                        ref="fileInput"
                        accept="image/*"
                        @change="onFilePicked(avatarImgMsg)"
                      />
                    </label>
                  </div>
                  <b-button
                    @click="userDataUpdate"
                    class="btn2 mt-1"
                    variant="success"
                  >
                    Update Avatar Image</b-button
                  >
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row class="row justify-content-start">
            <b-col class="my-2 mx-3" cols="12" md="6" sm="6" lg="6" xl="6">
              <h5 class="location-text">
                <img
                  style="width: 30px"
                  class="mx-2"
                  src="https://img.icons8.com/glyph-neue/64/fa314a/marker.png"
                />Current Location
              </h5>
            </b-col>
            <b-col cols="12" xl="12" lg="12">
              <div style="border: 2px solid #00987b">
                <l-map
                  :options="{ zoomControl: false }"
                  @ready="onReady"
                  @locationfound="onLocationFound"
                  :zoom="zoom"
                  :center="center"
                  style="height: 300px; width: 100%"
                >
                  <l-tile-layer :url="url" :attribution="attribution" />
                  <l-marker :lat-lng="marker" />
                  <l-icon-default :image-path="path" />
                </l-map>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LIconDefault } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import firebase from "firebase/app";
import "firebase/database";
import 'firebase/storage'

export default {
  name: "CustomPath",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIconDefault,
  },
  data() {
    return {
      btnValue: 1,
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      description: "",
      contact: "",
      avatarImg: "",
      loadingUpload: false,
      nameMsg: "Your Name Change successfully",
      addressMsg: "Your Address Change successfully",
      descriptionMsg: "Your description Change successfully",
      avatarImgMsg: "Your Avatar Image Change successfully",
      contactMsg: "Your Contact Change successfully",
      zoom: 12,
      path: "/images/",
      center: [46.204391, 6.143158],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(46.204391, 6.143158),
    };
  },
  methods: {
    hideCard() {
      this.$router.go();
    },
    activeBtn(e) {
      this.btnValue = e;
    },
    onReady(mapObject) {
      mapObject.locate();
    },
    onLocationFound(location) {
      this.center = [location.latlng.lat, location.latlng.lng];
      this.marker = latLng(location.latlng.lat, location.latlng.lng);
    },
    userDataUpdate(e) {
      this.$store.dispatch("userProfileEdit", {
        email: this.email,
        firstName: this.firstName,
        listName: this.lastName,
        phoneNumber: this.contact,
        img: this.avatarImg,
        address: this.address,
        description: this.description,
        msg: e,
      });
    },
    onFilePicked(event) {
      this.loadingUpload = true;
      if (event.target.files[0]) {
        const file = event.target.files[0];
        var storageRef = firebase
          .storage()
          .ref(
            "user" +
              "/" +
              this.$store.getters.user.id +
              "/" +
              "userPhoto" +
              "/" +
              "avatar"
          );
        var uploadTask = storageRef.put(file);
        uploadTask.on(
          "state_changed",
          () => {},
          (error) => {
            alert(error);
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.avatarImg = downloadURL;
              this.loadingUpload = false;
            });
          }
        );
      }
    },
  },
  created() {
    this.$store.dispatch("userDataRead");
  },
  computed: {
    success() {
      return this.$store.getters.success;
    },
    userData() {
      return this.$store.getters.userData;
    },
  },
  watch: {
    userData(value) {
      if (value !== null && value !== undefined) {
        this.firstName = this.$store.getters.userData.firstName;
        this.lastName = this.$store.getters.userData.listName;
        this.address = this.$store.getters.userData.address;
        this.contact = this.$store.getters.userData.phoneNumber;
        this.description = this.$store.getters.userData.description;
        this.avatarImg = this.$store.getters.userData.img;
        this.email = this.$store.getters.userData.email;
      }
    },
  },
};
</script>
<style lans="scss" scoped>
.location-text {
  color: #00987b;
  opacity: 1;
  font-weight: 700;
  text-align: start !important;
  font-size: 16px;
}
.btn-avatar {
  font-size: 1em;
  font-weight: 700;
  padding: 6px;
  font-family: Loto;
  background: red;
  cursor: pointer;
  border-radius: 10px;
  margin-top: -5%;
  color: aliceblue;
}
label {
  font-size: 15px;
  font-weight: 700;
  padding: 6px;
  font-family: Loto;
  background: #149777;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 5%;
  margin-top: -5%;
  color: aliceblue;
}
.seeting-row {
  margin-top: 5% !important;
}
.btn-avatrar {
  position: absolute;
  margin-left: 0%;
  height: 56px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
}
.btn2 {
  width: 50% !important ;
  margin: 0 auto;
}
.form-input {
  margin-top: 25px;
}
.card {
  width: 80%;
}
.btn {
  width: 90% !important ;
  height: 30px;
  font-size: 12px;
  margin-top: 20px !important;
  background-color: #149777;
  color: #ffffff;
}
.border-btn {
  border-bottom: 3px solid #149777;
  width: 90%;
  margin-top: 2px;
}
</style>