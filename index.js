const baseURL = "http://localhost:3000/dogs"

const gallery = document.querySelector('.dog-gallery')

fetch(baseURL)
    .then(response => response.json())
    .then(dogArray => {
        dogArray.forEach(renderDog)
    })

function renderDog(dogObj) {
    // const p = document.createElement('p')
    // p.innerText = dogObj.name
    const img = document.createElement('img')
    img.src = dogObj.image
    img.alt = dogObj.name
    gallery.append(img)
    console.log(dogObj)
}