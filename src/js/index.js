const plants = [
    {
        id: '',
        name: '',
        plantType: '',
        img: '',
        oftenToWater: '',
        amtOfSun: '',
    }
];

const plantBox = document.getElementById('content-container');

function renderPlant(plant) {
    let plantCard = document.createElement('div');
    plantCard.className = 'plant-card';
    
    let plantImg = document.createElement('img');
    plantImg.src = plant.img;
    plantImg.alt = `Image of a ${plant.name}`;

    let plantName = document.createElement('h3');
    plantName.textContent = plant.name;

    let waterInfo = document.createElement('p');
    waterInfo.textContent = `Should be watered ${oftenToWater}.`;

    
}