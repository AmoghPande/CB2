class Dustbin{
    constructor (x,y) {
         var options={isStatic:true}
         this.x=x;
         this.y=y;
         this.w=200;
         this.h=20;
         this.image=loadImage("dustbingreen.png");
         this.bottom=Bodies.rectangle(x,y,200,20,options);
         this.left=Bodies.rectangle(x-100,y-100,20,200,options);
         this.right=Bodies.rectangle(x+100,y-100,20,200,options);
         World.add(world,this.bottom);
         World.add(world,this.left);
         World.add(world,this.right);

    }
    display(){
        var posb=this.bottom.position;
        var posl=this.left.position;
        var posr=this.right.position;

        push();
        translate(posl.x,posl.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.w-180,this.h+180);
        pop();

        push();
        translate(posr.x,posr.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.w-180,this.h+180);
        pop();

        push();
        translate(posb.x,posb.y);
        imageMode(CENTER);
        image(this.image,0,-100,250,200);
        pop();
    }
}