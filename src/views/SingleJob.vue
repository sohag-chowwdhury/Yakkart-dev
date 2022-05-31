<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="12" xl="12" lg="12">
          <b-card>
            <b-row>
              <b-col cols="4" lg="1">
                <b-img class="job-img" :src="jobDetails.imgs[0]"></b-img>
              </b-col>
              <b-col cols="8" lg="11">
                <h4>{{ jobDetails.title }}</h4>
                <p>
                  <img
                    style="width: 22px; margin-bottom: 8px"
                    class="mr-2"
                    src="https://img.icons8.com/glyph-neue/64/fa314a/marker.png"
                  />
                  {{ jobDetails.state }} <span v-if="jobDetails.city">,</span>
                  <span v-if="jobDetails.city">{{ jobDetails.city }} ,</span>
                  <span style="color: #db2748">
                    Application deadline: {{ jobDetails.dateLine }}</span
                  >
                </p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="12" xl="12" lg="12">
          <b-card>
            <b-row>
              <b-col cols="6" lg="6">
                <p>Employer: {{ jobDetails.companyName }}</p>
                <p>
                  Salary per month: {{ jobDetails.minSallary }}-{{
                    jobDetails.maxSallary
                  }}
                </p>
                <p>Required work experience: {{ jobDetails.years }} Years</p>
              </b-col>
              <b-col cols="6" lg="6">
                <p>Job type:{{ jobDetails.jobType }}</p>
                <p>Required education: {{ jobDetails.education }}</p>
                <p>Application deadline: {{ jobDetails.dateLine }}</p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="12" xl="12" lg="12">
          <b-card>
            <b-row>
              <b-col cols="12" lg="8">
                <h4>About the job</h4>
                <p
                  style="font-size: 14px; opacity: 0.9"
                  v-html="jobDetails.description"
                >
                  {{ jobDetails.description }}
                </p>
              </b-col>
              <b-col cols="12" lg="4">
                <b-row class="row justify-content-center">
                  <b-col v-if="!user" cols="10" sm="10" md="10" xl="12" lg="12"
                    ><p>
                      <img
                        src="https://img.icons8.com/material/24/26e07f/info--v1.png"
                      />
                      Log in for User Details
                    </p></b-col
                  >

                  <b-col
                    v-if="user && postUser.creatorId != authId"
                    cols="10"
                    sm="10"
                    md="10"
                    xl="12"
                    lg="12"
                  >
                    <b-button
                      @click="chatFunc(postUser)"
                      :to="/chat/ + postUser.creatorId"
                      variant="light"
                      size="sm"
                      class="mt-2"
                      style="
                        width: 100%;
                        color: #00987b;
                        font-weight: bold;
                        font-family: 'Maven Pro', sans-serif;
                      "
                    >
                      <i class="fas fa-comments"></i> Chat with
                      {{ postUser.firstName }} {{ postUser.listName }}
                    </b-button>
                  </b-col>
                  <b-col v-if="user" cols="10" sm="10" md="10" xl="12" lg="12">
                    <b-button
                      size="sm"
                      @click="toggleFun"
                      variant="light"
                      class="my-2"
                      style="
                        width: 100%;
                        color: #00987b;
                        font-weight: bold;
                        font-family: 'Maven Pro', sans-serif;
                      "
                      v-b-toggle.my-collapse
                    >
                      <b-row>
                        <b-col cols="10" sm="10" md="10" v-if="user">
                          <span
                            >{{ postUser.firstName }}
                            {{ postUser.listName }}</span
                          >
                        </b-col>
                        <b-col cols="2" sm="2" md="2">
                          <i
                            v-if="toggle == false"
                            class="fas fa-chevron-down"
                          ></i>
                          <i
                            v-if="toggle == true"
                            class="fas fa-chevron-up"
                          ></i>
                        </b-col>
                      </b-row>
                    </b-button>
                    <div>
                      <b-card style="width: 100%">
                        <b-collapse id="my-collapse" visible class="my-2">
                          <h3>
                            <i class="fas fa-envelope mx-2"></i>
                            <span>{{ postUser.email }}</span>
                          </h3>
                          <h3>
                            <i class="fas fa-address-card mx-2"></i>
                            <span>{{ postUser.address }}</span>
                          </h3>
                          <h3>
                            <i class="fas fa-phone-square-alt mx-2"></i>
                            <span>{{ postUser.phoneNumber }}</span>
                          </h3>
                        </b-collapse>
                      </b-card>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="12" xl="12" lg="12">
          <b-card>
            <b-row>
              <b-col cols="12" lg="12">
                <h4>Contact Information</h4>
                <b-row>
                  <b-col cols="12" md="6">
                    <p>Phone Number: {{ jobDetails.contact }}</p>
                  </b-col>
                  <b-col cols="12" md="6">
                    <p>Email: {{ jobDetails.email }}</p>
                  </b-col>
                  <b-col>
                    <p
                      v-if="jobDetails.viaEmail == true"
                      style="font-weight: bold; font-size: 14px"
                    >
                      <img
                        style="width: 22px"
                        src="https://img.icons8.com/color/48/26e07f/approval--v3.png"
                      />
                      Contact Via Email.
                    </p>
                    <p
                      v-if="jobDetails.viaNumber == true"
                      style="font-weight: bold; font-size: 14px"
                    >
                      <img
                        style="width: 22px"
                        src="https://img.icons8.com/color/48/26e07f/approval--v3.png"
                      />
                      Contact Via Phone number.
                    </p>
                    <p style="font-weight: bold; font-size: 14px">
                      <img
                        style="width: 22px"
                        src="https://img.icons8.com/color/48/26e07f/link.png"
                      />
                      Website:
                      <b-link :href="jobDetails.url" target="_blank">{{
                        jobDetails.url
                      }}</b-link>
                    </p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
  computed: {
    jobDetails() {
      return this.$store.getters.jobDetails;
    },
    postUser() {
      return this.$store.getters.postUser;
    },
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>
<style scoped>
.job-img {
  width: 80px;
  height: 80px;
}
h4 {
  text-align: start;
  font-family: "Maven Pro", sans-serif;
  font-family: Loto;
  font-weight: 700;
  font-size: 24px !important;
  opacity: 0.8;

  margin-left: 0% !important;
}
h3 {
  font-family: "Maven Pro", sans-serif;
  margin-top: 5%;
  font-weight: bold;
  font-size: 13px;
  line-height: 25px;
  color: #0a0a0a;
  text-align: start;
  opacity: 0.8;
}
p {
  text-align: start;
  margin: 0 auto !important;
  font-family: "Maven Pro", sans-serif;
  margin-top: 5px !important;
  line-height: 35px;
  font-weight: 500;
  font-size: 16px;
  opacity: 0.9;
  margin-left: 1% !important;
}
</style>