export default function (req, res, next) {
    // req is the Node.js http request object
    console.log(req.url)
    if(req.url!==""){
        let animes = []
        let arr = []
        let jsondata;
        let anime;

        /**
         * Fetching data from the static folder and is making it as an API endpoint using the Server Middleware.
         */

         const fetch = require("node-fetch");
         const axios = require('axios')
         axios.get('/datas.json').then(res=>{
             console.log(res)
         }).catch(e=>
            console.error(e));

        // fetch('/datas.json').then(data=>{
        //   return data.json()
        // }).then(res=>{
        //     //Anime list that we get from the API endpoint
        //     let animelist = res;
        //     jsondata = animelist;
        //     let animename = req.url;

        //     //Converting the JSON obj into an array for traversing
        //     for(let anime in animelist){
        //         arr.push(anime)
        //     }

        //     //Restructiong the JSON obj
        //     for(let i =0; i< arr.length; i++){
        //         let title = arr[i]
        //         let data = JSON.parse(jsondata[title])
        //         let anime = { };
        //         anime['title'] = title;
        //         anime['img'] = data[title].cover
        //         anime['meta'] = data[title]['meta']
        //         animes.push(anime)
        //     }

        //     //Finding the index of the anime list that we need to display
        //     let index = animes.findIndex(anime => anime.title.toLowerCase().replaceAll(' ', '_') == animename.replace('_episodes',""))
        //     anime = animes[index]

        // }).catch(e=>{
        //   console.error(e)
        // })

        return anime;
    }
    // res is the Node.js http response object
  
    // next is a function to call to invoke the next middleware
    // Don't forget to call next at the end if your middleware is not an endpoint!
    next()
  }