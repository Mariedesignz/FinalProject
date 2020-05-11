import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from '../src/serviceWorker';

let investments = ['Acorns','Robin Hood','Stash']
Object.onclick = function(){myscript};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/* Start of my api to call money terms*/
const Http = new XMLHttpRequest();
const url='https://www.dictionaryapi.com/api/v3/references/collegiate/json/debt?key=d12cfa5d-ee3f-4023-93c6-0a61afd5a83a'
Http.open("Get",url);
Http.send();

Http.onreadystatechange=function(){
  if(this.onreadystatechange==4 && this.status==200){
    console.log(Https.responseText)
  }
}
var unirest = require("unirest");

var req = unirest("GET", "");

req.query({
	"word": "{debt}"
});


req.query({
	"word": "{word}"
});

req.headers({
	"x-rapidapi-host": "aplet123-wordnet-search-v1.p.rapidapi.com",
	"x-rapidapi-key": "SIGN-UP-FOR-KEY"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});


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