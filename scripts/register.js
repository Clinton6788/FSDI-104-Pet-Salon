console.log("Register");

let pets=[];

//object literal

let pet1={
    name:"Frank",
    age:1,
    gender:"Male",
    breed:"Bernedoodle"
}
let pet2={
    name:"Luna",
    age:3,
    gender:"Female",
    breed:"Golden Mountain"
}

document.write(pet1.name);
document.write(pet2.name);

//Push pets into array
pets.push(pet1,pet2)



function displayNames(){
    console.log("Total pets = " + pets.length);
    console.log(pets[0].name)
    console.log(pets[1].name);
}
