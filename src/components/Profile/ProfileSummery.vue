<template>
  <div id="profile-summery">
    <b-row  class="row content-justify-center">
      <b-col md="12" lg="12" xl="12">
        <b-card v-if=" userInfoChat.listName !=undefined" class="card-profile-summery ">
          <div id="scrollspyProfile">
            <b-avatar size="150px" :src="avatarImg" />
            <b-button variant="light" class="btn-profile-summery">
              {{userInfoChat.firstName}}
            </b-button>
            <p>
              Description: {{userInfoChat.description}}
            </p>
            <p>
              Contact: {{userInfoChat.phoneNumber}}
            </p>
            <p>
              Email: {{userInfoChat.email}}
            </p>
            <p>
              Address: {{userInfoChat.address}}
            </p>
            
           
           
           
            
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script >
export default {
  data () {
    return {
      avatarImg: require('@/assets/img/chat/profile.jpg')
    }
  },
  computed: {
    userInfoChat() {
      return this.$store.getters.userInfoChat;
    }, 
  },
  
}
</script>
<style lang="scss" scoped >
.card-profile-summery{
    width: 360px;
    height: 861px;
    background: #FFFFFF;
    border-radius: 0px 0px 0px px;
    font-family: Lato;
    font-style: normal;
    .btn-profile-summery{
        position: absolute;
        margin-top: 32%;
        margin-left:-20% ;
        width: 182px;
        height: 56px;
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
    }
    .button-waiting{
        width: 257px;
        height: 52px;
        background: #FFFFFF;
        box-shadow: 0.5px 0.5px 4px #E86830;
        border-radius: 15px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        color: #0A0A0A;
    }
    p{
        width: 290px;
        margin-top: 10%;
        background: #FFFFFF;
        border-radius: 0px 60px 20px 0px;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        text-align: start;
        line-height: 30px;
        color: #0A0A0A;
          font-family: "Maven Pro", sans-serif;
    }
    h4{
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #0A0A0A;
        text-align: center;
    }
    h5{
       font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
    }
    #scrollspyProfile{
        position: relative;
        height: 704px;
        margin-top: -5%;
        width: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        flex-direction: column-reverse;
        border-radius: 20px 50px 20px 20px;
       }
       ::-webkit-scrollbar {
        width: 16px;
        height: 100px !important;

      }

      ::-webkit-scrollbar-button {
      height: 100px !important;
      }

      ::-webkit-scrollbar-thumb {
      background: #4698CA;
      height: 100px !important;
      border-radius: 10px 0px 0px 10px;

      }

      ::-webkit-scrollbar-thumb:hover {
      background: #b30000;
}
   
}

</style>
