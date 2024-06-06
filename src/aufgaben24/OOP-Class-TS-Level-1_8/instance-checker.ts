import Car from "./car";
import ElectricCar from "./electricCar";
class InstanceChecker {
    static isCar(objectToCheck: any){
        if (objectToCheck instanceof Car) {
            return true;
        } else {
            return false;
        }
    }
    static isElectricCar(objectToCheck: any){
        return objectToCheck instanceof ElectricCar
        
        
    }
}

export default InstanceChecker