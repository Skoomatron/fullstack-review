const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

let repoSchema = mongoose.Schema({
    id: Number,
    name: String,
    url: String,
    forks: Number,
    stars: Number,
    watchers: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let assignDataValue = (id, name, url, forks, watchers, stars) => {
  var repoData = new Repo()
  repoData.id = id;
  repoData.name = name;
  repoData.url = url;
  repoData.forks = forks;
  repoData.watchers = watchers;
  repoData.stars = stars;

  repoData.save();
}

let saveData = (response) => {
  var result = response;
  var resultLength = Object.keys(result).length;
  console.log(result.data);
  for (var x = 0; x < resultLength; x++) {
    var id = result.data[x].id;
    var name = result.data[x].name;
    var url = result.data[x].html_url;
    var forks = result.data[x].forks_count;
    var watchers = result.data[x].watchers_count;
    var stars = result.data[x].stargazers_count;
    assignDataValue(id, name, url, forks, watchers, stars);
    console.log(repoData.findById(id));

  }
}
module.exports.saveData = saveData;

/*
.id
.name
.full_name
.html_url
.forks
.watchers_count
.stargazers_count
*/