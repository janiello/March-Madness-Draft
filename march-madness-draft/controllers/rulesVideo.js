const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
findVideo: function(req, res){
    axios.get("https://www.usatoday.com/sports/ncaab/")
    .then(function(response){
       
      const $ = cheerio.load(response.data);
      const newsLink = "https://www.usatoday.com";
    const articles  = [];
  $("div.headline-collection.clearfix.listview li.hgpm-item").each(function(i, element) {

      if(i > 12) {
        element = null;
        return false;
      }
    const headline = $(element).find("[itemprop = headline]").text();
    const article = $(element).find("span.hgpm-back-listview-text.js-asset-description.placeholder-bg").data();
    const link = newsLink + $(element).find("a").attr("href");
    const img = $(element).find("span.hgpm-list-image-wrap img[itemprop = thumbnailUrl]").attr("src");

    // Save these results in an object that we'll push into the results array we defined earlier
    articles.push({

      headline: headline,
      article: article,
      link: link,
      img: img
    });
  
  });
//pass json link to the front end
  res.json(articles)

  
});
    
}
}
