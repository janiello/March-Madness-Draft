const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
findVideo: function(req, res){
    axios.get("https://www.ncaa.com/news/basketball-men/bracketiq/2019-05-01/what-march-madness-ncaa-tournament-explained")
    .then(function(response){
       
    const $ = cheerio.load(response.data);
    
    const linkSite = "https://www.ncaa.com"
    var results = [];

  $("div#video-player-1734803").each(function(i, element) {

    var link = linkSite + $(element).find("a").attr("href");
    console.log(element)
    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
    
      link: link
    });
  });

 //pass json link to the front end
  res.json(results)


});
}
}
