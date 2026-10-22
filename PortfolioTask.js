
const Student = (Name,ID,LabGrp)=> {
    console.log("Student Name: " + Name);
    console.log("Student ID: " + ID  );
    console.log("Lab Group Number: ",LabGrp);
}
Student("Aian Frig", "3242899","25")

const currentDateTime = new Date()
console.log("Current Date and Time: " + currentDateTime.toLocaleString("en-GB", {timeZone: "Europe/London"}));

const favlang = (favlang) => {
    console.log("My favourite programming language: " + favlang);
}
favlang("JavaScript");


const ID =("3242899");
const Last4 = ID.slice(-4);
let sum = 0;

for (const digit of Last4) {
    sum += Number(digit);
}

console.log("Verification Number: " + sum);
