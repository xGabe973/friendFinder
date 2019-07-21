var friends = require("../data/friends.js");


module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function (req, res) {

    var matchFound = {
      name: "",
      photo: "",
      matchDifference: 1000
    };


    console.log(req.body);

    var userData = req.body;
    var userScores = userData.scores;
    console.log(userScores);

    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i]);
      totalDifference = 0;

      for (var j = 0; j < friends[i].scores[j]; j++); {

        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]))

        if (totalDifference <= matchFound.matchDifference) {
          matchFound.name = friends[i].name;
          matchFound.photo = friends[i].photo;
          matchFound.matchDifference = totalDifference;
        }
      }
    }
    friends.push(userData);
    res.json(matchFound);
  });

}