class paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.r=r;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var paperpos=this.body.position;
        push()
        translate(paperpos.x,paperpos.y);
        image(this.image,0,0,40,40);
        pop();
    }
}