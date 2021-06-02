class Log
{
    constructor(x, y, height, angle)
    {
        var options = {'restitution': 0.8, 'friction': 1.0}
        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = 20;
        this.bodyH = height;
        this.bodyA = angle;

        this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyW, this.bodyH, options);
        World.add(myWorld, this.body);
        Matter.Body.setAngle(this.body, this.bodyA);
    }
    display()
    {
        push(); //push the old settings of the canvas 

        translate(this.body.position.x, this.body.position.y); //move my canvas origin
        rotate(this.body.angle); //rotate the canvas by some angle

        rectMode(CENTER);
        rect(0, 0, this.bodyW, this.bodyH);
        
        pop(); //Take out the old settings of the canvas
    }
};