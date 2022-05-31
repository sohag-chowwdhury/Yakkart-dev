<template>
  <div class="mt-3 chat-main main-con">
   
    <b-row  class="justify-content-center ">
      <b-col 
        class="hidden-custome"  :class="valueChat ? 'hidden-xs':''"
        cols="12"
        sm="3"
        md="3"
        lg="4"
        xl="3"
      >
       <chat-list :items=" chatData"/>
      </b-col>
      <b-col cols="12" sm="12" md="12" lg="8" xl="6">
        <b-row class="chat">
          <b-col
            cols="6"
            sm="12"
            md="2"
            lg="2"
            xl="4"
          >
         
            <h3 style="cursor:pointer;" @click="chatTrueFync">Chat <span><img class="mx-1" src="https://img.icons8.com/material/24/26e07f/chat--v1.png"/></span></h3>
         
          </b-col>
           
        </b-row>
        
        <b-row>
          <b-col  cols="12"
            sm="12"
            md="12"
            lg="12"
            xl="12">
              <b-card style="max-height:60px; color:white; background:#149777" v-if="userDeatails">
                <b-avatar size="30" :src="userDeatails.img"></b-avatar>
                {{userDeatails.firstName}} {{userDeatails.listName}}
              </b-card>
          </b-col>
          <b-col v-if="loading"
            cols="12"
            sm="12"
            md="12"
            lg="12"
            xl="12">
            <span  style="margin:30%">
            <b-spinner style="width:70px; height:70px;" variant="success" label="Spinning"></b-spinner>
             <b-spinner  style="width:70px; height:70px;" variant="success" type="grow" label="Spinning"></b-spinner>
              </span>
          </b-col>
         
          <b-col
          v-if="!loading"
            cols="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
          >
           
            <b-card class="chat-box">
           
              <b-row style="height:59px;">
                <b-col md="12" lg="12" />
              </b-row>
              <div id="container"  class="scrollspy">
                 <b-row v-if="chatStart == false" class="row justify-content-center">
                    <b-col    
                      cols="12"
                      sm="3"
                      md="3"
                      lg="6"
                      xl="6"
                    >
                    <b-img style="width:100%;"  src="https://img.icons8.com/color/480/000000/chat--v1.png"></b-img>
                   
                    </b-col>
                  </b-row>
                <b-row   v-if="chatStart == true"   class="text">
                  <b-col
                    v-for="(chat,index) in userChat"
                    :key="index"
                    cols="12"
                    sm="12"
                    md="12"
                    lg="12"
                    class="my-0"
                    :class=" chat.sender ===  authId ? 'sender-text':'user-text'"
                  >
                    <b-row  class="mt-1" >
                     
                      <b-col  class="messages" v-chat-scroll cols="12" sm="12" md="12" lg="12" xl="12">
                          <p>{{chat.text}} <br>  <span @mouseover="showTime(index)" @mouseleave="outTime(index)" class="date"> {{moment(chat.time).fromNow()}}</span></p>
                         
                      </b-col>
                      <b-col
                      
                        cols="2"
                        sm="2"
                        md="2"
                        lg="2"
                        xl="2"
                      >
                      </b-col>
                    </b-row>
                  </b-col>
                  
                    <b-col                 
                v-if="userDeatails.seenStaus == false "
                   cols="12"
                    sm="12"
                    md="12"
                    lg="12">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                  </b-col>
                    <b-col 
                    v-if="userDeatails.seenStaus == true " 
                   cols="12"
                    sm="12"
                    md="12"
                    lg="12">
                    <span class="dot2"></span>
                    <span class="dot2"></span>
                    <span class="dot2"></span>
                    <span class="dot2"></span>
                  </b-col>
                </b-row>
              </div>
              
              <b-row  v-if="chatStart == true">
                <b-col md="12" lg="12">
                  <b-card class="text-input">
                    <b-row class="justify-content-center ">
                     
                      <b-col
                      
                        class="input-field"
                        cols="10"
                        sm="9"
                        md="10"
                        lg="10"
                        xl="10"
                      >
                        <b-form-input
                          id="input-small"
                          v-model="text"
                          size="lg"
                          placeholder="Write Here"
                        />
                      </b-col>
                      <b-col
                        cols="2"
                        sm="1"
                        md="1"
                        lg="1"
                        xl="1"
                      >
                        <b-button @click="chatFunc" class="send-btn">
                          <b-img class="btn-img" :src="send" />
                        </b-button>                    
                      </b-col>
                    </b-row>
                  </b-card>
                </b-col>
              </b-row>
            </b-card>

            <b-col />
          </b-col>
        </b-row>
      </b-col>
      <b-col   class="hidden-xs hidden-md mt-3" md="3" lg="3" xl="3">
          <div v-if="chatStart == true">  <profile-summery/></div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text:"",
      checkIndex:null,
      valueChat:false,
      check:false,
      uniq:this.$route.params.id,
      dateChangeAlert: true,
      visible: true,
      qproco: require('@/assets/img/chat/qproco.png'),
      chat:require('@/assets/img/chat/chat.png'),
      date: require('@/assets/img/chat/date.png'),
      img: require('@/assets/img/chat/img.png'),
      document: require('@/assets/img/chat/document.png'),
      price: require('@/assets/img/chat/price.png'),
      inputFile: require('@/assets/img/chat/input.png'),
      send: require('@/assets/img/chat/send.png'),
     
      offer: { userId: '2324244', title: 'Offer nr 1', userName: 'Jane Dau', date: '21.06.2021', endDate: '28.06.21', userAvatar: require('@/assets/img/chat/sender.jpg'), offerImg: require('@/assets/img/chat/offer.jpg') },
     

    }
  },
  computed:{
    authId(){


      return this.$store.getters.user.id
    },
    chatData() {
      return this.$store.getters.chatData;
    },
    
    userChat() {

      const cats = this.$store.getters.userChat.reduce((p,c) => {
        p[c.text] = c
        return p
      }, {})
      return Object.values(cats)

    },
   loading (){  return this.$store.getters.loading},
    userDeatails() {
      return  this.$store.getters.userDeatails 
    },
    startConv(){
       return  this.$store.getters.startConv
    },
     chatStart(){
       return  this.$store.getters.chatStart
    },
   
  },
  
  updated(){
    this.uniq=this.$route.params.id;  
  },
  
  
  methods: {
   showTime(e){
     this.checkIndex = e
   },
  chatTrueFync(){
    this.valueChat =  !this.valueChat
   },
    chatFunc(){
       this.$store.dispatch("chatFunc", {
         userId: this.uniq,
         text:this.text,
          sender: this.$store.getters.user.id,
         time:new Date().toLocaleString()
       })
       this.text = ''
       this.check = true 
    },
    routerChange() {
      this.$router.push("/chat/" + 2432);
      this.$router.go()
    },
  }
}
</script>
<style lang="scss" scoped>
@media (max-width:600px){
  .hidden-xs {
    display: none;
  }
 .dot {
  height: 10px;
  width: 10px;
  background-color: rgb(236, 14, 14);
  border-radius: 50%;
  display: inline-block;
}
 .dot2 {
  height: 10px;
  width: 10px;
  background-color: rgb(14, 236, 151);
  border-radius: 50%;
  display: inline-block;
}
    .my-custom-toggle {
        color: black;
        text-decoration: none;
      }
      .chat-main{
          overflow: hidden;
           justify-content: center;
          font-family:  Helvetica, sans-serif;
          .chat{
            h3{
                font-weight: bold;
                font-size: 16px;
                line-height: 43px;
                text-align: center;
                text-align:left;
                vertical-align:top;
                margin-left: 10%;
            }
           
             
            h5{
                font-weight: bold;
                font-size: 24px;
                line-height: 29px;
                text-align:right;
                margin-right: 10%;
                color: #135193;
                vertical-align:top;
            }
         
          }
    
          .chat-box{
            background-color: #FFFFFF;
              max-height:600px;
              border-radius: 0px 0px 0px 0px;
            .chat-box-header{
              justify-content: center;
              font-family: Lato;
              font-style: normal;
              h4{
               font-weight: bold;
               font-size: 24px;
               line-height: 29px;
       
              }
              p{
                font-weight: normal;
                 font-size: 16px;
                 line-height: 19px;
                 color: #0A0A0A;
              }
              h5{
                 font-weight: bold;
                 font-size: 16px;
                 line-height: 19px;
                 color: #0A0A0A;
              }
            }
                 .liner-grade{
                  position: absolute;
                   height: 59px;
                   background: linear-gradient(180deg, #FFFFFF 24.25%, rgba(255, 255, 255, 0) 100%);
                   border-radius: 10px 180px 10px 10px;
                 }
                 .nested-chat-box{
                 background-color: #FFFFFF;
                 min-height: 60vh !important;
                 width: 100%;
                 margin: 0px !important;
                 border-radius: 0px 0px 0px 0px;
                 }
       
          .scrollspy{
              position: relative;
              height: 400px;
              margin-top: -5%;
             overflow-y: scroll;
             overflow-x: hidden;
             flex-direction: column-reverse;
              border-radius: 20px 50px 20px 20px;
            
              .text{
                  justify-content: center;
                  font-size: 16px;
                  line-height: 19px;
                  color: #0A0A0A;
                  font-family: Loto;
               .date {                  
                     font-size: 0.7em !important;
                     text-align: center !important;
                     margin: auto;
                     
                 } 
                 .user-text p{
                 text-align: left;
                  font-family: "Maven Pro", sans-serif;
                 margin-right: 20%;;
                 background-color: #eee4e4;
                 border-radius: 0px 5px 5px 0px;
                 padding: 4px;    
                
                 }
                 .sender-text p{
                     text-align:right;
                     margin-left: 20%;
                      background-color: #149777;
                      color: #ffffff;
                      font-weight: 500px;
                      padding: 7px;  
                      border-radius: 5px 0px 0px 5px;  
                 }
              }
       
          }
               ::-webkit-scrollbar {
                   width: 16px;
                 height: 29px !important;
       
                 }
       
                 ::-webkit-scrollbar-button {
                 height: 29px !important;
                 }
       
                 ::-webkit-scrollbar-thumb {
                 background: #1f5e1b;
                 border-radius: 10px 0px 0px 10px;
       
                 }
       
                 ::-webkit-scrollbar-thumb:hover {
                 background: #b30000;
         }
          .text-input{
          border-radius: 25px, 0px, 0px, 25px;
         height: 78px;
         .btn-img{
              margin: 10%;
       
         }
         .dropup {
           position: relative;
           display: inline-block;
           .menu-img{
       
               margin-left:30px;
               margin-right:30px;
           }
         }
       
         .dropup-content {
           display: none;
           position: absolute;
       
           min-width: 160px;
           bottom: 50px;
           
         }
       
         .dropup-content h3 {
           color: black;
           padding: 12px 16px;
           text-decoration: none;
           display: block;
           background: #135193;
           border-radius: 10px 10px 50px 10px;
           width: 245px;
           font-size: 16px;
          line-height: 19px;
         color: #FFFFFF;
         }
       
         .dropup-content h3:hover {background: rgb(151, 54, 54)}
       
         .dropup:hover .dropup-content {
           display: block;
         }
       
         .dropup:hover .dropbtn {
           background-color: #2980B9;
         }
       
         .input-file-btn{
         background: #1f5e1b;
         box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);
         border-radius: 10px;
         height: 46px;
         width: 50px;
         margin-left: -60%;
       
         }
         .send-btn{
         background: #1f5e1b;
         box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);
         border-radius: 15px;
         height: 48px;
         width: 70px;
         margin-left: -190%;
         .btn-img{
              margin: auto;
         }
         }
         }
          }
    
      }
}
@media (min-width: 601px) and (max-width: 1200px){
  .hidden-md{
    display: none;
  }
    .my-custom-toggle {
        color: black;
        text-decoration: none;
      }
     .dot {
  height: 10px;
  width: 10px;
  background-color: rgb(236, 14, 14);
  border-radius: 50%;
  display: inline-block;
}
 .dot2 {
  height: 10px;
  width: 10px;
  background-color: rgb(14, 236, 151);
  border-radius: 50%;
  display: inline-block;
}
    .my-custom-toggle {
        color: black;
        text-decoration: none;
      }
      .chat-main{
          overflow: hidden;
           justify-content: center;
          font-family:  Helvetica, sans-serif;
          .chat{
            h3{
                font-weight: bold;
                font-size: 22px;
                line-height: 43px;
                text-align: center;
                text-align:left;
                vertical-align:top;
                margin-left: 10%;
            }
           
             
            h5{
                font-weight: bold;
                font-size: 24px;
                line-height: 29px;
                text-align:right;
                margin-right: 10%;
                color: #135193;
                vertical-align:top;
            }
         
          }
    
          .chat-box{
            background-color: #FFFFFF;
              max-height:600px;
              border-radius: 0px 0px 0px 0px;
            .chat-box-header{
              justify-content: center;
              font-family: Lato;
              font-style: normal;
              h4{
               font-weight: bold;
               font-size: 24px;
               line-height: 29px;
       
              }
              p{
                font-weight: normal;
                 font-size: 16px;
                 line-height: 19px;
                 color: #0A0A0A;
              }
              h5{
                 font-weight: bold;
                 font-size: 16px;
                 line-height: 19px;
                 color: #0A0A0A;
              }
            }
                 .liner-grade{
                  position: absolute;
                   height: 59px;
                   background: linear-gradient(180deg, #FFFFFF 24.25%, rgba(255, 255, 255, 0) 100%);
                   border-radius: 10px 180px 10px 10px;
                 }
                 .nested-chat-box{
                 background-color: #FFFFFF;
                 min-height: 60vh !important;
                 width: 100%;
                 margin: 0px !important;
                 border-radius: 0px 0px 0px 0px;
                 }
       
          .scrollspy{
              position: relative;
              height: 400px;
              margin-top: -5%;
             overflow-y: scroll;
             overflow-x: hidden;
             flex-direction: column-reverse;
              border-radius: 20px 50px 20px 20px;
            
              .text{
                  justify-content: center;
                  font-size: 16px;
                  line-height: 19px;
                  color: #0A0A0A;
                  font-family: Loto;
               .date {                  
                     font-size: 0.7em !important;
                     text-align: center !important;
                     margin: auto;
                     
                 } 
                 .user-text p{
                 text-align: left;
                  font-family: "Maven Pro", sans-serif;
                 margin-right: 20%;;
                 background-color: #eee4e4;
                 border-radius: 0px 5px 5px 0px;
                 padding: 4px;    
                
                 }
                 .sender-text p{
                     text-align:right;
                     margin-left: 20%;
                      background-color: #149777;
                      color: #ffffff;
                      font-weight: 500px;
                      padding: 7px;  
                      border-radius: 5px 0px 0px 5px;  
                 }
              }
       
          }
               ::-webkit-scrollbar {
                   width: 16px;
                 height: 29px !important;
       
                 }
       
                 ::-webkit-scrollbar-button {
                 height: 29px !important;
                 }
       
                 ::-webkit-scrollbar-thumb {
                 background: #1f5e1b;
                 border-radius: 10px 0px 0px 10px;
       
                 }
       
                 ::-webkit-scrollbar-thumb:hover {
                 background: #b30000;
         }
          .text-input{
          border-radius: 25px, 0px, 0px, 25px;
         height: 78px;
         .btn-img{
              margin: 10%;
       
         }
         .dropup {
           position: relative;
           display: inline-block;
           .menu-img{
       
               margin-left:30px;
               margin-right:30px;
           }
         }
       
         .dropup-content {
           display: none;
           position: absolute;
       
           min-width: 160px;
           bottom: 50px;
           
         }
       
         .dropup-content h3 {
           color: black;
           padding: 12px 16px;
           text-decoration: none;
           display: block;
           background: #135193;
           border-radius: 10px 10px 50px 10px;
           width: 245px;
           font-size: 16px;
          line-height: 19px;
         color: #FFFFFF;
         }
       
         .dropup-content h3:hover {background: rgb(151, 54, 54)}
       
         .dropup:hover .dropup-content {
           display: block;
         }
       
         .dropup:hover .dropbtn {
           background-color: #2980B9;
         }
       
         .input-file-btn{
         background: #1f5e1b;
         box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);
         border-radius: 10px;
         height: 46px;
         width: 50px;
         margin-left: -60%;
       
         }
         .send-btn{
         background: #1f5e1b;
         box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);
         border-radius: 15px;
         height: 48px;
         width: 70px;
         margin-left: -190%;
         .btn-img{
              margin: auto;
         }
         }
         }
          }
    
      }
}


@media (min-width:1201px){
   .main-con {
     overflow-y: hidden !important;
   }
  .hidden-lg{
    display: none;
  }
  .dot {
  height: 10px;
  width: 10px;
  background-color: rgb(236, 14, 14);
  border-radius: 50%;
  display: inline-block;
}
 .dot2 {
  height: 10px;
  width: 10px;
  background-color: rgb(14, 236, 151);
  border-radius: 50%;
  display: inline-block;
}
    .my-custom-toggle {
        color: black;
        text-decoration: none;
      }
      .chat-main{
          overflow: hidden;
           justify-content: center;
          font-family:  Helvetica, sans-serif;
          .chat{
            h3{
                font-weight: bold;
                font-size: 22px;
                line-height: 43px;
                text-align: center;
                text-align:left;
                vertical-align:top;
                margin-left: 10%;
            }
           
             
            h5{
                font-weight: bold;
                font-size: 24px;
                line-height: 29px;
                text-align:right;
                margin-right: 10%;
                color: #135193;
                vertical-align:top;
            }
         
          }
    
          .chat-box{
            background-color: #FFFFFF;
              max-height:600px;
              border-radius: 0px 0px 0px 0px;
            .chat-box-header{
              justify-content: center;
              font-family: Lato;
              font-style: normal;
              h4{
               font-weight: bold;
               font-size: 24px;
               line-height: 29px;
       
              }
              p{
                font-weight: normal;
                 font-size: 16px;
                 line-height: 19px;
                 color: #0A0A0A;
              }
              h5{
                 font-weight: bold;
                 font-size: 16px;
                 line-height: 19px;
                 color: #0A0A0A;
              }
            }
                 .liner-grade{
                  position: absolute;
                   height: 59px;
                   background: linear-gradient(180deg, #FFFFFF 24.25%, rgba(255, 255, 255, 0) 100%);
                   border-radius: 10px 180px 10px 10px;
                 }
                 .nested-chat-box{
                 background-color: #FFFFFF;
                 min-height: 60vh !important;
                 width: 100%;
                 margin: 0px !important;
                 border-radius: 0px 0px 0px 0px;
                 }
       
          .scrollspy{
              position: relative;
              height: 400px;
              margin-top: -5%;
             overflow-y: scroll;
             overflow-x: hidden;
             flex-direction: column-reverse;
              border-radius: 20px 50px 20px 20px;
            
              .text{
                  justify-content: center;
                  font-size: 16px;
                  line-height: 19px;
                  color: #0A0A0A;
                  font-family: Loto;
               .date {                  
                     font-size: 0.7em !important;
                     text-align: center !important;
                     margin: auto;
                     
                 } 
                 .user-text p{
                 text-align: left;
                  font-family: "Maven Pro", sans-serif;
                 margin-right: 20%;;
                 background-color: #eee4e4;
                 border-radius: 0px 5px 5px 0px;
                 padding: 4px;    
                
                 }
                 .sender-text p{
                     text-align:right;
                     margin-left: 20%;
                      background-color: #149777;
                      color: #ffffff;
                      font-weight: 500px;
                      padding: 7px;  
                      border-radius: 5px 0px 0px 5px;  
                 }
              }
       
          }
               ::-webkit-scrollbar {
                   width: 16px;
                 height: 29px !important;
       
                 }
       
                 ::-webkit-scrollbar-button {
                 height: 29px !important;
                 }
       
                 ::-webkit-scrollbar-thumb {
                 background: #1f5e1b;
                 border-radius: 10px 0px 0px 10px;
       
                 }
       
                 ::-webkit-scrollbar-thumb:hover {
                 background: #b30000;
         }
          .text-input{
          border-radius: 25px, 0px, 0px, 25px;
         height: 78px;
         .btn-img{
              margin: 10%;
       
         }
         .dropup {
           position: relative;
           display: inline-block;
           .menu-img{
       
               margin-left:30px;
               margin-right:30px;
           }
         }
       
         .dropup-content {
           display: none;
           position: absolute;
       
           min-width: 160px;
           bottom: 50px;
           
         }
       
         .dropup-content h3 {
           color: black;
           padding: 12px 16px;
           text-decoration: none;
           display: block;
           background: #135193;
           border-radius: 10px 10px 50px 10px;
           width: 245px;
           font-size: 16px;
          line-height: 19px;
         color: #FFFFFF;
         }
       
         .dropup-content h3:hover {background: rgb(151, 54, 54)}
       
         .dropup:hover .dropup-content {
           display: block;
         }
       
         .dropup:hover .dropbtn {
           background-color: #2980B9;
         }
       
         .input-file-btn{
         background: #1f5e1b;
         box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);
         border-radius: 10px;
         height: 46px;
         width: 50px;
         margin-left: -60%;
       
         }
         .send-btn{
         background: #1f5e1b;
         box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);
         border-radius: 15px;
         height: 48px;
         width: 70px;
         margin-left: -190%;
         .btn-img{
              margin: auto;
         }
         }
         }
          }
    
      }
}

@media (min-width: 768px) and (max-width: 1023px){
  .hidden-custome{
    display: none;
  }
}
@media (min-width: 601px) and (max-width: 1200px){
.conferm-request{
  font-family: Lato;
  font-style: normal;
  width:100%;
    height: 290px  ;
  box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px 10px 10px 10px;
  h5{
    font-weight: bold;
    font-size: 18px;
    line-height: 29px;
    color: #0A0A0A;
    .date{
      color: #135193;
    }
  }
  p{
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    color: #0A0A0A;
    text-align: center;
  }
  .btn-col{
     font-family: Lato;
     font-style: normal;
    .btn-left{
      font-weight: bold;
      font-size: 14px;
      width: 90%;
      color: #0A0A0A;
    }
    .btn-right{
      font-weight: bold;
      font-size: 14px;
      width: 90%;
      color: #FFFF;
      background: #135193;
      box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
    }
  }
}

}
</style>
