//Local sotrage handling
function loadServicesFromLocalStorage() {
    const servicesData = localStorage.getItem('services');
    if (servicesData) {
        return JSON.parse(servicesData);
    }
    return [];
}
function saveServicesToLocalStorage(services) {
    localStorage.setItem('services', JSON.stringify(services));
}
let services = loadServicesFromLocalStorage();

//Constructor
class Service {
    constructor(name, desc, cost) {
        this.name = name;
        this.desc = desc;
        this.cost = cost;
    }
};

//Validation
function validateForm(){
    let servicesName = $('#servicesName').val();
    let servicesDesc = $('#servicesDesc').val();
    let servicesCost = $('#servicesCost').val();
    if(servicesName === "" || servicesDesc === "" || servicesCost === ""){
        alert('All fields are required.');
        return false;
    }
    return true;
};

    
//Submit Form

function submitNewService(){
    if(!validateForm()){
        return;
    }
    const servicesName = $('#servicesName').val();
    const servicesDesc = $('#servicesDesc').val();
    const servicesCost = $('#servicesCost').val();
    const newService = new Service(servicesName, servicesDesc, servicesCost)
    services.push(newService);
    saveServicesToLocalStorage(services)
    $('input.services-form').val("");
    $('textarea.services-form').val("");
    console.log(servicesName);
    console.log('submit function');
    
};

//Clear Form
function clearForm() {
    $('#servicesName').val('');
    $('#servicesDesc').val('');
    $('#servicesCost').val('');
}

//Display current Services on ADMIN
function adminServicesDisplay(){
    const table = $('#serviceRows');
    let rows = "";

    for(let i=0; i < services.length; i++){
        rows +=`
            <tr id="${i}">
                <td>${services[i].name}</td>
                <td>$${services[i].cost}</td>
                <td><button class="btn btn-sm btn-danger" onclick="deleteService(${i})">Delete</button></td>
            </tr>`;
            console.log(services[i].name);
            
    }
    console.log('services display');
    
    table.html(rows);
}


//OnLoad
function init(){
    console.log('services');
    loadServicesFromLocalStorage();
    adminServicesDisplay();
    $('#submitServicesBtn').on('click',submitNewService);
};

window.onload = init;