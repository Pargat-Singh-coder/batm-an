class Drop {
    constructor(x,y){
        var options = {
            isStatic: false,
        }
        this.drop = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.drop)
       
        
    }

    display(){
        var pos = this.drop.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}
