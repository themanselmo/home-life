/*
        Need to make it so each time a link button is clicked, the
    plant div is cleared so that old contents are removed, and 
    to limit the times each button can be cleared to once so 
    you can't add the same plants multiple times by clicking 
    the same link
*/

const plants = [
    {
        id: '1',
        name: "Burro's Tail",
        typeOfPlant: 'Succulent',
        // img: '',
        oftenToWater: 'every 14 days',
        amtOfSun: 'partial sun',
    },
    {
        id: '2',
        name: 'Jade Plant',
        typeOfPlant: 'Succulent',
        // img: '',
        oftenToWater: 'every 10 to 14 days',
        amtOfSun: 'partial sun',
    },
    {
        id: '3',
        name: 'Xanadu',
        typeOfPlant: 'Philodendron',
        // img: '',
        oftenToWater: 'every 7-14 days',
        amtOfSun: 'partial sun',
    },
    {
        id: '4',
        name: 'Heartleaf',
        typeOfPlant: 'Philodendron',
        // img: '',
        oftenToWater: 'every 7-14 days',
        amtOfSun: 'partial sun',
    },
    {
        id: '5',
        name: '',
        typeOfPlant: 'Woodie',
        img: '',
        oftenToWater: '',
        amtOfSun: '',
    },
    {
        id: '6',
        name: '',
        typeOfPlant: 'Woodie',
        img: '',
        oftenToWater: '',
        amtOfSun: '',
    },
    {
        id: '7',
        name: '',
        typeOfPlant: 'Annual',
        img: '',
        oftenToWater: '',
        amtOfSun: '',
    },
    {
        id: '8',
        name: '',
        typeOfPlant: 'Annual',
        img: '',
        oftenToWater: '',
        amtOfSun: '',
    }
];

const plantBox = document.getElementById('content-container');

//  the renderPlant function builds each plant card to be displayed,
// drawing each piece of data from the plant item being iterated through
// when the init function is called
function renderPlant(plant) {
    let plantCard = document.createElement('div');
    plantCard.className = `${plant.typeOfPlant}-Card`;
    
    // let plantImg = document.createElement('img');
    // plantImg.src = plant.img;
    // plantImg.alt = `Image of a ${plant.name}`;

    let plantName = document.createElement('h3');
    plantName.textContent = plant.name;

    let plantType = document.createElement('h4');
    plantType.textContent = plant.typeOfPlant;

    let waterInfo = document.createElement('p');
    waterInfo.textContent = `Should be watered ${plant.oftenToWater}.`;

    let sunInfo = document.createElement('p');
    sunInfo.textContent = `Should be in ${plant.amtOfSun}.`;

    plantCard.append(plantName, plantType, waterInfo, sunInfo);
    plantBox.append(plantCard);
}

//  each event listener here gets tied to the appropriate link / button
// to be activated upon the click event
let succulentLink = document.getElementById('succulent-link');
succulentLink.addEventListener('click', initSucculents);

let philoLink = document.getElementById('philo-link');
philoLink.addEventListener('click', initPhilodendron);

let woodieLink = document.getElementById('woodie-link');
woodieLink.addEventListener('click', initWoodie);

let annualLink = document.getElementById('annual-link');
annualLink.addEventListener('click', initAnnual);

let viewAllLink = document.getElementById('viewAll-link');
viewAllLink.addEventListener('click', initAll);

//  init function renders the plant contents to the page after 
// the appropriate event was fired off
function initAll() {
    plants.forEach(renderPlant);
}

function initSucculents() {
    let succulentList = plants.filter((plant) => {
        return plant.typeOfPlant === 'Succulent';
    })
    succulentList.forEach(renderPlant);
};

function initPhilodendron() {
    let philoList = plants.filter((plant) => {
        return plant.typeOfPlant === 'Philodendron';
    });
    philoList.forEach(renderPlant);
}

function initWoodie() {
    let woodieList = plants.filter((plant) => {
        return plant.typeOfPlant === 'Woodie';
    });
    woodieList.forEach(renderPlant);
}

function initAnnual() {
    let annualList = plants.filter((plant) => {
        return plant.typeOfPlant === 'Annual';
    });
    annualList.forEach(renderPlant);
}