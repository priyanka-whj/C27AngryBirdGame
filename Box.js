class Box
{
    constructor(x, y, width, height)
    {
        var options = {'restitution': 0.8}

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;

        this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyW, this.bodyH, options);
        World.add(myWorld, this.body);
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