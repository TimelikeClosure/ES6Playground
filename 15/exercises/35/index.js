/*
You are a game developer tasked with setting up some basic classes for a new game you are working on.  Create a class called 'Monster'.  In the constructor, you'll need to do some basic setup for Monster whenever they are created. 

Initialize the Monster's health to 100.
The constructor will be called with an 'options' object that has a 'name' property.  Assign the 'name' to the Monster
 */
//  CODE START
class Monster {
  constructor({name}){
      this.name = name;
      this.health = 100;
  }
}
//  CODE END
console.log(new Monster({ name: 'Big Baddie'}));