jQuery(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: 'http://185.18.52.203:8080/yenot2/resources/1/events/create',
    contentType: 'application/json',
    //xhrFields: {withCredentials: true},
    dataType: 'json',
    headers: {'Authorization': 'Basic MTp5ZW5vdA=='},
    //crossDomain: true,
    //headers: {"Authorization": "Basic MTp5ZW5vdA=="},
    //username: '1',
    //password: 'yenot',
    //headers: 'Access-Control-Allow-Origin',
    //imei: 354156050670282
    data: JSON.stringify({
      "name":"event",
    	"lat":0,
    	"lon":0,
    	"timeZone":null,
    	"maxMembers":10,
    	"description":"descript",
    	"type":2,
    	"locationName":null,
    	"locationAddress":null,
    	"eventDates":[{"clientId":1,
                     "datetimeStart":99999956578900,
                     "datetimeEnd":99999978745401,
                     "timeStart":100,
                     "timeEnd":200,
                     "days":[1,3,5],
                     "periodInterval":null,
                     "subeventId":null,
                     "period":"ONCE" }],
    	"members": [2439170,375257514302]
    }),
    beforeSend: function(xhr) {
            xhr.withCredentials = true;
            xhr.setRequestHeader ('Authorization', 'Basic MTp5ZW5vdA==');},
    error: function(jqXHR, textStatus, errorThrown) {$("p").text(textStatus);},
    success: function(data){$("p").text(data);}
  });
}) //End of Ready
