function PlanetController (view) {
	this._view = view;
}

PlanetController.prototype = {

	addPlanet : function (models) {
		for(var i = 0; i < models.results.length; i++) {
			var model = models.results[i];
			var planet = new PlanetModel();
			planet.setClimate(model['climate']);
			planet.setCreated(model['created']);
			planet.setDiameter(model['diameter']);
			planet.setEdited(model['edited']);
			planet.setFilms(model['films']);
			planet.setGravity(model['gravity']);
			planet.setName(model['name']);
			planet.setOrbitalPeriod(model['orbital_period']);
			planet.setPopulation(model['population']);
			planet.setResidents(model['residents']);
			planet.setRotationPeriod(model['rotation_period']);
			planet.setSurfaceWater(model['surface_water']);
			planet.setTerrain(model['terrain']);
			planet.setUrl(model['url']);
			this._view.buildPlanet(planet);
		}

		this._view.buildPlanets();
	},
	
	showDetailPlanet : function(planet) {
		this._view.showDetailPlanet(planet);		
	}
}

