class Restoraunt {
    constructor(restName, restKitchen, delivTime, imgSrc) {
        this.restName = restName;
        this.restKitchen = restKitchen;
        this.img = imgSrc;
        this.delivTime = delivTime;
    }
}

const allRest = []
const rests = document.querySelectorAll('.rest-name')
const kitchens = Array.prototype.slice.call(document.querySelectorAll('.kitchen'))
const delivTimers = document.querySelectorAll('.deliv-time')
const imagesSrc = document.querySelectorAll('.img-src')

for (let i = 0; i < rests.length; i++) {
    allRest[i] = new Restoraunt(rests[i].innerHTML.replaceAll('•', '').replaceAll('₽', '').trim(),
     kitchens[i].innerHTML.replaceAll('•', '').replaceAll('₽', '').trim(), 
     delivTimers[i].innerHTML,
     imagesSrc[i].src)
}

const filter = document.querySelector('#filter')
const container = document.querySelector('.grid-container')

filter.addEventListener('input', (event) => {
    let value = event.target.value.toLowerCase()
    const filtredRests = allRest.filter(rest => {
        return  rest.restName.toLowerCase().includes(value)
    })
    const filtredKitchens = allRest.filter(rest => {
        return  rest.restKitchen.toLowerCase().includes(value)
    })
    render(filtredRests, filtredKitchens)
})

function render(nameOfRestoraunt, kitchenOfRestaraunt) {
    container.innerHTML = ''
    if (nameOfRestoraunt.length === 0 && kitchenOfRestaraunt.length === 0) {
        container.innerHTML = 'не найдены по заданным параметрам'
    } else {
        toHTML(nameOfRestoraunt)
        toHTML(kitchenOfRestaraunt)
    }
}

function toHTML(category) {
    for (key in category) {
        container.innerHTML += `
        <section class="store-card">
            <img class="img-src" src="${category[key].img}">
            <h5 class="rest-name">${category[key].restName}</h5>
            <p class="kitchen">${category[key].restKitchen}</p>
            <p class="deliv-time">${category[key].delivTime}</p>
        </section>
        `
    }
}
