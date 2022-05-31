<template>
  <div >
    
    <b-container>
      <b-row class="row justify-content-center">
        <b-col cols="12" sm="12" md="12" xl="12" lg="12">
          <b-row>
            <b-col cols="1" sm="1" md="1" xl="1" lg="1">
              <!-- dummy -->
            </b-col>
            <b-col cols="2" sm="2" md="2" xl="2" lg="2">
              <b-button
               style="background:#b0afab;"
                @click="showValueChange(1)"
                pill
                :class="btnValue2 == 2 ? 'btn-bg' : ''"
              >
                1</b-button
              >
              <div
                :class="btnValue2 == 2 ? 'btn-border-condation' : ''"
                class="btn-border"
              >
                <span class="step"><h5>Step 1</h5></span>
              </div>
            </b-col>
            <b-col cols="2" sm="2" md="2" xl="2" lg="2">
              <b-button
                style="background:#b0afab;"
                @click="showValueChange(2)"
                pill
                :class="btnValue3 == 3 ? 'btn-bg' : ''"
              >
                2</b-button
              >
              <div
                
                :class="btnValue3 == 3 ? 'btn-border-condation' : ''"
                class="btn-border"
              >
                <span class="step"><h5>Step 2</h5></span>
              </div>
            </b-col>
            <b-col cols="2" sm="2" md="2" xl="2" lg="2">
              <b-button
                style="background:#b0afab;"
                @click="showValueChange(3)"
                pill
                :class="btnValue4 == 4 ? 'btn-bg' : ''"
              >
                3</b-button
              >
              <div

                :class="btnValue4 == 4 ? 'btn-border-condation' : ''"
                class="btn-border"
              >
                <span class="step"><h5>Step 3</h5></span>
              </div>
            </b-col>
            <b-col
              @click="showValueChange(4)"
              cols="2"
              sm="2"
              md="2"
              xl="2"
              lg="2"
            >
              <b-button style="background:#b0afab;" pill :class="btnValue5 == 5 ? 'btn-bg' : ''">
                4</b-button
              >
              <div
                :class="btnValue5 == 5 ? 'btn-border-condation' : ''"
                class="btn-border"
              >
                <span class="step"><h5>Step 4</h5></span>
              </div>
            </b-col>
            <b-col cols="2" sm="2" md="2" xl="2" lg="2">
              <b-button
                style="background:#b0afab;"
                :class="confirmValue == 6 ? 'btn-bg' : ''"
                @click="showValueChange(5)"
                pill
              >
                5</b-button
              >
            </b-col>
          </b-row>


          <b-row class="row justify-content-center">
            <b-col cols="10" sm="10" md="10" xl="10" lg="10">
              <b-row
                v-if="btnValue1 == 1 && showValue == 1"
                class="row -justify-content-center"
              >
                <b-col cols="12" sm="12" md="12" xl="10" lg="10">
                  <b-row>
                    <b-col cols="12" sm="12" md="12" xl="12" lg="12">
                      <span class="label">Category</span>
                      <v-select
                        class="my-2 input-form"
                        @input="subCategoryFun"
                        :options="options"
                        v-model="select"
                        label="title"
                      >
                        <template slot="option" slot-scope="option">
                          <span class="fa" :class="option.icon"></span>
                          {{ option.title }}
                        </template>
                      </v-select>
                    </b-col>
                    
                    <b-col
                      v-if="typeValue == true"
                      cols="12"
                      sm="12"
                      md="12"
                      xl="12"
                      lg="12"
                    >
                    <span v-for="item in 10" :key="item.id">
                                         <p>{{item.name}}</p>

                    </span>
                    </b-col>
                  
                    <b-col
                      cols="12"
                      sm="12"
                      md="12"
                      xl="12"
                      lg="12"
                    >
                      <span class="label">Type</span>
                      <v-select
                        v-model="type"
                        @input="imgFun"
                        class="my-2 input-form"
                        :options="items"
                        label="Outlined style"
                        outlined
                      ></v-select>
                    </b-col>

                      
                    <b-col v-if="imgValue" lg="12" xl="12">
                      <b-row>
                        <b-col
                          style="background: #FFF; height: 300px"
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
                              class="btn-1"
                              :style="preview[0] ? 'display: none;' : ''"
                              v-if="loadingUpload == true"
                              style="margin-left: 20px"
                              variant="primary"
                              disabled
                            >
                              <b-spinner small type="grow"></b-spinner>
                              uploading...
                            </b-button>

                            <label
                              :style="preview[0] ? 'display: none;' : ''"
                              class="label1"
                              v-if="loadingUpload == false"
                              >Select A Photo
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
                              style="background: #FFF; height: 150px"
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
                                  class="btn-2"
                                  :style="preview[1] ? 'display: none;' : ''"
                                  v-if="loadingUpload == true && preview[0]"
                                  style="margin-left: 20px"
                                  variant="primary"
                                  disabled
                                >
                                  <b-spinner small type="grow"></b-spinner>
                                  uploading...
                                </b-button>
                                <label
                                  :style="preview[1] ? 'display: none;' : ''"
                                  v-if="preview[0] && loadingUpload == false"
                                  class="label2"
                                  >Select A Photo
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
                              style="background: #FFF; height: 150px"
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
                                  class="btn-2"
                                  :style="preview[2] ? 'display: none;' : ''"
                                  v-if="loadingUpload == true && preview[1]"
                                  style="margin-left: 20px"
                                  variant="primary"
                                  disabled
                                >
                                  <b-spinner small type="grow"></b-spinner>
                                  uploading...
                                </b-button>
                                <label
                                  :style="preview[2] ? 'display: none;' : ''"
                                  v-if="preview[1] && loadingUpload == false"
                                  class="label2"
                                  >Select A Photo
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
                              style="background: #FFF; height: 150px"
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
                                  class="btn-2"
                                  :style="preview[3] ? 'display: none;' : ''"
                                  v-if="loadingUpload == true && preview[2]"
                                  style="margin-left: 20px"
                                  variant="primary"
                                  disabled
                                >
                                  <b-spinner small type="grow"></b-spinner>
                                  uploading...
                                </b-button>
                                <label
                                  :style="preview[3] ? 'display: none;' : ''"
                                  v-if="preview[2] && loadingUpload == false"
                                  class="label2"
                                  >Select A Photo
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
                              style="background: #FFF; height: 150px"
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
                                  class="btn-2"
                                  :style="preview[4] ? 'display: none;' : ''"
                                  v-if="loadingUpload == true && preview[3]"
                                  style="margin-left: 20px"
                                  variant="primary"
                                  disabled
                                >
                                  <b-spinner small type="grow"></b-spinner>
                                  uploading...
                                </b-button>
                                <label
                                  :style="preview[4] ? 'display: none;' : ''"
                                  v-if="preview[3] && loadingUpload == false"
                                  class="label2"
                                  >Select A Photo
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
                  <b-button
                    :disabled="!step1"
                    class="my-2"
                    @click="btnFun2(2)"
                    variant="success"
                    size="sm"
                  >
                    Next Step <i class="fas fa-arrow-right"></i
                  ></b-button>
                </b-col>
              </b-row>

              <b-row
                v-if="btnValue2 == 2 && showValue == 2"
                class="row -justify-content-center"
              >
                <b-col cols="12" sm="12" md="12" xl="12" lg="12">
                  <b-row>
                    <b-col cols="12" sm="12" md="12" xl="12" lg="12"
                      ><span class="label" style="color: green"
                        >Product Information</span
                      ></b-col
                    >
                               
                    <b-col cols="12"   sm="12"
                      md="12"
                      xl="10"
                      lg="10">
                       <span class="label">State</span>                     
                        <b-form-select  @change="stateFunc(countryInfo.countryCode,selectCity.isoCode)"   v-model="selectCity"  class="mb-3">   
                            <b-form-select-option  v-for="item in allCitys" :key="item.id" :value="item">{{item.isoCode}} {{item.name}}</b-form-select-option>
                        </b-form-select>
                    </b-col>
                    <b-col cols="12" v-if="twon.length != 0" sm="12"
                      md="12"
                      xl="10"
                      lg="10">
                       <span class="label">City</span>                     
                      <b-form-select     v-model="townSelect"  class="mb-3">
                            <b-form-select-option  v-for="item in twon" :key="item.id" :value="item">{{item.name}}</b-form-select-option>
                      </b-form-select>
                    </b-col>   
                    <b-col
                      style="margin-top: 20px !important"
                      class="my-2 input-form"
                      cols="12"
                      sm="12"
                      md="12"
                      xl="10"
                      lg="10"
                    >
                      <span class="label">Title</span>                     
                      <b-form-input
                        placeholder="Title"
                        v-model="title"
                        rows="3"
                      ></b-form-input>
                    </b-col>
                    <b-col
                      class="my-2"
                      cols="12"
                      sm="12"
                      md="12"
                      xl="10"
                      lg="10"
                    >
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
                         
                      </b-row>
                    </b-col>
                    <b-col
                      class="input-form"
                      cols="12"
                      sm="12"
                      md="12"
                      xl="10"
                      lg="10"
                    >
                    <span class="label">Description</span>                     
                      <b-form-textarea
                        id="textarea-rows"
                        placeholder="Description"
                        v-model="description"
                        rows="5"
                      ></b-form-textarea>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col style="margin-top: 15%">
                      <b-button
                        :disabled="!step2"
                        class="my-2"
                        @click="btnFun3(3)"
                        variant="success"
                        size="sm"
                      >
                        Next Step <i class="fas fa-arrow-right"></i
                      ></b-button>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>

              <b-row
                v-if="btnValue3 == 3 && showValue == 3"
                class="row -justify-content-center"
              >
                <b-col cols="12" sm="12" md="12" xl="10" lg="10">
                  <b-row>
                    <b-col cols="12" sm="12" md="12" xl="12" lg="12"
                      ><span class="label" style="color: green"
                        >Contact</span
                      ></b-col
                    >
                    <b-col
                      class="input-form"
                      cols="12"
                      sm="12"
                      md="6"
                      xl="6"
                      lg="6"
                    >
                    <span class="label" style="color: green"
                        >Phone Number</span>
                      <b-form-input
                        placeholder="Contact"
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
                        v-model="email"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      class="input-form"
                      cols="12"
                      sm="12"
                      md="12"
                      xl="12"
                      lg="12"
                    >
                      <b-form-textarea
                        placeholder="Address"
                        rows="3"
                        v-model="address"
                      ></b-form-textarea>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col
                      style="margin-top: 8% !important"
                      cols="12"
                      sm="12"
                      md="12"
                      xl="12"
                      lg="12"
                      ><span class="label" style="color: green"
                        >Map for your Product</span
                      ></b-col
                    >
                    <b-col class="my-2" cols="12" xl="12" lg="12">
                      <div>
                        <l-map
                          @ready="onReady"
                          @locationfound="onLocationFound"
                          :zoom="zoom"
                          :center="center"
                          style="height: 350px; width: 100%"
                        >
                          <l-tile-layer :url="url" :attribution="attribution" />
                          <l-marker :lat-lng="marker" />
                          <l-icon-default :image-path="path" />
                        </l-map>
                      </div>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-button
                      :disabled="!step3"
                      class="mt-3"
                      @click="btnFun4(4)"
                      variant="success"
                      size="sm"
                    >
                      Next Step <i class="fas fa-arrow-right"></i
                    ></b-button>
                  </b-row>
                </b-col>
              </b-row>
              <b-row
                v-if="btnValue4 == 4 && showValue == 4"
                class="row -justify-content-center"
              >
                <b-col cols="12" sm="12" md="12" xl="12" lg="12">
                  <b-row>
                    <b-col cols="12" sm="12" md="12" xl="7" lg="7">
                      <b-button
                        disabled
                        variant="dark"
                        size="sm"
                        class="mt-2"
                        style="width: 30%"
                      >
                        Item Details
                      </b-button>
                      <div class="img-row-main">
                        <b-row class="row justify-content-center">
                          <b-col
                            cols="12"
                            class="img-container"
                            sm="12"
                            md="12"
                            xl="12"
                            lg="12"
                          >
                            <b-img
                              class="product-img"
                              :src="imageNext || preview[0]"
                            >
                            </b-img>
                          </b-col>
                        </b-row>
                      </div>
                      <div class="img-row mt-1">
                        <b-row class="row justify-content-center mt-1">
                          <b-col cols="10" sm="10" md="10" lg="10" xl="10">
                            <b-row>
                              <b-col
                                class="my-1"
                                @click="imageChange(i)"
                                v-for="(i, index) in preview"
                                :key="index"
                                cols="2"
                                sm="2"
                                md="2"
                                xl="2"
                                lg="2"
                              >
                                <b-img class="product-img-list" :src="i">
                                </b-img>
                              </b-col>
                            </b-row>
                          </b-col>
                        </b-row>
                      </div>
                      <div class="img-row mt-1">
                        <b-row class="row justify-content-center mt-1">
                          <b-col cols="12" sm="12" md="12" xl="12" lg="12">
                            <h4>{{ title }}</h4>
                            <div class="border-description"></div>
                          </b-col>
                          <b-col cols="12" sm="12" md="12" xl="12" lg="12">
                            <h5>{{ address }}</h5>
                            <div class="border-description"></div>
                          </b-col>
                          <b-col cols="12" sm="12" md="12" xl="12" lg="12">
                            <p>{{ description }}</p>
                            <div class="border-description"></div>
                            <b-row>
                              <b-col
                                class="deals"
                                cols="6"
                                sm="6"
                                md="6"
                                xl="6"
                                lg="6"
                              >
                                <p>Type: {{ type }}</p>
                              </b-col>
                              <b-col
                                class="post-code"
                                cols="6"
                                sm="6"
                                md="6"
                                xl="6"
                                lg="6"
                              >
                                <p>{{ postalCode }}</p>
                              </b-col>
                            </b-row>
                          </b-col>
                        </b-row>
                      </div>
                    </b-col>
                    <b-col cols="12" sm="12" md="12" xl="5" lg="5">
                      <b-button
                        disabled
                        variant="dark"
                        size="sm"
                        class="mt-2"
                        style="width: 30%"
                      >
                        Map
                      </b-button>
                      <div>
                        <l-map
                          @ready="onReady"
                          @locationfound="onLocationFound"
                          :zoom="zoom"
                          :center="center"
                          style="height: 350px; width: 100%"
                        >
                          <l-tile-layer :url="url" :attribution="attribution" />
                          <l-marker :lat-lng="marker" />
                          <l-icon-default :image-path="path" />
                        </l-map>
                      </div>
                    </b-col>
                  </b-row>
                  <b-button @click="btnFun5(5)" variant="success" size="sm">
                    Next Step</b-button
                  >
                </b-col>
              </b-row>
              <b-row
                v-if="btnValue5 == 5 && showValue == 5"
                class="row -justify-content-center"
              >
                <b-col cols="12" sm="12" md="12" xl="12" lg="12">
                  <h3 v-if="!success" style="text-align: center">
                    Submit Your request for approval
                  </h3>
                  <b-card style="background:  " class="my-3" v-if="success">
                    <h5
                      style="font-size: 0.9em; color: black; font-family:Loto; text-align: center"
                    >
                      {{ success }}
                    </h5>
                  </b-card>
                  <b-button @click="productUpdate" variant="success" size="sm">
                    Confirm</b-button
                  >
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { State,City }  from 'country-state-city';
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LIconDefault } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import firebase from "firebase/app";
import "firebase/database";
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
      subCategoryValue: false,
      country:{},
      selectCity:{},
      townSelect:{},
      twon:[],
      allCitys:{},
      cityList:[],
      typeValue: false,
      imgValue: false,
      title: "",
      price: null,
      postalCode: "",
      description: "",
      contact: "",
      keyWord:"",
      email: "",
      loadingUpload: false,
      address: "",
      select: null,
      preview: [],
      image: null,
      type: null,
      city: null,
      imageNext: "",
      items: ["Deals", "offer"],
      time: new Date().toLocaleString(),
      options: [
        { id: 1, icon: "fas fa-tshirt", title: "Cloths" },
        { id: 2, icon: "fas fa-plug", title: "Electronics" },
        { id: 3, icon: "fas fa-couch", title: "Furnitures" },
        { id: 4, icon: "fas fa-car", title: "Cars" },
        { id: 5, icon: "fas fa-home", title: "Real Estates" },
        { id: 6, icon: "fas fa-child", title: "Kids" },
        { id: 7, icon: "fas fa-utensils", title: "Foods" },
        { id: 8, icon: "fas fa-book", title: "Books" },
        { id: 9, icon: "fas fa-running", title: "Sports" },
        { id: 10, icon: "fas fa-briefcase-medical", title: "Jobs" },
        { id: 11, icon: "fas fa-gifts", title: "Antiques" },
      ],
      subCategory: [
        { id: 1, title: "sub 1" },
        { id: 2, title: "sub 1" },
        { id: 3, title: "sub 2" },
        { id: 4, title: "sub 3" },
        { id: 5, title: "sub 4" },
      ],
      citys: [
        { id: 1, title: "City 1" },
        { id: 2, title: "City 2" },
        { id: 3, title: "City 3" },
        { id: 4, title: "City 4" },
        { id: 5, title: "City 5" },
      ],
      btnValue1: 1,
      btnValue2: 0,
      btnValue3: 0,
      btnValue4: 0,
      btnValue5: 0,
      confirmValue: 0,
      showValue: 1,
      zoom: 18,
      path: "/images/",
      center: [46.204391, 6.143158],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(46.204391, 6.143158),
    };
  },

  computed: {
    countryInfo(){
       return this.$store.getters.countryInfo
    },
    success() {
      return this.$store.getters.success;
    },
    step1() {
      return (
        this.select !== null &&
        this.type !== "" &&
        this.preview.length != 0
      );
    },

    step2() {
      return (
        this.country !== null,
        this.title !== "" &&
        this.price != null &&
        this.postalCode !== "" &&
        this.description !== ""
      );
    },
    step3() {
      return this.contact !== null && this.email !== "" && this.address != "";
    },
  },
   mounted(){
    this.countryFunc( this.$store.getters.countryInfo.countryCode)
  },
  methods: {
    countryFunc(e){
      console.log(e)
     this.allCitys =State.getStatesOfCountry(e)

    },
    stateFunc(e,i){
      console.log(e,i)
      console.log(City.getCitiesOfState(e ,i))
     this.twon = City.getCitiesOfState(e ,i)

    },
    btnFun1(e) {
      this.btnValue1 = e;
      this.showValue = e;
    },
    btnFun2(e) {
      this.btnValue2 = e;
      this.showValue = e;
    },
    btnFun3(e) {
      this.btnValue3 = e;
      this.showValue = e;
    },
    btnFun4(e) {
      this.btnValue4 = e;
      this.showValue = e;
    },
    btnFun5(e) {
      this.btnValue5 = e;
      this.showValue = e;
    },
    btnConfirm(e) {
      this.confirmValue = e;
    },
    showValueChange(e) {
      this.showValue = e;
    },
    subCategoryFun() {
      this.subCategoryValue = true;
      console.log(this.subCategoryValue);
    },
    typeFun() {
      this.typeValue = true;
    },
    imgFun() {
      this.imgValue = true;
    },
    imageChange(e) {
      this.imageNext = e;
    },
    onReady(mapObject) {
      mapObject.locate();
    },
    onLocationFound(location) {
      this.center = [location.latlng.lat, location.latlng.lng];
      this.marker = latLng(location.latlng.lat, location.latlng.lng);
    },
  routeChange(){
       this.$router.push("/dashbord");
  },
    productUpdate() {
      this.$store.dispatch("productUpload", {
        select: this.select.title,
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
        state:this.selectCity.name,
      });
      this.routeChange()
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
    reset: function () {
      this.image = null;
      this.preview = null;
      this.image_list = [];
      this.preview_list = [];
    },
  },
   keyFun: function(e) {
      if (e.keyCode === 13) {
        alert('Enter was pressed');
      } else if (e.keyCode === 50) {
        alert('@ was pressed');
      }      
      this.log += e.key;
    },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .label {
    font-size: 0.9em;
    font-weight: 700;
    font-family: Loto;
  }
  .input-form {
    margin-top: 25px;
    height: 45px !important;
  }
  .btn-border {
    border-top: 3px solid rgb(58, 55, 55);
    margin-left: 20% !important;
    width: 180%;
    margin-top: -52% !important;
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
    font-size: 0.8em !important;
    font-weight: 700;
    color: darkgreen;
    margin-left: 10%;
  }
  .label1 {
    padding: 10px;
    background: #a3a3a3;
    border-radius: 10px;
    display: table;
    color: #fff;
    margin-top: -42%;
    margin-left: 35%;
  }

  .label2 {
    padding: 10px;
    font-size: 0.7em;
    background: #a3a3a3;
    border-radius: 10px;
    display: table;
    color: #fff;
    margin-top: -70%;
    margin-left: 6%;
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
  h3 {
    font-family: Loto;
    margin-top: 5%;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
    color: #23a82aad;
    text-align: center;
    text-align: start;
    opacity: 0.95;
  }
  h4 {
    text-align: center;
    font-family: Loto;
    font-weight: 600;
    font-size: 20px !important;
    margin: 3% !important;
  }

  p {
    text-align: start;
    margin: 0 auto !important;
    font-family: Loto;
    margin: 3% !important;
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
  .step {
    font-size: 0.7em;
    margin-left: 10%;
  }
}

@media (min-width: 601px) and (max-width: 1200px) {
  .label {
    font-size: 0.9em;
    font-weight: 700;
    font-family: Loto;
  }
  .input-form {
    margin-top: 25px;
    height: 45px !important;
  }
  .btn-border {
    border-top: 3px solid rgb(58, 55, 55);
    margin-left: 10% !important;
    width: 130%;
    margin-top: -15%;
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
  .label1 {
    padding: 10px;
    background: #a3a3a3;
    border-radius: 10px;
    display: table;
    color: #fff;
    margin-top: -42%;
    margin-left: 35%;
  }

  .label2 {
    padding: 10px;
    background: #a3a3a3;
    border-radius: 10px;
    font-size: 0.85em;
    display: table;
    color: #fff;
    margin-top: -65%;
    margin-left: 4%;
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
  h3 {
    font-family: Loto;
    margin-top: 5%;
    font-weight: bold;
    font-size: 30px;
    line-height: 29px;
    color: #23a82aad;
    text-align: center;
    text-align: start;
    opacity: 0.95;
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
  .label {
    font-size: 0.9em;
    font-weight: 700;
    font-family:'Courier New', Courier, monospace;
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
    margin-top: -75%;
    margin-left: 30% !important;
  }
  .btn-2 {
    margin-top: -95% !important;
    margin-left: 6% !important;
  }
  .step h5{
    text-align: center;
    font-family:Arial, Helvetica, sans-serif;
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
    margin-left: 35%;
  }

  .label2 {
    padding: 10px;
    background: #a3a3a3;
    border-radius: 10px;
    display: table;
    color: #fff;
    margin-top: -55%;
    margin-left: 7%;
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
  h3 {
    font-family: Loto;
    margin-top: 5%;
    font-weight: bold;
    font-size: 30px;
    line-height: 29px;
    color: #2d332dad;
    text-align: center;
    text-align: start;
    opacity: 0.95;
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