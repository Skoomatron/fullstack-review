import React from 'react';
const dbSave = require('../database/index.js');

const RepoList = (props) => {
  // map out to page after I have either db/array populated
  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
    </div>
  )
}

export default RepoList;