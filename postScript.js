'use strict'

// query selectors

// buttons
const btnCreateGarageSubmit = document.querySelector('#btnCreateGarageSubmit');
const btnCreateCarSubmit = document.querySelector('#btnCreateCarSubmit');


// inputs
const inputCreateGarageName = document.querySelector('#createGarageName').value;


const checkPostGarage = () => {

    if (inputCreateGarageName == "") {
        console.error("no garage location has been entered!");
        return;
    } else {
        postGarage(inputCreateGarageName);
    }

}

const postGarage = () => {

    const newGarage = {
        "name" : inputCreateGarageName
    };

    fetch(`http://127.0.0.1:9092/garage/create`, {
        method : `POST`, // set the method
        headers : { // set headers (what kind of data it is expecting)
            "Content-type":"application/json"
        },
        body : JSON.stringify(newGarage)
    }).then( (response) => {
            (response.status !== 201) ? // CREATED
                console.error(`HTTP status code [${response.status}]`)
                : 
                response.json()
                    .then( (data) => console.info(`successful [POST] response: ${JSON.stringify(data)}`) );    
        })
        .catch( (err) => console.error(err) );

}


// event listeners
btnCreateGarageSubmit.addEventListener('click', postGarage);