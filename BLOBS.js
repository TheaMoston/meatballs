const MINRADIUS = 40;
const RADIUSVARIATION = 80;

class Blob{
    constructor (x,y){
        this.position = new Vector (x,y);
        var Velocityx = Math.random()-0.5;
        var Velocityy = Math.random()-0.5;
        this.velocity = new Vector (Velocityx,Velocityy);
        this.velocity = Vector.Scale (this.velocity,5);
        this.radius = Math.random() * RADIUSVARIATION + MINRADIUS;
    
    }

    update(width, height){
        this.position = Vector.Add(this.position, this.velocity);
        if(this.position.x>width || this.position.x<0){
            this.velocity.x *= -1;
            
        }

        if(this.position.y>height || this.position.y<0){
            this.velocity.y *= -1; 
        }  
    }
}
