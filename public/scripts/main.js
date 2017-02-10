var socket = io();
var graduationDate = new Date(2017, 04, 28);
$(document).ready(function(){
  var regDays = $("#regularDays");
  var today = new Date();
  regDays.text(createMessage(today, graduationDate));
});

function createMessage(first, second){
  return "There are " + daydiff(first, second) + " days left";
}

function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}
