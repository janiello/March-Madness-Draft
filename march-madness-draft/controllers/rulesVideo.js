const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
findVideo: function(req, res){
    axios.get("https://www.ncaa.com/brackets/basketball-men/d1/2019")
    .then(function(response){
       
    const $ = cheerio.load(response.data);
    
    var results = [];
  $("div.teams").each(function(i, element) {
    
    var img= $(element).find("img").attr("src");
    var alt = $(element).find("img").attr("alt");
   
    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
    
      img: img,
      alt: alt
    });
  
  });
//  //pass json link to the front end
  res.json(results)

  
});
    
}
}
