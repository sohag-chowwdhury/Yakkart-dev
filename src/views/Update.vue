<template>
  <div>
    <b-container>
     
      <b-row class="row justify-content-center">
         <b-col cols="12" sm="12" md="10" lg="10" xl="10" v-if="countryInfo.countryName == undefined">
           <country-list />
         </b-col>
        <b-col cols="12" sm="12" md="10" lg="8" xl="8" v-if="countryInfo.countryName != undefined">
          <h4>Update Your Information</h4>
          <b-card style="background: green" v-if="success" >
            <h5 style="font-size: 0.9em; color: white; text-align: center">
              {{ success }}
            </h5>
          </b-card>
          <b-row class="row justify-content-center" v-if="countryInfo.countryName != undefined">
            <b-col class="" cols="6" sm="6" md="6" lg="5" xl="6">
              <div class="avatar-section">
                <b-avatar size="150px" :src="img" />
                <b-button
                  v-if="loadingUpload == true"
                  style="margin-left: 20px"
                  variant="primary"
                  disabled
                >
                  <b-spinner small type="grow"></b-spinner>
                  uploading...
                </b-button>
                <label v-if="loadingUpload == false">
                  UPLOAD PHOTO
                  <input
                    type="file"
                    style="display: none"
                    ref="fileInput"
                    accept="image/*"
                    @change="onFilePicked"
                  />
                </label>
              </div>
            </b-col>
          </b-row>
          <b-row class="row justify-content-center" v-if="countryInfo.countryName != undefined">
            <b-col cols="6" sm="6" md="6" xl="12" lg="12">
              <p style="text-align: end">
                <img
                  style="width: 25px"
                  src="https://img.icons8.com/color/96/000000/google-maps-new.png"
                />
                {{ countryInfo.countryName }}
              </p>
            </b-col>
            <b-col cols="6" sm="6" md="6" xl="6" lg="6">
              <b-form-input
                class="input-field"
                v-model="firstName"
                placeholder="First Name"
              ></b-form-input>
            </b-col>
            <b-col cols="6" sm="6" md="6" xl="6" lg="6">
              <b-form-input
                class="input-field"
                type="email"
                v-model="listName"
                placeholder="Last Name"
              ></b-form-input>
            </b-col>
            <b-col cols="6" sm="6" md="6" xl="6" lg="6">
              <b-form-input
                class="input-field"
                type="email"
                v-model="email"
                placeholder="Email"
              ></b-form-input>
            </b-col>
            <b-col cols="6" sm="6" md="6" xl="6" lg="6">
              <b-form-input
                class="input-field"
                v-model="phoneNumber"
                type="number"
                placeholder="Contact"
              ></b-form-input>
            </b-col>
            <b-col cols="12" sm="12" md="12" xl="12" lg="12">
              <b-form-textarea
                class="input-field-text"
                type="text"
                v-model="address"
                placeholder="Address"
              ></b-form-textarea>
            </b-col>
            <b-col cols="12" sm="12" md="12" xl="12" lg="12">
              <b-form-textarea
                class="input-field-text"
                type="text"
                v-model="description"
                placeholder="Description"
              ></b-form-textarea>
            </b-col>
            <b-col class="my-3" cols="12" sm="12" md="12" xl="12" lg="12">
              <b-button
                class="mx-2"
                to="/dashbord"
                variant="light"
                style="width: 10%"
                >Skip</b-button
              ><b-button
                :disabled="!formValidator"
                @click="userDataUpdate"
                variant="dark"
                style="width: 40%"
                >Submit</b-button
              >
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/database";
export default {
  data() {
    return {
      firstName: "",
      listName: "",
      email: "",
      phoneNumber: "",
      img: "",
      address: "",
      description: "",
      loadingUpload: false,
    };
  },

  created() {
    this.$store.dispatch("productRecent");
  },
  computed: {
    countryInfo() {
      return this.$store.getters.countryInfo;
    },
    userData() {
      return this.$store.getters.userData;
    },
    formValidator() {
      return (
        this.email !== "" &&
        this.listName !== "" &&
        this.firstName &&
        this.phoneNumber !== "" &&
        this.img !== "" &&
        this.address !== "" &&
        this.description !== ""
      );
    },

    user() {
      return this.$store.getters.user.id;
    },
    success() {
      return this.$store.getters.success;
    },
  },
  methods: {
    userDataUpdate() {
      this.$store.dispatch("userDataUpdate", {
        email: this.email,
        firstName: this.firstName,
        listName: this.listName,
        phoneNumber: this.phoneNumber,
        img: this.img,
        address: this.address,
        description: this.description,
        uid: this.$store.getters.user.id,
        country: this.$store.getters.countryInfo.countryCode,
        countryName: this.$store.getters.countryInfo.countryName,
      });
      this.$router.push("/");
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
              this.img = downloadURL;
              this.loadingUpload = false;
            });
          }
        );
      }
    },
  },
  watch: {
    userData(value) {
      if (value !== null && value !== undefined) {
        if (
          this.$store.getters.userData == null ||
          this.$store.getters.userData == undefined
        ) {
          this.hideModal();
        } else {
          this.$router.push("/");
          this.hideModal();
        }
      }
    },
  },
};
</script>
<style scoped>
h4 {
  font-family: Loto;
  font-size: 20px;
  font-family: "Maven Pro", sans-serif;
  text-align: center;
  font-weight: 800 !important;
  margin-top: 30px;
}
.btn-profile-summery {
  position: absolute;
  margin-top: 30%;
  margin-left: -20%;
  height: 40px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  border-radius: 20px;
}
label {
  font-size: 1em;
  font-weight: 700;
  padding: 6px;
  font-family: Loto;
  background: #d52b1e;
  cursor: pointer;
  border-radius: 10px;
  margin-left: 3%;
  margin-top: -6%;
  color: aliceblue;
}
.avatar-section {
  margin-left: 25% !important;
  margin-top: 5% !important;
}
.input-field {
  margin-top: 5%;
  border-radius: 10px;
  width: 100% !important;
  height: 45px;
  background: #d7dbd9;
}
.input-field-text {
  margin-top: 5%;
  border-radius: 10px;
  width: 100% !important;
  height: 85px;
  background: #d7dbd9;
}
</style>