import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let investments = ['Acorns','Robin Hood','Stash']
Object.onclick = function(){myscript};S
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
function search_terms() {
  let input = document.getElementById('searchbar') .value 
  input=input.toLowerCase ();
  let x = document.getElementsByClassName('terms');

  for (i = 0; i < x.length; i++){
    if (!x[i] .innerHTML.toLowerCase() .includes(input)) {
        x[i] .style.display="none";
    }
    else {
      x[i].style.display="list-item";
    }
  }
}


console.log(investments)