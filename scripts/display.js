function displayRows(){
    /*Get tbody, clear tbody, travel array (for), create template row(row.innerhtml= tr,info)*/
    console.log(pets.length);

    const TABLE = document.getElementById("petRows");

    let row=""; //Clear data

    for(let i=0;i<pets.length;i++){
        
        row+=`
        <tr id="${i}">
            <td>${pets[i].name}</td>
            <td>${pets[i].age}</td>
            <td>${pets[i].gender}</td>
            <td>${pets[i].breed}</td>
            <td>${pets[i].service}</td>
            <td>${pets[i].type}</td>
            <td><button class="btn btn-sm btn-danger" onclick="deletePet(${i})">Delete</button></td>
        </tr>
        `;
    }
    TABLE.innerHTML=row;
    document.getElementById("registeredPets").innerHTML="Total Registered: " + pets.length
}
/*
const getPets = () => {
    let pets;
    if(localStorage.getItem('pets') === null){
        pets = [];
    }else{
        pets = JSON.parse(localStorage.getItem('pets'));
    }
    return pets;
}

const savePets = inputData => {
    const pets = getPets();
    pets.push(inputData);
    localStorage.setItem('pets', JSON.stringify(pets))
}
savePets(input.value);

const addPets = e => {
    e.preventDefault();

}
    */
function deletePet(petID){
    console.log("Delete");
    document.getElementById("0").remove();
    pets.splice(petID,1);
    displayRows();
}


document.getElementById("txtSearch").addEventListener("change",search);
function search(){
    //by name only
    let searchText = document.getElementById("txtSearch").value;
    console.log(searchText);
    let foundPet=null;
    let id;

    for(let i=0;i<pets.length;i++){
        if(searchText==""){
            displayRows();
        }else if(pets[i].name.toLowerCase().includes(searchText.toLowerCase())){
            foundPet=pets[i];
            id=i;
            break;
        }else{
            displayRows();
        }
    }
    
    if(foundPet){
        document.getElementById(id).classList.add("highlight")
    }
}

function init(){
    displayRows();
    console.log("init");
    
}
window.onload=init;