class Rope {

constructor(){

    var option ={

      
       bodyA : bird.body,
       bodyB : one.body,
       stiffness : 0.2,
       length : 100,
        
    }

this.chain = Constraint.create(option);
World.add(world,this.chain);


}



}