var socket = io();
var graduationDate = new Date(2017, 04, 28);
$(document).ready(function(){
  var regDays = $("#regularDays");
  var schoolDays = $("#schoolDays");
  var today = new Date();
  today.setHours(17);
  regDays.text(createRegMessage(today, graduationDate));
  // schoolDays.text()
  schoolDays.text(createSchoolMessage());
});

function createSchoolMessage(){
  var daysOff = [(new Date(2017, 02, 20)), (new Date(2017, 03, 3)), (new Date(2017, 03, 27)), (new Date(2017, 03, 28)), (new Date(2017, 03, 29)), (new Date(2017, 03, 30)), (new Date(2017, 03, 31))];
  var daysLeft = 0;
  var now = new Date();
  for (var d = new Date(now); d <= graduationDate; d.setDate(d.getDate() + 1)) {
    var numDay = d.getDay();
    if (numDay == 0 || numDay == 6){
      continue;
    }
    daysLeft++;
  }
  for (var i = 0; i < daysOff.length; i++){
    var d = daysOff[i];
    if(now.getTime() < d.getTime()){
      daysLeft--;
    }
  }
  return "There are " + daysLeft + " school days left";
}

function createRegMessage(first, second){
  return "There are " + (daydiff(first, second) + 1) + " days left";
}

function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}
