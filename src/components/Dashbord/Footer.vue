<template>
  <div class="main-div" style="background: #ffffff">
    <b-row class="row justify-content-center">
      <b-col cols="12" md="12" sm="12" xl="12" lg="12">
        <b-row>
          <b-col cols="8" md="8" lg="9" xl="9" class="foo">
            <ul>
              <li>Contact US</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Privacy policy</li>
              <li>About US</li>
            </ul>
          </b-col>
          <b-col cols="4" md="4" lg="3" xl="3" class="foo">
            <ul>
              <li>
                <img
                  class="social-icon"
                  src="https://img.icons8.com/color/48/000000/facebook.png"
                />
              </li>
              <li>
                <img
                  class="social-icon"
                  src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                />
              </li>
              <li>
                <img
                  class="social-icon"
                  src="https://img.icons8.com/color/48/000000/instagram-new.png"
                />
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<style scoped>
@media only screen and (max-width: 600px) {
  ul {
    overflow-x: hidden;
    white-space: nowrap;
    margin: 8px;
  }

  li {
    color: #000000;
    margin: 8px;
    font-family: "Maven Pro", sans-serif;
    font-weight: 600;
    opacity: 0.9;
    cursor: pointer;
    list-style: none;
  }

  ul {
    overflow-x: hidden;
    white-space: nowrap;
    margin: 8px;
  }

  li {
    color: #000000;
    margin: 8px;
    font-family: "Maven Pro", sans-serif;
    font-weight: 600;
    opacity: 0.9;
    cursor: pointer;
  }
  .social-icon {
    width: 25px;
    margin: 8px;
  }
  h5 {
    font-weight: 700;
    font-family: "Maven Pro", sans-serif;
    font-size: 16px;
    color: #ffffffff;
  }
  .foo {
    margin-top: 10px;
  }
  .main-div {
    margin-top: 5px;
  }
  .foo-follow {
    font-family: "Maven Pro", sans-serif;
    font-size: 15px;
    margin-left: 5px;
    color: #fff;
    cursor: pointer;
  }
  .foo-follow-r {
    font-family: "Maven Pro", sans-serif;
    font-size: 15px;
    margin-left: 5px;
    margin-top: 10px;
    color: #fff;
    cursor: pointer;
  }
}
@media only screen and (min-width: 601px) {
  ul {
    overflow-x: hidden;
    white-space: nowrap;
    margin: 8px;
  }

  li {
    color: #000000;
    margin: 8px;
    font-family: "Maven Pro", sans-serif;
    font-weight: 600;
    opacity: 0.9;
    cursor: pointer;
  }

  ul {
    overflow-x: hidden;
    white-space: nowrap;
    margin: 8px;
  }

  li {
    display: inline;
    color: #000000;
    margin: 8px;
    font-family: "Maven Pro", sans-serif;
    font-weight: 600;
    opacity: 0.9;
    cursor: pointer;
  }
  .social-icon {
    width: 25px;
    margin: 8px;
  }
  h5 {
    font-weight: 700;
    font-family: "Maven Pro", sans-serif;
    font-size: 16px;
    color: #ffffffff;
  }
  .foo {
    margin-top: 10px;
  }
  .main-div {
    margin-top: 5px;
  }
  .foo-follow {
    font-family: "Maven Pro", sans-serif;
    font-size: 15px;
    margin-left: 5px;
    color: #fff;
    cursor: pointer;
  }
  .foo-follow-r {
    font-family: "Maven Pro", sans-serif;
    font-size: 15px;
    margin-left: 5px;
    margin-top: 10px;
    color: #fff;
    cursor: pointer;
  }
}
</style>