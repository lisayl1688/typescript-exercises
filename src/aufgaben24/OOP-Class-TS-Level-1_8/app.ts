import Car from "./car";
import ElectricCar from "./electricCar";
import InstanceChecker from "./instance-checker";

const volkswagen = new Car ()
volkswagen.brand = "volkswagen";
volkswagen.color = "silber";

console.log(volkswagen);

const tesla = new ElectricCar ()
tesla.brand = "tesla";
tesla.color = "rot";

console.log(tesla);

console.log("volkswagen",InstanceChecker.isCar(volkswagen));

console.log(InstanceChecker.isElectricCar(volkswagen));
console.log("tesla",InstanceChecker.isElectricCar(tesla));

