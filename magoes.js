class Mango {
    constructor(x,y){
    var option= {
        isStatic:true,
        restitution:0,
        density:1.2,
    friction:1
    }
 this.image=loadImage("mango.png");

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