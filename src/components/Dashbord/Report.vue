<template>
  <div>
    <b-row>
      <b-col cols="12" sm="12" xl="12" lg="12">
        <p style="">Report</p>
      </b-col>
      <b-col
        cols="4"
        sm="6"
        md="3"
        lg="4"
        xl="4"
        v-for="(item, index) in topics"
        :key="index + '1'"
      >
        <b-button
          @click="Button(item)"
          size="sm"
          variant="light"
          style="width: 80%"
        >
          <b-row>
            <b-col cols="12" sm="10" md="10" lg="10" xl="10">
              {{ item }}
            </b-col>
          </b-row>
        </b-button>
      </b-col>
      <b-row class="row content-justify-center">
        <b-col
          cols="4"
          sm="6"
          md="4"
          lg="4"
          xl="4"
          v-for="(item, index) in sub_topics_value"
          :key="index + '1'"
        >
          <b-button size="sm" class="mt-2" variant="light" style="width: 70%">
            <b-row>
              <b-col cols="12" sm="10" md="10" lg="10" xl="10">
                {{ item.title }}
              </b-col>
            </b-row>
          </b-button>
        </b-col>
      </b-row>

      <b-col cols="12" sm="12" md="12" xl="12" lg="12" class="mt-1">
        <b-row class="row justify-content-center">
          <b-col cols="12" sm="12" md="12" xl="10" lg="10">
            <b-form-textarea
              type="text"
              v-model="text"
              placeholder="Write Your Comments"
            ></b-form-textarea>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" sm="12">
        <b-row class="justify-content-center my-2">
          <b-col cols="6" sm="6" md="4" lg="6" xl="6">
            <b-button
              @click="submitReport"
              size="sm"
              variant="light"
              style="
                color: white;
                font-weight: bold;
                width: 80%;
                background: #4b8f1b;
              "
            >
              SUBMIT
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topics_value: "",
      sub_topics_value_send: "",
      sub_topics_value: [],
      topics: [
        "Nudity",
        "Violence",
        "Haresment",
        "False News",
        "Spam",
        "Hate",
        "Unauthorized",
        "Hate spam",
        "Terrorisom",
        "Gross",
        "Content",
        "Others",
      ],
    };
  },

  methods: {
    submitReport() {},
    Button(e) {
      this.topics_value = e;
      this.sub_topics_value.length = 0;

      if (e == "Nudity") {
        this.sub_topics_value.push(
          { title: "Adult Nudity" },
          { title: "Sexuality Suggestive" },
          { title: "Sexual Activity" },
          { title: "Sexual Exploitation" },
          { title: "Sexual Service" },
          { title: "Child involved" }
        );
      } else {
        this.sub_topics_value.push();
      }
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  p {
    font-weight: 700;
    opacity: 0.9;
    font-family: "Maven Pro", sans-serif;
    color: black;
    font-size: 10px;
  }
}
@media only screen and (min-width: 1201px) {
  p {
    font-weight: 700;
    opacity: 0.9;
    font-family: "Maven Pro", sans-serif;
    color: black;
  }
}
</style>