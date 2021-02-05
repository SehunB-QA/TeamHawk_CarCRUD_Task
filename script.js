'use strict'

//Assign to HTML Elements 
const createButton = document.querySelector("#postButton");
const clearButton = document.querySelector("#clearButton");
const deleteButton = document.querySelector("#deleteButton");

/// Inputs: CarName, carBrand etc...
const textInput = document.querySelector("#fname");
const textInputTwo = document.querySelector("#lname");


/// Functions \\\\\\\
function create()
{
    console.log("This is a create button");
}

function deleteCRUD()
{
    console.log("This is a delete button");
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
    deleteButton.addEventListener("click", deleteCRUD)

} 