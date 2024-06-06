import Car from "./OOP-Class-TS-Level-2_2";
import Driver from "./driver";


export {};

const firstCar = new Car ()
firstCar.brand = "VW";
firstCar.constructionYear = 2007;
firstCar.currentSpeed = 60;

const ersterDriver = new Driver (firstCar)
ersterDriver.firstName = "elias";
ersterDriver.lastName = "breuer";
ersterDriver.age = 27;

console.log(ersterDriver);



const secondCar = new Car ()
secondCar.brand = "BMW";
secondCar.constructionYear = 2004;
secondCar.currentSpeed = 70;

const secondDriver = new Driver (secondCar)
secondDriver.firstName = "hannah";
secondDriver.lastName = "kreuz";
secondDriver.age = 22;

console.log(secondDriver);





const thirdCar = new Car ()
thirdCar.brand = "Audi";
thirdCar.constructionYear = 1997;
thirdCar.currentSpeed = 65;

const thirdDriver = new Driver (thirdCar)
thirdDriver.firstName = "peter";
thirdDriver.lastName = "sturm";
thirdDriver.age = 43;

console.log(thirdDriver);

