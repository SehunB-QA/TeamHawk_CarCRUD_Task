'use strict'

// query selectors

// buttons
const btnGetGarages = document.querySelector('#btnGetGarages');
const btnGetCars = document.querySelector('#btnGetCars');
const btnGetGarageId = document.querySelector('#btnGetGarageId');
const btnGetCarId = document.querySelector('#btnGetCarId');

// inputs
const inputGetGarageId = document.querySelector('#getGarageId').value;
const inputGetCarId = document.querySelector('#getCarId').value;


  /////////////////////
 // GET ALL GARAGES //
/////////////////////

const getGarages = () => {

    fetch(`http://127.0.0.1:9092/garage/read`)
        .then( (response) => {
            (response.status !== 200) ? // OK
                console.error(`HTTP status code [${response.status}]`)
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
                console.error(`HTTP status code [${response.status}]`)
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


  //////////////////////
 // GET GARAGE BY ID //
//////////////////////

const checkGarageId = () => {

   const id = inputGetGarageId;

    if (id == "") {
        console.error(`[READ] no id entered for garage`);
        return;
    } else if (Number.isInteger(Number(id)) == false){
        console.error(`[READ] error '${id}' is not an integer`);
        return;
    } else {
        getGarageId(id);
    }

}

const getGarageId = (id) => {

   fetch(`http://127.0.0.1:9092/garage/read/${id}`)
       .then( (response) => {
           (response.status !== 200) ? // OK
               console.error(`HTTP status code [${response.status}]`)
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

  ///////////////////
 // GET CAR BY ID //
///////////////////

const checkCarId = () => {

    const id = inputGetGarageId;
 
     if (id == "") {
         console.error(`[READ] no id entered for garage`);
         return;
     } else if (Number.isInteger(Number(id)) == false){
         console.error(`[READ] error '${id}' is not an integer`);
         return;
     } else {
         getGarageId(id);
     }
 
 }

const getCarId = (id) => {

    fetch(`http://127.0.0.1:9092/car/read/${id}`)
        .then( (response) => {
            (response.status !== 200) ? // OK
                console.error(`HTTP status code [${response.status}]`)
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


// event listeners
btnGetGarages.addEventListener('click', getGarages);
btnGetCars.addEventListener('click', getCars);
btnGetGarageId.addEventListener('click', checkGarageId);
btnGetCarId.addEventListener('click', checkCarId);