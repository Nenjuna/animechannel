<template>
    <div>
    <Navbar/>
    <div class="input">
      <img src="../../../assets/search.svg" alt="search">   <span class="break">| </span>
      <input type="text" class="search" placeholder="Search your favourate anime here">
    </div>
    <div class="container">
        <div class="main">
            <div class="details">
                <div class="poster">
                    <img :src="anime.img" :lt="anime.title">
                </div>
                <div class="meta">
                    <div class="title">{{anime.title}}</div>
                    <div class="detail">{{anime.meta.synonims}}</div>
                    <div class="detail">{{anime.meta.genre}}</div>
                    <div class="detail">{{anime.meta.animetype}}</div>
                    <div class="detail">{{anime.meta.description}}</div>
                    <div class="detail">{{anime.meta.status}}</div>

                </div>
            </div>
            
         {{anime}}
        </div>
        <div class="right-nav">
          <Ongoing/>
        </div>
    </div>
    
  </div>
</template>
<script>
export default {
    data() {
        return {
            anime: {},
            episodes: []
        }
    },
    async asyncData({$axios}) {
      const data = await $$axios.$get(`https://animefreak-api.herokuapp.com/animeeps`)
      
    },
    mounted() {
      var self = this;
      function loadDataJSON(){
        let animes = []
        let arr = []
        let jsondata;
        fetch('/datas.json').then(data=>{
          return data.json()
        }).then(res=>{
          let animelist = res;
          jsondata = animelist;
          let animename = self.$route.params.id;

          for(let anime in animelist){
              arr.push(anime)
          }
          for(let i =0; i< arr.length; i++){
            let title = arr[i]
            let data = JSON.parse(jsondata[title])
            let anime = { };
            anime['title'] = title;
            anime['img'] = data[title].cover
            anime['meta'] = data[title]['meta']
            animes.push(anime)
          }
          let index = animes.findIndex(anime=> anime.title.toLowerCase().replaceAll(' ', '_')==animename.replace('_episodes',""))
          self.anime = animes[index]
          console.log(self.anime)

        }).catch(e=>{
          console.log(e)
        })
      }
      loadDataJSON()
      function loadEpisodes(){
          fetch('/datas-copy.json').then(data=>{
              return data.json()
          }).then(res=>{
              if(res[self.$route.params.id]){
                  self.episodes = res[self.$route.params.id];
                  console.log(self.episodes.length)
              }
          }).catch(e=>
          console.log(e))
      }
      loadEpisodes()
    },
    
}
</script>

<style scoped>

.details{
    margin: 30px;
    display: flex;
}
h1, .title{
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