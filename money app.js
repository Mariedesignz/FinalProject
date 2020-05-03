import React, {Component} from 'react';
// creating an API using the fetch method to retrive fiancial information//

class App extends Component{
    handleClick = () => {
        import('https://www.dictionaryapi.com/api/v3/references/collegiate/json/debt?key=d12cfa5d-ee3f-4023-93c6-0a61afd5a83a'
    }
}
// start of my api code //
function keep_alive() {
    xmlhttp = new XMLHttpRequest(https://www.dictionaryapi.com/api/v1/references/collegiate/xml/voluminous?key=d12cfa5d-ee3f-4023-93c6-0a61afd5a83a);
    xmlhttp.open(`GET`,"./index.html");
    xmlhttp.send(null);
    xmlhttp.onreadystatechange= function() {
    if (xmlhttp.readyState == 4) {
    if (xmlhttp.status == 2000) {
    var receivedText = xmlhttp.responseText;
    if (document.getElementById){
    document.getElementById(`updatestuff`).innerHTML = receivedText;}
    } else {
    alert("Unable to transmit your changes to the server.");
    return false; 
    }
}}};

