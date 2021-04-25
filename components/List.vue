<template>
    <div>
        <div class="item">
            <a :href="href" class="nli-image"><img :alt="title" :src="img"></a>
        </div>
        <div class="li-right">
		    	<div class="tit"><a :href="href">{{title}}</a></div>
                <div class="li-date">Today - Ongoing</div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["title","href","img"],
}
</script>
<style scoped>
a:visited{
    text-decoration: none;
}

.item{
    display: flex;
    flex-direction: column;
    transition: box-shadow .3s;
    margin: 4px;
    border-radius: 5px;
    width: 205px;
    justify-items: center;
    align-content: center;
    color: #f1f1f1;

}

.item:hover{
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.18);
}
.li-right{
    display: flex;
    background-color: #262730;
    background: rgb(30,30,33);
    background: linear-gradient(180deg, rgba(30,30,33,1) 0%, rgba(26,28,37,1) 48%, rgba(30,30,33,1) 100%);
    color: #b4b4b5;
    flex-direction: column;
    width: 205px;
    align-items: center;
    justify-items: center;
    justify-content:center;
    margin: 4px; 
    padding: 8px;   
    font-size: 0.8rem;
    line-height: 1.1rem;
    border-radius: 5px;
    padding-bottom: 12px;
}
.nli-image{
    display: flex;
    overflow: hidden;
    border-radius: 5px;
    height: 300px;
    margin: 0;
    padding: 0;
}
.nli-image img{
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
    border: 1px solid #ddd;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.18);
    border-bottom: none;
    margin-left: -3px;
    margin-top: -3px;
}
.item ul{
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}
li{
    list-style: none;
}
a, a:focus, a:visited, a:valid{
    text-decoration: none;
    text-align: center;
    font-size: 0.8rem;
    color: #61751c;
    font-weight: bold;
}

.tit{
    text-align: center;
    font-size: 0.8rem;
    padding: 3px;
}
</style>