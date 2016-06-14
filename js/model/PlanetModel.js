function PlanetModel() {
	var _climate;
	var _created;
	var _diameter;
	var _edited;
	var _films;
	var _gravity;
	var _name;
	var _orbital_period;
	var _population;
	var _residents;
	var _rotation_period;
	var _surface_water;
	var _terrain;
	var _url;
}

PlanetModel.prototype =  {
	
	setClimate : function (climate) {
		this._climate = climate;
	},
	getClimate : function () {
		return this._climate;
	},
	setCreated : function (created) {
		this._created = created;
	},
	getCreated : function () {
		return this._created;
	},
	setDiameter : function (diameter) {
		this._diameter = diameter;
	},
	getDiameter : function () {
		return this._diameter;
	},
	setEdited : function (edited) {
		this._edited = edited;
	},
	getEdited : function () {
		return this._edited;
	},
	setFilms : function (films) {
		this._films = films;
	},
	getFilms : function () {
		return this._films;
	},
	setGravity : function (gravity) {
		this._gravity = gravity;
	},
	getGravity : function () {
		return this._gravity;
	},
	setName : function (name) {
		this._name = name;
	},
	getName : function () {
		return this._name;
	},
	setOrbitalPeriod : function(orbital_period)	{
		this._orbital_period = orbital_period;
	},
	getOrbitalPeriod : function () {
		return this._orbital_period;
	},
	setPopulation : function (population) {
		this._population = population;
	},
	getPopulation : function () {
		return this._population;
	},
	setResidents : function (residents) {
		this._residents = residents;
	},
	getResidents : function () {
		return this._residents;
	},
	setRotationPeriod : function (rotation_period) {
		this._rotation_period = rotation_period;
	},
	getRotationPeriod : function () {
		return this._rotation_period;
	},
	setSurfaceWater : function (surface_water) {
		this._surface_water = surface_water;
	},
	getSurfaceWater : function () {
		return this._surface_water;
	},
	setTerrain : function (terrain) {
		this._terrain = terrain;
	},
	getTerrain : function () {
		return this._terrain;
	},
	setUrl : function (url) {
		this._url = url;
	},
	getUrl : function () {
		return this._url;
	}
}

