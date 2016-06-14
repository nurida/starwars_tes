function PeopleModel () {
	var _name;
	var _height;
	var _mass;
	var _hairColor;
	var _skinColor;
	var _eyeColor;
	var _birthYear;
}	

PeopleModel.prototype = {
	setName : function(name) {
		this._name = name;
	},
	getName : function() {
		return this._name;
	},
	setHeight : function (height) {
		this._height = height;
	},
	getHeight : function () {
		return this._height;
	},
	setMass : function (mass) {
		this._mass = mass;
	},
	getMass : function () {
		return this._mass;
	},
	setHairColor : function (hairColor) {
		this._hairColor = hairColor;
	},
	getHairColor : function () {
		return this._hairColor;
	},
	setSkinColor : function (skinColor) {
		this._skinColor = skinColor;
	},
	getSkinColor : function () {
		return this._skinColor;
	},
	setEyeColor : function (eyeColor) {
		this._eyeColor = eyeColor;
	},
	getEyeColor : function () {
		return this._eyeColor;
	},
	setBirthYear : function (birthYear) {
		this._birthYear = birthYear;
	},
	getBirthYear : function () {
		return this._birthYear;
	}
}