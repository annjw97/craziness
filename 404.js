
console.log("I'm here");


var bd = document.body;
bd.style.backgroundColor = "rgb(200, 0, 100)";
//createElement

var headerElement = document.createElement('h1');
headerElement.textContent = "There is no page that exist here. Creepy";
bd.appendChild(headerElement);
headerElement.style.color="rgb(0, 255, 75)";

//grab elements from the html
var grabbed = document.getElementById("a");
grabbed.style.backgroundColor = "rgb(255, 0, 255)";
grabbed.style.color = "rgb(0, 50, 100)";

var headerElement3 = document.createElement('h1');
headerElement3.textContent="There is no page that exists here. Creepy 3";
bd.appendChild(headerElement3);
headerElement3.style.color = "rbg(0, 255, 75)"

//use a for-loop
for (let i = 0; i < 255; i = i+1){ // a for-loop

  var iFlipped = (i* -1, 255);
  var temp = document.createElement('h1');
  temp.textContent = "a element added--" + String(i);
  temp.style.color= "rgb("+i+", 255, 100)"; // "rgb (i, 255,255)"
  temp.style.backgroundColor = "hsl(" +iFlipped + ", 100%, 50%)";
  bd.appendChild(temp);

  //now add 1 to i

}
