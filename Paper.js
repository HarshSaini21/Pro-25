class Paper
{
	constructor(x,y)
	{

		var options = {
           restitution: 0.3,
		   friction:0,
		   density:1.2
		}
		this.x=x;
		this.y=y;
		//this.Width=200;
		//this.Height=213;
		this.image=loadImage("paper.png");
		this.body = Bodies.rectangle(this.x,this.y,50,50,options);
        World.add(world, this.body);
		
		

	}
	display()
	{			
           const pos = this.body.position;

			push()
			translate(pos.x, pos.y);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,0,90,90);
			pop()
			
	}

}