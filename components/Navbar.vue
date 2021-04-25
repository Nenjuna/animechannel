<template>
<div>
    <nav class="sidebar">
        <div class="logo">
                <img src="../assets/video.svg" alt="video"/> <span class="heading">Video Freak</span>
        </div>
        <div class="hours">
                <img src="../assets/time.svg" alt="video"/><span class="hours-h">800 Streamed hours</span>
        </div>

        <ul>
            <li>
                <div class="sidebar-items sidebar-active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="home active"><path d="M3 14.828v9.172h18v-9.172l-9-8.375-9 8.375zm11 7.172h-4v-6h4v6zm10-9.852l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148z"/></svg> <a href="#"><span class="sidebar-text sidebar-text-active">Home</span></a>
                </div>
            </li>
            <li>
                <div class="sidebar-items sidebar-inactive">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="trending"><path d="M19 24h-14v-2h14v2zm-10-24c.542 6.292-5 8.458-5 14 0 3.764 3.084 6.42 6.594 7.005-1.094-1.755-.073-4.286 1.406-5.693 1.531 1.469 2.344 4.156 1.281 5.688 3.868-.75 6.719-3.858 6.719-7.833 0-3.625-1.833-7.042-5.291-9.167.822 2.281-.271 4.365-1.334 5.083.063-2.921-1-7.255-4.375-9.083z"/></svg><a href="#"><span class="sidebar-text sidebar-inactive">Trending</span></a>
                </div>
            </li>
            <li>
                <div class="sidebar-items sidebar-inactive">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="category"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg> <a href="#"><span class="sidebar-text sidebar-inactive">Categories</span></a>
                </div>
            </li>
        </ul>
                
            
    </nav>
</div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>

svg.home, svg.trending, svg.category{
    fill: #565c68;
    width: 20px;
    margin: 10px;
    margin-bottom: 12px;
    padding-bottom: 3px;
}
svg.active{
    fill: white;
}
ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: center;
}
ul,li{
    margin: 10px;
    list-style-type: none;
}
.sidebar-items{
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
}

.sidebar-text{
    color: white;
    font-size: 0.9rem;
}

/* .sidebar-text-active::before{
content: " ";
background: #e05308;
padding: 1px;
border: 1px solid #e05308;
height: 2px;
margin-top: 10px;
margin-right: 4px;;
} */

.sidebar-items img{
    width: 20px;
    margin: 10px;
    margin-bottom: 12px;
    padding-bottom: 3px;
}

.sidebar-inactive, .sidebar-active img{
    color: #565c68;
}
.sidebar-text-active{
     color: white;
     border-left: 2px solid #e05308;
     padding-left: 3px;
}
.hours{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    background: #2f3543;
    margin: 40px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
}

.hours-h{
    color: #fbfbfb;
    font-size: 0.8rem;
    margin: 5px;
    margin-bottom: 9px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
}

.logo{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
}

.heading{
    color: #fbfbfb;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 5px;
    margin-bottom: 9px;
}
.hours img{
    width: 30px;
}

.logo img{
    width: 50px;
    height: 40px;
    margin: 5px;
}

.mat {
    margin: 15px 0px 0px 15px;
    width: 30px;
}

.material-icons-round{
    font-size: 30px;

}
.sidebar{
background:#1b1d26;
position:absolute;
top:0;
bottom:0;
height:100%;
left:0;
width:300px;
overflow:hidden;
border-right: 1px solid #202622;
}


</style>