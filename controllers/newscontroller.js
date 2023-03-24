const newsModel = require('../models/news')
const axios = require('axios')


// const apiKey = 'f3f3ec3a990c49c892ab51f2c62f8196';

// const apiKey = 'f3f3ec3a990c49c892ab51f2c62f8196'

// const apiKey = 'f3f3ec3a990c49c892ab51f2c62f8196'

// const apiUrl =  `https://newsapi.org/v2/everything?q=bitcoin${SearchTerm}&apiKey=${apiKey}`;

// const apiUrl = ` https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=f3f3ec3a990c49c892ab51f2c62f8196`;

const api = async(req,res) => {
const apiKey = 'f3f3ec3a990c49c892ab51f2c62f8196'
const SearchTerm=req.query.q
const apiUrl =  `https://newsapi.org/v2/everything?q=bitcoin${SearchTerm}&apiKey=${apiKey}`;

    try{
        const response = await axios.get(apiUrl)

         const articles = response.data.articles;

        //  const newsList = [];

         for(let i = 0;  i< articles.length;i++){
            const article = articles[i];

            const news = new newsModel({
                title: article.title,
                description: article.description,
                url: article.url,
                urlToImage:article.urlToImage,
                publishedAt: article.publishedAt,
                source:article.source?.name ||'not available'
            });
        
          await news.save()
            // newsList.push(wait.news.save())
         }

         res.json({
            msg: "success"
         });

    }catch(error){
        console.log(error);
        res.status(500).send('error fetching news from API')
    }
}

// const getData = (req,res)=>{
//     newsModel.find()
//      .then(response=>{
//         res.json({
//             response
//         })
//      })
//      .catch(error=>{
//         res.json({
//             message:"error"
//         })
//      })
// }

const getData = (req,res)=>{
    let {SearchTerm,source} = req.query;

    source = source?.split(",")
     newsModel.find({title:{$regex: SearchTerm ? SearchTerm : "", $options:"i"},source:source?source:{$regex:''}})
     .then(response=>{
        res.json({
            response
        })
     })
     .catch(error=>{
        console.log(error)
        res.json({
            message:"error"
        })
     })
}

module.exports = {api,getData}