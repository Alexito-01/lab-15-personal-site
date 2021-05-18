function draw() {
	var sketch = document.getElementById('sketch');
	var context = sketch.getContext("2d");

	var red = "#FD0003";
	var blue = "#0070C8";
	var yellow = "#F0FF08";
	var brown = "#914B05";
	var skin = "#FBC08E";
	var green = "#69BE2F";

	//Row 1
	context.fillStyle = red;
	context.fillRect(200, 50, 50, 50);
	context.fillRect(250, 50, 50, 50);
	context.fillRect(300, 50, 50, 50);
	context.fillRect(350, 50, 50, 50);
	context.fillRect(400, 50, 50, 50);
	context.fillRect(450, 50, 50, 50);
	// Row 2
	context.fillRect(150, 100, 50, 50);
	context.fillRect(200, 100, 50, 50);
	context.fillRect(250, 100, 50, 50);
	context.fillRect(300, 100, 50, 50);
	context.fillRect(350, 100, 50, 50);
	context.fillRect(400, 100, 50, 50);
	context.fillRect(450, 100, 50, 50);
	context.fillRect(500, 100, 50, 50);
	context.fillRect(550, 100, 50, 50);
	context.fillRect(600, 100, 50, 50);
	//Row 3
	context.fillStyle = brown;
	context.fillRect(150, 150, 50, 50);
	context.fillRect(200, 150, 50, 50);
	context.fillRect(250, 150, 50, 50);
	context.fillStyle = skin;
	context.fillRect(300, 150, 50, 50);
	context.fillRect(350, 150, 50, 50);
	context.fillRect(400, 150, 50, 50);
	context.fillStyle = "#000000";
	context.fillRect(450, 150, 50, 50);
	context.fillStyle = skin;
	context.fillRect(500, 150, 50, 50);
	//Row 4
	context.fillStyle = brown;
	context.fillRect(100, 200, 50, 50);
	context.fillStyle = skin;
	context.fillRect(150, 200, 50, 50);
	context.fillStyle = brown;
	context.fillRect(200, 200, 50, 50);
	context.fillStyle = skin;
	context.fillRect(250, 200, 50, 50);
	context.fillRect(300, 200, 50, 50);
	context.fillRect(350, 200, 50, 50);
	context.fillRect(400, 200, 50, 50);
	context.fillStyle = "#000000";
	context.fillRect(450, 200, 50, 50);
	context.fillStyle = skin;
	context.fillRect(500, 200, 50, 50);
	context.fillRect(550, 200, 50, 50);
	context.fillRect(600, 200, 50, 50);
	//Row 5
	context.fillStyle = brown;
	context.fillRect(100, 250, 50, 50);
	context.fillStyle = skin;
	context.fillRect(150, 250, 50, 50);
	context.fillStyle = brown;
	context.fillRect(200, 250, 50, 50);
	context.fillRect(250, 250, 50, 50);
	context.fillStyle = skin;
	context.fillRect(300, 250, 50, 50);
	context.fillRect(350, 250, 50, 50);
	context.fillRect(400, 250, 50, 50);
	context.fillRect(450, 250, 50, 50);
	context.fillStyle = "#000000";
	context.fillRect(500, 250, 50, 50);
	context.fillStyle = skin;
	context.fillRect(550, 250, 50, 50);
	context.fillRect(600, 250, 50, 50);
	context.fillRect(650, 250, 50, 50);
	//Row 6
	context.fillStyle = brown;
	context.fillRect(100, 300, 50, 50);
	context.fillRect(150, 300, 50, 50);
	context.fillStyle = skin;
	context.fillRect(200, 300, 50, 50);
	context.fillRect(250, 300, 50, 50);
	context.fillStyle = skin;
	context.fillRect(300, 300, 50, 50);
	context.fillRect(350, 300, 50, 50);
	context.fillRect(400, 300, 50, 50);
	context.fillStyle = "#000000";
	context.fillRect(450, 300, 50, 50);
	context.fillRect(500, 300, 50, 50);
	context.fillRect(550, 300, 50, 50);
	context.fillRect(600, 300, 50, 50);
	//Row 7
	context.fillStyle = skin;
	context.fillRect(200, 350, 50, 50);
	context.fillRect(250, 350, 50, 50);
	context.fillRect(300, 350, 50, 50);
	context.fillRect(350, 350, 50, 50);
	context.fillRect(400, 350, 50, 50);
	context.fillRect(450, 350, 50, 50);
	context.fillRect(500, 350, 50, 50);
	context.fillRect(550, 350, 50, 50);
	//Row 8
	context.fillStyle = red;
	context.fillRect(150, 400, 50, 50);
	context.fillRect(200, 400, 50, 50);
	context.fillStyle = blue;
	context.fillRect(250, 400, 50, 50);
	context.fillStyle = red;
	context.fillRect(300, 400, 50, 50);
	context.fillRect(350, 400, 50, 50);
	context.fillRect(400, 400, 50, 50);
	context.fillRect(450, 400, 50, 50);
	//Row 9
	context.fillStyle = red;
	context.fillRect(100, 450, 50, 50);
	context.fillRect(150, 450, 50, 50);
	context.fillRect(200, 450, 50, 50);
	context.fillStyle = blue;
	context.fillRect(250, 450, 50, 50);
	context.fillStyle = red;
	context.fillRect(300, 450, 50, 50);
	context.fillRect(350, 450, 50, 50);
	context.fillStyle = blue;
	context.fillRect(400, 450, 50, 50);
	context.fillStyle = red;
	context.fillRect(450, 450, 50, 50);
	context.fillRect(500, 450, 50, 50);
	context.fillRect(550, 450, 50, 50);
	//Row 10
	context.fillStyle = red;
	context.fillRect(50, 500, 50, 50);
	context.fillRect(100, 500, 50, 50);
	context.fillRect(150, 500, 50, 50);
	context.fillRect(200, 500, 50, 50);
	context.fillStyle = blue;
	context.fillRect(250, 500, 50, 50);
	context.fillStyle = red;
	context.fillRect(300, 500, 50, 50);
	context.fillRect(350, 500, 50, 50);
	context.fillStyle = blue;
	context.fillRect(400, 500, 50, 50);
	context.fillStyle = red;
	context.fillRect(450, 500, 50, 50);
	context.fillRect(500, 500, 50, 50);
	context.fillRect(550, 500, 50, 50);
	context.fillRect(600, 500, 50, 50);
	//Row 11
	context.fillStyle = skin;
	context.fillRect(50, 550, 50, 50);
	context.fillRect(100, 550, 50, 50);
	context.fillStyle = red;
	context.fillRect(150, 550, 50, 50);
	context.fillStyle = blue;
	context.fillRect(200, 550, 50, 50);
	context.fillStyle = yellow;
	context.fillRect(250, 550, 50, 50);
	context.fillStyle = blue;
	context.fillRect(300, 550, 50, 50);
	context.fillRect(350, 550, 50, 50);
	context.fillStyle = yellow;
	context.fillRect(400, 550, 50, 50);
	context.fillStyle = blue;
	context.fillRect(450, 550, 50, 50);
	context.fillStyle = red;
	context.fillRect(500, 550, 50, 50);
	context.fillStyle = skin;
	context.fillRect(550, 550, 50, 50);
	context.fillRect(600, 550, 50, 50);
	//Row 12
	context.fillStyle = skin;
	context.fillRect(50, 600, 50, 50);
	context.fillRect(100, 600, 50, 50);
	context.fillRect(150, 600, 50, 50);
	context.fillStyle = blue;
	context.fillRect(200, 600, 50, 50);
	context.fillRect(250, 600, 50, 50);
	context.fillRect(300, 600, 50, 50);
	context.fillRect(350, 600, 50, 50);
	context.fillRect(400, 600, 50, 50);
	context.fillRect(450, 600, 50, 50);
	context.fillStyle = skin;
	context.fillRect(500, 600, 50, 50);
	context.fillRect(550, 600, 50, 50);
	context.fillRect(600, 600, 50, 50);
	//Row 13
	context.fillStyle = skin;
	context.fillRect(50, 650, 50, 50);
	context.fillRect(100, 650, 50, 50);
	context.fillStyle = blue;
	context.fillRect(150, 650, 50, 50);
	context.fillRect(200, 650, 50, 50);
	context.fillRect(250, 650, 50, 50);
	context.fillRect(300, 650, 50, 50);
	context.fillRect(350, 650, 50, 50);
	context.fillRect(400, 650, 50, 50);
	context.fillRect(450, 650, 50, 50);
	context.fillRect(500, 650, 50, 50);
	context.fillStyle = skin;
	context.fillRect(550, 650, 50, 50);
	context.fillRect(600, 650, 50, 50);
	//Row 14
	context.fillStyle = blue;
	context.fillRect(150, 700, 50, 50);
	context.fillRect(200, 700, 50, 50);
	context.fillRect(250, 700, 50, 50);
	context.fillRect(400, 700, 50, 50);
	context.fillRect(450, 700, 50, 50);
	context.fillRect(500, 700, 50, 50);
	//Row 15
	context.fillStyle = brown;
	context.fillRect(100, 750, 50, 50);
	context.fillRect(150, 750, 50, 50);
	context.fillRect(200, 750, 50, 50);
	context.fillRect(450, 750, 50, 50);
	context.fillRect(500, 750, 50, 50);
	context.fillRect(550, 750, 50, 50);
	//Row 16
	context.fillRect(50, 800, 50, 50);
	context.fillRect(100, 800, 50, 50);
	context.fillRect(150, 800, 50, 50);
	context.fillRect(200, 800, 50, 50);
	context.fillRect(450, 800, 50, 50);
	context.fillRect(500, 800, 50, 50);
	context.fillRect(550, 800, 50, 50);
	context.fillRect(600, 800, 50, 50);
}