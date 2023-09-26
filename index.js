const baseURL = "http://localhost:3000/dogs"
const loadURL = "http://localhost:3000/dogs/1"

const gallery = document.querySelector('.dog-gallery')
const displayDog = document.querySelector('.dog-details')
const newDog = document.getElementById('add-new-dog')
const showDogImage = document.getElementById('dog-image')
const showDogName = document.getElementById('dog-name')
const showDogFunFact = document.getElementById('dog-funFact')
const showDogCare = document.getElementById('dog-care')
const showDogSummary = document.getElementById('dog-summary')

fetch(loadURL)
    .then(response => response.json())
    .then(dog => {
        renderSingleDog(dog)
    })

fetch(baseURL)
    .then(response => response.json())
    .then(dogArray => {
        dogArray.forEach(renderDog)
    })

function renderDog(dogObj) {
    const img = document.createElement('img')
    img.src = dogObj.image
    img.alt = dogObj.name
    gallery.append(img)
    
    img.addEventListener('click', () => {
        showDogName.innerText = dogObj.name
        showDogImage.src = dogObj.image
        showDogFunFact.innerText = dogObj.funFact
        showDogCare.innerText = dogObj.care
        showDogSummary.innerText = dogObj.summary
    })
}

function renderSingleDog(dogObj) {
    showDogName.innerText = dogObj.name
    showDogImage.src = dogObj.image
    showDogFunFact.innerText = dogObj.funFact
    showDogCare.innerText = dogObj.care
    showDogSummary.innerText = dogObj.summary
}

newDog.addEventListener('submit', event => {
    event.preventDefault()

    const newName = event.target.name.value
    const newImage = event.target.image.value
    const newFunFact = event.target.funFact.value
    const newCare = event.target.care.value
    const newSummary = event.target.summary.value

    const addNewDog = {
        name: newName,
        image: newImage,
        funFact: newFunFact,
        care: newCare,
        summary: newSummary
    }

    console.log(addNewDog)
    renderDog(addNewDog)
})
