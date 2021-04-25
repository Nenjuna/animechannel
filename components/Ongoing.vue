<template>
    <div id="ongoing">
        <div class="ongoing-anime">
            Ongoing Animes
        </div>
        <ul>
            <li> <a href="#">One Piece Episode 971</a></li>
            <li> <a href="#">Tensei shitara Slime Datta Ken Episode 25</a></li>
            <li> <a href="#">Black Clover (TV) Episode 170</a></li>
            <li> <a href="#">Tate no Yuusha no Nariagari Episode 25</a></li>
            <li> <a href="#">Kimetsu no Yaiba Episode 26</a></li>
            <li> <a href="#">Naruto Shippuuden Episode 500</a></li>
            <li> <a href="#">One Punch Man 2nd Season OVA Episode 3</a></li>
            <li> <a href="#">Goblin Slayer Episode 12</a></li>
            <li> <a href="#">Boruto: Naruto Next Generations Episode 196</a></li>
            <li> <a href="#">Arifureta Shokugyou de Sekai Saikyou Episode 13</a></li>
            <li> <a href="#">Dororo Episode 24</a></li>
            <li> <a href="#">Boku no Hero Academia 3rd Season Episode 25</a></li>
            <li> <a href="#">Dr. Stone Episode 24</a></li>
            <li> <a href="#">Yakusoku no Neverland Episode 12</a></li>
            <li> <a href="#">Boku no Hero Academia 4th Season Episode 30</a></li>
            <li> <a href="#">Kenja no Mago Episode 12</a></li>
            <li> <a href="#">Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II Episode 12</a></li>
            <li> <a href="#">Fairy Tail: Final Series Episode 51</a></li>
            <li> <a href="#">Sword Art Online: Alicization Episode 24</a></li>
            <li> <a href="#">Shingeki no Kyojin Season 3 Part 2 Episode 10</a></li>
            <li> <a href="#">Bleach Episode 366</a></li>
            <li> <a href="#">The Misfit of Demon King Academy Episode 13</a></li>
            <li> <a href="#">Overlord III Episode 13</a></li>
            <li> <a href="#">Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai Episode 13</a></li>
            <li> <a href="#">Darling in the FranXX Episode 24</a></li>
            <li> <a href="#">Enen no Shouboutai Episode 23</a></li>
            <li> <a href="#">Mob Psycho 100 II Episode 13</a></li>
            <li> <a href="#">Jujutsu Kaisen (TV) Episode 24</a></li>
            <li> <a href="#">Vinland Saga Episode 24</a></li>
            <li> <a href="#">Sword Art Online: Alicization - War of Underworld Episode 12</a></li>
        </ul>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            ongoing: ["One Piece Episode","Tensei shitara Slime Datta Ken Episod","Black Clover (TV) Episode","Tate no Yuusha no Nariagari Episod"]
        }
    }
    
}
</script>

<style scoped>

ul, li{
    list-style-type: none;
    margin-top: 3px;
}
a{
color: white;
font-size: 0.8rem;
}
#ongoing{
    margin: 5px;
}
.ongoing-anime{
    text-align: center;
    background: #2f3543;
    background: #e05308;
    padding: 10px;
    color: white;
    font-weight: bold;
    font-size: 0.9rem;
    text-transform: uppercase;
}

</style>