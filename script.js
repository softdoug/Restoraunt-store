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
    render(filtredRests)
})

function render(rest) {
    container.innerHTML = ''
    if (rest.length === 0) {
        container.innerHTML = 'не найдены по заданному поиску'
    } else {
        for (key in rest) {
            container.innerHTML += `
            <div class="store-card">
                <img class="img-src" src="${rest[key].img}">
                <h5 class="rest-name">${rest[key].restName}</h5>
                <p class="kitchen">${rest[key].restKitchen}</p>
                <p class="deliv-time">${rest[key].delivTime}</p>
            </div>
            `
        }
    }
}
