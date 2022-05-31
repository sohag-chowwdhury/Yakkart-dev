<template>
  <div class="dashbord">
    <b-row style="margin-top: 20px">
      <b-col cols="8" sm="12" md="6" lg="6" xl="6">
        <h5>
          <img
            style="width: 22px"
            src="https://img.icons8.com/color/48/000000/bulleted-list.png"
          />
          Browse items by category
        </h5>
      </b-col>
      <b-col class="hide-sm" cols="8" sm="12" md="6" lg="6" xl="6">
        <h5 style="text-align: end">
          <img
            style="width: 25px"
            src="https://img.icons8.com/color/96/000000/google-maps-new.png"
          />All of {{ countryInfo }}
        </h5>
      </b-col>
      <!--  @click="btnTrue(index, item.Title)"
            :to="/products/ + item.Title" -->
      <b-col
        class="mt-1"
        cols="6"
        sm="6"
        md="4"
        lg="3"
        xl="3"
        v-for="(item, index) in itesCat"
        :key="index"
      >
        <b-button variant="light" @click="routeChange(item.Title)" class="card">
          <b-row class="row justify-content-center">
            <b-col cols="3" sm="3" md="4" lg="4" xl="4">
              <b-img class="btn-img" :src="item.img"></b-img>
            </b-col>
            <b-col class="btn-text" cols="9" sm="9" md="8" lg="8" xl="8">
              <h3>{{ item.Title }}</h3>
            </b-col>
          </b-row>
        </b-button>
      </b-col>
    </b-row>
    <!--
      <b-row>
        <b-col style="margin-top:60px;">
          <div class="bg "
   :style="{'background-image': 'url(' + require('../../assets/bg/img.jpg') + ')'}">
    <div style="height:450px;">
  <input  @keyup.enter="Search"   v-model="filterText" placeholder="What You are looking for?" style="width:85%; height:55px; margin-top:203px !important;  outline: none !important;
    border:1px solid #FFF;
    box-shadow: 0 0 10px #719ECE; border-radius: 0px 25px 25px 0px" type="text"  name="fname">
    <b-button @click="Search"  pill style="width:8% ;height:50px; margin-bottom:6px; margin-left:-9% ; background:green " size="1.4em;"><i size="1.4em" class="fas fa-search"></i></b-button>
  </div>
          </div>
        </b-col>
        <b-col cols="12" sm="12" lg="5" md="5" xl="5" style="margin-top:5%;">
          <b-row cols="row justify-content-center">
            <b-col cols="12" sm="12" md="10" xl="10" lg="10">
              <img style="margin-left:25% !important; width:50%" src="https://img.icons8.com/color/480/000000/money-bag.png"/>
            </b-col>
            <b-col cols="12" sm="12" md="10" xl="10" lg="10">
                <h3>
                  Start making money!

                </h3>
                <p>Do you have something to sell?
                  Post your first ad and start making money!</p>
                  <b-button to="/upload" style="background:#105723; height:50px;" pill>
                    <img style="width:28px;" src="https://img.icons8.com/color/480/000000/add--v2.png"/> Upload Products
                  </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnValue: 0,
      filterText: "",
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
          Title: "Cars",
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
          Title: "Books",
        },
        {
          id: 9,
          img: "https://img.icons8.com/color/480/000000/sports.png",
          icon: "fas fa-running",
          Title: "Sports",
        },

        {
          id: 11,
          img: "https://img.icons8.com/color/480/000000/earrings.png",
          icon: "fas fa-gifts",
          Title: "Antiques",
        },
        {
          id: 12,
          img: "https://img.icons8.com/color/480/000000/hang-up-phone.png",
          icon: "fas fa-gifts",
          Title: "Mobile",
        },
        {
          id: 10,
          img: "https://img.icons8.com/color/480/000000/new-job.png",
          icon: "fas fa-briefcase-medical",
          Title: "Jobs",
        },
      ],
    };
  },
  methods: {
    routeChange(e) {
      if (e != "Jobs") {
        this.$store.dispatch("categoryFilter", {
          type: e,
        });
        this.$router.push("/products/" + e);
      } else {
        this.$router.push("/jobs");
      }
    },
    Search() {
      this.$store.dispatch("filterSarch", {
        text: this.filterText,
      });
      this.$router.push("/products/" + "Search  Result");
    },
  },
  computed: {
    countryInfo() {
      return this.$store.getters.countryInfo.countryName;
    },
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .hide-sm {
    display: none;
  }
  .btn-img {
    width: 130%;
  }
  p {
    margin: 5%;
    font-family: "Maven Pro", sans-serif;
    font-weight: 500;
    opacity: 0.9;
    font-weight: 600;
  }
  .hide-xl {
    display: none;
  }
  .btn {
    width: 100%;
    height: 35px;
  }

  .card {
    border-radius: 0px 0px 0px 0px !important;
    background: #ffff;
  }
  .btn {
    width: 100%;
    height: 35px;
  }
  h3 {
    text-align: center;
    margin-top: 3% !important;
    font-family: "Maven Pro", sans-serif;
    margin: auto;
    font-weight: 800 !important;
    opacity: 0.9;
    font-size: 16px !important;
  }
  h5 {
    font-size: 15px !important;
    font-family: "Maven Pro", sans-serif;
    font-weight: 700;
    opacity: 0.8;
  }
  .card {
    border-radius: 0px 40px 40px 0px;
    background: #ffff;
    height: 50px !important;
    margin-top: 5px;
  }
  .btn-text h3 {
    color: #000;
    font-size: 16px !important;
    text-align: start;
    font-family: "Maven Pro", sans-serif;
    margin-top: 7% !important;
    font-weight: 500 !important;
  }
  .bg {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    background-size: 100% 100%;
    border-radius: 0px 50% 50% 0px;
    box-shadow: inset 0 0 0 2000px rgba(43, 37, 40, 0.7);
    background-color: rgba(0, 0, 0, 0.1); /* Black background with opacity */
    background: linear-gradient(
      0deg,
      rgba(255, 0, 150, 0.8),
      rgba(255, 0, 150, 0.8)
    );
    background-size: cover;
  }
}
@media (min-width: 601px) and (max-width: 1200px) {
  .hide-md {
    display: none;
  }
  p {
    margin: 5%;
    font-family: "Maven Pro", sans-serif;
    font-weight: 500;
    opacity: 0.9;
    font-weight: 600;
  }
  .hide-xl {
    display: none;
  }
  .btn {
    width: 100%;
    height: 35px;
  }
  h3 {
    text-align: center;
    font-family: "Maven Pro", sans-serif;
    margin: auto;
    font-weight: 600 !important;
    opacity: 0.8;
    font-size: 20px !important;
  }
  .card {
    border-radius: 0px 0px 0px 0px !important;
    background: #ffff;
  }
  .btn {
    width: 100%;
    height: 35px;
  }
  h3 {
    text-align: center;
    margin-top: 3% !important;
    font-family: "Maven Pro", sans-serif;
    margin: auto;
    font-weight: 600 !important;
    opacity: 0.9;
    font-size: 16px !important;
  }
  h5 {
    font-size: 14px !important;
    font-family: "Maven Pro", sans-serif;
    font-weight: 700;
    opacity: 0.8;
  }
  .card {
    border-radius: 0px 40px 40px 0px;
    background: #ffff;
    height: 40px;
    margin-top: 10px;
  }
  .btn-img {
    width: 60%;
  }
  .btn-text h3 {
    color: #000;
    font-size: 14px !important;
    text-align: start;
    font-family: "Maven Pro", sans-serif;
    margin-top: 5% !important;
    font-weight: 500 !important;
  }
  .bg {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    background-size: 100% 100%;
    border-radius: 0px 50% 50% 0px;
    box-shadow: inset 0 0 0 2000px rgba(43, 37, 40, 0.7);
    background-color: rgba(0, 0, 0, 0.1); /* Black background with opacity */
    background: linear-gradient(
      0deg,
      rgba(255, 0, 150, 0.8),
      rgba(255, 0, 150, 0.8)
    );
    background-size: cover;
  }
}
@media only screen and (min-width: 1201px) {
  p {
    margin: 5%;
    font-family: "Maven Pro", sans-serif;
    font-weight: 500;
    opacity: 0.9;
    font-weight: 600;
  }
  .hide-xl {
    display: none;
  }
  .btn {
    width: 100%;
    height: 35px;
  }
  h3 {
    text-align: center;
    font-family: "Maven Pro", sans-serif;
    margin: auto;
    font-weight: 600 !important;
    opacity: 0.8;
    font-size: 20px !important;
  }
  .card {
    border-radius: 0px 0px 0px 0px !important;
    background: #ffff;
  }
  .btn {
    width: 100%;
    height: 35px;
  }
  h3 {
    text-align: center;
    margin-top: 3% !important;
    font-family: "Maven Pro", sans-serif;
    margin: auto;
    font-weight: 600 !important;
    opacity: 0.9;
    font-size: 20px !important;
  }
  h5 {
    font-size: 15px !important;
    font-family: "Maven Pro", sans-serif;
    font-weight: 700;
    opacity: 0.8;
  }
  .card {
    border-radius: 0px 40px 40px 0px;
    background: #ffff;
    height: 60px;
    margin-top: 10px;
  }
  .btn-img {
    width: 80%;
  }
  .btn-text h3 {
    color: #000;
    font-size: 16px !important;
    text-align: start;
    font-family: "Maven Pro", sans-serif;
    margin-top: 7% !important;
    font-weight: 500 !important;
  }
  .bg {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    background-size: 100% 100%;
    border-radius: 0px 50% 50% 0px;
    box-shadow: inset 0 0 0 2000px rgba(43, 37, 40, 0.7);
    background-color: rgba(0, 0, 0, 0.1); /* Black background with opacity */
    background: linear-gradient(
      0deg,
      rgba(255, 0, 150, 0.8),
      rgba(255, 0, 150, 0.8)
    );
    background-size: cover;
  }
}
</style>