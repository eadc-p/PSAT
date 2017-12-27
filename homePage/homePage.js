$(document).ready(function(){

    //open modal for login page
    $("#beginAssesment").click(function(){
        $("#myModalLogin").modal();
    });

    //open modal for slot selection page from the login
    $('#loginClick').click(function(){
      $("#myModalSlot").modal();
    });

    //setting up initial date
    $('.date-display').text(disDate(0)); 

    //Changing date display for different selections
    $('label.btn-outline-warning:nth-child(1)').click(function(){
        uncheckAll();
        $('.date-display').text(disDate(0));  //today
      });
    $('label.btn-outline-warning:nth-child(2)').click(function(){
        uncheckAll();
        $('.date-display').text(disDate(1));  //tomorrow
    });
    $('label.btn-outline-warning:nth-child(3)').click(function(){
        uncheckAll();
        $('.date-display').text(disDate(2));  //day after tomorrow
    });


});

function uncheckAll(){
  //removes any selection from the pie slots
   $('input[name="AppointmentDateTime"]:checked').prop('checked',false);
}

function disDate(d){
  var currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + d);

  var dd = currentDate.getDate(); //date
  var mm = currentDate.getMonth()+1; //month
  var yyyy = currentDate.getFullYear(); //year

  //adding '0' before single digit dates
  if(dd<10)
  {
      dd='0'+dd;
  }

  if(mm<10)
  {
      mm='0'+mm;
  }

  //return string of date
  return dd+'/'+mm+'/'+yyyy;
}
