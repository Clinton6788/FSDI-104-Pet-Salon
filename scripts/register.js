console.log("Register");

let pets=[];

//object literal

let pet1={
    name:"Frank",
    age:1,
    gender:"Male",
    service:"Grooming",
    breed:"Bernedoodle",
    photo: "./img/Frank.jpg"
};
let pet2={
    name:"Luna",
    age:3,
    gender:"Female",
    service:"Nail Trim",
    breed:"Golden Mountain",
    photo:"./img/Luna.jpg"
};
let pet3={
    name:"Chloe",
    age:7,
    gender:"Female",
    service:"Bath",
    breed:"Shorthair Cat",
    photo:"./img/Chloe.jpg"
};
let pet4={
    name:"Freyja",
    age:3,
    gender:"Female",
    service:"Attitude Adjustment",
    breed:"Cat",
    photo:"./img/Freyja.jpg"
}

//Push pets into array
pets.push(pet1,pet2,pet3,pet4)

function displayNames(){
    console.log("Total pets = " + pets.length);
    console.log(pets[0].name)
    console.log(pets[1].name);
}
console.log(pets.length)
for(let i=0;i<pets.length;i++){
    document.getElementById("petBoxes").innerHTML+=`
    <div class="pet-box">
        <div class="center-img">
            <img class="pet-img" src="${pets[i].photo}" alt="">
        </div>
        <h3>${pets[i].name}, ${pets[i].age} year(s)</h3>
        <div class="details-grid">
            <p>Gender:</p>
            <p>${pets[i].gender}</p>
            <p>Breed:</p>
            <p>${pets[i].breed}</p>
            <p>Service:</p>
            <p>${pets[i].service}</p>
        </div>    
    </div>`

    document.getElementById("numberRegistered").innerHTML="Currently Registered: " + pets.length
}

function averageAges(){
    let sum=0;
    for(let i=0;i<pets.length;i++){
        sum += pets[i].age;
    }
    let average = sum/pets.length;
    console.log(average);
    
}