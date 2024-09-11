console.log("Register");

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

function radioValue() {
    const radios = document.getElementsByName('gender');
    for (const radio of radios) {
        console.log('Radio:', radio, 'Checked:', radio.checked, 'Value:', radio.value);
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}
function isValid(pet){
    let validation = true;
    if(pet.name==""){
        validation=false;
    }else if(pet.age==""){
        validation=false;
    }else if(pet.gender==""){
        validation=false;
    }else if(pet.breed==""){
        validation=false;
    }else if(pet.service==""){
        validation=false;
    }else if(pet.type==""){
        validation=false;
    }

    return validation;
    
}

function test1(){
    let inputName = document.getElementById('txtName').value;
    let inputAge = document.getElementById('txtAge').value;
    let inputBreed = document.getElementById('txtBreed').value;
    let inputService = document.getElementById('txtService').value;
    let inputType = document.getElementById('txtType').value;
    let inputGender= document.querySelector('input[name="gender"]:checked');
    console.log(inputGender.value);

    let newPet = new Pet(inputName, inputAge, inputGender.value, inputBreed, inputService, inputType, null);
        pets.push(newPet);
    console.log(newPet);
    
}

function register(){
    let inputName = document.getElementById('txtName').value;
    let inputAge = document.getElementById('txtAge').value;
    let inputBreed = document.getElementById('txtBreed').value;
    let inputService = document.getElementById('txtService').value;
    let inputType = document.getElementById('txtType').value;
    let inputGender= document.querySelector('input[name="gender"]:checked');
    let inputPhoto = document.getElementById('imgPhoto');
    let file = inputPhoto.files[0];
    
    //let formFields=[inputName,inputAge,inputBreed,inputService,inputType,inputGender]
    /*if(formFields ===""||formFields === null){
        console.log("error message reading");

    }else*/ if (file) {
        let reader = new FileReader();

        reader.onloadend = function () {
            let img = new Image();
            img.src = reader.result;

            img.onload = function () {
                let canvas = document.getElementById('canvas');
                let ctx = canvas.getContext('2d');
                
                // Crop to 1:1 math
                let size = Math.min(img.width, img.height);
                let x = (img.width - size) / 2;
                let y = (img.height - size) / 2;
                
                canvas.width = size;
                canvas.height = size;
                
                ctx.drawImage(img, x, y, size, size, 0, 0, size, size);
                
                let croppedImageUrl = canvas.toDataURL('image/jpeg');

                // With Image
                let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService, inputType, croppedImageUrl);
                pets.push(newPet);
                
                petsDisplay()
                console.log('Pet registered with cropped image:', newPet);
            };
        };
        reader.readAsDataURL(file);
    } else {  
        // Without image ----CHANGE to stock images (if functions to det pet)
        
        let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService, inputType, null);
        pets.push(newPet);
        
        console.log('Pet registered without photo:', newPet);
    }
    document.getElementById('txtName').value = "";
    document.getElementById('txtAge').value = "";
    document.getElementById('txtBreed').value = "";
    document.getElementById('txtService').value = "";
    document.getElementById('txtType').value = "";
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById("imgPhoto").value = "";
    //document.getElementsByName("gender").status = ""
    //document.getElementById('imgPhoto')
    // NEED TO RESET PHOTO
    petsDisplay();
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
}

pets.push(pet1,pet2,pet3,pet4)

function petsDisplay(){
    document.getElementById("petBoxes").i=""
    console.log("hi");
    
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
                <p>Type:</p>
                <p>${pets[i].type}</p>
            </div>    
        </div>`

        document.getElementById("numberRegistered").innerHTML="Currently Registered: " + pets.length
    }
}

function init(){
    petsDisplay();
    displayRows();
}
window.onload=init;
// function averageAges(){
//     let sum=0;
//     for(let i=0;i<pets.length;i++){
//         sum += pets[i].age;
//     }
//     let average = sum/pets.length;
//     console.log(average);
    
// }