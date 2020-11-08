class Stone {
    constructor(x,y){
    var option= {
        restitution:0,
        density:1.2,
    friction:1
    }
 this.image=loadImage("stone.png");
 
 this.stone=Bodies.circle(x,y,100,option);
 this.r=100;
 World.add(world,this.stone)
    }
    display(){
        var pos=this.stone.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r)
    }
}