<template>
  <div>
    <!-- <Header /> -->
    <Navbar/>
    <div class="input">
      <img src="../assets/search.svg" alt="search">   <span class="break">| </span>
      <input type="text" class="search" placeholder="Search your favourate anime here">
    </div>
    <div class="container">
        <div class="grid">
          <List v-for="anime in animes" :key="anime.hrf" :title="anime.title" :href="anime.href" :img="anime.img"/>
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
export default {
  components: { Navbar, Ongoing },

  data() {
        return {
            animes : [{"title": "Tensura Nikki: Tensei shitara Slime Datta Ken", "href": "http://www.anime1.com/watch/tensura-nikki-tensei-shitara-slime-datta-ken", "img": "http://www.anime1.com/main/img/content/tensura-nikki-tensei-shitara-slime-datta-ken/tensura-nikki-tensei-shitara-slime-datta-ken-210.jpg"}, {"title": "Seijo no Maryoku wa Bannou Desu", "href": "http://www.anime1.com/watch/seijo-no-maryoku-wa-bannou-desu", "img": "http://www.anime1.com/main/img/content/seijo-no-maryoku-wa-bannou-desu/seijo-no-maryoku-wa-bannou-desu-210.jpg"},{"title": "Tensura Nikki: Tensei shitara Slime Datta Ken", "href": "http://www.anime1.com/watch/tensura-nikki-tensei-shitara-slime-datta-ken", "img": "http://www.anime1.com/main/img/content/tensura-nikki-tensei-shitara-slime-datta-ken/tensura-nikki-tensei-shitara-slime-datta-ken-210.jpg"}, {"title": "Seijo no Maryoku wa Bannou Desu", "href": "http://www.anime1.com/watch/seijo-no-maryoku-wa-bannou-desu", "img": "http://www.anime1.com/main/img/content/seijo-no-maryoku-wa-bannou-desu/seijo-no-maryoku-wa-bannou-desu-210.jpg"}, {"title": "Boku no Hero Academia 4th Season", "href": "http://www.anime1.com/watch/boku-no-hero-academia-4th-season", "img": "http://www.anime1.com/main/img/content/boku-no-hero-academia-4th-season/boku-no-hero-academia-4th-season-210.jpg"}]
        }

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
.container {
  min-height: 100vh;
  display: flex;
  margin-left: 305px;
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
