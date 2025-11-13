// Conditional Type : Je Type condition er opor nirvhorshil

type A = null;
type B = undefined;

type C = A extends null? true : false;


type RichPeopleVehicle = {
    bike: string;
    car : string;
    ship : string;
}

type CheckVehicle<T> = T extends keyof RichPeopleVehicle ? true : false;

type myVehicle = CheckVehicle<"bike">