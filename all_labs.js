function greetings() {
	var username = prompt("What is your name?");
	console.log("Hello there, " + username + "!");
	window.alert("Hello there, " + username + "!");
}

function madlibs() {
	var series = prompt("Enter a Series Name: ");
	var adjective = prompt("Enter a adjective: ");
	var person = prompt("Enter the name of the main character from " + series + " : ");
	var adjectivetwo = prompt("Enter a adjective: ");
	var noun = prompt("Enter a noun: ");
	//var adjectiveethree = prompt("Enter a adjective: ");
	var verb = prompt("Enter a verb: ");
	var number = prompt("Enter a number: ");
	var adjectivefour = prompt("Enter a adjective: ");
	var nountwo = prompt("Enter a noun: ");
	var nounthree = prompt("Enter a noun: ");
	var nounfour = prompt("Enter a noun: ");

	console.log(series + " is the " + adjective + " Series ever.");
	console.log("The main character is " + person + ", the plot was " + adjectivetwo + ",");
	console.log("and the " + noun + " was very fun to look at.");
	console.log("I would " + verb + " this series if I had the chance.");
	console.log("If only " + series + " was real.");
	console.log("This deserves " + number + " star(s) for being the " + adjectivefour + " series in history.");
	console.log("I can't wait for the next season.");
	console.log("Hopefully they add " + nountwo + " to it.");
	console.log("That would blow my " + nounthree + ".");
	console.log("My " + nounfour + " is shivering just thinking about it.");


	window.alert(series + " is the " + adjective + " Series ever." +
	" The main character is " + person + ", the plot was " + adjectivetwo + "," +
	" and the " + noun + " was very fun to look at." +
	" I would " + verb + " this series if I had the chance." +
	" If only " + series + " was real." +
	" This deserves " + number + " star(s) for being the " + adjectivefour + " series in history." +
	" I can't wait for the next season." +
	" Hopefully they add " + nountwo + " to it." +
	" That would blow my " + nounthree + "." +
	" My " + nounfour + " is shivering just thinking about it.");
	}
function miles() {
	var miles = prompt("How many miles did you drive?");
	var gallons = prompt("How many gallons of gas did you use?");
	var gpm;

	gpm = (miles / gallons).toFixed(2);

	console.log("Your car gets " + gpm + " miles per gallon.");
	window.alert("Your car gets " + gpm + " miles per gallon.");
}
function temp() {
	var celsius = prompt("Please enter a temperature in celsius");
	var fahrenheit;

	fahrenheit = (9/5 * celsius + 32).toFixed(1);

	window.alert(celsius + " degrees celsius is " + fahrenheit + " degrees fahrenheit");
	//document write("Same as window.alert");
	console.log(celsius + " degrees celsius is " + fahrenheit + " degrees fahrenheit");
}
function saytwice() {
	var double = prompt("Give me a word to say twice");
		
	console.log(double + " " + double);
	window.alert(double + " " + double);
}
function shout() {
	var shout = prompt("Enter a word and I will shout it.");

	console.log(shout + "!!!");
	window.alert(shout + "!!!");
}
function cake() {
	var cake = prompt("Do you want cake? yes/no: ");

	if(cake === "yes" || cake === "YES")
	{
		console.log("Have some cake.");
		window.alert("Have some cake.");
	}
	else if(cake === "no" || cake === "NO"){
		console.log("No cake for you");
		window.alert("No cake for you");
	}
	else {
		console.log("I don't understand");
		window.alert("I don't understand");
	}
}
function spanish() {
	var word = prompt("Give me the words cat, dog or horse in English: ");

	if (word === "Cat" || word === "cat")
	{
		console.log("Gato");
		window.alert("Gato");
	}
	else if (word === "Dog" || word === "dog")
	{
		console.log("Perro");
		window.alert("Perro");
	}
	else if (word === "Horse" || word === "horse")
	{
		console.log("Caballo");
		window.alert("Caballo");
	}
	else
	{
		console.log("No Entiendo");
		window.alert("No Entiendo");
	}
}
function oddcal() {
	var numone = prompt("Give me a number: ");
	var numtwo = prompt("Give me another number: ");
	var expression = prompt("To multiply enter mul: \nTo divide enter div: \nTo Modulo enter mod: ");
	var output;

	if (expression === "mul")
	{
		output = numone * numtwo;
		console.log("The answer is: " + output);
		window.alert("The answer is: " + output);
	}
	else if (expression === "div")
	{
		output = numone / numtwo;
		console.log("The answer is: " + output);
		window.alert("The answer is: " + output);
	}
	else if (expression === "mod")
	{
		output = numone % numtwo;
		console.log("The answer is: " + output);
		window.alert("The answer is: " + output);
	}
	else
	{
		console.log("Sorry I don't understand");
		window.alert("Sorry I don't understand");
	}
}
function flowchart() {
  var move = prompt("Does it move? (yes/no)");
  
  if (move == "yes")
  {
  
    var should = prompt("Should it? (yes/no)");
  
    if (should == "yes")
    {
      console.log("No problem");
      window.alert("No problem");
    }
    else if (should == "no") 
    {
      console.log("Then use duct tape!!!");
      window.alert("Then use duct tape!!!");
    }
    else 
    {
      console.log("Answer my question! You didn't type yes or no.");
      	window.alert("Answer my question! You didn't type yes or no.");
    }
  }
  else if (move == "no")
  {
    var should = prompt("Should it? (yes/no)");
    
    if (should == "yes")
    {
      console.log("Then use WD-40!!!");
      window.alert("Then use WD-40!!!");
    }
    else if (should == "no") 
    {
      console.log("No problem");
      window.alert("No problem");
    }
    else 
    {
      console.log("Answer my question! You didn't type yes or no.");
      window.alert("Answer my question! You didn't type yes or no.");
    }
  }
  else 
  {
    console.log("Answer my question! You didn't type yes or no.");
    window.alert("Answer my question! You didn't type yes or no.");
  }  
}
function tens() {
	for(var i = 20; i <=100; i = i + 10)
	{
		console.log(i);
	}

	window.alert("Check Console.");
}
function average() {
	var numone = prompt("Enter a number please: ");
	var onenum = parseInt(numone, 10);
	
	var numtwo = prompt("Enter another number please: ");
	var twonum = parseInt(numtwo, 10);
		
	var numthree = prompt("Enter a third number please: ");
	var threenum = parseInt(numthree, 10);
	
	var numfour = prompt("Enter final number please: ");
	var fournum = parseInt(numfour, 10);

	var ave = (onenum + twonum + threenum + fournum) / 4;
	//console.log(onenum + twonum + threenum + fournum);

	console.log("The average is: " + ave);
	window.alert("The average is: " + ave);
}
function averagev() {
	var ave = 0;
	var sum = 0;

	for(var i = 1; i <= 4; i = i + 1)
	{
		var userinput = prompt("Enter a number please: ");
		var usernum = parseInt(userinput, 10);
		sum = sum + usernum;
		console.log("usernum is " + usernum + "and sum is " + sum);
	}	
	var ave = sum / 4;
	
	console.log("The average is: " + ave);
	window.alert("The average is: " + ave);
}
function fizzbuzz() {
	for(var i = 1; i <=100; i++)//i++ just means i = i + 1
	{
		if (i % 3 == 0 && i % 5 == 0)//senario 1 is a multiple of 3 and 5
		{
			console.log("FizzBuzz");
		}
		else if (i % 3 == 0)//senario 2 is a multiple of 3
		{
			console.log("Fizz");
		}
		else if (i % 5 == 0)//senario 3 is a multiple of 5
		{
			console.log("Buzz");
		}
		else
		{
			console.log(i);
			//document.write(i + "<br>")//senario 4 is not a multiple of 3 or 5	
		}
	}

	window.alert("Check Console.");
}
function party() {
	var time = prompt("Let's party! How long 'til the party?");
	var timer = parseInt(time, 10);
	if (timer > 0)
	{
		for(var i = timer; i >= 1; i = i - 1)
		{
			console.log(i);
			//document.write(i + "<br>");
		}
		console.log("PARTY TIME!!!");
		window.alert("PARTY TIME!!!");
	}
	else
	{
		console.log("PARTY NOW!!!");
		window.alert("PARTY NOW!!!");
	}
}
function double() {
	function double(n) {
		return n * 2
	}

	var usernum = prompt("Number Please: ");
	console.log(double(usernum));
	window.alert(double(usernum));
}
function doublec() {
	function double(n) {
		return n * 2
	}

	var userstring = prompt("Number Please: ");
	var usernum = parseInt(userstring, 10);
	
	console.log(double(usernum));
	window.alert(double(usernum));
}
function plurize() {
	function pluralize(word) {
		return word + "s";
	}

	var userword = prompt("Word Please: ");
	console.log(pluralize(userword));
	window.alert(pluralize(userword));
}
function factorial() {
	function factorial(n) {
		if (n ==1)
		{
			return 1;
		}
		else
		{
			return n * factorial(n- 1);
		}
	}

	var userstring = prompt("Number Please: ");
	var usernum = parseInt(userstring, 10);

	window.alert(factorial(usernum));
}
function factorialv() {
	function factorial(n) {
				
		var total = 1;	
		for (var i = 0; i < n; i = i + 1) {
			total = total * (n - i);
			console.log("Current i is " + i);
			console.log("Current value of total is " + total);
		}
			return total;			
	}
		var userstring = prompt("Number Please: ");
		var usernum = parseInt(userstring);
		console.log(factorial(usernum));
		window.alert(factorial(usernum));
}
function ftt() {
	var x = -6

	for (var i = 0; i < 9; i++) {
		
		x = x + 1;
		console.log(x);
		window.alert(x);

	}
}
function yesandno() {
	var x = 0

	for (var i = 0; i < 100; i++) {
			
		x = x + 1;
		
		if (x % 2 == 0)
		{
			console.log(x +": yes");
		}
		else
		{
			console.log(x +": no");
		}
	}

	window.alert("Check Console.");
}
function fortune() {
	var x = prompt("Enter a number: ")	
	if (x % 2 == 0)
	{
		console.log("You will get money in the next 2 hrs.");
		window.alert("You will get money in the next 2 hrs.");
	}
	else if (x % 3 == 0)
	{
		console.log("You will die a painful death");
		window.alert("You will die a painful death");
	}
	else if (x % 4 == 0)
	{
		console.log("Something about food.");
		window.alert("Something about food.");
	}
	else
	{
		console.log("You get no fortune... idk");
		window.alert("You get no fortune... idk");
	}
}
function greetingsf() {
	function greet() {
		console.log("hello");
		window.alert("hello");
	}

	for (i = 1; i <= 5; i++)
	{
		greet();
	}
}
function gmn() {
	var userstring = prompt("Gimmy a number greater than 100: ");
	var usernum = parseInt(userstring, 10);

	while (usernum <= 100)
	{
		console.log("This number is less than 100, dummy. Try again… I’ve got all day…");
		userstring = prompt(userstring + " is less than 100, dummy. Try again… I’ve got all day… ");
		usernum = parseInt(userstring, 10);
	}

	window.alert(usernum + " is greater than 100! Good work.");
}
function ny() {
	function countDown(start)
		{
			console.log(start);
			window.alert(start);

			let nextNumber = start - 1;

			if (nextNumber > 0)
			{
				countDown(nextNumber);
			}
			else
			{
				console.log("HAPPY NEW YEAR!!!");
				window.alert("HAPPY NEW YEAR!!!");
			}
		}

		countDown(10); // function call
}
function nyv() {
	function countDown(start)
	{
		console.log(start);
		//window.alert(start);

		let nextNumber = start - 1;

		if (nextNumber > 0)
		{
			setTimeout(countDown, 1000, nextNumber);
		}
		else
		{
			setTimeout(function(){console.log("HAPPY NEW YEAR!!!");}, 1000, nextNumber);
			setTimeout(function(){window.alert("HAPPY NEW YEAR!!!");}, 1000, nextNumber);
		}
	}

	var count = parseInt(prompt("How many seconds before the ball drops?"));
	countDown(count);
}
function wfdywo() {
	var maximum_stories = 404;
	var usernum = parseInt(prompt("On what floor of the building is your office?"));
		
	while (usernum > maximum_stories)
	{
		usernum = parseInt(prompt("You entered: " + usernum + ". But there are only " + maximum_stories + " floors in this building. Try again... "));
	}

	window.alert("Congrats! You work on floor: " + usernum);
}
function square() {
	function draw()
	{
		var sketch = document.getElementById('sketch');
		var context = sketch.getContext("2d");
		context.fillStyle = "#FD0003";
		context.fillRect(40, 30, 100, 100);
	}
	draw();
}
function squarecircle() {
	function draw2()
	{
		var sketch = document.getElementById('sketch');
		var context = sketch.getContext("2d");
		context.fillStyle = "#FD0003";
		context.fillRect(40, 30, 100, 100);
		context.beginPath();
		context.fillStyle = "#ff0000";
		context.arc(200, 80, 50, 0, 2 * Math.PI, true);
		context.closePath();
		context.fill();
	}
	draw2();
}
function customcircle() {
	function draw3()
	{
		var sketch = document.getElementById('sketch');
		var context = sketch.getContext("2d");
		
		var radiusstring = prompt("Enter a Radius number: ");

		var radiusint = parseInt(radiusstring);

		while (radiusint > 150) {

			var radiusstring = prompt("Number too Long, enter a diffrent Radius number: ");

			var radiusint = parseInt(radiusstring);
		}

		var color = prompt("Enter a color (Red, Green, Blue, Yellow): ");

		while (color !== "Red" && color !== "Blue" && color !== "Green" && color !== "Yellow" && color !== "red" && color !== "blue" && color !== "green" && color !== "yellow") {

			var color = prompt("Enter a color: Red, Green, Blue or Yellow: ");

		}

		if (color == "Red" || color == "red")
		{
			context.fillStyle = "#ff0000";
		}
		else if (color == "Blue" || color == "blue")
		{
			context.fillStyle = "#0000ff";
		}
		else if (color == "Green" || color == "green")
		{
			context.fillStyle = "#00ff00";
		}
		else if (color == "Yellow" || color == "yellow")
		{
			context.fillStyle = "#FFFF40";
		}

		context.beginPath();
		context.arc(150, 150, radiusint, 0, 2 * Math.PI, true);
		context.closePath();
		context.fill();
	}
	draw3();
}
function animatecode() {
	document.addEventListener('DOMContentLoaded', main);

	var sketch;
	var context;
	var circle = {'x':0, 'y':100, 'r':25};
	var dx = 2;
	var fps = 10;

	function main() {
	 	sketch = document.getElementById('sketch');
		context = sketch.getContext("2d");
		circle = {'x':25, 'y':sketch.offsetHeight/2, 'r':25};
		setInterval(animate, fps);
	}

	function animate() {
		context.clearRect(0, 0, sketch.offsetWidth, sketch.offsetHeight);
		draw_circle(circle.x, circle.y, circle.r);
		circle.x = circle.x + dx;
	}

	function draw_circle(x, y, r) {

		context.beginPath();
		context.fillStyle = "#0000ff";
		context.arc(x, y, r, 0, 2 * Math.PI, true);
		context.closePath();
		context.fill();
	}
}
function five() {
	function draw4()	{
		var sketch = document.getElementById('sketch');
		var context = sketch.getContext("2d");
		
		context.fiilStyle = "#ffffff";

		for (var i = 0; i <= 4; i++) 
		{
			context.fillRect(( i * 25), 20, 20, 20);
		}
	}
	draw4();
}
function alternating() {
	function draw5()	{
		var sketch = document.getElementById('sketch');
		var context = sketch.getContext("2d");
		
		var userstring = prompt("How many pairs do you want?: ");
		var usernum = parseInt(userstring);

		var thismany = usernum * 2 - 2;

		for (var i = 0; i <= thismany; i++) {
			if (i % 2 == 0)//Squares
			{
				context.fiilStyle = "#00ff00";
				context.fillRect((i * 25), 20, 20, 20);
			}
			else//Circles
			{
				context.fiilStyle = "#0000ff";
				context.beginPath();
				context.arc((i * 25 + 10), 30, 10, 0, 2 * Math.PI, true);
				context.closePath();
				context.fill();
			}
		}
	}
	draw5();
}

function clearcanvas() {
	var sketch = document.getElementById('sketch');
	var context = sketch.getContext("2d");
	context.fiilStyle = "#000000";
	context.clearRect(0, 0, 300, 300);
}