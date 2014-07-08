var ore = 0;
var minuti = 0;
var secondi = 0;
var decimi = 0;
var visualizzazione = "";
var contatore_intertempi = 0;

var totalSeconds = 0;
var totalMinutes = 0;

var stop = 1; //0=attivo 1=fermo

//Shitting Values
var shittingValues = [];

/**
 * Start the Chrono 
 */
function avvia() {
	if (stop == 1) {
		stop = 0;
		cronometro();
	}
}

/**
 * Chrono Costructor Class
 */
function cronometro() {
	if (stop == 0) {
		decimi += 1;
		if (decimi > 9) {
			decimi = 0;
			secondi += 1;
		}
		if (secondi > 59) {
			secondi = 0;
			minuti += 1;
		}
		if (minuti > 59) {
			minuti = 0;
			ore += 1;
		}

		if (ore < 10) {
			visualizzazione = "0" + ore;
		} else {
			visualizzazione = ore;
		}
		if (minuti < 10) {
			visualizzazione = visualizzazione + ":0" + minuti;
		} else {
			visualizzazione = visualizzazione + ":" + minuti;
		}
		if (secondi < 10) {
			visualizzazione = visualizzazione + ":0" + secondi;
		} else {
			visualizzazione = visualizzazione + ":" + secondi;
		}
		visualizzazione = visualizzazione + ":" + decimi;

		document.getElementById("mostra_cronometro").value = visualizzazione;
		setTimeout("cronometro()", 100);
	}
}

/**
 * Stop ans Save the Chrono Results
 */
function intertempo() {
	if (stop == 0) {
		contatore_intertempi += 1;
		document.getElementById("intertempi").appendChild(
				document.createTextNode(contatore_intertempi + ". "
						+ visualizzazione));
		document.getElementById("intertempi").appendChild(
				document.createElement("br"));
	}
}

/**
 * Stop the Chrono
 */
function ferma() {
	stop = 1;
	shittingValues.push(getMinutesValues());
	//shittingValues.push((getMinutesValues() * 100));
	
	printChart();
}

/**
 * Return the values of chrono in seconds
 * @returns {Number}
 */
function getSecondsValues() {
	if (minuti != 0) {
		totalSeconds = secondi + (minuti * 60);
	} else {
		totalSeconds = secondi;
	}

	return totalSeconds;
}

/**
 * Return the values of chrono in minutes
 * @returns {Number}
 */
function getMinutesValues() {
	if (minuti != 0) {
		if (secondi != 0) {
			totalMinutes = minuti + (secondi / 60);
		} else {
			totalMinutes = minuti;
		}
	} else if (secondi != 0) {
		totalMinutes = (secondi / 60);
	}

	return totalMinutes;
}

/**
 * Clear the chrono Results
 */
function azzera() {
	if (stop == 1) {
		ore = 0;
		minuti = 0;
		secondi = 0;
		decimi = 0;

		document.getElementById("mostra_cronometro").value = "00:00:00:0";
	}
}

/**
 * Return the data values Array
 * @returns {Array}
 */
function getDataValues(){
	return shittingValues;
}
//************************************
//****** CHART ********
//************************************

function getChronoValue() {
	var chronoValue = document.getElementById("mostra_cronometro").getValue();

	alert(chronoValue);
}

var randomScalingFactor = function() {
	return Math.round(Math.random() * 100)
};


function printChart(){
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(createLineChart(), {
		responsive : true
	});
}

/**
 * Create a Dinamic LineChart
 * @returns {___anonymous3101_4196}
 */
function createLineChart(){
	var lineChartData = {
			labels : [ "First", "Second", "Thirt", "Fourth", "Fifth", "Sixth", "" ],
			datasets : [
					{
						label : "My First dataset",
						fillColor : "rgba(220,220,220,0.2)",
						strokeColor : "rgba(220,220,220,1)",
						pointColor : "rgba(220,220,220,1)",
						pointStrokeColor : "#fff",
						pointHighlightFill : "#fff",
						pointHighlightStroke : "rgba(220,220,220,1)",
						data: shittingValues
					}]

		}
	
	return lineChartData;
}

function shittingMedia(){
	
}

window.onload = function() {
	var date = new Date(),
    output = document.getElementById( 'output' ),
    dateString = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear().toString();


	output.innerHTML = "Is time to Shitting: " + dateString;
	
//	var ctx = document.getElementById("canvas").getContext("2d");
//	window.myLine = new Chart(ctx).Line(lineChartData, {
//		responsive : true
//	});
}