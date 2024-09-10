function petsDisplay(){
    document.getElementById("petBoxes").innerHTML=""
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
