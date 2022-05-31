<template >
  <div>
    <b-row>
      <b-col cols="12" sm="12" lg="12" xl="12" class="mt-2">
        <h4>Apply now</h4>
        <p>Please fill in the following fields to apply for this job</p>
      </b-col>
      <b-col cols="12" sm="6">
        <p style="text-align: start"><span class="label">Name</span></p>
        <b-form-input
          class="sign-up-input"
          type="email"
          placeholder="Name"
        ></b-form-input>
      </b-col>
      <b-col cols="12" sm="6">
        <p style="text-align: start"><span class="label">Phone Number</span></p>
        <b-form-input
          class="sign-up-input"
          type="email"
          placeholder="Phone Number"
        ></b-form-input>
      </b-col>
      <b-col cols="12" sm="6">
        <p style="text-align: start"><span class="label">Email</span></p>
        <b-form-input
          class="sign-up-input"
          type="email"
          placeholder="Email"
        ></b-form-input>
      </b-col>
      <b-col cols="12" sm="6">
        <p style="text-align: start"><span class="label">Location</span></p>
        <b-form-input
          class="sign-up-input"
          type="email"
          placeholder="Email"
        ></b-form-input>
      </b-col>
      <b-col cols="12" sm="6">
        <p style="text-align: start"><span class="label">State</span></p>
        <b-form-input
          class="sign-up-input"
          type="email"
          placeholder="Email"
        ></b-form-input>
      </b-col>
      <b-col cols="12" sm="6">
        <p style="text-align: start"><span class="label">State</span></p>
        <b-form-input
          class="sign-up-input"
          type="email"
          placeholder="Email"
        ></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>
<style scoped>
.sign-up-input {
  height: 45px !important;
  margin-top: 5px !important;
  border-radius: 5px !important;
}
.label {
  font-size: 0.9em;
  font-weight: 700;
  font-family: "Maven Pro", sans-serif;
  font-weight: 700;
  text-align: start;
}
p {
  text-align: start;
  margin: 0 auto !important;
  font-family: "Maven Pro", sans-serif;
  line-height: 35px;
  font-weight: 500;
  font-size: 14px;
  margin-top: 4px;
  opacity: 0.9;
  margin-left: 1% !important;
}
h4 {
  font-family: "Maven Pro", sans-serif;

  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  color: #0a0a0a;
  text-align: start;
  margin-left: 1% !important;
}
</style>