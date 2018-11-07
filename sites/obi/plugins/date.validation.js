// Plugin validation date of birth
const inputID = '.data_birth';

$(inputID).focus(function(){


// The function verifies whether the range is valid
	function testData(elem, a, b) {
		let srtA = ""+a;
		let srtB = ""+b;
		let result = srtA <= elem && elem <= srtB;

		return result;
	};


// The function checks the correspondence of the month with the number entered
	function calendarTest(dayF,monthF) {
		let dayStr = +dayF;

		if ((dayStr>29) && (monthF === "02")){
			return false;
		};

		if ((dayStr>30)){
			if (monthF === "04"){
				return false;
			};
			if (monthF === "06"){
				return false;
			};
			if (monthF === "09"){
				return false;
			};
			if (monthF === "11"){
				return false;
			};
		};

		return true;
	};


  $(inputID).keyup(function () {

  	// Removing separation characters
  	$(inputID).keypress(function(eventObject){  	    
  	    if (eventObject.which === 8){
  	    	var oldValue = $(inputID).val();
  	    	if (oldValue[oldValue.length-1] === "."){
  	    		var newValue = oldValue.slice(0, (oldValue.length-1));
  	    		$(inputID).val(newValue);
  	    		console.log("newValue: "+newValue);
  	    	};
  	    };
  	});



  	const startValue = $(inputID).val();

  	var value;

  	// Date
  	const date = new Date();

  	// Day
  	var day = date.getDate();
  	var dayValue = startValue[0]+startValue[1];
  	dayValue = +dayValue;

  	// Month
  	var month = 1 + date.getMonth();
  	var monthValue = startValue[3]+startValue[4];
  	monthValue = +monthValue;

  	// Year
  	var year = date.getFullYear();
  	var yearStr = ""+year;
  	var letYear = year - 18;
  	var letYearStr = ""+letYear;



  	// Checking the day
  	if ( testData(startValue[0],0,3) ){
  		value = startValue[0];
  	} else {
  		value = "";
  	};

  	// Check or day >= "30"
  	if ( testData(startValue[0],3,3) ){
  		if ( testData(startValue[1],0,1) ){
  			value = value + startValue[1] + ".";
  		};
  	};

  	if ( testData(startValue[0],1,2) ){
  		if ( testData(startValue[1],0,9) ){
  			value = value + startValue[1] + ".";  				
  		};
  	};

  	if ( testData(startValue[0],0,0) ){
  		if ( testData(startValue[1],1,9) ){
  			value = value + startValue[1] + ".";  				
  		};
  	};


	// Checking the month
	if(testData(startValue[3],0,1)){
		value = value + startValue[3];

		var testMonth, testDay;
		testDay = value[0] + value[1];


		if(testData(startValue[3],1,1)){
			if(testData(startValue[4],0,2)){
				testMonth = startValue[3] + startValue[4];

				if(calendarTest(testDay,testMonth)){
					value = value + startValue[4] + ".";
				};
			};
		};

		if(testData(startValue[3],0,0)){
			if(testData(startValue[4],1,9)){
				testMonth = startValue[3] + startValue[4];

				if(calendarTest(testDay,testMonth)){
					value = value + startValue[4] + ".";
				};
			};
		};
	};


	// Checking the year
	if(testData(startValue[6],1,2)){
		value = value + startValue[6];
	};


	// Date comparison

	// Input a year <2000
	if (startValue[6] === "1"){
		if (testData(startValue[7],9,9)){
			value = value + startValue[7];
		};
		if (testData(startValue[8],0,9)){
			value = value + startValue[8];
		};
		if (testData(startValue[9],0,9)){
			value = value + startValue[9];
		};
	} else {
		if(testData(startValue[7],0,9)){
			if (startValue[7] < letYearStr[1]){
				value = value + startValue[7];
				if(testData(startValue[8],0,9)){
					value = value + startValue[8];

					if(testData(startValue[9],0,9)){
						value = value + startValue[9];
					};
				};
			};

			if (startValue[7] === letYearStr[1]){
				value = value + startValue[7];

				if(testData(startValue[8],0,9)){
					if (startValue[8] < letYearStr[2]){
						value = value + startValue[8];
						if (testData(startValue[9],0,9)){
							value = value + startValue[9];
						};
					};

					if (startValue[8] === letYearStr[2]){
						value = value + startValue[8];
						if (testData(startValue[9],0,9)){
							if (startValue[9] < letYearStr[3]){
								value = value + startValue[9];
							};
							if (startValue[9] === letYearStr[3]){
								// Checking the month
								if (monthValue < month){
									if (testData(startValue[9],0,9)){
										value = value + startValue[9];
									};
								};
								if (monthValue === month){
									// Check the date
									if (dayValue <= day){
										if (testData(startValue[9],0,9)){
											value = value + startValue[9];
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
  	$(inputID).val(value);
  }).keyup();
});
