class Restoraunt {
    constructor(restName, restKitchen, delivTime) {
        this.restName = restName;
        this.restKitchen = restKitchen;
        this.img = `${restName}.jpg`;
        this.delivTime = this.delivTime;
    }
    
}

const allRest = []
const rests = document.getElementsByClassName('rest-name')
const kitchens = Array.prototype.slice.call(document.getElementsByClassName('kitchen'))

for (let i = 0; i < rests.length; i++) {
    allRest[i] = new Restoraunt(rests[i].innerHTML.replaceAll('•', '').replaceAll('₽', '').trim(),
     kitchens[i].innerHTML.replaceAll('•', '').replaceAll('₽', '').trim())

}

const filter = document.querySelector('#filter')
const container = document.querySelector('.grid-container')

filter.addEventListener('input', (event) => {
    console.log('inp')
    // let value = event.target.value.toLowerCase()
    // const filterdRests = allRest.filter((rest) => {
    //     return rest.restName.toLowerCase().includes(value)
    // })
    // render(filterdRests)
})

function render(rest) {
    container.innerHTML = `
    div class="store-card">
            <img src="img/${rest.img}">
            <h5 class="rest-name">${rest.restName}</h5>
            <p class="kitchen">${restKitchen}</p>
            <p>25-35 мин</p>
        </div>
    `
}

console.log(container)