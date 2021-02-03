class Med{
    constructor(x,y){
        this.body=createSprite(x,y);
 this.body.addImage(medImg);
 this.body.scale=0.3;
    }

display(){
    car.depth=this.body.depth+1;

if(car.isTouching(this.body) && health.width<50){
    health.width=health.width+50;
    this.body.destroy();
}

if(gamestate == level2){
    this.body.destroy();
}

}




}