$(document).on('click', '#submit', function(){
   
     var webinarFormValid = webinarFormValidation();
     printAlert(webinarFormValid.serviceData);
    //   alert("workig");
  
});


function webinarFormValidation() {
var valid = true;
var phone = $('#phone').val();
  
var serviceData = {
   // phone:phone,
    secretKey:"Fonada2022c2c",
    clientId:"Fonada_C2C",
    agentNumber:"8188996771",
    customerNumber:phone,
    agentName:"DKY",
    customerName:"SAURABH",
    callerId:""
  
}
  return { isValid: true, serviceData: serviceData };

}


function printAlert(serviceData ){

//   alert (" i m running  in new function ");      
  //serviceData.sourceType = "WEBINAR";    
  $.ajax({

   url: "http://43.242.246.83:8170/api/c2c/process",
    method: "POST",
    data: JSON.stringify(serviceData),
    contentType: "application/json",
    success: function (result ) {
    //  alert(" ok");
        if (result.Status=="Success") {
             //document.write(result.Status);
             alert("Data Is Saved SucessFully");
          

        } else {
           alert("Error Message::"+result.errorMessage+ "And Status"+result.Status);
          alert("Please Filled All Input Fields  !!!")
        }
    }
  });
}  
