var CC, YY, MM, DD, d, dayValue;

function generateAkanName (){

  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
  var Birthday= document.getElementById("BirthDate").value = value;
  var Gender = document.getElementByName("Gender");
  if(century == ""){
    alert("Invalid gender");
    return false;
  else if (year == ""){
  alert("Invalid year");
  return false;
  }else if (month == ""){
  alert("Ivalid month");
  return false;
  }else if(dayOfMonth == ""){
  alert("Ivalid date");
  return false;
  }
 }
 gender{
  
 }

 function calculateDayofWeek("DayofWeek"){
   getInput();
   DayofWeek =  ( ( (Century/4) -2*Century-1) + ((5*Year/4) ) + ((26*(Month+1)/10)) + Day ) % 7
 }


  var inputBirthMonth ()
