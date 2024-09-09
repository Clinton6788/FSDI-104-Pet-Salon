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
    console.log('Radios:', radios);
    for (const radio of radios) {
        console.log('Radio:', radio, 'Checked:', radio.checked, 'Value:', radio.value);
        if (radio.checked) {
            return radio.value;
        }
    }
    console.log('No radio button is selected.');
    return null; // Added return statement to handle cases where no radio is checked
}

function register(){
    let inputName = document.getElementById('txtName').value;
    let inputAge = document.getElementById('txtAge').value;
    let inputBreed = document.getElementById('txtBreed').value;
    let inputService = document.getElementById('txtService').value;
    let inputType = document.getElementById('txtType').value;
    let inputGender= radioValue();
    let fileInput = document.getElementById('imgPhoto');
    let file = fileInput.files[0]; // Get the first file
    
    if (file) {
        let reader = new FileReader();

        reader.onloadend = function () {
            // Create an image element
            let img = new Image();
            img.src = reader.result;

            img.onload = function () {
                // Set up canvas
                let canvas = document.getElementById('canvas');
                let ctx = canvas.getContext('2d');
                
                // Calculate the size for a square crop
                let size = Math.min(img.width, img.height);
                let x = (img.width - size) / 2;
                let y = (img.height - size) / 2;
                
                // Set canvas size
                canvas.width = size;
                canvas.height = size;
                
                // Draw the image cropped on the canvas
                ctx.drawImage(img, x, y, size, size, 0, 0, size, size);
                
                // Get the cropped image data URL
                let croppedImageUrl = canvas.toDataURL('image/jpeg'); // You can specify 'image/png' or 'image/jpeg'

                // Create a new Pet object with the cropped image
                let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService, inputType, croppedImageUrl);
                pets.push(newPet);

                console.log('Pet registered with cropped image:', newPet);
            };
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);
    } else {
        // Create a new Pet object without a photo
        let newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService, inputType, null);
        pets.push(newPet);
        
        console.log('Pet registered without photo:', newPet);
    }
}


function testty(){
console.log(inputName.value);
console.log(inputAge.value);
console.log(inputBreed.value);
console.log(inputService.value);
console.log(inputType.value);
console.log(inputGender.value);
console.log(inputPhoto.value);
}

function test(){
    let gender = document.querySelector("input[type='radio'][name='gender']:checked")
    console.log(gender);
    
    if(gender == null){
        console.log("false");
    }else if(gender == "male"){
        console.log("male");        
    }else if(gender=="female"){
        console.log("female");
    }else{
        console.log("fail");
        
    }
}


    
    
    /*if(
        inputName.value ===""||
        inputAge.value ===""||
        inputBreed.value ===""||
        inputService.value ===""||
        inputType.value ===""
    ){
        console.log("Empty");
        
    }*/




function init(){

}
window.onload=init;

function petsDisplay(){
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
}

function averageAges(){
    let sum=0;
    for(let i=0;i<pets.length;i++){
        sum += pets[i].age;
    }
    let average = sum/pets.length;
    console.log(average);
    
}