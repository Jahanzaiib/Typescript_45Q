 // 45. function createCar(manufacturer:string, modelName:string, color?:string, optionalFeature?:string){
   function createCar(manufacturer:string, modelName:string, color?:string, optionalFeature?:string){
      let car ={
      manufacture : manufacturer,
      modelName :modelName,
      color :color,
      optionalFeature :optionalFeature,
  }
  return car
  };
  
  let myCar =createCar("Toyota","Camry","Burning Black","Sunroof");
  console.log(myCar);