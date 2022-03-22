const axios = require('axios');
const config = require('../config.js');
const dbSave = require('../database/index.js');

let getReposByUsername = (username) => {

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return axios(options)
  .then(function (response) {
    console.log(dbSave.saveData(response));
  });

}

module.exports.getReposByUsername = getReposByUsername;



