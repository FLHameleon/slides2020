const $picture = document.getElementById('picture')
const $picture2 = document.getElementById('picture2')
const $picture3 = document.getElementById('picture3')
const $picture4 = document.getElementById('picture4')
const $picture5 = document.getElementById('picture5')
const $picture6 = document.getElementById('picture6')
const $left = document.getElementById('left')
const $right = document.getElementById('right')

let mailPick = 'IMG/'
const tipePick = '.jpg'
const klPict = 47
let number = 0



$left.addEventListener('click', function() {
    number++

    if(conclusion(number, $picture, 0)) 
         console.log(number)

    if(conclusion(number, $picture2, 1)) 
        console.log(number + 1)

    if(conclusion(number, $picture3, 2)) 
        console.log(number + 2)

    if(conclusion(number, $picture4, 3)) 
        console.log(number + 3)

    if(conclusion(number, $picture5, 4)) 
        console.log(number + 4)

    if(conclusion(number, $picture6, 5)) 
        console.log(number + 5)
})

$right.addEventListener('click', function() {
    number--

    if(number < 0) number = klPict * 10 - 1

    if(conclusion(number, $picture, 0)) 
         console.log(number)

    if(conclusion(number, $picture2, 1)) 
        console.log(number + 1)

    if(conclusion(number, $picture3, 2)) 
        console.log(number + 2)

    if(conclusion(number, $picture4, 3)) 
    console.log(number + 3)

    if(conclusion(number, $picture5, 4)) 
    console.log(number + 4)

    if(conclusion(number, $picture6, 5)) 
    console.log(number + 5)

})

function conclusion(nameMyPict, $tagPict, hag) {

    nameMyPict = (nameMyPict + hag) % klPict

    var img = new Image();

    img.src = mailPick + nameMyPict + tipePick

    img.onload = function() {
        $tagPict.setAttribute('src', (mailPick + nameMyPict + tipePick))
    };

    img.onerror = function(){
        nameMyPict = (nameMyPict) - klPict

        if(nameMyPict < 0) nameMyPict *= -1

        $tagPict.setAttribute('src', (mailPick + nameMyPict + tipePick))
    };

    return true
}
