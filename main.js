
// Create canvas variable
canvas=new fabric.Canvas("myCanvas")
//Set initial positions for ball and hole images.
ball_x= 0;
ball_y= 0;
hole_x=600;
hole_y=100
block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png",function (img){
		hole_obg=img;
		hole_obg.scaleToHeight(50);
		hole_obg.scaleToWidth(50);
		hole_obg.set({top:hole_y,left:hole_x})
		canvas.add(hole_obg)
	})

	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function (img){
		ball_obg=img;
		ball_obg.scaleToHeight(50);
		ball_obg.scaleToWidth(50);
		ball_obg.set({top:ball_y,left:ball_x})
		canvas.add(ball_obg)
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if ((ball_x==hole_x) && (ball_y==hole_y)) {
		canvas.remove(ball_obg)
		document.getElementById("hd3").innerHTML="You Have Hit The Goal!"
		document.getElementById("myCanvas").style.borderColor="red"
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if (ball_y >= 5) {
			ball_y=ball_y-block_image_height
			canvas.remove(ball_obg)
			new_image()
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if (ball_y <=450) {
			ball_y=ball_y+block_image_height
			canvas.remove(ball_obg)
			new_image()
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			
				ball_x=ball_x-block_image_width
				canvas.remove(ball_obg)
				new_image()
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			ball_x=ball_x+block_image_width
				canvas.remove(ball_obg)
				new_image()
		}
	}
	
}

