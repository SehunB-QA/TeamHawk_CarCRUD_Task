'use strict'

//Assign to HTML Elements 
const createButton = document.querySelector("#postButton");
const clearButton = document.querySelector("#clearButton");
const deleteButton = document.querySelector("#deleteButton");



/// Inputs: CarName, carBrand etc...
const textInput = document.querySelector("#fname");
const textInputTwo = document.querySelector("#lname");
const userGarageIDInput = document.querySelector("#garageIDInput")


/// Functions \\\\\\\
function create()
{
    console.log("This is a create button");
}

function deleteCRUD()
{
    console.log("This is a delete button");
}

function deleteGarageByID()
{
  const gid = userGarageIDInput.value;

/*   let data = {
      id:gid
  } */

  fetch("http://localhost:9092/garage/delete/" + gid, {
    method: "delete",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(`Request succeeded with JSON response ${data}`);
    })
    .catch((error) => {
      console.log(`Request failed ${error}`);
    });

}


function clearText()
{
textInput.value = "";
textInputTwo.value = ""; 
}

//Assign variables to functions 

window.onload = function(){

    createButton.addEventListener("click",create)
    clearButton.addEventListener("click", clearText);
    deleteButton.addEventListener("click", deleteGarageByID)
   // garageID.addEventListener("click", deleteGarageByID)

} 

// query selectors

    // buttons
    const btnGetGarages = document.querySelector('#btnGetGarages');
    const btnGetCars = document.querySelector('#btnGetCars');
    
      /////////////////////
     // GET ALL GARAGES //
    /////////////////////
    
    const getGarages = () => {
    
        fetch(`http://127.0.0.1:9092/garage/read`)
            .then( (response) => {
                (response.status !== 200) ? // OK
                    console.error(`status ${response.status}`)
                    : 
                    response.json()
                        .then( (data) => {
                            console.info(data);
                            // a_div.value = data.id; // garage id
                            // a_div.value = data.name; // garage name
    
                            // // car stuff under here
                            // a_div.value = data.cars;
                            // for (car in data.cars){
                            //     a_div.value = car.id;
                            //     a_div.value = car.colour;
                            //     a_div.value = car.doors;
                            //     a_div.value = car.make;
                            //     a_div.value = car.model;
                            //     a_div.value = car.name;
                            // };
                        });
            })
            .catch( (err) => console.error(err) );  
    
    }
    
      //////////////////
     // GET ALL CARS //
    //////////////////
    
    const getCars = () => {
    
        fetch(`http://127.0.0.1:9092/car/read`)
            .then( (response) => {
                (response.status !== 200) ? // OK
                    console.error(`status ${response.status}`)
                    : 
                    response.json()
                        .then( (data) => {
                            console.info(data);
                            // a_div.value = data.id;
                            // a_div.value = data.colour;
                            // a_div.value = data.doors;
                            // a_div.value = data.make;
                            // a_div.value = data.model;
                            // a_div.value = data.name;
                        });
            })
            .catch( (err) => console.error(err) );  
    
    }
    
    
    // pageload functions
    getGarages();
    
    getCars();
    
    
    // event listeners
    btnGetGarages.addEventListener('click', getGarages);
    btnGetCars.addEventListener('click', getCars);

// Getting body tag to add tables to 
const body = document.querySelector('body');

// Creating div container to add elements to when they are created
const garageTables = document.createElement('div');
garageTables.id = "garageTables";

// Function that takes in a list of cars (data) and creates tables based of the given info, it also should
// created a button above the table that acts as a dropdown (this however doesn't currently work)
const makeTable = (name, data)=>{
    let div = document.createElement('div');

    let button = document.createElement('button');
    button.className = "btn btn-secondary dropdown-toggle";
    button.id = `${name}MenuButton`;
    button.setAttribute("type", "button")
    button.setAttribute("data-bs-toggle", "dropdown");
    button.setAttribute("aria-expanded", "false")
    button.innerHTML = name;
    div.appendChild(button);

    let uList = document.createElement('ul');
    uList.setAttribute("class", "dropdown-menu'");
    uList.setAttribute("aria-labelledby", `${name}MenuButton`);

    let table = document.createElement('table');
    table.className = "table table-striped";

    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let thID = document.createElement('th');
    thID.innerHTML = "ID";
    let thColour = document.createElement('th');
    thColour.innerHTML = "Colour";
    let thDoors = document.createElement('th');
    thDoors.innerHTML = "Number of Doors";
    let thMake = document.createElement('th');
    thMake.innerHTML = "Make";
    let thModel = document.createElement('th');
    thModel.innerHTML = "Model";
    let thName = document.createElement('th');
    thName.innerHTML = "Name";

    tr.appendChild(thID);
    tr.appendChild(thColour);
    tr.appendChild(thDoors);
    tr.appendChild(thMake);
    tr.appendChild(thModel);
    tr.appendChild(thName);

    thead.appendChild(tr);

    let tbody = document.createElement('tbody');

    for (let i = 0; i < data.length; i++) {
        let tr2 = document.createElement('tr');
        let {id: ID, colour: Colour, doors: Doors, make: Make, model: Model, name: Name} = data[i];
        let tdID = document.createElement('td');
        tdID.innerHTML = ID;
        let tdColour = document.createElement('td');
        tdColour.innerHTML = Colour;
        let tdDoors = document.createElement('td');
        tdDoors.innerHTML = Doors;
        let tdMake = document.createElement('td');
        tdMake.innerHTML = Make;
        let tdModel = document.createElement('td');
        tdModel.innerHTML = Model;
        let tdName = document.createElement('td');
        tdName.innerHTML = Name;
        tr2.appendChild(tdID);
        tr2.appendChild(tdColour);
        tr2.appendChild(tdDoors);
        tr2.appendChild(tdMake);
        tr2.appendChild(tdModel);
        tr2.appendChild(tdName);

        tbody.appendChild(tr2);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    uList.appendChild(table);

    div.appendChild(uList);

    garageTables.appendChild(div);
    body.appendChild(garageTables)

}
