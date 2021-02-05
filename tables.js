const body = document.querySelector('body');

const garageTables = document.createElement('div');
garageTables.id = "garageTables";

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
