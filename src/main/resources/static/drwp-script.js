function sendPayment(cardHolderName, cardNumber, startDateMonth, startDateYear, expDateMonth, expDateYear, cvCode, encryptedPayload,ip) {
	
    var xhttp = new XMLHttpRequest();
       
    // Bind the encrypted object and the elements
    var data = JSON.stringify({cardHolderName : cardHolderName,
    						   cardNumber : cardNumber,
    						   startDateMonth : startDateMonth,
    						   startDateYear : startDateYear,
    						   expDateMonth : expDateMonth,
    						   expDateYear : expDateYear,
    						   cvCode : cvCode,
    						   encryptedPayload : encryptedPayload});
	
    // Define what happens when response recieved successfully
    xhttp.addEventListener("load", function() {
    	if (this.readyState == 4 && this.status == 201) {
    		var result =  this.responseText;
            console.log(result);
            // Call method that calls API to unpack response
    		sendResultToUnpack(result)
    	}
    });
      
    // Define what happens in case of error
    xhttp.addEventListener("error", function() {
    	alert(this.status+' '+this.statusText +' Oups.! Something goes wrong.');
    });
        
    // Set up our request
    xhttp.open("POST", "http://localhost:1234/api/v1/payments",true);
   
    // Set content type as json
    xhttp.setRequestHeader("Content-type", "application/json");
    
    // The data sent is what the user provided in the form
    xhttp.send(data);
};