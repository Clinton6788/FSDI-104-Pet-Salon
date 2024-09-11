
function displayRows(){
    /*Get tbody, clear tbody, travel array (for), create template row(row.innerhtml= tr,info)*/
    console.log(pets.length);
    
    document.getElementById("petRows").innerHTML=null;

    for(let i=0;i<pets.length;i++){
        document.getElementById("petRows").innerHTML+=`
        <tr>
            <td>${pets[i].name}</td>
            <td>${pets[i].age}</td>
            <td>${pets[i].gender}</td>
            <td>${pets[i].breed}</td>
            <td>${pets[i].service}</td>
            <td>${pets[i].type}</td>
            <td><button>Delete</button></td>
        </tr>`
    }
}
function init(){
    displayRows();
    console.log("init");
    
}
window.onload=init;