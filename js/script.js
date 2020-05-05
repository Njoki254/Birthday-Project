
var Year, Month, Day, d, dayValue;
//Calculating the day of the week

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function validate() {
  var Gender = document.getElementByName("Gender");
  var Birthday= document.getElementById("BirthDate").value = value;
  }

}

function CalculateDayofWeek (){
  var Birthday= document.getElementById("BirthDate").value = value;
  var year = myDate.getFullYear();
  var month =myDate.getMonth();
  var date = myDate.getDate (),
  var weekday=myDate.getDay();
  d = (date +  year+ year / 4 - year / 100 + year / 400 + (31 * month / 12) % 7
  return (d)
}
//Get  Gender

  var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
function getGender(){
  var Gender = document.getElementByName("Gender");
  if(genders[0].checked == true){
    var gender = "male";
  }
  else if(genders[1].checked == true){
    var gender = "female";
}
  else{
    break;
  }
  //Get Akan Names
  switch(gender){
    case "male";
    if (dayValue == 0){
        alert(" Your akan name is " +maleAkanNames[0]);
      }
      else if(dayValue == 1){
        alert("Your akan name is " +maleAkanNames[1]);
      }
      else if(dayValue == 2){
        alert("Your akan name is " +maleAkanNames[2]);
      }
      else if(dayValue == 3){
        alert("Your akan name is " +maleAkan[3]);
      }
      else if(dayValue == 4){
        alert("Your akan name is " +maleAkanNames[4]);
      }
      else if(dayValue == 5){
        alert("Your akan name is " +maleAkanNames[5]);
      }
      else if(dayValue == 6){
        alert("Your akan name is " +maleAkanNames[6]+"!");
      }
      break;
      case "female":
      if (dayValue == 0){
          alert(" Your akan name is " +femaleAkanNames[0]);
        }
        else if(dayValue == 1){
          alert("Your akan name is " +maleAkanNames[1]);
        }
        else if(dayValue == 2){
          alert("Your akan name is " +femaleAkanNames[2]);
        }
        else if(dayValue == 3){
          alert("Your akan name is " +femaleAkanNames[3]);
        }
        else if(dayValue == 4){
          alert("Your akan name is " +femaleAkanNames[4]);
        }
        else if(dayValue == 5){
          alert("Your akan name is " +femaleAkanNames[5]);
        }
        else if(dayValue == 6){
          alert("Your akan name is " +femaleAkanNames[6]+"!");
        }
        break;
  }
 }
 function findName(){
  dayofWeek = calculateDayOfWeek();
  getGender();
 }
