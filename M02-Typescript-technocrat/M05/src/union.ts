// Union Type

type userRole = "admin" | "user";

const getDashboard = (role: userRole) => {
  if (role === "admin") {
    return "admin dashboard";
  } else if (role === "user") {
    return " User dashboard";
  } else {
    return "guest dashboard";
  }
};



//Intersection 

type Employee = {
    id: number;
    name: string;
    phoneNumber : string;
}
type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;


const choudhury: EmployeeManager = {
    id: 12,
    name: "Choudhury saheb",
    phoneNumber: "0432462",
    designation : "manager",
    teamSize : 5
}