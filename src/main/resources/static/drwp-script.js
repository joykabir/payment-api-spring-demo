function sendPayment(cardHolderName, cardNumber, expDateMonth, expDateYear, cvCode, encryptedPayload,ip) {
	var path = server.path;
	
    var xhttp = new XMLHttpRequest();
       
    // Bind the encrypted object and the elements
    var data = JSON.stringify({cardHolderName : cardHolderName,
    						   cardNumber : cardNumber,
    						   expDateMonth : expDateMonth,
    						   expDateYear : expDateYear,
    						   cvCode : cvCode,
    						   encryptedPayload : encryptedPayload});
	
    // Define what happens when response recieved successfully
    xhttp.addEventListener("load", function() {
    	if (this.readyState == 4 && this.status == 201) {
    		var result =  this.responseText;
            // Call method that calls API to unpack response
    		sendResultToUnpack(result)
    	}
    });
      
    // Define what happens in case of error
    xhttp.addEventListener("error", function() {
    	alert('status :'+this.status+' '+this.statusText +' Oups.! Something goes wrong.');
    });
        
    // Set up our request
    xhttp.open("POST", path ,true);
   
    // Set content type as json
    xhttp.setRequestHeader("Content-type", "application/json");
    
    // The data sent is what the user provided in the form
    xhttp.send(data);
};