const plants = [
    {
        id: '1',
        name: "Burro's Tail",
        typeOfPlant: 'Succulent',
        // img: '',
        oftenToWater: 'every 14 days',
        amtOfSun: 'partial sun',
    },
    // {
    //     id: '',
    //     name: '',
    //     typeOfPlant: '',
    //     img: '',
    //     oftenToWater: '',
    //     amtOfSun: '',
    // },
    // {
    //     id: '',
    //     name: '',
    //     typeOfPlant: '',
    //     img: '',
    //     oftenToWater: '',
    //     amtOfSun: '',
    // },
    // {
    //     id: '',
    //     name: '',
    //     typeOfPlant: '',
    //     img: '',
    //     oftenToWater: '',
    //     amtOfSun: '',
    // },
    // {
    //     id: '',
    //     name: '',
    //     typeOfPlant: '',
    //     img: '',
    //     oftenToWater: '',
    //     amtOfSun: '',
    // },
    // {
    //     id: '',
    //     name: '',
    //     typeOfPlant: '',
    //     img: '',
    //     oftenToWater: '',
    //     amtOfSun: '',
    // },
    // {
    //     id: '',
    //     name: '',
    //     typeOfPlant: '',
    //     img: '',
    //     oftenToWater: '',
    //     amtOfSun: '',
    // },
    // {
    //     id: '',
    //     name: '',
    //     typeOfPlant: '',
    //     img: '',
    //     oftenToWater: '',
    //     amtOfSun: '',
    // },
    // {
    //     id: '',
    //     name: '',
    //     typeOfPlant: '',
    //     img: '',
    //     oftenToWater: '',
    //     amtOfSun: '',
    // },
    // {
    //     id: '',
    //     name: '',
    //     typeOfPlant: '',
    //     img: '',
    //     oftenToWater: '',
    //     amtOfSun: '',
    // }
];

const plantBox = document.getElementById('content-container');

function renderPlant(plant) {
    let plantCard = document.createElement('div');
    plantCard.className = 'plant-card';
    
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

function initAll() {
    plants.forEach(renderPlant);
}

initAll();