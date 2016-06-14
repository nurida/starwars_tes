function PlanetView () {	
	this.planets = new Array();
}

PlanetView.prototype = {
	buildPlanet : function (planet) {
		this.planets.push(planet);
	},
	buildPlanets : function () {
		var planet_;
		for(var i = 0; i < this.planets.length; i++) {
			var planet = this.planets[i];
			if(i ==0) {
				planet_ = planet;
			}
			this.setData(planet);
			this.setOrbital(planet, i);
		}		
		var arr_residents = planet.getResidents();
		var residents = arr_residents.join();
		showDetail(planet_.getName(), planet_.getDiameter(), planet_.getClimate(), planet_.getTerrain(), planet_.getPopulation(), residents);
	},
	getPlanets : function () {
		return this.planets;
	},
	setData: function (planet) {	
		var arr_residents = planet.getResidents();
		var residents = arr_residents.join();
		
		$("#data").append(
				'<a title="'+planet.getName()+'" href="#" class="'+planet.getName()+'" onclick="showDetail(\''+planet.getName()+'\',\''+planet.getDiameter()+'\',\''+planet.getClimate()+'\',\''+planet.getTerrain()+'\',\''+planet.getPopulation()+'\', \''+residents+'\');">'+planet.getName()+'</a>'
			);
	},
	setOrbital : function (planet, pos) {		
		var orbital = parseInt(planet.getOrbitalPeriod()) / 10;
		if(orbital > 80) {
			orbital = 80 + (10*pos);
		}		
		var margin = orbital / 2;
		var rotationPeriod = planet.getRotationPeriod();

		var backgroundImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAGBQTFRFsW89lWA2jVwzsm8+qGo72oVJrW08h1gxlWA15IpMrW09jlw0l2E2nGM3v3ZC3YdK3odKyHtE75BP8JFQ8JFQ8JFQ8JFQ8JFQw3hD8JFQ8JFQ8JFQ8JFQ8JFQ8JFQAAAAe3ooYQAAACB0Uk5Tk0+hrcTz6g7P5tkiYurz49bk79XR3vvm2PH26ezi2QCQ4vSgAAABm0lEQVQoz1VSWXaEMAzLLAw7ZHMSx0vvf8uaTtvX+icQYSRbch/vGrf7ftV0v43fV+59bNP+Oo6jtXAs0/YHWg1o4TxnqyG05bn+QOt0AUIRKWVV39qyvqF1f4VTFSqiZgWuerarz6D7KwyoqkI19k5UFYfjeUHbdJzEkLQS9cLCSELDsX24cVoCVYYMHXsphQk0Aw2v0W17OCv2CPwFIWnSBDAfmzOmSt0KmZhj1ZwERLU5N72GwsyIREwCKZtIsAe/uL3NpapW42ciMTWitXI8g9uDj/aCAEZoaqRHtf8ZmduPFAtW1kz2BWntXQRUo0FhTrVcKxLTZmNbi7Fd0NR8Vhsz5x6jZMHIrJrS3Nx98WAQ5lyJsXdGGxs0eeduS5Brs1+y2dZRe0EBajc3LuaHEKRks8qFIYrC0EZb79KM31qUbCO9l44mJWyXKY9mbMnkJzAeo0Ni/3hb+WynqDGkDJHNa/Okrd8BWJpPag1gHpdO5vL6G5tnC15rRBaI6sNj/Ru25Wjez3E+LTTbvxxaRB/PdtVj+4noJ91nOp3NTB6wAAAAAElFTkSuQmCC';

		if(planet.getClimate() == 'temperate, tropical') {
			backgroundImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAGBQTFRFGDRdAyFNIDxkQld5CCZTIztsJD1lAAAArsblO230dJfgP2vUnLbbbovAOF2vN1GERnb0Un/yW3asWH3PeY+uhKfyYXaVjafNT2WNeJ3zv9f0nrzzX4rzkLHzrcjzbZX0L9IPbAAAAAh0Uk5TfSC49Uv+4wC/XoCAAAACEUlEQVQoz12T2WKrMAxECWDC4n1fZOv//7IiaXp760cOtkaj0fT8nHXe1LLEmJd5/fk4feDGGFPeR0U/5G39H290zXohhJUi+czY9gs/lhytsM4JvvPEebJZsccH3zSldDrX6uhw8jMl/+Y33nKWibdQChhTsDRzXdbm5Y1nla1LYxAwGjsChvPmcb7xGrMVrtemQdPB0ltt6C6Z80p4y164CxpqMMcBZdRWey9O2rg9p5VlIS5ttMGCiGFUgn20xoXP6zQrJd2JAKW83q11tF5Cb9zZPE9btPIcI5AmLKXXEfoIASGchLeJ5eTCKNA7GMReu8HR26AGLqnUxFRyF3U7aqFrpQVjXrXBOJGXKUexl5fgPsgzqjpIV2sAztk4ZZ/2gVBqfb8NJH/QwcC5j1P0KTU0UOttKrUHh8Y2qL/9jcUZAsCrJTwOHYyG3so3XrJNJ7U1Xn4UfWiAW1nrPPllmqk4v1lrRQMarQ2QPKonBNmyLlScGg1Ik6C6QG8XbA3P5NlKI6EonGHoA2gY5BwZVqAAReIeyXNlyvJ9DJpWozcPU8hzJFNsvAf6pIySOooDUBA6tRBCP5OUav4OE1NSXHu9nQ+kn9LiklXbTxSJS7fvt1kAx+Wc9H57/Aty9FImms3Or+uSBOPy+LUGc/RkT6KgO0lVY57/LpHKlEnrvacV+LtE7xVkSuW8bL9W8AvOdz8ZXmQqKAAAAABJRU5ErkJggg==';
		} else
		if(planet.getClimate() == 'frozen') {
			backgroundImage = 'data:image/png;base64,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';
		} else 
		if(planet.getClimate() == 'murky') {
			backgroundImage = 'data:image/png;base64,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';
		}

		var diameter = (parseInt(planet.getDiameter()) / 100 ) / 2;
		if(diameter > 30) {
			diameter = 30;
		}

		$("#solar-system").append(
			'<div id="mercury" class="orbit"' +
			'style=" width: '+orbital+'em;'+
			'height: '+orbital+'em;'+
			'margin-top: -'+margin+'em;'+
			'margin-left: -'+margin+'em;'+
			'animation-duration: '+rotationPeriod+'s;'+
			'z-index: 9;'+
			'border: 5px solid rgba(255, 255, 255, 0.8);">'+

			'<div class="pos" style="animation-duration: '+rotationPeriod+'s;">'+
			'<div class="planet" style="animation-duration: '+rotationPeriod+'s; width: 30px; height: 30px; margin-top:-10px; margin-left: -10px;'+
			'				background-image: url('+backgroundImage+'); width:'+diameter+'px; height:'+diameter+'px; margin-left:-10px; margin-top:-10px;">' +
			'<dl class="infos" style="display: block;opacity: 1;transform: rotateX(0deg);">'+
			'<dt>'+planet.getName()+'</dt>'+
			'<dd><span></span></dd>'+
			'</dl>'+
			'</div>'+

			'</div>'
			);
		
	},
	
	showDetailPlanet : function(planet) {
		var arr_residents = planet.getResidents();
		var residents = arr_residents.join();	
		$("#controls label span").each(function(i, obj) {			
			if(i == 0) {
				$(this).html("Name :");
				$(this).append(" " + planet.getName());
			} else
			if(i == 1) {
				$(this).html("Diameter :");
				$(this).append(" " + planet.getDiameter());
			} else
			if(i == 2) {
				$(this).html("Climate :");
				$(this).append(" " + planet.getClimate());
			} else 
			if(i == 3) {
				$(this).html("Terrain :");
				$(this).append(" " + planet.getTerrain());
			} else
			if(i == 4) {
				$(this).html("Population :");
				$(this).append(" " + planet.getPopulation());
			} else 
			if(i == 5) {				
				$(this).html('<a href="#" onclick="showResidents(\''+residents+'\');">Click to show residents</a>');
			}
		});
	}
}