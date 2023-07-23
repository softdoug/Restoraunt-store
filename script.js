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
    let value = event.target.value.toLowerCase()
    const filtredRests = allRest.filter(rest => {
        return  rest.restName.toLowerCase().includes(value)
    })
    console.log(filtredRests[0].restName);
    render(filtredRests)
})

function render(rest) {
    container.innerHTML = ''
    for (key in rest) {
        console.log(rest[key].restName);
        container.innerHTML += `
        div class="store-card">
                <img src="#">
                <h5 class="rest-name">${rest[key].restName}</h5>
                <p class="kitchen">${rest[key].restKitchen}</p>
                <p>25-35 мин</p>
            </div>
        `
    }
}

// console.log(container)