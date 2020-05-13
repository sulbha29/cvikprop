class Arrow{
    constructor(x,y,angle){
       
        var options = {
            friction:0.001,
           
        }
        this.body = Bodies.rectangle(x,y,20,5,options);
        this.width = 20;
        this.height = 5;
        World.add(world,this.body);
        this.image = loadImage("arrow.png");
    }
    display(){
        if(this.body.position.x>1000 && this.body.position.y>350 && this.body.position.y <650)
        {
        console.log(this.body.position.x);
            this.body.isStatic=true;
        }
        else
            {
                this.body.isStatic=false;
            }
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        image(this.image,0,0,100,10);
        pop();
    }
}