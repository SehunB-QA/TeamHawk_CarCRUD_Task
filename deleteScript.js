
// buttons
const btnDeleteGarageId = document.querySelector('#btnDeleteGarageId');
const btnDeleteCarId = document.querySelector('#btnDeleteCarId');

// inputs

const inputDeleteGarageId = document.querySelector('#deleteGarageId');
const inputDeleteCarId = document.querySelector('#deleteCarId');


  ///////////////////
 // DELETE GARAGE //
///////////////////

const checkDeleteGarageId = () => {

    const id = inputDeleteGarageId.value;

    if (id == "") {
        console.error(`[READ] no id entered for garage`);
        return;
    } else if (Number.isInteger(Number(id)) == false) {
        console.error(`[READ] error '${id}' is not an integer`);
        return;
    } else {
        deleteGarageId(id);
    }

}

const deleteGarageId = (id) => {

    fetch(`http://127.0.0.1:9092/garage/delete/${id}`, {
        method : `DELETE`, // set the method
    }).then( (response) => {
        (response.status !== 200) ? // OK
            console.error(`HTTP status code [${response.status}]`)
            : 
            response.json()
                .then( (data) => console.info(`successful [DELETE] response: ${JSON.stringify(data)}`) );    
    })
    .catch( (err) => console.error(err) );

}

  ////////////////
 // DELETE CAR //
////////////////

const checkDeleteCarId = () => {

    const id = inputDeleteCarId.value;

    if (id == "") {
        console.error(`[READ] no id entered for garage`);
        return;
    } else if (Number.isInteger(Number(id)) == false) {
        console.error(`[READ] error '${id}' is not an integer`);
        return;
    } else {
        deleteCarId(id);
    }

}

const deleteCarId = (id) => {

    fetch(`http://127.0.0.1:9092/car/delete/${id}`, {
        method : `DELETE`, // set the method
    }).then( (response) => {
        (response.status !== 200) ? // OK
            console.error(`HTTP status code [${response.status}]`)
            : 
            response.json()
                .then( (data) => console.info(`successful [DELETE] response: ${JSON.stringify(data)}`) );    
    })
    .catch( (err) => console.error(err) );

}


// event listeners
btnDeleteGarageId.addEventListener('click', checkDeleteGarageId);
btnDeleteCarId.addEventListener('click', checkDeleteCarId);