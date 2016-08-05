//Riccardo Gagliarducci 2016
//Svg helpers


//Svg line function
function svg(id = "svg", version = "1.1", viewBox = "0 0 800 600") {

   var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

   svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

   svg.setAttribute("id", id);
   svg.setAttribute("viewBox", viewBox);
   svg.setAttribute("version", version);

   return svg;
}



//Svg group function
function svgGroup(id = "group") {

	var svgNS = svg.namespaceURI;
   var aGroup = document.createElementNS(svgNS, "g");

   aGroup.setAttribute("id", id);

   return aGroup;
}



//Svg style function
function svgStyle(fillColor = "#00ffff", fillOpacity = 1, strokeColor = "#000000", strokeOpacity = 1, strokeWidth = "1px", strokeLinecap = "butt", strokeLinejoin = "round", visibility = "visible") {
	this.fillColor = fillColor;
	this.fillOpacity = fillOpacity;
	this.strokeColor = strokeColor;
	this.strokeOpacity = strokeOpacity;
	this.strokeWidth = strokeWidth;
	this.strokeLinecap = strokeLinecap;
	this.strokeLinejoin = strokeLinejoin;
	this.visibility = visibility; //visible | hidden | collapse | inherit
};



//Defs definition function
function svgDefs(id = "defs") {

	var svgNS = svg.namespaceURI;
	var aDefs = document.createElementNS(svgNS, 'defs');

	aDefs.setAttributeNS(null, "id", id);

	return aDefs;
}



//Pattern definition function
function svgPattern(id, width = 100, height = 100, transform = "") {

	var svgNS = svg.namespaceURI;
	var aPattern = document.createElementNS(svgNS, 'pattern');

	aPattern.setAttributeNS(null, "id", id);
	aPattern.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
	aPattern.setAttributeNS(null, "width", width);
	aPattern.setAttributeNS(null, "height", height);
	aPattern.setAttributeNS(null, "patternTransform", transform);

	return aPattern;
}



//Image definition function
function svgImage(id, image, width = 100, height = 100, x = 0, y = 0) {

	var svgNS = svg.namespaceURI;
	var aImage = document.createElementNS(svgNS, 'image');

	aImage.setAttributeNS(null, "id", id);
	aImage.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", image);
	aImage.setAttributeNS(null, "width", width);
	aImage.setAttributeNS(null, "height", height);
	aImage.setAttributeNS(null, "x", x);
	aImage.setAttributeNS(null, "y", y);

	return aImage;
}



//Svg gradient function
//Courtesy of http://stackoverflow.com/questions/10894377/dynamically-adding-a-svg-gradient
//
// svg:   the owning <svg> element
// id:    an id="..." attribute for the gradient
// stops: an array of objects with <stop> attributes
//
//createGradient($('svg')[0],'MyGradient',[
//  {offset:'5%', 'stop-color':'#f60'},
//  {offset:'95%','stop-color':'#ff6'}
//]);
//$('svg path').attr('fill','url(#MyGradient)');
//gradientTransform="rotate(65)"
//x1="0%" y1="0%" x2="100%" y2="0%"
function svgGradient(id, stops, transform = "", coords = ""){

	var svgNS = svg.namespaceURI;
	var aGradient  = document.createElementNS(svgNS,'linearGradient');

	aGradient.setAttributeNS(null, "id", id);
	aGradient.setAttributeNS(null, "gradientTransform", transform);

   if( typeof coords === 'object' ){
      aGradient.setAttributeNS(null, "x1", coords.x1);
      aGradient.setAttributeNS(null, "y1", coords.y1);
      aGradient.setAttributeNS(null, "x2", coords.x2);
      aGradient.setAttributeNS(null, "y2", coords.y2);
   }
/*
   aGradient.setAttributeNS(null, "gradientUnits", "objectBoundingBox");
*/


	for (var i=0;i<stops.length;i++){

		var attrs = stops[i];
		var aStop = document.createElementNS(svgNS,'stop');

		for (var attr in attrs){
			if (attrs.hasOwnProperty(attr)) aStop.setAttribute(attr,attrs[attr]);
		}
		aGradient.appendChild(aStop);
	}
	return aGradient;
}



//Svg line function
function svgLine(id, x1, y1, x2, y2, style) {

	var svgNS = svg.namespaceURI;
    var aLine = document.createElementNS(svgNS, 'line');

	aLine.setAttributeNS(null, "id", id);
	aLine.setAttributeNS(null, "x1", x1);
	aLine.setAttributeNS(null, "y1", y1);
	aLine.setAttributeNS(null, "x2", x2);
	aLine.setAttributeNS(null, "y2", y2);

	aLine.setAttributeNS(null, "stroke", style.strokeColor);
	aLine.setAttributeNS(null, "stroke-opacity", style.strokeOpacity);
	aLine.setAttributeNS(null, "stroke-width", style.strokeWidth);

	aLine.setAttributeNS(null, "stroke-linecap", style.strokeLinecap);
	aLine.setAttributeNS(null, "stroke-linejoin", style.strokeLinejoin);
	aLine.setAttributeNS(null, "visibility", style.visibility);

  return aLine;
}


//Svg rect function
function svgRect(id, x, y, width, height, style) {

	var svgNS = svg.namespaceURI;
    var aRect = document.createElementNS(svgNS, 'rect');

	aRect.setAttributeNS(null, "id", id);
	aRect.setAttributeNS(null, "x", x);
	aRect.setAttributeNS(null, "y", y);
	aRect.setAttributeNS(null, "width", width);
	aRect.setAttributeNS(null, "height", height);

	aRect.setAttributeNS(null, "fill", style.fillColor);
	aRect.setAttributeNS(null, "fill-opacity", style.fillOpacity);

	aRect.setAttributeNS(null, "stroke", style.strokeColor);
	aRect.setAttributeNS(null, "stroke-opacity", style.strokeOpacity);
	aRect.setAttributeNS(null, "stroke-width", style.strokeWidth);

	aRect.setAttributeNS(null, "stroke-linecap", style.strokeLinecap);
	aRect.setAttributeNS(null, "stroke-linejoin", style.strokeLinejoin);
	aRect.setAttributeNS(null, "visibility", style.visibility);

  return aRect;
}


//Svg path function
function svgPath(id, d, style, transform = "") { //"translate( 100, 100 )"

	var svgNS = svg.namespaceURI;
	var aPath = document.createElementNS(svgNS, 'path');

	aPath.setAttributeNS(null, "id", id);
	aPath.setAttributeNS(null, "d", d);

	aPath.setAttributeNS(null, "fill", style.fillColor);
	aPath.setAttributeNS(null, "fill-opacity", style.fillOpacity);

	aPath.setAttributeNS(null, "stroke", style.strokeColor);
	aPath.setAttributeNS(null, "stroke-opacity", style.strokeOpacity);
	aPath.setAttributeNS(null, "stroke-width", style.strokeWidth);

	aPath.setAttributeNS(null, "stroke-linecap", style.strokeLinecap);
	aPath.setAttributeNS(null, "stroke-linejoin", style.strokeLinejoin);
	aPath.setAttributeNS(null, "visibility", style.visibility);

  aPath.setAttributeNS(null, "transform", transform);

  return aPath;
}
