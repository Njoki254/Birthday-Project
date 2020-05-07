
var century, year, date, day, month, d, dayofWeek;
//Calculating the day of the week

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//Valodating Form
function validate() {
  var genders = document.getElementsByName("gender");
  if( document.AForm.year.value == "" || document.AForm.year.value.length !=4 || document.AForm.year.value >2100 || document.AForm.year.value <=1900) {
     alert( "Invalid year of Birth" );

     return false;
  }
  else if( document.AForm.month.value == "" || isNaN( document.AForm.month.value ) || document.AForm.month.value > 12  || document.AForm.month.value < 1){
     alert( "Invalid month" );

     return false;
  }
  else if( document.AForm.date.value == "" || isNaN( document.AForm.month.value )|| document.AForm.date.value > 31 || document.AForm.date.value <  1) {
     alert( "Invalid date" );

     return false;
  }
  else if(genders[0].checked==false && genders[1].checked==false ) {
      alert("Invalid selection");
      return false;
  }
  else{
    return true ;
  }

}
//Calculating Day of the Week

function calculatedayOfweek(){
  year = document.getElementById("year").value;
  var CC = parseInt(year.substring(0,2));
  var YY = parseInt(year.substring(2,4));
  month = parseInt(document.getElementById("month").value);
  day = parseInt(document.getElementById("date").value);
  //Zellar Algorithms
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(month+1)/10) ) + day)%7;
  console.log(d);
  return (Math.floor(d));
}

//Get  Gender

  var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
  function getGender(){
    var genders = document.getElementsByName("gender");
    if(genders[0].checked == true){
      var gender = "male";
    }
    else if(genders[1].checked == true){
      var gender = "female";
    }
    else{
      return false;
    }
    switch(gender){
      case "male":
        if (dayOfweek == 1){
          alert("Born on a " +days[0] + "Your akan name is " +maleAkanNames[0]+"!");
        }
        else if(dayOfweek == 2){
          alert("Born on a "+days[1] + " Your akan name is " +maleAkanNames[1]+"!");
        }
        else if(dayOfweek == 3){
          alert("Born on a " +days[2]+ " Your akan name is " +maleAkanNames[2]+"!");
        }
        else if(dayOfweek == 4){
          alert("Born on a "+days[3] +  "Your akan name is " +maleAkanNames[3]+"!");
        }
        else if(dayOfweek == 5){
          alert("Born on a "+days[4] +  "Your akan name is " +maleAkanNames[4]+"!");
        }
        else if(dayOfweek == 6){
          alert("Born on a "+days[5] +  " Your akan name is " +maleAkanNames[5]+"!");
        }
        else if(dayOfweek == -0){
          alert("Born on a "+days[6] + "Your akan name is " +maleAkanNames[6]+"!");
        }
      break;
      case "female":
        if (dayOfweek == 1){
          alert("Born on a "+days[0] + " and Your akan name is  " +femaleAkanNames[0]+"!");
        }
        else if(dayOfweek == 2){
          alert("Born on a " +days[1] + " and Your akan name is " +femaleAkanNames[1]+"!");
        }
        else if(dayOfweek == 3){
          alert("Born on a " +days[2] + " and Your akan name is " +femaleAkanNames[2]+"!");
        }
        else if(dayOfweek == 4){
          alert("Born on a " +days[3] + " and Your akan name is " +femaleAkanNames[3]+"!");
        }
        else if(dayOfweek == 5){
          alert("Born on a " +days[4] + " and Your akan name is " +femaleAkanNames[4]+"!");
        }
        else if(dayOfweek == 6){
          alert("Born on a " +days[5] + " and Your akan name is " + femaleAkanNames[5]+"!");
        }else if(dayOfweek == -0){
          alert("Born on a " +days[6] + " and Your akan name is " +femaleAkanNames[6]+"!");
        }
      break
      default:

    }
  }


//Generating Name
  function findName(){
    dayOfweek = calculatedayOfweek();
    getGender();
  }
