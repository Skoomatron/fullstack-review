import React from 'react';

const Search = (props) => {

  return (
  <div>
    <h4>Add more repos!</h4>
    Enter a github username:
    <input value={props.term} onChange={props.onChange}/>
    <button value={props.term} onClick={ () => {
      props.searchSubmit();
    }}> Add Repos </button>
  </div>
  )

}

export default Search;