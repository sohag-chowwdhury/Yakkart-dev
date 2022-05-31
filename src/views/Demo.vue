<template>
  <div>
    <b-container>
      <div>
        <b-modal
          hide-header
          hide-footer
          ref="my-modal"
          size="sm"
          title="Using Component Methods"
        >
          <div class="d-block text-F">
            <b-row class="justify-content-end">
              <b-col cols="6" md="2" xl="3" lg="3" sm="2">
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
              <b-col cols="12" md="12" sm="12" lg="12" xl="12">
                <b-calendar
                  v-model="value"
                  @context="onContext"
                  locale="en-US"
                ></b-calendar>
              </b-col>
            </b-row>
          </div>
        </b-modal>
      </div>
      <b-row class="row justify-content-center">
        <b-col cols="12" sm="12" md="12" xl="10" lg="10">
          <b-row class="row justify-content-center">
            <b-col
              v-if="catValue == true"
              cols="12"
              sm="12"
              md="12"
              xl="12"
              lg="12"
            >
              <b-card class="card-text" style="color: black; width: 100%">
                <b-row>
                  <b-col cols="10" sm="10" md="10" xl="11" lg="11">
                    <h3>
                      Category & Sub Category: {{ select }}/{{ subSelect }}
                    </h3>
                  </b-col>
                  <b-col cols="2" sm="2" md="2" xl="1" lg="1">
                    <b-button
                      v-if="chatCheck == true"
                      @click="chatCheckFalse"
                      style="height: 30px"
                      variant="light"
                      size="sm"
                    >
                      <img
                        src="https://img.icons8.com/material/24/000000/chevron-up--v1.png"
                    /></b-button>
                    <b-button
                      v-if="chatCheck == false"
                      @click="chatCheckTrue"
                      style="height: 30px"
                      variant="light"
                      size="sm"
                    >
                      <img
                        src="https://img.icons8.com/material/24/000000/chevron-down--v1.png"
                      />
                    </b-button>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>

          <b-card v-if="chatCheck == true">
            <b-row>
              <b-col cols="8" sm="6" md="6" lg="6" xl="6">
                <h3 class="my-2" style="font-weight: 700; font-size: 12px">
                  Select a Category
                </h3>
                <b-row class="mt-3">
                  <b-col cols="12" sm="12" md="12" lg="12" xl="12">
                    <b-button
                      @click="subCatFunc(item.Title)"
                      style="width: 100%; color: #63aad5"
                      variant="light"
                      size="sm"
                      class="mt-1"
                      v-for="item in itesCat"
                      :key="item.id"
                    >
                      <b-row>
                        <b-col cols="9" md="10" xl="10" lg="10" sm="10">
                          <h3>
                            <b-img :src="item.img" style="width: 25px"> </b-img>
                            {{ item.Title }}
                          </h3>
                        </b-col>
                        <b-col cols="2" md="2" lg="2" xl="2" sm="2">
                          <img
                            style="width: 20px"
                            src="https://img.icons8.com/material/24/4a90e2/chevron-right.png"
                          />
                        </b-col>
                      </b-row>
                    </b-button>
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="4" sm="6" md="6" lg="6" xl="">
                <h3 class="my-2" style="font-weight: 700; font-size: 12px">
                  Sub Category
                </h3>
                <b-row class="mt-3">
                  <b-button
                    @click="subSelectFunc(item)"
                    style="width: 98%; color: #63aad5"
                    variant="light"
                    size="sm"
                    class="mt-1"
                    v-for="(item, index) in subCat"
                    :key="index"
                  >
                    <b-row>
                      <b-col cols="10" md="10" xl="10" lg="10" sm="10">
                        <h3>
                          {{ item }}
                        </h3>
                      </b-col>
                      <b-col cols="2" md="2" lg="2" xl="2" sm="2"> </b-col>
                    </b-row>
                  </b-button>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>

      <!-- Location -->
      <b-row class="row justify-content-center">
        <b-col
          v-if="locationValue == true"
          cols="12"
          sm="10"
          md="12"
          xl="10"
          lg="10"
        >
          <b-card class="card-text" style="color: black; width: 100%">
            <b-row>
              <b-col cols="10" sm="10" md="10" xl="11" lg="11">
                <h3>
                  Location: {{ selectCity.name }}
                  <span v-if="townSelect">/</span> {{ townSelect.name }}
                </h3>
              </b-col>
              <b-col cols="2" sm="2" md="2" xl="1" lg="1">
                <b-button
                  v-if="locationCheck == true"
                  @click="locationCheckFalse"
                  style="height: 30px"
                  variant="light"
                  size="sm"
                >
                  <img
                    src="https://img.icons8.com/material/24/000000/chevron-up--v1.png"
                /></b-button>
                <b-button
                  v-if="locationCheck == false"
                  @click="locationCheckTrue"
                  style="height: 30px"
                  variant="light"
                  size="sm"
                >
                  <img
                    src="https://img.icons8.com/material/24/000000/chevron-down--v1.png"
                  />
                </b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          v-if="locationCheck == true"
          cols="12"
          sm="12"
          md="12"
          xl="10"
          lg="10"
        >
          <b-card style="height: 100%">
            <b-row class="row justify-content-center">
              <b-col cols="10" sm="12" md="12" xl="12" lg="12"
                ><span class="label" style="color: #63aad5">
                  <img
                    src="https://img.icons8.com/material/24/4a90e2/marker--v1.png"
                  />{{ countryInfo.countryName }}
                </span>
              </b-col>

              <b-col cols="12" sm="12" md="12" xl="12" lg="12">
                <span class="label">State</span>
                <b-form-select
                  @change="
                    stateFunc(countryInfo.countryCode, selectCity.isoCode)
                  "
                  v-model="selectCity"
                  class="mb-3"
                >
                  <b-form-select-option
                    v-for="item in allCitys"
                    :key="item.id"
                    :value="item"
                    >{{ item.isoCode }} {{ item.name }}</b-form-select-option
                  >
                </b-form-select>
              </b-col>
              <b-col
                cols="12"
                v-if="twon.length != 0"
                sm="12"
                md="12"
                xl="12"
                lg="12"
              >
                <span class="label">City</span>
                <b-form-select v-model="townSelect" class="mb-3">
                  <b-form-select-option
                    v-for="item in twon"
                    :key="item.id"
                    :value="item"
                    >{{ item.name }}</b-form-select-option
                  >
                </b-form-select>
              </b-col>

              <b-col
                class="input-form mb-3"
                cols="12"
                sm="12"
                md="12"
                xl="12"
                lg="12"
              >
                <span class="label">Address</span>
                <b-form-textarea
                  placeholder="Address"
                  rows="2"
                  v-model="address"
                ></b-form-textarea>
              </b-col>
              <b-col cols="12" md="12" xl="12" lg="12" sm="12">
                <b-row class="row justify-content-end mt-5">
                  <b-col cols="6" md="4" lg="2" xl="2">
                    <b-button
                      size="sm"
                      :disabled="!step1"
                      @click="locationNext"
                      variant="light"
                      style="width: 100%; color: #63aad5"
                      >Next
                      <img
                        style="width: 20px"
                        src="https://img.icons8.com/material/24/4a90e2/chevron-right--v1.png"
                    /></b-button>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <!-- Details -->
        <b-col
          v-if="detailsValue == true"
          cols="12"
          sm="10"
          md="12"
          xl="10"
          lg="10"
        >
          <b-card class="card-text" style="color: black; width: 100%">
            <b-row>
              <b-col cols="10" sm="10" md="10" xl="11" lg="11">
                <h3>
                  <span v-if="select != 'Jobs'"> Product Details</span>
                  <span v-else> Job Details</span>
                </h3>
              </b-col>
              <b-col cols="2" sm="2" md="2" xl="1" lg="1">
                <b-button
                  v-if="detailsCheck == true"
                  @click="detailsCheckFalse"
                  style="height: 30px"
                  variant="light"
                  size="sm"
                >
                  <img
                    src="https://img.icons8.com/material/24/000000/chevron-up--v1.png"
                /></b-button>
                <b-button
                  v-if="detailsCheck == false"
                  @click="detailsCheckTrue"
                  style="height: 30px"
                  variant="light"
                  size="sm"
                >
                  <img
                    src="https://img.icons8.com/material/24/000000/chevron-down--v1.png"
                  />
                </b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col
          v-if="detailsCheck == true && select != 'Jobs'"
          cols="12"
          sm="12"
          md="12"
          xl="10"
          lg="10"
        >
          <b-card>
            <span style="color: #63aad5" class="label">Product Details</span>
            <b-row class="row justify-content-center">
              <b-col cols="12" sm="12" md="12" xl="12" lg="12">
                <b-row row justify-content-center>
                  <b-col
                    style="margin-top: 15px !important"
                    class="my- input-form"
                    cols="12"
                    sm="12"
                    md="12"
                    xl="12"
                    lg="12"
                  >
                    <span class="label">Title</span>
                    <b-form-input
                      placeholder="Title"
                      v-model="title"
                      rows="3"
                    ></b-form-input>
                  </b-col>
                  <b-col class="my-2" cols="12" sm="12" md="12" xl="12" lg="12">
                    <b-row>
                      <b-col
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="6"
                        xl="6"
                        lg="6"
                      >
                        <span class="label">Price</span>
                        <b-form-input
                          v-model="price"
                          placeholder="Price"
                        ></b-form-input>
                      </b-col>
                      <b-col
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="6"
                        xl="6"
                        lg="6"
                      >
                        <span class="label">Postal Code</span>
                        <b-form-input
                          v-model="postalCode"
                          placeholder="Postal Code"
                        ></b-form-input>
                      </b-col>

                      <b-col
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="6"
                        xl="6"
                        lg="6"
                      >
                        <span class="label" style="">Phone Number</span>
                        <b-form-input
                          placeholder="Contact"
                          type="number"
                          v-model="contact"
                        ></b-form-input>
                      </b-col>
                      <b-col
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="6"
                        xl="6"
                        lg="6"
                      >
                        <span class="label">Email</span>
                        <b-form-input
                          placeholder="Email for Contact"
                          type="email"
                          v-model="email"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col class="mt-3" cols="12" sm="12" md="12" xl="12" lg="12">
                    <span class="label">Type</span>
                    <v-select
                      v-model="type"
                      class="my-2 input-form"
                      :options="items"
                      label="Outlined style"
                      outlined
                    ></v-select>
                  </b-col>
                  <b-col
                    class="input-form"
                    style="margin-top: 5px"
                    cols="12"
                    sm="12"
                    md="12"
                    xl="12"
                    lg="12"
                  >
                    <span class="label">Description</span>
                    <b-form-textarea
                      id="textarea-rows"
                      placeholder="Description"
                      v-model="description"
                      rows="3"
                    ></b-form-textarea>
                  </b-col>
                  <b-col
                    style="margin-top: 70px"
                    class="input-form"
                    cols="12"
                    sm="12"
                    md="12"
                    xl="12"
                    lg="12"
                  >
                    <span class="label">Condition</span>
                    <b-row class="mt-3">
                      <b-col>
                        <b-form-checkbox
                          id="checkbox-1"
                          size="md"
                          v-model="newValue"
                          @change="newValueFunc"
                          >New</b-form-checkbox
                        >
                      </b-col>
                      <b-col>
                        <b-form-checkbox
                          size="md"
                          @change="usedValueFunc"
                          v-model="usedValue"
                          >Used</b-form-checkbox
                        >
                      </b-col>
                      <b-col>
                        <b-form-checkbox v-model="negotiableValue" size="md"
                          >Negotiable</b-form-checkbox
                        >
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col cols="12" md="12" xl="12" lg="12" sm="12">
                    <b-row class="row justify-content-end mt-5">
                      <b-col cols="6" md="4" lg="2" xl="2">
                        <b-button
                          @click="detailsNext"
                          :disabled="!step2"
                          variant="light"
                          style="width: 100%; color: #63aad5"
                          >Next
                          <img
                            style="width: 20px"
                            src="https://img.icons8.com/material/24/4a90e2/chevron-right--v1.png"
                        /></b-button>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <!-- jobs -->
        <b-col
          v-if="detailsCheck == true && select == 'Jobs'"
          cols="12"
          sm="12"
          md="12"
          xl="10"
          lg="10"
        >
          <b-card>
            <span style="color: #63aad5" class="label">Job Details </span>
            <b-row class="row justify-content-center">
              <b-col cols="12" sm="12" md="12" xl="12" lg="12">
                <b-row row justify-content-center>
                  <b-col
                    style="margin-top: 15px !important"
                    class="my- input-form"
                    cols="12"
                    sm="12"
                    md="12"
                    xl="12"
                    lg="12"
                  >
                    <span class="label">Title</span>
                    <b-form-input
                      placeholder="Title"
                      v-model="title"
                      rows="3"
                    ></b-form-input>
                  </b-col>
                  <b-col class="my-2" cols="12" sm="12" md="12" xl="12" lg="12">
                    <b-row>
                      <b-col
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="6"
                        xl="6"
                        lg="6"
                      >
                        <span class="label">Working experience (optional)</span>
                        <b-form-input
                          v-model="years"
                          placeholder="years"
                        ></b-form-input>
                      </b-col>
                      <b-col
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="6"
                        xl="6"
                        lg="6"
                      >
                        <span class="label"
                          >Height Educational experience (optional)</span
                        >
                        <b-form-input
                          v-model="educational"
                          placeholder="Qualification"
                        ></b-form-input>
                      </b-col>

                      <b-col
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="6"
                        xl="6"
                        lg="6"
                      >
                        <span class="label">Sallary Per Month (optional)</span>
                        <b-form-input
                          v-model="minSallary"
                          placeholder="From"
                        ></b-form-input>
                      </b-col>
                      <b-col
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="6"
                        xl="6"
                        lg="6"
                      >
                        <b-form-input
                          class="mt-4"
                          v-model="maxSallary"
                          placeholder="To"
                        ></b-form-input>
                      </b-col>
                      <b-col
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="6"
                        xl="6"
                        lg="6"
                      >
                        <span class="label">Owner or Company name</span>
                        <b-form-input
                          v-model="companyName"
                          placeholder="Owner or Company Name"
                        ></b-form-input>
                      </b-col>
                      <b-col
                        @click="showModal"
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="6"
                        xl="6"
                        lg="6"
                      >
                        <span class="label">Deadline </span>
                        <b-form-input v-model="dateLine"></b-form-input>
                      </b-col>
                      <b-col
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="6"
                        xl="6"
                        lg="6"
                      >
                        <span class="label">Job Role</span>
                        <b-form-input
                          v-model="jobRole"
                          placeholder="Owner or Company Name"
                        ></b-form-input>
                      </b-col>
                      <b-col
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="6"
                        xl="6"
                        lg="6"
                      >
                        <span class="label">Working Hour</span>
                        <b-form-input
                          v-model="workingHour"
                          placeholder="Owner or Company Name"
                        ></b-form-input>
                      </b-col>
                      <b-col
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="6"
                        xl="6"
                        lg="6"
                      >
                        <span class="label" style="">Phone Number</span>
                        <b-form-input
                          placeholder="Phone number"
                          type="number"
                          v-model="contact"
                        ></b-form-input>
                      </b-col>

                      <b-col
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="6"
                        xl="6"
                        lg="6"
                      >
                        <span class="label">Email</span>
                        <b-form-input
                          placeholder="Email for Contact"
                          type="email"
                          v-model="email"
                        ></b-form-input>
                      </b-col>
                      <b-col
                        class="input-form"
                        cols="12"
                        sm="12"
                        md="12"
                        xl="12"
                        lg="12"
                      >
                        <span class="label">Website Url (optionall)</span>
                        <b-form-input
                          placeholder="Url"
                          type="email"
                          v-model="urls"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col class="mt-3" cols="12" sm="12" md="12" xl="12" lg="12">
                    <span class="label">Type</span>
                    <v-select
                      class="my-2 input-form"
                      :options="itemsJob"
                      v-model="jobType"
                      label="Outlined style"
                      outlined
                    ></v-select>
                  </b-col>
                  <b-col
                    style="margin-top: 5px"
                    cols="12"
                    sm="12"
                    md="12"
                    xl="12"
                    lg="12"
                  >
                    <span class="label">Description</span>
                    <vue-editor
                      placeholder="Description Your Pot"
                      v-model="description"
                      :editorToolbar="customToolbar"
                      ><p></p
                    ></vue-editor>
                  </b-col>
                  <b-col
                    style="margin-top: 15px"
                    class="input-form"
                    cols="12"
                    sm="12"
                    md="12"
                    xl="12"
                    lg="12"
                  >
                    <span class="label">Contact Via</span>
                    <b-row class="mt-3">
                      <b-col>
                        <b-form-checkbox v-model="viaEmail" size="md"
                          >Eamil</b-form-checkbox
                        >
                      </b-col>
                      <b-col>
                        <b-form-checkbox v-model="viaNumber" size="md"
                          >Phone Number</b-form-checkbox
                        >
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col cols="12" md="12" xl="12" lg="12" sm="12">
                    <b-row class="row justify-content-end mt-5">
                      <b-col cols="6" md="4" lg="2" xl="2">
                        <b-button
                          @click="detailsNext"
                          :disabled="!step3"
                          variant="light"
                          style="width: 100%; color: #63aad5"
                          >Next
                          <img
                            style="width: 20px"
                            src="https://img.icons8.com/material/24/4a90e2/chevron-right--v1.png"
                        /></b-button>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <!-- Images -->
        <b-col
          v-if="imgValues == true"
          cols="12"
          sm="10"
          md="12"
          xl="10"
          lg="10"
        >
          <b-card class="card-text" style="color: black; width: 100%">
            <b-row>
              <b-col cols="10" sm="10" md="10" xl="11" lg="11">
                <h3>Images</h3>
              </b-col>
              <b-col cols="2" sm="2" md="2" xl="1" lg="1">
                <b-button
                  v-if="imgCheck == true"
                  @click="imgCheckFalse"
                  style="height: 30px"
                  variant="light"
                  size="sm"
                >
                  <img
                    src="https://img.icons8.com/material/24/000000/chevron-up--v1.png"
                /></b-button>
                <b-button
                  v-if="imgCheck == false"
                  @click="imgCheckTrue"
                  style="height: 30px"
                  variant="light"
                  size="sm"
                >
                  <img
                    src="https://img.icons8.com/material/24/000000/chevron-down--v1.png"
                  />
                </b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          v-if="imgCheck == true"
          cols="12"
          sm="12"
          md="12"
          lg="10"
          xl="10"
        >
          <b-card>
            <b-row>
              <b-col class="mt-3" lg="12" xl="12">
                <span class="label">Upload Photo</span>
                <b-row>
                  <b-col
                    style="background: #fff; height: 300px"
                    cols="12"
                    sm="12"
                    md="6"
                    xl="6"
                  >
                    <div class="p-2 mt-1">
                      <template>
                        <b-img
                          v-if="preview"
                          style="width: 100%; height: 270px"
                          :src="preview[0]"
                          class="img-fluid"
                        />
                      </template>
                      <b-button
                        class="btn-l1"
                        :style="preview[0] ? 'display: none;' : ''"
                        v-if="loadingUpload == true"
                        style="margin-left: 20px"
                        variant="primary"
                        disabled
                      >
                        <b-spinner small type="grow"></b-spinner>
                      </b-button>
                      <b-button
                        class="btn-1"
                        :style="preview[0] ? '' : 'display: none'"
                        v-if="loadingUpload == false"
                        style="margin-left: 20px"
                        variant="dark"
                        disabled
                      >
                        <img
                          @click="deleteImg(0)"
                          style="width: 45px"
                          src="https://img.icons8.com/material/24/fa314a/filled-trash.png"
                        />
                      </b-button>

                      <label
                        :style="preview[0] ? 'display: none;' : ''"
                        class="label1"
                        v-if="loadingUpload == false"
                        ><img
                          style="width: 50px"
                          src="https://img.icons8.com/material/24/4a90e2/add.png"
                        />
                        <input
                          accept="image/*"
                          @change="onFilePicked"
                          type="file"
                          size="60"
                        />
                      </label>
                    </div>
                  </b-col>
                  <b-col cols="12" sm="12" md="6" xl="6">
                    <b-row>
                      <b-col
                        style="background: #fff; height: 150px"
                        cols="6"
                        sm="6"
                        lg="6"
                        md="6"
                        xl="6"
                      >
                        <div class="p-2 mt-1">
                          <template>
                            <b-img
                              v-if="preview"
                              style="width: 100%; height: 130px"
                              :src="preview[1]"
                              class="img-fluid"
                            />
                          </template>
                          <b-button
                            class="btn-l2"
                            :style="preview[1] ? 'display: none;' : ''"
                            v-if="loadingUpload == true && preview[0]"
                            style="margin-left: 20px"
                            variant="primary"
                            disabled
                          >
                            <b-spinner small type="grow"></b-spinner>
                          </b-button>
                          <b-button
                            class="btn-2"
                            :style="preview[1] ? '' : 'display: none;'"
                            v-if="loadingUpload == false && preview[0]"
                            style="margin-left: 20px"
                            variant="dark"
                            disabled
                          >
                            <img
                              @click="deleteImg(1)"
                              style="width: 30px"
                              src="https://img.icons8.com/material/24/fa314a/filled-trash.png"
                            />
                          </b-button>
                          <label
                            :style="preview[1] ? 'display: none;' : ''"
                            v-if="preview[0] && loadingUpload == false"
                            class="label2"
                          >
                            <img
                              style="width: 50px"
                              src="https://img.icons8.com/material/24/4a90e2/add.png"
                            />
                            <input
                              ref="fileInput"
                              accept="image/*"
                              @change="onFilePicked"
                              type="file"
                            />
                          </label>
                        </div>
                      </b-col>
                      <b-col
                        style="background: #fff; height: 150px"
                        cols="6"
                        sm="6"
                        lg="6"
                        md="6"
                        xl="6"
                      >
                        <div class="p-2 mt-1">
                          <template>
                            <b-img
                              v-if="preview"
                              style="width: 100%; height: 130px"
                              :src="preview[2]"
                              class="img-fluid"
                            />
                          </template>
                          <b-button
                            class="btn-l2"
                            :style="preview[2] ? 'display: none;' : ''"
                            v-if="loadingUpload == true && preview[1]"
                            style="margin-left: 20px"
                            variant="primary"
                            disabled
                          >
                            <b-spinner small type="grow"></b-spinner>
                          </b-button>
                          <b-button
                            class="btn-2"
                            :style="preview[2] ? '' : 'display: none;'"
                            v-if="loadingUpload == false && preview[1]"
                            style="margin-left: 20px"
                            variant="dark"
                            @click="deleteImg(2)"
                            disabled
                          >
                            <img
                              style="width: 30px"
                              src="https://img.icons8.com/material/24/fa314a/filled-trash.png"
                            />
                          </b-button>
                          <label
                            :style="preview[2] ? 'display: none;' : ''"
                            v-if="preview[1] && loadingUpload == false"
                            class="label2"
                            ><img
                              style="width: 50px"
                              src="https://img.icons8.com/material/24/4a90e2/add.png"
                            />
                            <input
                              ref="fileInput"
                              accept="image/*"
                              @change="onFilePicked"
                              type="file"
                            />
                          </label>
                        </div>
                      </b-col>
                      <b-col
                        style="background: #fff; height: 150px"
                        cols="6"
                        sm="6"
                        lg="6"
                        md="6"
                        xl="6"
                      >
                        <div class="p-2 mt-1">
                          <template>
                            <b-img
                              v-if="preview"
                              style="width: 100%; height: 130px"
                              :src="preview[3]"
                              class="img-fluid"
                            />
                          </template>

                          <b-button
                            class="btn-l2"
                            :style="preview[3] ? 'display: none;' : ''"
                            v-if="loadingUpload == true && preview[2]"
                            style="margin-left: 20px"
                            variant="primary"
                            disabled
                          >
                            <b-spinner small type="grow"></b-spinner>
                          </b-button>
                          <b-button
                            class="btn-2"
                            :style="preview[3] ? '' : 'display: none;'"
                            v-if="loadingUpload == false && preview[2]"
                            style="margin-left: 20px"
                            variant="dark"
                            disabled
                            @click="deleteImg(3)"
                          >
                            <img
                              style="width: 30px"
                              src="https://img.icons8.com/material/24/fa314a/filled-trash.png"
                            />
                          </b-button>
                          <label
                            :style="preview[3] ? 'display: none;' : ''"
                            v-if="preview[2] && loadingUpload == false"
                            class="label2"
                            ><img
                              style="width: 50px"
                              src="https://img.icons8.com/material/24/4a90e2/add.png"
                            />
                            <input
                              ref="fileInput"
                              accept="image/*"
                              @change="onFilePicked"
                              type="file"
                            />
                          </label>
                        </div>
                      </b-col>
                      <b-col
                        style="background: #fff; height: 150px"
                        cols="6"
                        sm="6"
                        lg="6"
                        md="6"
                        xl="6"
                      >
                        <div class="p-2 mt-1">
                          <template>
                            <b-img
                              v-if="preview"
                              style="width: 100%; height: 130px"
                              :src="preview[4]"
                              class="img-fluid"
                            />
                          </template>
                          <b-button
                            class="btn-l2"
                            :style="preview[4] ? 'display: none;' : ''"
                            v-if="loadingUpload == true && preview[3]"
                            style="margin-left: 20px"
                            variant="primary"
                            disabled
                          >
                            <b-spinner small type="grow"></b-spinner>
                          </b-button>
                          <b-button
                            class="btn-2"
                            :style="preview[4] ? '' : 'display: none;'"
                            v-if="loadingUpload == false && preview[3]"
                            style="margin-left: 20px"
                            variant="dark"
                            disabled
                            @click="deleteImg(4)"
                          >
                            <img
                              style="width: 30px"
                              src="https://img.icons8.com/material/24/fa314a/filled-trash.png"
                            />
                          </b-button>
                          <label
                            :style="preview[4] ? 'display: none;' : ''"
                            v-if="preview[3] && loadingUpload == false"
                            class="label2"
                            ><img
                              style="width: 50px"
                              src="https://img.icons8.com/material/24/4a90e2/add.png"
                            />
                            <input
                              ref="fileInput"
                              accept="image/*"
                              @change="onFilePicked"
                              type="file"
                            />
                          </label>
                        </div>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-col cols="12" md="12" xl="12" lg="12" sm="12">
              <b-row class="row justify-content-end mt-5">
                <b-col cols="6" md="4" lg="2" xl="2">
                  <b-button
                    @click="imgNext"
                    :disabled="preview.length == 0"
                    variant="light"
                    style="width: 100%; color: #63aad5"
                    >Next
                    <img
                      style="width: 20px"
                      src="https://img.icons8.com/material/24/4a90e2/chevron-right--v1.png"
                  /></b-button>
                </b-col>
              </b-row>
            </b-col>
          </b-card>
        </b-col>
        <b-col
          v-if="
            locationValue == true &&
            catValue == true &&
            detailsValue == true &&
            imgValues == true
          "
          cols="12"
          sm="10"
          md="12"
          xl="10"
          lg="10"
        >
          <b-card class="card-text" style="color: black; width: 100%">
            <b-row>
              <b-col
                v-if="reviwValu == false"
                cols="12"
                sm="10"
                md="10"
                xl="10"
                lg="10"
              >
                Confirm Your Add
              </b-col>
              <b-col
                v-if="reviwValu == true"
                cols="12"
                sm="10"
                md="10"
                xl="10"
                lg="10"
              >
                <h4>
                  <img
                    src="https://img.icons8.com/color/48/000000/inspection.png"
                  />
                  Your add now under review.
                </h4>
              </b-col>
              <b-col
                v-if="reviwValu == false"
                cols="2"
                sm="2"
                md="2"
                xl="2"
                lg="2"
              >
                <b-button
                  variant="success"
                  style="height: 30px"
                  size="sm"
                  @click="productUpdate"
                >
                  SUBMIT</b-button
                >
              </b-col>
              <div style="display: none !important">
                <l-map
                  @ready="onReady"
                  @locationfound="onLocationFound"
                  :center="center"
                  style="height: 350px; width: 100%"
                >
                  <l-tile-layer :url="url" :attribution="attribution" />
                  <l-marker :lat-lng="marker" />
                  <l-icon-default :image-path="path" />
                </l-map>
              </div>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/database";
import { State, City } from "country-state-city";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LIconDefault } from "vue2-leaflet";
import { VueEditor } from "vue2-editor";

export default {
  name: "CustomPath",
  components: {
    VueEditor,
    LMap,
    LTileLayer,
    LMarker,
    LIconDefault,
  },
  data() {
    return {
      subCategoryValue: false,
      reviwValu: false,
      educational: "",
      years: "",
      minSallary: "",
      maxSallary: "",
      companyName: "",
      viaNumber: true,
      viaEmail: false,
      dateLine: "",
      jobRole: "",
      workingHour: "",
      urls: "",
      usedValue: false,
      newValue: false,
      negotiableValue: false,
      value: "",
      context: null,
      chatCheck: true,
      confarmCheck: false,
      locationCheck: false,
      detailsCheck: false,
      imgCheck: false,
      locationValue: false,
      catValue: false,
      detailsValue: false,
      imgValues: false,
      country: {},
      selectCity: {},
      townSelect: {},
      twon: [],
      allCitys: {},
      cityList: [],
      typeValue: false,
      imgValue: false,
      jobType: "",
      title: "",
      price: null,
      postalCode: "",
      description: "",
      contact: "",
      keyWord: "",
      email: "",
      loadingUpload: false,
      address: "",
      select: null,
      subSelect: null,
      preview: [],
      image: null,
      type: null,
      city: null,
      imageNext: "",
      itemsJob: ["Full Time", "Part Time", "Contractual", "Internship"],
      items: ["Deals", "Offers"],
      time: new Date().toLocaleString(),
      center: [46.204391, 6.143158],
      path: "/images/",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(46.204391, 6.143158),
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        [{ color: [] }],
      ],
      itesCat: [
        {
          id: 1,
          img: "https://img.icons8.com/color/480/000000/womens-shirt.png",
          icon: "fas fa-tshirt",
          Title: "Cloths",
        },
        {
          id: 2,
          img: "https://img.icons8.com/color/480/000000/multiple-devices.png",
          icon: "fas fa-plug",
          Title: "Electronics",
        },
        {
          id: 3,
          img: "https://img.icons8.com/color/480/000000/furniture.png",
          icon: "fas fa-couch",
          Title: "Furnitures",
        },
        {
          id: 4,
          img: "https://img.icons8.com/color/480/000000/carpool.png",
          icon: "fas fa-car",
          Title: "Vehicles",
        },
        {
          id: 5,
          img: "https://img.icons8.com/color/480/000000/inland.png",
          icon: "fas fa-home",
          Title: "Real Estates",
        },
        {
          id: 6,
          img: "https://img.icons8.com/color/480/000000/lol-surprise.png",
          icon: "fas fa-child",
          Title: "Kids",
        },
        {
          id: 7,
          img: "https://img.icons8.com/color/480/000000/kawaii-french-fries.png",
          icon: "fas fa-utensils",
          Title: "Foods",
        },
        {
          id: 8,
          img: "https://img.icons8.com/color/480/000000/books.png",
          icon: "fas fa-book",
          Title: "Education",
        },
        {
          id: 9,
          img: "https://img.icons8.com/color/480/000000/sports.png",
          icon: "fas fa-running",
          Title: "Sports",
        },
        {
          id: 10,
          img: "https://img.icons8.com/color/480/000000/new-job.png",
          icon: "fas fa-briefcase-medical",
          Title: "Jobs",
        },
        {
          id: 11,
          img: "https://img.icons8.com/color/480/000000/earrings.png",
          icon: "fas fa-gifts",
          Title: "Antiques",
        },
        {
          id: 12,
          img: "https://img.icons8.com/color/48/000000/hang-up-phone.png",
          icon: "fas fa-tshirt",
          Title: "Mobile",
        },
      ],
    };
  },
  mounted() {
    this.countryFunc(this.$store.getters.countryInfo.countryCode);
  },
  methods: {
    productUpdate() {
      this.reviwValu = true;
      if (this.select != "Jobs") {
        this.$store.dispatch("productUpload", {
          select: this.select,
          subSelect: this.subSelect,
          usedValue: this.usedValue,
          newValue: this.usedValue,
          negotiableValue: this.negotiableValue,
          type: this.type,
          imgs: this.preview,
          city: this.townSelect.name,
          title: this.title,
          price: this.price,
          postalCode: this.postalCode,
          description: this.description,
          contact: this.contact,
          email: this.email,
          address: this.address,
          center: this.center,
          time: this.time,
          country: this.$store.getters.countryInfo.countryCode,
          state: this.selectCity.name,
        });
      } else {
        this.$store.dispatch("productUpload", {
          select: this.select,
          subSelect: this.subSelect,
          years: this.years,
          minSallary: this.minSallary,
          maxSallary: this.minSallary,
          companyName: this.companyName,
          viaNumber: this.viaNumber,
          viaEmail: this.viaEmail,
          dateLine: this.dateLine,
          jobRole: this.jobRole,
          workingHour: this.workingHour,
          jobType: this.jobType,
          urls: this.urls,
          imgs: this.preview,
          city: this.townSelect.name,
          title: this.title,
          description: this.description,
          contact: this.contact,
          email: this.email,
          address: this.address,
          educational: this.educational,
          center: this.center,
          time: this.time,
          country: this.$store.getters.countryInfo.countryCode,
          state: this.selectCity.name,
        });
      }
    },
    onContext(ctx) {
      this.context = ctx;
      this.dateLine = this.context.activeFormatted;
    },
    usedValueFunc() {
      this.newValue = false;
    },
    newValueFunc() {
      this.usedValue = false;
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    chatCheckFalse() {
      this.chatCheck = false;
    },
    chatCheckTrue() {
      this.chatCheck = true;
    },
    locationCheckFalse() {
      this.locationCheck = false;
    },
    locationCheckTrue() {
      this.locationCheck = true;
    },
    detailsCheckFalse() {
      this.detailsCheck = false;
    },
    detailsCheckTrue() {
      this.detailsCheck = true;
    },
    imgCheckTrue() {
      this.imgCheck = true;
    },
    imgCheckFalse() {
      this.imgCheck = false;
    },
    locationNext() {
      this.locationCheck = false;
      this.detailsCheck = true;
      this.locationValue = true;
    },
    detailsNext() {
      this.detailsCheck = false;
      this.imgCheck = true;
      this.detailsValue = true;
    },
    imgNext() {
      this.imgCheck = false;
      this.imgValues = true;
      this.confarmCheck = true;
    },
    subCatFunc(e) {
      this.select = e;
      this.subSelect = "";

      this.$store.dispatch("subCatFilter", {
        category: e,
      });
    },
    subSelectFunc(e) {
      this.subSelect = e;
      this.chatCheck = false;
      this.locationCheck = true;
      this.catValue = true;
    },
    deleteImg(e) {
      this.preview.splice(e, 1);
    },
    countryFunc(e) {
      console.log(e);
      this.allCitys = State.getStatesOfCountry(e);
    },
    stateFunc(e, i) {
      console.log(e, i);
      console.log(City.getCitiesOfState(e, i));
      this.twon = City.getCitiesOfState(e, i);
    },
    onReady(mapObject) {
      mapObject.locate();
    },
    onLocationFound(location) {
      this.center = [location.latlng.lat, location.latlng.lng];
      this.marker = latLng(location.latlng.lat, location.latlng.lng);
    },
    onFilePicked(event) {
      let key = Math.random().toString(36).substring(7);
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
              "postImage" +
              "/" +
              key
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
              this.preview.push(downloadURL);
              this.loadingUpload = false;
            });
          }
        );
      }
    },
  },
  computed: {
    step1() {
      return this.select !== null, this.address !== "";
    },
    step2() {
      return (
        this.title !== "" &&
        this.price != null &&
        this.postalCode !== "" &&
        this.description !== "" &&
        this.contact !== null &&
        this.email !== "" &&
        this.type != null
      );
    },
    step3() {
      return (
        this.title !== "" &&
        this.description !== "" &&
        this.contact !== null &&
        this.email !== ""
      );
    },
    subCat() {
      return this.$store.getters.subCat;
    },
    countryInfo() {
      return this.$store.getters.countryInfo;
    },
  },
};
</script>
<style  scoped>
@media only screen and (max-width: 600px) {
  h3 {
    margin: 0 !important;
    text-align: start !important;
    font-size: 14px;
    font-weight: 500;
    font-family: "Maven Pro", sans-serif;
  }
  .label {
    font-size: 0.9em;
    font-weight: 700;
    font-family: "Maven Pro", sans-serif;
    margin-bottom: 10px;
    font-weight: 700;
  }
  .input-form {
    margin-top: 25px;
    border-radius: 5px 5px 5px 10px !important;
    height: 50px !important;
  }
  .btn-border {
    border-top: 3px solid rgb(133, 130, 130);
    margin-left: 0% !important;
    width: 120%;
    margin-top: -12%;
  }
  .btn-border-condation {
    border-top: 3px solid rgb(12, 114, 25);
  }
  .btn-bg {
    background: darkgreen !important;
  }
  h5 {
    text-align: center;
    font-family: Loto;
    font-size: 1em;
    font-weight: 700;
    color: darkgreen;
  }
  .btn-1 {
    margin-top: -177%;
    margin-left: 65% !important;
  }
  .btn-l1 {
    margin-top: -195% !important;
    margin-left: 40% !important;
  }
  .btn-2 {
    margin-top: -195% !important;
    margin-left: 40% !important;
  }
  .btn-l2 {
    margin-top: -195% !important;
    margin-left: 40% !important;
  }
  .step h5 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 14px !important;
    margin: 3% !important;
    color: rgb(26, 59, 41) !important;
  }

  .label1 {
    padding: 10px;
    background: #a3a3a3;
    border-radius: 10px;
    display: table;
    color: #fff;
    margin-top: -62%;
    margin-left: 40%;
  }

  .label2 {
    padding: 10px;
    background: #a3a3a3;
    border-radius: 10px;
    display: table;
    color: #fff;
    margin-top: -90%;
    margin-left: 25%;
  }

  input[type="file"] {
    display: none;
  }
  .img-container {
    height: 300px;
  }
  .img-row {
    border: 2px solid rgb(109, 189, 109);

    width: 90%;
    margin-top: 2px;
  }
  .img-row-main {
    border: 2px solid rgb(50, 187, 141);
    border-radius: 0px 10px 0px 10px;
    width: 90%;
    margin-top: 2px;
    background: rgb(198, 216, 198);
  }
  .product-img {
    width: 60%;
    margin-left: 20%;
    height: 300px;
  }
  .card {
    margin: 0 auto;
  }
  .product-img-list {
    width: 100%;
    height: 100%;
    border: 2px solid rgb(13, 12, 19);
    margin-bottom: 2px !important;
    cursor: pointer;
  }

  h4 {
    text-align: center;
    font-family: Loto;
    font-weight: 600;
    font-size: 20px !important;
    margin: 3% !important;
  }
  h5 {
    text-align: center;
    font-family: Loto;
    font-weight: 600;
    font-size: 16px !important;
    margin: 3% !important;
  }
  p {
    text-align: start;
    margin: 0 auto !important;
    font-family: Loto;
    margin: 3% !important;
  }
  .card-text {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 14px !important;

    color: rgb(26, 59, 41) !important;
  }
  .border-description {
    border-bottom: 2px solid rgba(55, 170, 132, 0.7);
  }
  .post-code {
    border-left: 3px solid rgba(55, 177, 96, 0.7);
    font-weight: 700;
  }
  .deals {
    font-weight: 700;
  }
}
@media (min-width: 601px) and (max-width: 1200px) {
   h3 {
    margin: 0 !important;
    text-align: start !important;
    font-size: 16px;
    font-weight: 500;
    font-family: "Maven Pro", sans-serif;
  }
  .label {
    font-size: 0.9em;
    font-weight: 700;
    font-family: "Maven Pro", sans-serif;
    margin-bottom: 10px;
    font-weight: 700;
  }
  .input-form {
    margin-top: 25px;
    border-radius: 5px 5px 5px 10px !important;
    height: 50px !important;
  }
  .btn-border {
    border-top: 3px solid rgb(133, 130, 130);
    margin-left: 0% !important;
    width: 120%;
    margin-top: -12%;
  }
  .btn-border-condation {
    border-top: 3px solid rgb(12, 114, 25);
  }
  .btn-bg {
    background: darkgreen !important;
  }
  h5 {
    text-align: center;
    font-family: Loto;
    font-size: 1em;
    font-weight: 700;
    color: darkgreen;
  }
  .btn-1 {
    margin-top: -117%;
    margin-left: 83% !important;
  }
  .btn-l1 {
    margin-top: -117%;
    margin-left: 83% !important;
  }
  .btn-2 {
    margin-top: -115% !important;
    margin-left: 70% !important;
  }
  .btn-l2 {
    margin-top: -115% !important;
    margin-left: 70% !important;
  }
  .step h5 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 14px !important;
    margin: 3% !important;
    color: rgb(26, 59, 41) !important;
  }

  .label1 {
    padding: 10px;
    background: #a3a3a3;
    border-radius: 10px;
    display: table;
    color: #fff;
    margin-top: -42%;
    margin-left: 43%;
  }

  .label2 {
    padding: 10px;
    background: #a3a3a3;
    border-radius: 10px;
    display: table;
    color: #fff;
    margin-top: -50%;
    margin-left: 35%;
  }

  input[type="file"] {
    display: none;
  }
  .img-container {
    height: 300px;
  }
  .img-row {
    border: 2px solid rgb(109, 189, 109);

    width: 90%;
    margin-top: 2px;
  }
  .img-row-main {
    border: 2px solid rgb(50, 187, 141);
    border-radius: 0px 10px 0px 10px;
    width: 90%;
    margin-top: 2px;
    background: rgb(198, 216, 198);
  }
  .product-img {
    width: 60%;
    margin-left: 20%;
    height: 300px;
  }
  .card {
    margin: 0 auto;
  }
  .product-img-list {
    width: 100%;
    height: 100%;
    border: 2px solid rgb(13, 12, 19);
    margin-bottom: 2px !important;
    cursor: pointer;
  }

  h4 {
    text-align: center;
    font-family: Loto;
    font-weight: 600;
    font-size: 20px !important;
    margin: 3% !important;
  }
  h5 {
    text-align: center;
    font-family: Loto;
    font-weight: 600;
    font-size: 16px !important;
    margin: 3% !important;
  }
  p {
    text-align: start;
    margin: 0 auto !important;
    font-family: Loto;
    margin: 3% !important;
  }
  .card-text {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 14px !important;

    color: rgb(26, 59, 41) !important;
  }
  .border-description {
    border-bottom: 2px solid rgba(55, 170, 132, 0.7);
  }
  .post-code {
    border-left: 3px solid rgba(55, 177, 96, 0.7);
    font-weight: 700;
  }
  .deals {
    font-weight: 700;
  }
}
@media only screen and (min-width: 1201px) {
  h3 {
    margin: 0 !important;
    text-align: start !important;
    font-size: 16px;
    font-weight: 500;
    font-family: "Maven Pro", sans-serif;
  }
  .label {
    font-size: 0.9em;
    font-weight: 700;
    font-family: "Maven Pro", sans-serif;
    margin-bottom: 10px;
    font-weight: 700;
  }
  .input-form {
    margin-top: 25px;
    border-radius: 5px 5px 5px 10px !important;
    height: 50px !important;
  }
  .btn-border {
    border-top: 3px solid rgb(133, 130, 130);
    margin-left: 0% !important;
    width: 120%;
    margin-top: -12%;
  }
  .btn-border-condation {
    border-top: 3px solid rgb(12, 114, 25);
  }
  .btn-bg {
    background: darkgreen !important;
  }
  h5 {
    text-align: center;
    font-family: Loto;
    font-size: 1em;
    font-weight: 700;
    color: darkgreen;
  }
  .btn-1 {
    margin-top: -117%;
    margin-left: 83% !important;
  }
  .btn-l1 {
    margin-top: -117%;
    margin-left: 83% !important;
  }
  .btn-2 {
    margin-top: -115% !important;
    margin-left: 70% !important;
  }
  .btn-l2 {
    margin-top: -115% !important;
    margin-left: 70% !important;
  }
  .step h5 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 14px !important;
    margin: 3% !important;
    color: rgb(26, 59, 41) !important;
  }

  .label1 {
    padding: 10px;
    background: #a3a3a3;
    border-radius: 10px;
    display: table;
    color: #fff;
    margin-top: -42%;
    margin-left: 43%;
  }

  .label2 {
    padding: 10px;
    background: #a3a3a3;
    border-radius: 10px;
    display: table;
    color: #fff;
    margin-top: -50%;
    margin-left: 35%;
  }

  input[type="file"] {
    display: none;
  }
  .img-container {
    height: 300px;
  }
  .img-row {
    border: 2px solid rgb(109, 189, 109);

    width: 90%;
    margin-top: 2px;
  }
  .img-row-main {
    border: 2px solid rgb(50, 187, 141);
    border-radius: 0px 10px 0px 10px;
    width: 90%;
    margin-top: 2px;
    background: rgb(198, 216, 198);
  }
  .product-img {
    width: 60%;
    margin-left: 20%;
    height: 300px;
  }
  .card {
    margin: 0 auto;
  }
  .product-img-list {
    width: 100%;
    height: 100%;
    border: 2px solid rgb(13, 12, 19);
    margin-bottom: 2px !important;
    cursor: pointer;
  }

  h4 {
    text-align: center;
    font-family: Loto;
    font-weight: 600;
    font-size: 20px !important;
    margin: 3% !important;
  }
  h5 {
    text-align: center;
    font-family: Loto;
    font-weight: 600;
    font-size: 16px !important;
    margin: 3% !important;
  }
  p {
    text-align: start;
    margin: 0 auto !important;
    font-family: Loto;
    margin: 3% !important;
  }
  .card-text {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 14px !important;

    color: rgb(26, 59, 41) !important;
  }
  .border-description {
    border-bottom: 2px solid rgba(55, 170, 132, 0.7);
  }
  .post-code {
    border-left: 3px solid rgba(55, 177, 96, 0.7);
    font-weight: 700;
  }
  .deals {
    font-weight: 700;
  }
}
</style>