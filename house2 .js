class House2{
    constructor(x,y){
        this.body=createSprite(x,y);
        this.body.addImage(housesImg);
        this.body.scale=2.0;
    }
    display(){
        if(gamestate===end){
            this.body.destroy();
        }

      

        player.collide(this.body);
        car.collide(this.body);
    }
}