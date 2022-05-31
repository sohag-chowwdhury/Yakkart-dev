<template>
  <div class="container">
    <b-row class="sign-up row justify-content-center">
      <b-col cols="12" sm="12" md="8" lg="6" xl="6">
        <b-row class="row justify-content-center">
          <b-col cols="3" sm="3" md="3" lg="3" xl="1">
            <b-img class="sign-up-img" :src="logo"></b-img>
          </b-col>
          <b-col cols="4" sm="3" md="3" lg="3" xl="3">
            <h3>YakDeal</h3>
          </b-col>
        </b-row>
        <b-card class="card-sign-up">
          <b-form-input
            class="sign-up-input"
            type="email"
            v-model="email"
            placeholder="Email"
          ></b-form-input>
          <b-button
            :disabled="!formValidator"
            @click="passwordReset"
            variant="success"
            class="sign-up-btn"
            >Send Link To email</b-button
          >
          <p style="color: green" v-if="success">{{ success }}</p>
          <p style="color: red" v-if="error">{{ error }}</p>
          <p style="margin-top: 20px">
            Already have an account?<b-button variant="light" size="sm" to="/"
              ><span style="color: blue">To Log in</span></b-button
            >
          </p>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: require("@/assets/logo.png"),
      email: "",
    };
  },
  methods: {
    passwordReset() {
      this.$store.dispatch("passwordReset", {
        email: this.email,
      });
    },
  },
  computed: {
    formValidator() {
      return this.email !== "";
    },
    success() {
      return this.$store.getters.success;
    },
    error() {
      return this.$store.getters.error;
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .sign-up {
    font-style: Loto;
    margin-top: 5%;
  }
  .sign-up-input {
    height: 55px !important;
    margin-top: 25px !important;
    border-radius: 20px !important;
  }
  .sign-up-img {
    width: 50px;
    margin-left: 10%;
  }
  p {
    font-size: 0.9em;
    margin: 3%;
    margin-top: 10px;
    font-weight: 500;
    opacity: 0.8;
  }
  h3 {
    font-family: Loto;
    text-align: start;
    font-size: 28px !important;
    margin-top: 10% !important;
    font-weight: 600 !important;
  }
  h4 {
    font-family: Loto;
    margin-bottom: 40px !important;
    text-align: center;
    font-weight: 800 !important;
    font-size: 24px !important;
    opacity: 0.9;
  }
  .sign-up-btn {
    width: 100%;
    margin-top: 5%;
  }
  .card-sign-up {
    border-radius: 10px !important;
  }
  .password-check {
    border-color: red !important;
  }
}
@media (min-width: 601px) and (max-width: 1200px) {
  .sign-up {
    font-style: Loto;
    margin-top: 5%;
  }
  .sign-up-input {
    height: 55px !important;
    margin-top: 25px !important;
    border-radius: 20px !important;
  }
  .sign-up-img {
    width: 60px;
    margin-left: 20%;
  }
  p {
    font-size: 0.9em;
    margin: 3%;
    margin-top: 10px;
    font-weight: 500;
    opacity: 0.8;
  }
  h3 {
    font-family: Loto;
    text-align: start;
    margin-top: 20% !important;
    margin-left: 20%;
    font-weight: 600 !important;
  }
  h4 {
    font-family: Loto;
    margin-bottom: 40px !important;
    text-align: center;
    font-weight: 800 !important;
    font-size: 34px;
    opacity: 0.9;
  }
  .sign-up-btn {
    width: 100%;
    margin-top: 5%;
  }
  .card-sign-up {
    border-radius: 10px !important;
  }
  .password-check {
    border-color: red !important;
  }
}
@media only screen and (min-width: 1201px) {
  .sign-up {
    font-style: Loto;
    margin-top: 5%;
  }
  .sign-up-input {
    height: 55px !important;
    margin-top: 25px !important;
    border-radius: 20px !important;
  }
  .sign-up-img {
    width: 60px;
    margin-left: 20%;
  }
  p {
    font-size: 0.9em;
    margin: 3%;
    margin-top: 10px;
    font-weight: 500;
    opacity: 0.8;
  }
  h3 {
    font-family: Loto;
    text-align: start;
    margin-top: 20% !important;
    margin-left: 20%;
    font-weight: 600 !important;
  }
  h4 {
    font-family: Loto;
    margin-bottom: 40px !important;
    text-align: center;
    font-weight: 800 !important;
    font-size: 34px;
    opacity: 0.9;
  }
  .sign-up-btn {
    width: 100%;
    margin-top: 5%;
  }
  .card-sign-up {
    border-radius: 10px !important;
  }
  .password-check {
    border-color: red !important;
  }
}
.sign-up {
  font-style: Loto;
  margin-top: 5%;
}
.sign-up-input {
  height: 55px !important;
  margin-top: 25px !important;
  border-radius: 20px !important;
}
.sign-up-img {
  width: 60px;
  margin-left: 20%;
}
p {
  font-size: 0.9em;
  margin: 3%;
  margin-top: 10px;
  font-weight: 500;
  opacity: 0.8;
}
h3 {
  font-family: Loto;
  text-align: start;
  margin-top: 20% !important;
  margin-left: 20%;
  font-weight: 600 !important;
}
h4 {
  font-family: Loto;
  margin-bottom: 40px !important;
  text-align: center;
  font-weight: 800 !important;
  font-size: 34px;
  opacity: 0.9;
}
.sign-up-btn {
  width: 100%;
  margin-top: 5%;
}
.card-sign-up {
  border-radius: 10px !important;
}
.password-check {
  border-color: red !important;
}
</style>