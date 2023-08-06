"use strict";

var slider = document.getElementById("rating");
var output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}