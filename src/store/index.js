import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';
import '@firebase/database';
import axios from 'axios';


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    error: null,
    loading: false,
    userData: {},
    postDetails: {},
    review: [],
    reviewInfo: {
      number: 0,
      total: 0,
      userStatus: false
    },
    jobDetails: {},
    successMsg: null,
    postUser: {},
    productRecent: [],
    filterData: [],
    jobFilter: [],
    favData: [],
    userPost: [],
    chatData: [],
    userChat: [],
    chatDataSize: [],

    subCat: [],
    userDeatails: null,
    userInfoChat: {},
    startConv: false,
    chatStart: false,
    countryInfo: {},
    reviewTemp: []
  },
  mutations: {


    setUser(state, payload) {
      state.user = payload
    },

    setError(state, payload) {
      state.error = payload
    },
    success(state, payload) {
      state.successMsg = payload
    },
    setData(state, payload) {
      state.customerData = payload
    },

    setLoading(state, payload) {
      state.loading = payload
    },
    clearError(state) {
      state.color = null
    },
  },
  actions: {
    signUserIn({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          firebase.auth().onAuthStateChanged(function (user) {

            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)


          })
        }
        ).catch(
          error => {
            commit('setError', error)
          }
        )
    },
    countrySet({ commit }, payload) {
      commit('setLoading', false)
      var data = {
        countryCode: payload.countryCode,
        countryName: payload.countryName,

      }
      this.state.countryInfo = data,
        firebase.firestore().collection('Products').get().then((querySnapshot) => {
          this.state.productRecent.length = 0
          querySnapshot.forEach((doc) => {
            if (doc.data().postStatus == true && this.state.countryInfo.countryCode == doc.data().country) {
              this.state.productRecent.push(doc.data())

            }
          })
        })
    },
    productDetails({ commit }, payload) {

      firebase.firestore().collection('Products').doc(payload.postUid).get().then((querySnapshot) => {
        this.state.postDetails = querySnapshot.data()

      }).then(() => {
        firebase.firestore().collection('User').doc(payload.creatorId).get().then((querySnapshot) => {

          querySnapshot.data()

        })
      }).catch(
        error => {
          commit('setError', error)
        }
      )

    },
    jobDetails({ commit }, payload) {

      firebase.firestore().collection('Jobs').doc(payload.postUid).get().then((querySnapshot) => {
        this.state.jobDetails = querySnapshot.data()

      }).then(() => {
        firebase.firestore().collection('User').doc(payload.creatorId).get().then((querySnapshot) => {

          this.state.postUser = querySnapshot.data()

        })
      }).catch(
        error => {
          commit('setError', error)
        }
      )

    },
    productRcentLocation({ commit }) {
      commit('setLoading', true)

      firebase.firestore().collection('Products').get().then((querySnapshot) => {
        this.state.productRecent.length = 0
        querySnapshot.forEach((doc) => {
          if (doc.data().postStatus == true && this.state.countryInfo.countryCode == doc.data().country) {
            this.state.productRecent.push(doc.data())

          }
        })
      })
        .then(() => {
          commit('setLoading', false)

        })
    },
    productRecent({ commit }) {
      commit('setLoading', true)

      firebase.firestore().collection('Products').get().then((querySnapshot) => {
        this.state.productRecent.length = 0
        querySnapshot.forEach((doc) => {
          if (doc.data().postStatus == true && this.state.countryInfo.countryCode == doc.data().country) {
            this.state.productRecent.push(doc.data())

          }
        })
      })
        .then(() => {
          commit('setLoading', false)

        })

      /*  
        if (navigator.geolocation) { //check if geolocation is available
    navigator.geolocation.getCurrentPosition((position)=>{
      var k = 46.818188	
      var f = 8.227512
      console.log(k, f)
      axios.get( "http://api.geonames.org/countryCodeJSON?lat=" + position.coords.latitude + "&lng=" +  position.coords.longitude +"&username=rshafi_762", 
      {
        'Access-Control-Allow-Credentials':true
      },
      
      ).then((res)=>{
        this.state.countryInfo = res.data
          firebase.firestore().collection('Products').get().then((querySnapshot) => {
            this.state.productRecent.length = 0
            querySnapshot.forEach((doc) => {
              if (doc.data().postStatus == true &&   this.state.countryInfo.countryCode == doc.data().country) {
                this.state.productRecent.push(doc.data())
    
              }
            })
          })
        }).then(()=>{
          commit('setLoading', false)

        })

      })
  }
      */

    },
    jobFilterSelect({ commit }, payload) {
      this.state.jobFilter.splice(0, this.state.jobFilter.length);


      firebase.firestore().collection('Jobs').where("subSelect", "==", payload.select).where("country", "==", this.state.countryInfo.countryCode).get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {
          if (doc.data().postStatus == true) {
            this.state.jobFilter.push(doc.data())

          }
        })
        console.log(this.state.jobFilter)

      }).then(() => {
        commit('setLoading', false)

      })

      /*  
        if (navigator.geolocation) { //check if geolocation is available
    navigator.geolocation.getCurrentPosition((position)=>{
      var k = 46.818188	
      var f = 8.227512
      console.log(k, f)
      axios.get( "http://api.geonames.org/countryCodeJSON?lat=" + position.coords.latitude + "&lng=" +  position.coords.longitude +"&username=rshafi_762", 
      {
        'Access-Control-Allow-Credentials':true
      },
      
      ).then((res)=>{
        this.state.countryInfo = res.data
          firebase.firestore().collection('Products').get().then((querySnapshot) => {
            this.state.productRecent.length = 0
            querySnapshot.forEach((doc) => {
              if (doc.data().postStatus == true &&   this.state.countryInfo.countryCode == doc.data().country) {
                this.state.productRecent.push(doc.data())
    
              }
            })
          })
        }).then(()=>{
          commit('setLoading', false)

        })

      })
  }
      */

    },
    allJob({ commit }) {
      console.log("ok")

      this.state.jobFilter.splice(0, this.state.jobFilter.length);
      firebase.firestore().collection('Jobs').where("country", "==", this.state.countryInfo.countryCode).get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {
          if (doc.data().postStatus == true) {
            this.state.jobFilter.push(doc.data())

          }
        })
        console.log(this.state.jobFilter)

      }).then(() => {
        commit('setLoading', false)

      })

      /*  
        if (navigator.geolocation) { //check if geolocation is available
    navigator.geolocation.getCurrentPosition((position)=>{
      var k = 46.818188	
      var f = 8.227512
      console.log(k, f)
      axios.get( "http://api.geonames.org/countryCodeJSON?lat=" + position.coords.latitude + "&lng=" +  position.coords.longitude +"&username=rshafi_762", 
      {
        'Access-Control-Allow-Credentials':true
      },
      
      ).then((res)=>{
        this.state.countryInfo = res.data
          firebase.firestore().collection('Products').get().then((querySnapshot) => {
            this.state.productRecent.length = 0
            querySnapshot.forEach((doc) => {
              if (doc.data().postStatus == true &&   this.state.countryInfo.countryCode == doc.data().country) {
                this.state.productRecent.push(doc.data())
    
              }
            })
          })
        }).then(()=>{
          commit('setLoading', false)

        })

      })
  }
      */

    },
    JobRecent({ commit }, payload) {

      this.state.jobFilter.splice(0, this.state.jobFilter.length);
      firebase.firestore().collection('Jobs').where("subSelect", "==", payload.select).where("country", "==", this.state.countryInfo.countryCode).get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {
          if (doc.data().postStatus == true) {
            this.state.jobFilter.push(doc.data())

          }
        })
        console.log(this.state.jobFilter)

      }).then(() => {
        commit('setLoading', false)

      })

      /*  
        if (navigator.geolocation) { //check if geolocation is available
    navigator.geolocation.getCurrentPosition((position)=>{
      var k = 46.818188	
      var f = 8.227512
      console.log(k, f)
      axios.get( "http://api.geonames.org/countryCodeJSON?lat=" + position.coords.latitude + "&lng=" +  position.coords.longitude +"&username=rshafi_762", 
      {
        'Access-Control-Allow-Credentials':true
      },
      
      ).then((res)=>{
        this.state.countryInfo = res.data
          firebase.firestore().collection('Products').get().then((querySnapshot) => {
            this.state.productRecent.length = 0
            querySnapshot.forEach((doc) => {
              if (doc.data().postStatus == true &&   this.state.countryInfo.countryCode == doc.data().country) {
                this.state.productRecent.push(doc.data())
    
              }
            })
          })
        }).then(()=>{
          commit('setLoading', false)

        })

      })
  }
      */

    },
    userPostAction({ getters }) {
      firebase.firestore().collection('Products').where("creatorId", "==", getters.user.id).get().then((querySnapshot) => {
        this.state.userPost.length = 0
        querySnapshot.forEach((doc) => {
          this.state.userPost.push(doc.data())
        })
      })
    },
    jobSarch({ commit }, payload) {
      this.state.jobFilter.splice(0, this.state.jobFilter.length);
      firebase.firestore().collection('Jobs').withConverter('country' == this.state.countryInfo.countryCode).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().postStatus == true) {
            var str = doc.data().title.toUpperCase();
            if (str.indexOf(payload.text.toUpperCase()) !== -1) {
              this.state.jobFilter.push(doc.data())
              console.log(this.state.jobFilter)
            }
          }
        })
      }).catch((error) => {
        commit('setLoading', false)
        commit('setError', error)
      });
    },
    filterSarch({ commit }, payload) {
      this.state.filterData.splice(0, this.state.filterData.length);
      firebase.firestore().collection('Products').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().postStatus == true && doc.data().country == this.state.countryInfo.countryCode) {
            var str = doc.data().title.toUpperCase();
            if (str.indexOf(payload.text.toUpperCase()) !== -1) {
              this.state.filterData.push(doc.data())
              console.log(this.state.filterData)
            }
          }
        })
      }).catch((error) => {
        commit('setLoading', false)
        commit('setError', error)
      });
    },
    zipFunc({ commit }, payload) {
      commit('setLoading', true)
      var temp = this.state.filterData.slice();
      this.state.filterData.splice(0, this.state.filterData.length);
      console.log("zip")
      for (let i = 0; i <= temp.length; i++) {
        if (payload.zipCode == temp[i].postalCode) {
          this.state.filterData.push(temp[i])
        }
      }
      commit('setLoading', false)
    },
    filterTownsJob({ commit }, payload) {
      commit('setLoading', true)
      var temp = this.state.jobFilter.slice();
      this.state.jobFilter.splice(0, this.state.jobFilter.length);

      for (let i = 0; i <= temp.length; i++) {
        if (payload.town == temp[i].city) {
          this.state.jobFilter.push(temp[i])
        }
      }
      commit('setLoading', false)
    },
    filterTowns({ commit }, payload) {
      commit('setLoading', true)
      var temp = this.state.filterData.slice();
      this.state.filterData.splice(0, this.state.filterData.length);

      for (let i = 0; i <= temp.length; i++) {
        if (payload.town == temp[i].city) {
          this.state.filterData.push(temp[i])
        }
      }
      commit('setLoading', false)
    },
    filterCityJob({ commit }, payload) {
      commit('setLoading', true)
      var temp = this.state.jobFilter.slice();
      this.state.jobFilter.splice(0, this.state.jobFilter.length);

      for (let i = 0; i <= temp.length; i++) {
        if (payload.city == temp[i].state) {
          this.state.jobFilter.push(temp[i])
        }
      }
      commit('setLoading', false)
    },
    filterCity({ commit }, payload) {
      commit('setLoading', true)
      var temp = this.state.filterData.slice();
      this.state.filterData.splice(0, this.state.filterData.length);

      for (let i = 0; i <= temp.length; i++) {
        if (payload.city == temp[i].state) {
          this.state.filterData.push(temp[i])
        }
      }
      commit('setLoading', false)
    },
    filterPrice({ commit }, payload) {
      commit('setLoading', true)
      console.log(this.state.filterData)
      var temp = this.state.filterData.slice();
      console.log(temp)
      this.state.filterData.splice(0, this.state.filterData.length);

      for (let i = 0; i <= temp.length; i++) {
        if (temp[i].price <= payload.maxPrice && temp[i].price >= payload.minPrice) {
          this.state.filterData.push(temp[i])
          console.log(temp[i].price)
        }
      }
      commit('setLoading', false)
    },
    userDataRead({ getters }) {
      firebase.firestore().collection('User').doc(getters.user.id).get().then((querySnapshot) => {
        this.state.userData = querySnapshot.data()
        var data = {
          countryCode: querySnapshot.data().country,
          countryName: querySnapshot.data().countryName
        }
        this.state.countryInfo = data
      })
    },
    subCatFilter({ commit }, payload) {
      firebase.firestore().collection('Category').doc(payload.category).get().then((querySnapshot) => {

        this.state.subCat.length = 0

        this.state.subCat = querySnapshot.data().subCategory
        console.log(this.state.subCat)



      }).catch((error) => {
        commit('setLoading', false)
        commit('setError', error)
      });
    },

    userPostDelete({ commit }, payload) {
      firebase.firestore().collection('Products').doc(payload.postUid).delete().then(() => {
        commit('setLoading', false)
        commit('success', "Post Delete Successfully")
      })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
        });
    },
    userPostUpdate({ commit }, payload) {
      firebase.firestore().collection('Products').doc(payload.postUid).update({
        sold: payload.sold,
        onlyMe: payload.onlyMe
      }).then(() => {
        commit('setLoading', false)
      })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
        });
    },
    oldDateJob() {
      console.log("old")
      this.state.jobFilter.sort(function (a, b) { return (new Date(a.time)) - (new Date(b.time)) });
    },
    recentDateJob() {
      console.log("recent")
      this.state.jobFilter.sort(function (a, b) { return (new Date(b.time)) - (new Date(a.time)) });
    },
    oldDate() {
      console.log("old")
      this.state.filterData.sort(function (a, b) { return (new Date(a.time)) - (new Date(b.time)) });
    },
    recentDate() {
      console.log("recent")
      this.state.filterData.sort(function (a, b) { return (new Date(b.time)) - (new Date(a.time)) });
    },
    expensiveFilter() {
      this.state.filterData.sort(function (a, b) { return b.price - a.price });
    },
    lessExFilter() {
      this.state.filterData.sort(function (a, b) { return a.price - b.price });
    },
    /* mainFilter() {
       this.state.filterData.length = 0
       function orderByFunc(e, expanse, lessExpanse, recent, old) {
         if (expanse == false && lessExpanse == false && recent == false && old == false) {
           this.state.filterData.push(e)
         }
         else if (expanse) {
           var k = e.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
           this.state.filterData.push(k)
         }
         else if (lessExpanse) {
           var i = e.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
           this.state.filterData.push(i)
         }
         else if (recent) {
           var j = e.sort((a, b) => (new Date(a.time) < new Date(b.time)) ? 1 : ((new Date(b.time) < new Date(a.time)) ? -1 : 0))
           this.state.filterData.push(j)
         }
         else if (old) {
           var m = e.sort((a, b) => (new Date(a.time) > new Date(b.time)) ? 1 : ((new Date(b.time) > new Date(a.time)) ? -1 : 0))
           this.state.filterData.push(m)
         }
       }
     
     }, */
    async chatUser({ commit, getters }, payload) {
      this.state.chatStart = true
      const db = firebase.database().ref();

      await firebase.firestore().collection('User').doc(payload.userUid).get().then((querySnapshot) => {
        this.state.userInfoChat = querySnapshot.data()
      })
      var dbc = firebase.database();
      dbc.ref('chat/' + payload.userUid + '/' + getters.user.id).update({
        seenStaus: true,
      }).then(() => {
        db.child('chat').child(getters.user.id).child(payload.userUid).get().then((snapshot) => {

          const data = {
            img: snapshot.val().img,
            updateTime: snapshot.val().updateTime,
            listName: snapshot.val().listName,
            firstName: snapshot.val().firstName,
            seenStaus: snapshot.val().seenStaus
          }
          this.state.userDeatails = data


        })
      })  //this.state.userChat.length = 0
        //onSnapshot.forEach((doc) => {
        // this.state.userChat.push(doc.val())
        // })
        .then(() => {
          this.state.userChat.length = 0
          var starCountRef = dbc.ref('chat' + '/' + getters.user.id + '/' + payload.userUid + '/' + "msg")
          starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            for (const item in data) {
              this.state.userChat.push(data[item])
            }
            console.log(this.state.userChat)
            console.log(data)

          })
        }).catch((error) => {

          commit('setError', error)
        });
    },


    chatBoot({ commit, getters }, payload) {
      this.state.chatStart = false
      var db = firebase.database();
      this.state.userChat.length = 0
      db.ref('chat/' + getters.user.id + '/' + payload.userId).update({
        img: payload.img,
        uid: payload.userId,
        firstName: payload.firstName,
        listName: payload.listName,
        updateTime: new Date().toLocaleString(),
      }).then(() => {
        db.ref('chat/' + payload.userId + '/' + getters.user.id).update({
          img: this.state.userData.img,
          uid: getters.user.id,
          firstName: this.state.userData.firstName,
          listName: this.state.userData.listName,
          updateTime: new Date().toLocaleString(),



        })
      }).then(() => {
        db.ref('chat' + '/' + getters.user.id + '/' + payload.userUid + '/' + "msg").get().then((snapshot) => {
          this.state.userChat.length = 0
          snapshot.forEach((doc) => {
            this.state.userChat.push(doc.val())
          })
          commit('setLoading', false)
          this.state.chatStart = true

        })
      }).then(() => {
        firebase.firestore().collection('User').doc(payload.userId).get().then((querySnapshot) => {
          this.state.userInfoChat = querySnapshot.data()
        })

      })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
        });
      if (payload.startConv == true) {
        this.state.startConv = payload.startConv
      }
    },
    chatDataFunc({ commit, getters }) {
      const db = firebase.database()
      this.state.userChat.length = 0
      var starCountRef = db.ref('chat' + '/' + getters.user.id)
      starCountRef.on('value', (snapshot) => {
        const data = snapshot.val();
        this.state.chatDataSize.length = 0
        this.state.chatData.length = 0
        for (const item in data) {
          this.state.chatData.push(
            {
              img: data[item].img,
              uid: data[item].uid,
              updateTime: data[item].updateTime,
              listName: data[item].listName,
              firstName: data[item].firstName,
              seenStaus: data[item].seenStaus,
              adminStatus: data[item].adminStatus
            })
          if (data[item].seenStaus == false) {
            this.state.chatDataSize.push(
              {
                uid: data[item].uid,
              }
            )
          }
        }
        console.log(data)

      }).catch((error) => {
        commit('setLoading', false)
        commit('setError', error)
      });
    },
    locationFunc() {
      if (navigator.geolocation) { //check if geolocation is available
        navigator.geolocation.getCurrentPosition((position) => {

          axios.get("http://api.geonames.org/countryCodeJSON?lat=" + position.coords.latitude + "&lng=" + position.coords.longitude + "&username=rshafi_762",
            {
              'Access-Control-Allow-Credentials': true
            },

          ).then((res) => {
            this.state.countryInfo = res.data


          })
        });
      }
    },
    async chatFunc({ commit, getters }, payload) {

      let key = Math.random().toString(36).substring(7);

      var db = firebase.database();
      await db.ref('chat/' + getters.user.id + '/' + payload.userId).update({

        sendStaus: true,
        updateTime: payload.time,

      })
        .then(() => {
          db.ref('chat/' + getters.user.id + '/' + payload.userId + '/' + "msg/" + key).update({
            time: payload.time,
            text: payload.text,
            sender: payload.sender
          })
        }).then(() => {
          db.ref('chat/' + payload.userId + '/' + getters.user.id).update({
            sendStaus: true,
            seenStaus: false,
            updateTime: payload.time,

          })
        }).then(() => {
          db.ref('chat/' + payload.userId + '/' + getters.user.id + '/' + "msg/" + key).update({
            time: payload.time,
            text: payload.text,
            sender: payload.sender
          })
        })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
        });
    },
    categoryFilter({ commit }, payload) {
      this.state.filterData.length = 0
      commit('setLoading', true)
      firebase.firestore().collection('Products').where("select", "==", payload.type).get().then((querySnapshot) => {
        this.state.filterData.length = 0
        querySnapshot.forEach((doc) => {
          if (doc.data().postStatus == true && this.state.countryInfo.countryCode == doc.data().country)
            this.state.filterData.push(doc.data())
        })

      }).then(() => {
        commit('setLoading', false)
      })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
        });
    },
    subCatFunc({ commit }, payload) {
      console.log("subCat", payload)
      this.state.filterData.length = 0
      commit('setLoading', true)
      firebase.firestore().collection('Products').where("select", "==", payload.category).where("subSelect", "==", payload.SubCategory).get().then((querySnapshot) => {
        this.state.filterData.length = 0
        querySnapshot.forEach((doc) => {
          if (doc.data().postStatus == true && this.state.countryInfo.countryCode == doc.data().country)
            this.state.filterData.push(doc.data())
        })

      }).then(() => {
        commit('setLoading', false)
      })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
        });
    },
    subCategoryFilter({ commit }, payload) {
      this.state.filterData.length = 0
      commit('setLoading', true)
      firebase.firestore().collection('Products').where("select", "==", payload.type).where("subSelect", "==", payload.subSelect).get().then((querySnapshot) => {
        this.state.filterData.length = 0
        querySnapshot.forEach((doc) => {
          if (doc.data().postStatus == true && this.state.countryInfo.countryCode == doc.data().country)
            this.state.filterData.push(doc.data())
        })

      }).then(() => {
        commit('setLoading', false)
      })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
        });
    },
    userFav({ commit, getters }) {
      this.state.favData.length = 0
      firebase.firestore().collection('UserActivity').doc(getters.user.id).collection("Favourate").get().then((querySnapshot) => {
        this.state.favData.length = 0
        querySnapshot.forEach((doc) => {
          this.state.favData.push(doc.data())
        })

      })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
        });
    },
    signInWithFacebook({ commit }) {
      commit('setLoading', true)
      commit('clearError')
      const provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithPopup(provider).then((xdata) => {
        console.log(xdata)
      }).catch(error => console.log(error))
    },
    signUpWithGoogle({ commit }) {

      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(function (result) {
        var user = result.user;
        if (user) {
          let newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
          commit('setLoading', false)
        }
        else {
          console.log("not psbl")
        }
      })
    },
    favorouteAction({ commit, getters }, payload) {
      commit('setLoading', true)
      let data = payload.postUid
      firebase.firestore().collection("UserActivity").doc(getters.user.id).collection("Favourate").doc(payload.postUid.postUid).set({
        address: data.address,
        city: data.city,
        state: data.state,
        contact: data.contact,
        description: data.description,
        creatorId: data.creatorId,
        email: data.email,
        imgs: data.imgs,
        locationMap: data.locationMap,
        postUid: data.postUid,
        postStatus: data.postStatus,
        postalCode: data.postalCode,
        price: data.price,
        select: data.select,
        time: data.time,
        title: data.title,
        type: data.type


      })
        .then(() => {
          commit('success', "User Data successfully update!")
          commit('setLoading', false)
        })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
        });
    },
    userProfileEdit({ commit, getters }, payload) {
      commit('setLoading', true)
      firebase.firestore().collection("User").doc(getters.user.id).update({
        email: payload.email,
        firstName: payload.firstName,
        listName: payload.listName,
        phoneNumber: payload.phoneNumber,
        img: payload.img,
        address: payload.address,
        description: payload.description,
        date: new Date().toLocaleString(),
        creatorId: getters.user.id
      })
        .then(() => {
          commit('success', payload.msg)
          commit('setLoading', false)
        })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
        });
    },
    userDataUpdate({ commit, getters }, payload) {
      commit('setLoading', true)
      firebase.firestore().collection("User").doc(getters.user.id).set({
        email: payload.email,
        firstName: payload.firstName,
        listName: payload.listName,
        phoneNumber: payload.phoneNumber,
        img: payload.img,
        address: payload.address,
        country: payload.country,
        countryName: payload.countryName,
        description: payload.description,
        date: new Date().toLocaleString(),
        creatorId: getters.user.id,
        activeStatus: true
      })
        .then(() => {
          commit('success', "User Data successfully update!")
          commit('setLoading', false)
        })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
        });
    },
    funceStar({ commit }, payload) {
      commit('setLoading', false)

      if (this.state.reviewTemp.length == 0) {
        this.state.reviewTemp = this.state.review.slice();
        this.state.review.splice(0, this.state.review.length);

        for (let i = 0; i <= this.state.reviewTemp.length; i++) {
          if (payload.value == this.state.reviewTemp[i].value) {
            this.state.review.push(this.state.reviewTemp[i])
          }
        }
      }
      else {

        this.state.review.splice(0, this.state.review.length);

        for (let i = 0; i <= this.state.reviewTemp.length; i++) {
          if (payload.value == this.state.reviewTemp[i].value) {
            this.state.review.push(this.state.reviewTemp[i])
          }
        }
      }

      commit('setLoading', false)

    },
    reviewFunc({ commit }, payload) {
      commit('setLoading', false)
      let key = Math.random().toString(36).substring(7);
      console.log(payload)
      firebase.firestore().collection("Review").doc(key).set({
        text: payload.text,
        img: payload.img,
        postId: payload.postId,
        creatorId: payload.creatorId,
        firstName: payload.firstName,
        lastName: payload.lastName,
        time: payload.time,
        value: payload.value

      })

    },
    reviewGet({ commit }, payload) {
      this.state.reviewInfo = {
        number: 0,
        total: 0,
        userStatus: false

      }
      commit('setLoading', false)
      firebase.firestore().collection('Review').where("postId", "==", payload.postId).get().then((querySnapshot) => {
        this.state.review.length = 0
        this.state.review.splice(0, this.state.review.length);
        querySnapshot.forEach((doc) => {
          console.log("data")
          this.state.reviewInfo.number = this.state.reviewInfo.number + 1
          this.state.reviewInfo.total = this.state.reviewInfo.total + doc.data().value
          this.state.review.push(doc.data())
          if (this.state.userData.creatorId == doc.data().creatorId) {
            this.state.reviewInfo.userStatus = true
          }

        })


      })


    },
    productUpload({ commit }, payload) {
      let key = Math.random().toString(36).substring(7);
      commit('setLoading', true)
      if (payload.city === undefined) {

        if (payload.select != "Jobs") {
          firebase.firestore().collection("Products").doc(key).set({
            select: payload.select,
            subSelect: payload.subSelect,
            usedValue: payload.usedValue,
            newValue: payload.usedValue,
            negotiableValue: payload.negotiableValue,
            type: payload.type,
            creatorId: this.state.userData.creatorId,
            imgs: payload.imgs,
            city: "none",
            title: payload.title,
            price: parseInt(payload.price),
            postalCode: payload.postalCode,
            description: payload.description,
            contact: payload.contact,
            email: payload.email,
            address: payload.address,
            locationMap: payload.center,
            time: payload.time,
            postUid: key,
            postStatus: false,
            onlyMe: false,
            sold: false,
            country: payload.country,
            state: payload.state,


          })
            .then(() => {
              commit('success', "User Data successfully update!")
              commit('setLoading', false)
            })
            .catch((error) => {
              commit('setLoading', false)
              commit('setError', error)
            });
        }

        else {
          firebase.firestore().collection("Jobs").doc(key).set({

            select: payload.select,
            subSelect: payload.subSelect,
            years: payload.years,
            minSallary: payload.minSallary,
            maxSallary: payload.minSallary,
            companyName: payload.companyName,
            viaNumber: payload.viaNumber,
            viaEmail: payload.viaEmail,
            dateLine: payload.dateLine,
            jobRole: payload.jobRole,
            workingHour: payload.workingHour,
            jobType: payload.jobType,
            creatorId: this.state.userData.creatorId,
            imgs: payload.imgs,
            city: "none",
            title: payload.title,
            description: payload.description,
            contact: payload.contact,
            email: payload.email,
            address: payload.address,
            locationMap: payload.center,
            time: payload.time,
            postUid: key,
            postStatus: false,
            onlyMe: false,
            url: payload.urls,
            education: payload.educational,
            sold: false,
            country: payload.country,
            state: payload.state,


          })
            .then(() => {
              commit('success', "User Data successfully update!")
              commit('setLoading', false)
            })
            .catch((error) => {
              commit('setLoading', false)
              commit('setError', error)
            });
        }


      }
      if (payload.state == undefined) {
        if (payload.select != "Jobs") {
          firebase.firestore().collection("Products").doc(key).set({

            select: payload.select,
            subSelect: payload.subSelect,
            usedValue: payload.usedValue,
            newValue: payload.usedValue,
            negotiableValue: payload.negotiableValue,
            type: payload.type,
            creatorId: this.state.userData.creatorId,
            imgs: payload.imgs,
            city: "none",
            title: payload.title,
            price: parseInt(payload.price),
            postalCode: payload.postalCode,
            description: payload.description,
            contact: payload.contact,
            email: payload.email,
            address: payload.address,
            locationMap: payload.center,
            time: payload.time,
            postUid: key,
            postStatus: false,
            onlyMe: false,
            sold: false,
            country: payload.country,
            state: "none",


          })
            .then(() => {
              commit('success', "User Data successfully update!")
              commit('setLoading', false)
            })
            .catch((error) => {
              commit('setLoading', false)
              commit('setError', error)
            });
        }
        else {
          firebase.firestore().collection("Jobs").doc(key).set({

            select: payload.select,
            subSelect: payload.subSelect,
            years: payload.years,
            minSallary: payload.minSallary,
            maxSallary: payload.minSallary,
            companyName: payload.companyName,
            viaNumber: payload.viaNumber,
            viaEmail: payload.viaEmail,
            dateLine: payload.dateLine,
            jobRole: payload.jobRole,
            workingHour: payload.workingHour,
            jobType: payload.jobType,
            creatorId: this.state.userData.creatorId,
            imgs: payload.imgs,
            city: "none",
            title: payload.title,
            description: payload.description,
            contact: payload.contact,
            email: payload.email,
            address: payload.address,
            locationMap: payload.center,
            time: payload.time,
            postUid: key,
            postStatus: false,
            url: payload.urls,
            education: payload.educational,
            onlyMe: false,
            sold: false,
            country: payload.country,
            state: "none",


          })
            .then(() => {
              commit('success', "User Data successfully update!")
              commit('setLoading', false)
            })
            .catch((error) => {
              commit('setLoading', false)
              commit('setError', error)
            });
        }



      }
      else {
        if (payload.select != "Jobs") {
          firebase.firestore().collection("Products").doc(key).set({
            select: payload.select,
            subSelect: payload.subSelect,
            usedValue: payload.usedValue,
            newValue: payload.usedValue,
            type: payload.type,
            creatorId: this.state.userData.creatorId,
            imgs: payload.imgs,
            city: payload.city,
            title: payload.title,
            price: parseInt(payload.price),
            postalCode: payload.postalCode,
            description: payload.description,
            contact: payload.contact,
            email: payload.email,
            address: payload.address,
            locationMap: payload.center,
            time: payload.time,
            postUid: key,
            postStatus: false,
            onlyMe: false,
            sold: false,
            country: payload.country,
            state: payload.state,


          })
            .then(() => {
              commit('success', "User Data successfully update!")
              commit('setLoading', false)
            })
            .catch((error) => {
              commit('setLoading', false)
              commit('setError', error)
            });
        }
        else {
          firebase.firestore().collection("Jobs").doc(key).set({

            select: payload.select,
            subSelect: payload.subSelect,
            years: payload.years,
            minSallary: payload.minSallary,
            maxSallary: payload.minSallary,
            companyName: payload.companyName,
            viaNumber: payload.viaNumber,
            viaEmail: payload.viaEmail,
            dateLine: payload.dateLine,
            jobRole: payload.jobRole,
            workingHour: payload.workingHour,
            jobType: payload.jobType,
            creatorId: this.state.userData.creatorId,
            imgs: payload.imgs,
            city: payload.city,
            title: payload.title,
            description: payload.description,
            contact: payload.contact,
            email: payload.email,
            address: payload.address,
            locationMap: payload.center,
            time: payload.time,
            postUid: key,
            postStatus: false,
            onlyMe: false,
            url: payload.urls,
            education: payload.educational,
            sold: false,
            country: payload.country,
            state: payload.state,


          })
            .then(() => {
              commit('success', "User Data successfully update!")
              commit('setLoading', false)
            })
            .catch((error) => {
              commit('setLoading', false)
              commit('setError', error)
            });
        }

      }



    },

    passwordReset({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().sendPasswordResetEmail(payload.email)
        .then(() => {
          commit('success', "Password reset code send Successfully")

        })
        .catch((error) => {
          commit('setLoading', false)
          commit('setError', error)
        });
    },
    signUserUp({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)

          }
        )
    },
    REGISTER({ commit }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          firebase.auth().onAuthStateChanged(function (user) {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)


          })
        }
        ).catch(
          error => {
            alert(error)
          }
        )
    },

    autoSignIn({ commit }, payload) {
      commit('setUser', { id: payload.uid, registeredMeetups: [] })
    },
    logOut({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearError({ commit }) {
      commit('clearError')
    }
  },
  getters: {
    userPost(state) {
      return state.userPost
    },
    favData(state) {
      return state.favData
    },
    subCat(state) {
      return state.subCat
    },
    filterData(state) {
      return state.filterData
    },
    productRecent(state) {
      return state.productRecent
    },
    user(state) {
      return state.user
    },
    userData(state) {
      return state.userData
    },
    userChat(state) {
      var j = state.userChat.sort((a, b) => (new Date(a.time) > new Date(b.time)) ? 1 : ((new Date(b.time) > new Date(a.time)) ? -1 : 0))
      return j
    },
    chatData(state) {
      return state.chatData.sort((a, b) => (new Date(a.updateTime) < new Date(b.updateTime)) ? 1 : ((new Date(b.updateTime) < new Date(a.updateTime)) ? -1 : 0))


    },

    postUser(state) {
      return state.postUser
    },
    postDetails(state) {
      return state.postDetails
    },
    reviewInfo(state) {
      return state.reviewInfo
    },
    review(state) {
      return state.review
    },
    jobDetails(state) {
      return state.jobDetails
    },
    success(state) {
      return state.successMsg
    },
    error(state) {
      return state.error
    },
    color(state) {
      return state.color
    },
    loading(state) {
      return state.loading
    },
    userDeatails(state) {
      return state.userDeatails
    },
    chatDataSize(state) {
      return state.chatDataSize
    },
    userInfoChat(state) {
      return state.userInfoChat
    },
    startConv(state) {
      return state.startConv
    },
    chatStart(state) {
      return state.chatStart
    },
    jobFilter(state) {
      return state.jobFilter
    },
    countryInfo(state) {
      return state.countryInfo
    }
  }
})