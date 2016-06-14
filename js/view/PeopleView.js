function PeopleView () {	
	this.peoples = new Array();
}

PeopleView.prototype = {
	buildPeople : function (people) {
		//this.peoples.push(people);		
		var message = "";
		message += "[Name : "+people.getName() + "; Height : " + people.getHeight() + "; Mass : " + people.getMass() + "; Hair Color : " + people.getHairColor() + "; Skin Color : " + people.getSkinColor() + "; Eye Color : " + people.getEyeColor() + "; Birth Year : " + people.getBirthYear() + "]" ;
		message += "<br/>";
		return message;
	},
	buildPeoples : function () {	
		var message = "";
		for(var i = 0;  i < this.peoples.length; i++) {
			var people = this.peoples[i];
			message += '[Name : '+people.getName() + '; Height : ' + people.getHeight() + '; Mass : ' + people.getMass() + '; Hair Color : ' + people.getHairColor() + '; Skin Color : ' + people.getSkinColor() + '; Eye Color : ' + people.getEyeColor() + '; Birth Year : ' + people.getBirthYear() + ']' ;
			message += "<br/>";
			console.log(message);
		}		
		return message;
	}	
}