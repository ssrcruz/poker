/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import poker from "./poker"

window.onload = function() {
  let start = document.getElementById("js-start-poker");
  start.onclick = function() {
    let url = "/home/get_hands";
    console.log(url);
    fetch(url, {
      method: "get",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' }
    })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      console.log(data);
      poker(hands);
    });
  }
}
