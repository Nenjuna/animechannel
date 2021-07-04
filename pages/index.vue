<template>
  <div>
    <!-- <Header /> -->
    <Navbar/>
    <div class="input">
      <img src="../assets/search.svg" alt="search">   <span class="break">| </span>
      <input type="text" class="search" placeholder="Search your favourate anime here">
    </div>
    <div class="container">
        <div class="main">
          <h1>Featured</h1>
          <div class="grid">
            <List v-for="anime in animes" :key="anime._id" :title="anime.name" :href="anime._id" :img="anime.cover"/>
          </div>
          <h1>Ongoing Anime</h1>
          <div class="ongoinglist">
            <OngoingList v-for="ongoing in ongoingAnime" :key="ongoing.index" :herf="ongoing.img" :title="ongoing.title" :img="ongoing.img" :status="ongoing.status"/>
          </div>
        </div>
        <div class="right-nav">
          <Ongoing/>
        </div>
         
    </div>
    
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Ongoing from '../components/Ongoing.vue'
import OngoingList from '../components/OngoingList.vue'
export default {

  components: { Navbar, Ongoing },

  data() {
        return {
            animes : [],
            ongoingAnime : []
        }

    },
     async asyncData({$axios}) {
        let animes = []
        const animation = await $axios.$get("https://animefreak-api.herokuapp.com/ongoing")
        // console.log(animation)
        for(let i=0;i<5;i++){
            let anime = animation[i];
            anime.cover = anime.cover.replace('http','https')
            animes.push(anime)
            }
            return { animes }
  },

    mounted() {
      var self = this;
      function loadDataJSON(){
        let arr = []
        let jsondata;
        // var self = this;
        fetch('/datas.json').then(data=>{
          return data.json()
        }).then(res=>{
          let animelist = res;
          jsondata = animelist;
          for(let anime in animelist){
              arr.push(anime)
          }
          for(let i =0; i< 12; i++){
            let title = arr[i]
            let data = JSON.parse(jsondata[title])
            // console.log(data)
            let anime = { };
            anime['title'] = title;
            anime['img'] = data[title].cover
            anime['status'] = data[title]['meta'].status
            // console.log(anime)
            // self.ongoingAnime[title] = data[title];
            self.ongoingAnime.push(anime)
          }
          // console.log(self.ongoingAnime)
        }).catch(e=>{
          console.log(e)
        })
      }
      loadDataJSON()
    },
  head: {
    title: 'Welcome to the Anime Channel to find your Fav animes',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Welcome to the Anime Channel to find your Fav animes'
      }
    ],
  }

}
</script>

<style>

h1{
  color: #f1f1f1;
 margin: 15px;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: bolder;
}

.main{
  width: 800px;
  flex: 1 auto;
}
.input{
   margin-left: 320px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-items: center;
    color: #565c68;
}

.break{
  margin-left: 5px; 
}

.input img{
  width: 20px;
}
.search, input::-webkit-input-placeholder{
  margin: 10px;
  width: 40%;
  padding: 12px;
  margin-left: 5px; 
  padding-left: 3px;
  border-radius: 8px;
  /* background: #29303d; */
  background: #1d202b;
  border: 1px solid #1f222e;
  font-family: 'Montserrat', sans-serif;
  color: white;
  
}
header{
  display: block;
  background-color: #0070f3;  
  padding: 1rem;
  color: #f1f1f1;
  font-size: 1.2rem;
  box-shadow: 2px 4px 5px 0px rgba(0, 0, 0, 0.342);
  z-index: 10000;
}

.flex{
  display: flex;
}

.grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 5px;
  justify-content: start;
  width: 800px;
  flex: 1 auto;
}

.ongoinglist{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 5px;
  justify-content: start;
  width: 800px;
  /* flex: 1 auto; */
}
.container {
  height: 100vh !important;
  display: flex;
  margin-left: 305px;
}
.right-nav{
  margin-right: 25px;
}
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
