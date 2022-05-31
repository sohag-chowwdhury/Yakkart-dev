<template>
  <div class="container">
    <b-row class="sign-up row justify-content-center">
      <b-col cols="12" sm="12" md="12" lg="12" xl="12">
        <form @submit.prevent="onSignIn">
          <h4>Log In</h4>
          <b-form-input
            class="sign-up-input"
            type="email"
            v-model="email"
            placeholder="Email"
          ></b-form-input>
          <b-form-input
            class="sign-up-input"
            type="password"
            v-model="password"
            placeholder="Password"
          ></b-form-input>
          <b-row>
            <b-button
              class="ml-2 mt-3"
              type="submit"
              variant="light"
              style="margin-left: 10% !important"
              size="sm"
              to="/reset"
              ><span style="color: red">Forget Password?</span></b-button
            >
            <p style="color: red; font-size: 0.75em; text-align: center">
              {{ error }}
            </p>
          </b-row>
          <b-button
            :disabled="!formValidator"
            variant="dark"
            type="submit"
            class="sign-up-btn"
          >
            <b-spinner v-if="loading" small type="grow"></b-spinner>
            Log In</b-button
          >

          <b-row>
            <b-col cols="12" md="12" sm="12" xl="12">
              <p>Or Log in With</p>
            </b-col>
            <b-col cols="12" md="12" sm="12" xl="12">
              <b-button
                @click="signUpWithGoogles"
                variant="light"
                style="background: #cdd1ce"
                type="submit"
                class="sign-up-btn-soc"
              >
                <b-spinner v-if="loading" small type="grow"></b-spinner>
                <img
                  class="mx-2"
                  src="https://img.icons8.com/color/24/000000/google-logo.png"
                />
                Log In with Google</b-button
              >
            </b-col>
            <b-col cols="12" md="12" sm="12" xl="12">
              <b-button
                @click="signInWithFacebook"
                variant="primary"
                style="background: #3b5999"
                type="submit"
                class="sign-up-btn-soc"
              >
                <b-spinner v-if="loading" small type="grow"></b-spinner>
                <img
                  class="mx-2"
                  src="https://img.icons8.com/material/24/ffffff/facebook-new.png"
                />Log In with Facebook</b-button
              >
            </b-col>
          </b-row>
        </form>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: require("@/assets/logo.png"),
      password: "",
      email: "",
    };
  },
  methods: {
    onSignIn() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password,
      });
    },
    signUpWithGoogles() {
      this.$store.dispatch("signUpWithGoogle");
    },
    signInWithFacebook() {
      this.$store.dispatch("signInWithFacebook");
    },
  },

  computed: {
    formValidator() {
      return this.password !== "" && this.email !== "";
    },
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>
<style  scoped>
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
    margin-top: 0px;
    margin-bottom: 10px !important;
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
    height: 40px !important;
    margin-top: 15px !important;
    width: 80%;
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
    margin-top: 20% !important;
    margin-left: 20%;
    font-weight: 600 !important;
  }
  h4 {
    font-family: Loto;
    margin-bottom: 40px !important;
    text-align: center;
    font-weight: 0 !important;
    font-size: 20px !important;
    opacity: 0.9;
  }
  .sign-up-btn {
    width: 80% !important;
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
  height: 40px !important;
  margin-top: 20px !important;
  border-radius: 10px !important;
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
  font-weight: 600 !important;
  font-size: 20px !important;
  opacity: 0.9;
}
.sign-up-btn {
  width: 100%;
  margin-top: 5%;
}
.sign-up-btn-soc {
  width: 80%;
  margin-top: 1%;
}
.card-sign-up {
  border-radius: 10px !important;
}
.password-check {
  border-color: red !important;
}
</style>