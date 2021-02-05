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