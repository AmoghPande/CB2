class Paper{
    constructor (x,y,r) {
         var options={isStatic:false,restitution:0.3,friction:0.5,density:1.2}
         this.x=x;
         this.y=y;
         this.r=r;
         this.image=loadImage("paper.png");
         this.body=Bodies.circle(x,y,r,options);
         World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        fill("purple");
        image(this.image,0,0,this.r*4,this.r*4);
        pop();
    }
}