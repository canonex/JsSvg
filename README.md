# JsSvg
Helpers to create dom svg graphic using javascript.


Ex.
Create an html container
```
<div id="drawing">
```

than in js
```
//Svg element creation
//Please read about viewbox
var svg = svg("originale", undefined, "0 0 800 600" );


//Create a style
var rectStyle = new svgStyle(undefined, undefined, "lightgray" );

//Add rectangle
var rect = svgRect("rectangle", 0, 10, 100, 125, rectStyle);

svg.appendChild(rect);


//Svg container
var cont = document.getElementById('drawing');
cont.appendChild(svg);
```

Voilà.
