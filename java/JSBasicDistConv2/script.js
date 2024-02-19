(function(){
    "use strict";
        let convertType = "miles";
		const heading = document.querySelector('h1');
		const intro = document.querySelector('p');
		const answerDiv = document.getElementById('answer');
		const form = document.getElementById('convert');

		document.addEventListener('keydown',function(event){
			
			var key = event.code;
			

			if(key ==='KeyK'){
				convertType="kilometers";
				heading.innerHTML="kilometers to Miles Converter";
				intro.innerHTML="Type in a number of Kilometers and click the button to convert the distance to Miles.";

			}
			else if(key ==='KeyM'){
				convertType="miles";
				heading.innerHTML="Miles to Kilometers Converter";
				intro.innerHTML="Type in a number of Miles and click the button to convert the distance to Kilometers.";
			}
		});

		form.addEventListener('submit',function(event){
			event.preventDefault();

		        const distance=parseFloat(document.getElementById("distance").value);
			

			if(distance){
				if(convertType=='miles'){
					const conversion =(distance*1.609344).toFixed(3);
					answerDiv.innerHTML=`${distance} miles is ${conversion} kilometers.`; 
				}
				else{
					const conversion=(distance*0.621371192).toFixed(3);
					answerDiv.innerHTML=`${distance} kilometers is ${conversion} miles.`; 
				}

				
			}
			else{
				answerDiv.innerHTML="<h2>Please enter a number</h2>";
			}
		});
})();