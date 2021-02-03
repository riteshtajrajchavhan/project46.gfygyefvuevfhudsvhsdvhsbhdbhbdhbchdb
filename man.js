class Man{
    constructor(x,y){
        this.body = createSprite(x,y);
        this.body.addImage(manImg);
        this.body.scale=0.6;

this.bullet;

    }

display(){
   


  if (frameCount % 10 === 0 ){
      var bullet = createSprite(0,0);
        bullet.x=this.body.x;
        bullet.y=this.body.y;
      bullet.addImage(bulletImg);
      bullet.scale=0.055;
      bullet.velocityY=-45
      bullet.lifetime = 200;
      fire.play();
      this.bullet=bullet
      
        }

        for(var i = 0; i < zombieGroup.length; i++){
            if(zombieGroup.get(i).isTouching(this.bullet)){
              zombieGroup.get(i).destroy();
              this.bullet.destroyEach();
           
           
            }
          }


this.body.x=player.x-50;
this.body.y=player.y;

}

}




