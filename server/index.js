const express = require('express');
let app = express();
const cors = require('cors');
const getRepos = require('../helpers/github.js')

app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  if (!res) {
    res.status(404).send('failed to connect')
  }
  getRepos.getReposByUsername(req.body.username);
});

app.get('/repos', function (req, res) {
 // TODO Still
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});





// app.use(express.urlencoded({extended: true}));
