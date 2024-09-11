function init(){
    petsDisplay();
}

function displayRows(){
    /*Get tbody, clear tbody, travel array (for), create template row(row.innerhtml= tr,info)*/
    let petRows=document.getElementById("petRows");
    petRows="";
    for(let i=0;i<pets.length;i++){
        petRows+=`
        <tr>
            <td>${pets[i].name}</td>
            <td>${pets[i].age}</td>
            <td>${pets[i].gender}</td>
            <td>${pets[i].breed}</td>
            <td>${pets[i].service}</td>
            <td>${pets[i].type}</td>
        </tr>`
    }
}
function init(){
    displayRows();
}