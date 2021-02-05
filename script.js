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