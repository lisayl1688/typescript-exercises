import IShape from "./iShape";

class Circle implements IShape {
    name: string ="";
    color: string = "";
    radius : number = 0;
    isRound: boolean = true;


    public draw() {
        console.log("Drawing circle");
       
    }
}


export default Circle;