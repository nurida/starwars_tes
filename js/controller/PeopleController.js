function PeopleController (view) {
	this._messages;
	this._view = view;
	console.log(this._view);
}

PeopleController.prototype = {
	showPeoples : function (urls) {
		var peoples = new Array();		
		var messages = "";
		for(var i = 0; i < urls.length; i++) {
			var url = urls[i];			
			$.ajax({
				dataType: "json",
				url: url,  		
				success: function (model) {
					var people = new PeopleModel();
					people.setName(model["name"]);
					people.setHeight(model["height"]);
					people.setMass(model["mass"]);
					people.setHairColor(model["hair_color"]);
					people.setSkinColor(model["skin_color"]);
					people.setEyeColor(model["eye_color"]);
					people.setBirthYear(model["birth_year"]);
					messages += this._view.buildPeople(people);
					this.setData(messages);
				}.bind(this)
			});
		}		
	}, 
	setData : function(messages) {
		this._messages = messages;
	},
	getData : function () {		
		return this._messages;
	}
}

