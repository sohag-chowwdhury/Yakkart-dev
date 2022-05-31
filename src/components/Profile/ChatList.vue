<template>
  <div style="margin-top: 5%">
    <b-card class="chat-box">
      <div class="scrollspy">
        <b-row class="mt-2">
          <b-col lg="12" xl="12">
            <span v-for="(item, index) in items" :key="index">
              <b-row
                v-if="item.firstName != undefined || item.firstName == ''"
                @click="chatUser(item.uid)"
                class="mt-1 mx-1"
                style="background: #e9ebf0; cursor: pointer"
              >
                <b-col
                  :style="
                    item.seenStaus == false ? ' background-color: #d2d9d4 ' : ''
                  "
                  lg="3"
                  xl="3"
                >
                  <b-avatar class="mt-2" :src="item.img"></b-avatar>
                </b-col>
                <b-col
                  :style="
                    item.seenStaus == false ? ' background-color: #d2d9d4 ' : ''
                  "
                  lg="9"
                  xl="9"
                >
                  <h5 class="mt-2">
                    {{ item.firstName }} {{ item.listName }}
                    <span
                      style="font-size: 0.7em; font-weight: bold; color: green"
                      v-if="item.adminStatus == true"
                      >Support</span
                    >
                  </h5>
                  <p>{{ moment(item.updateTime).fromNow() }}</p>
                </b-col>
              </b-row>
            </span>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ["items"],
  data() {
    return {
      avatarImg: require("@/assets/img/chat/profile.jpg"),
    };
  },

  computed: {
    authId() {
      return this.$store.getters.user.id;
    },
    userData() {
      return this.$store.getters.userData.creatorId;
    },
  },

  mounted() {
    this.$store.dispatch("userDataRead");
  },
  methods: {
    chatUser(e) {
      this.$store.dispatch("chatUser", {
        userUid: e,
      });
      this.$router.push("/chat/" + e).catch(() => {});
    },
  },
};
</script>

<style  lang="scss" scoped >
.hidden-lg {
  display: none;
}

.chat-main {
  margin-top: 8%;
  justify-content: center;
  font-family: Lato, Helvetica, sans-serif;
  .chat {
    h3 {
      font-weight: bold;
      font-size: 20px;
      line-height: 43px;
      text-align: center;
      text-align: left;
      vertical-align: top;
      margin-left: 10%;
    }

    h5 {
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      text-align: right;
      margin-right: 10%;
      color: #135193;
      vertical-align: top;
    }
  }

  .chat-box {
    background-color: #ffffff;
    max-height: 705px;
    border-radius: 0px 0px 0px 0px;
    h4 {
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
    }
    p {
      font-weight: normal;
      font-size: 13px;
      line-height: 19px;
      color: #0a0a0a;
    }
    h5 {
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #0a0a0a;
    }

    .liner-grade {
      position: absolute;
      height: 59px;
      background: linear-gradient(
        180deg,
        #ffffff 24.25%,
        rgba(255, 255, 255, 0) 100%
      );
      border-radius: 0px 0px 0px 0px;
    }
    .nested-chat-box {
      background-color: #ffffff;
      min-height: 815px;
      width: 100%;
      margin: 0px !important;
      border-radius: 0px 0px 0px 0px;
    }

    .scrollspy {
      position: relative;
      height: 530px;
      margin-top: -5%;
      overflow-y: scroll;
      overflow-x: hidden;
      flex-direction: column-reverse;
      border-radius: 0px 0px 0px 0px;
      .avatar-img {
        margin-left: 20%;
      }
      .text {
        justify-content: center;
        font-size: 16px;
        line-height: 19px;
        color: #0a0a0a;

        .user-text p {
          text-align: left;
          margin-right: 30%;
        }
        .sender-text p {
          text-align: left;
          margin-left: 30%;
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
      border-radius: 0px 0px 0px 0px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #b30000;
    }
    .text-input {
      border-radius: 25px, 0px, 0px, 25px;
      height: 78px;
      .btn-img {
        margin: 10%;
      }
      .dropup {
        position: relative;
        display: inline-block;
        .menu-img {
          margin-left: 30px;
          margin-right: 30px;
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
        color: #ffffff;
      }

      .dropup-content h3:hover {
        background: rgb(151, 54, 54);
      }

      .dropup:hover .dropup-content {
        display: block;
      }

      .dropup:hover .dropbtn {
        background-color: #2980b9;
      }

      .input-file-btn {
        background: #1f5e1b;
        box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 46px;
        width: 50px;
        margin-left: -60%;
      }
      .send-btn {
        background: #1f5e1b;
        box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        height: 48px;
        width: 70px;
        margin-left: -190%;
        .btn-img {
          margin: auto;
        }
      }
    }
  }
}
</style>