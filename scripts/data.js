let pets=[];

//create constructor
function Pet(name,age,gender,breed,service,type,photo){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
    this.photo=photo;
}

let pet1={
    name:"Frank Lee",
    age:1,
    gender:"Male",
    service:"Grooming",
    breed:"Bernedoodle",
    type:"Dog",
    photo: "./img/Frank.jpg"
};
let pet2={
    name:"Luna Borfuna",
    age:3,
    gender:"Female",
    service:"Nail Trim",
    breed:"Golden Mountain",
    type:"Dog",
    photo:"./img/Luna.jpg"
};
let pet3={
    name:"Chloe Cat",
    age:7,
    gender:"Female",
    service:"Bath",
    breed:"Shorthair",
    type:"Cat",
    photo:"./img/Chloe.jpg"
};
let pet4={
    name:"Freyja the Butt",
    age:3,
    gender:"Female",
    service:"Attitude Adjustment",
    breed:"Shorthair",
    type:"Cat",
    photo:"./img/Freyja.jpg"
};

pets.push(pet1,pet2,pet3,pet4);