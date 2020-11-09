const $polosaImg = document.getElementById('polosaImg')
const $safe = document.getElementById('safe')
const $podtvYdal = document.getElementById('podtvYdal')



let mailPick = 'IMG/'
document.querySelector('h1').innerHTML += ' ' + mailPick
const tipePick = '.jpg'
const klPict = 47
const klImg = 6
const sizeJump = 5
let number = 0;
let html = '';

for(var nomImg = 0; nomImg < klImg; nomImg++) {
    html += `<img id = "pict${nomImg}" title="${nomImg}.jpg" src="IMG/${nomImg}.jpg" alt="">`
}

html += '<br />'

$polosaImg.innerHTML = html

//////////////////////////////////////////////////////////////////////////////////////////

const $tagsImg = document.querySelectorAll('img')
const $left = document.getElementById('left')
const $right = document.getElementById('right')

const $jumpLeft = document.getElementById('jumpLeft')
const $jumpRight = document.getElementById('jumpRight')

let hags;

$polosaImg.addEventListener('click', () => {
    if(event.target.tagName == 'IMG')
    $safe.insertAdjacentHTML('beforeend', `<img title="${event.target.title}" src="IMG/${event.target.title}" alt="">`)
    console.log(event.target.title)
})

$safe.addEventListener('click', (e) => {
    if(event.target.tagName == 'IMG')

    if($podtvYdal.checked) {
    if(confirm('Убрать из закладок'))
    e.target.parentNode.removeChild(e.target);
    } else {
    e.target.parentNode.removeChild(e.target);
    }
})

$left.addEventListener('click', () => {
    number++

    procrytka()
})


$right.addEventListener('click', () => {
    number--

    if(number < 0) number = klPict * 10 - 1

    procrytka()
})

$jumpLeft.addEventListener('click', () => {
    number += sizeJump

    procrytka()
})

$jumpRight.addEventListener('click', () => {
    number -= sizeJump

    if(number < 0) number = klPict * 10 - 1

    procrytka()
})


function procrytka() {

    $tagsImg.forEach((item, hags) => conclusion(number, item, hags))
}



function conclusion(nameMyPict, $tagPict, hag) {

    nameMyPict = (nameMyPict + hag) % klPict

    var img = new Image();

    img.src = mailPick + nameMyPict + tipePick

    img.onload = () => {
        $tagPict.setAttribute('src', (mailPick + nameMyPict + tipePick))
        $tagPict.setAttribute('title', (nameMyPict + tipePick))
    };

    img.onerror = () => {
        nameMyPict = (nameMyPict) - klPict

        if(nameMyPict < 0) nameMyPict *= -1

        $tagPict.setAttribute('src', (mailPick + nameMyPict + tipePick))
        $tagPict.setAttribute('title', (nameMyPict + tipePick))
    };
}