import React, {Component} from 'react';
// creating an API using the fetch method to retrive fiancial information//
class App extends Component{
    handleClick = () => {
        import('https://www.wpi.edu/student-experience/resources/financial-literacy/terms')
        
    }
}
// start of my stock ticker code //
function keep_alive() {
    xmlhttp = new XMLHttpRequest();
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
//start of defintions for financial literacy//
