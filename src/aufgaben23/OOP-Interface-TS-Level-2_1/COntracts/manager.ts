import IEmployee from "./iemployee";

class Manager implements IEmployee {
    name: string = "";
    age: number = 0;
    position: string = "";
    private assignedEmployees : [] = [];

}


export default Manager;