
//}
//var click=function(){
//	document.querySelector('aside').style.color = 'blue';
var wys = 100;
var dlu = 100;
var x = 13;
var y = 613;

var nav1 = function(){
	document.querySelector('main').style.color = 'red';
}

var nav2 = function(){
	document.querySelector('main').style.color = 'orange';
}
var nav3 = function(){
	document.querySelector('main').style.color = 'blue';
}
var nav4 = function(){
	document.querySelector('main').style.color = 'lime';
}
var nav5 = function(){
	document.querySelector('main').style.color = 'white';
}
var nav6 = function(){
	document.querySelector('main').style.color = 'black';
}



function plus(w, d) {
	wys += w;
	dlu += d;
	var tw = wys +'px';
	var td = dlu +'px';
	document.querySelector('img').style.height = tw;
	document.querySelector('img').style.width = td;
}

function lol(w, d) {
	wys += w;
	dlu += d;
	var tw = wys +'px';
	var td = dlu +'px';
	document.querySelector('img').style.height = tw;
	document.querySelector('img').style.width = td;

}


	function szukaj (){
		var zapytanie = document.getElementById('zapytanie').value;
		var link = 'http://maps.google.com/?q=';
		window.open(link+zapytanie)
	
}

	var gracze = ['Janusz','Grażyna']
