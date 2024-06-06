import Car from "./OOP-Class-TS-Level-2_2";





class Driver{
    firstName : string = "";
    lastName : string = "";
    age : number = 0;
    car : Car;
    

    constructor (car:Car) {
        this.car = car;
    }
}






export default Driver;