class Restoraunt {
    constructor(restName, restKitchen) {
        this.restName = restName;
        this.restKitchen = restKitchen;
    }
    
}

const allRest = []
const rests = document.getElementsByClassName('rest-name')
const kitchens = Array.prototype.slice.call(document.getElementsByClassName('kitchen'))

for (let i = 0; i < rests.length; i++) {
    allRest[i] = new Restoraunt(rests[i].innerHTML.replaceAll('•', '').replaceAll('₽', '').trim(),
     kitchens[i].innerHTML.replaceAll('•', '').replaceAll('₽', '').trim())

}

console.log(allRest)
