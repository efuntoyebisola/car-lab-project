function Car(name, model, type){
  
  // Defaults
  this.type = type;
  this.numOfWheels = 4;
  this.isSaloon = true;
  this.speed = '0 km/h';
  this.gearFactor = 11;
  
  // Contructors arguments
  this.name = name;
  this.model = model;
  this.type = type;
  
  if(typeof name == 'undefined'){
    this.name = 'General';
  }
  
  if(typeof model =='undefined'){
    this.model = 'GM';
  }
  
 if(this.name == 'Porshe' || this.name == 'Koenigsegg'){
   this.numOfDoors = 2;
   this.gearFactor = 50;
 }

 if (this.type == 'trailer') {
   this.numOfWheels = 8;
   this.isSaloon = false;
 }
 
 function drive(gearNum) {
   speed = gearNum * this.gearFactor;
   this.speed = speed + " km/h";
   return this;
 }
    
}