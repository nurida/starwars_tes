$(function () {	
	/*
	$.ajax({
  		dataType: "json",
  		url: "http://swapi.co/api/planets/?page=1",  		
  		success: function (response) {
  			generatePlanets(response);
  		}
	});	
	*/
	
	generatePlanets(planetJSON);
	var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

  	var init = function() {
    	body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
      		$(this).removeClass('hide-UI').addClass("set-speed");
      		$(this).dequeue();
    	});
  	};

  	var setView = function(view) { universe.removeClass().addClass(view); };

  	$("#toggle-data").click(function(e) {
    	body.toggleClass("data-open data-close");
    	e.preventDefault();
  	});

  	$("#data a").click(function(e) {
  		var ref = $(this).attr("class");
    	$(this).parent().find('a').removeClass('active');
    	$(this).addClass('active');
    	e.preventDefault();
  	});	
	init();
});

function generatePlanets(response) {
	var planets = response;
	var view = new PlanetView();	
	var controller = new PlanetController(view);
	controller.addPlanet(planets);
}

function showDetail(name, diameter, climate, terrain, population, residents) {	
	var planet = new PlanetModel();
	planet.setName(name);
	planet.setDiameter(diameter);
	planet.setClimate(climate);
	planet.setTerrain(terrain);
	planet.setPopulation(population);
	if(residents != undefined) {
		planet.setResidents(residents.split(","));
		console.log(planet.getResidents());
	} else {
		planet.setResidents(null);
	}	
	var view = new PlanetView();
	var controller = new PlanetController(view);
	controller.showDetailPlanet(planet);	
}

function showResidents(residents) {
	var messages;
	var arr_residents = residents.split(",");
	var view = new PeopleView();
	var controller = new PeopleController(view);	
	controller.showPeoples(arr_residents);
	setTimeout(function(){
		  messages = controller.getData();
		  $.blockUI({ message: messages });  
		  $('.blockOverlay').attr('title','Click to unblock').click($.unblockUI); 
	}, 8000);	
	
	$.blockUI({ message: null }); 
 
    setTimeout($.unblockUI, 7000);
	
}