console.log("Register");

let pets=[];

//object literal

let pet1={
    name:"Frank",
    age:1,
    gender:"Male",
    service:"Grooming",
    breed:"Bernedoodle"
}
let pet2={
    name:"Luna",
    age:3,
    gender:"Female",
    service:"Nail Trim",
    breed:"Golden Mountain"
}
let pet3={
    name:"Chloe",
    age:6,
    gender:"Female",
    service:"Bath",
    breed:"Shorthair Cat"
}

document.write(pet1.name);
document.write(pet2.name);

//Push pets into array
pets.push(pet1,pet2,pet3)

function displayNames(){
    console.log("Total pets = " + pets.length);
    console.log(pets[0].name)
    console.log(pets[1].name);
}
