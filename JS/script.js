const $picture = document.getElementById('picture')
const $left = document.getElementById('left')
const $right = document.getElementById('right')

let mailPick = 'IMG/'
const tipePick = '.jpg'
const klPict = 10
let number = 4

var img = new Image();


$left.addEventListener('click', function() {
    number--
    img.src = mailPick + number + tipePick

    img.onload = function(){$picture.setAttribute('src', (mailPick + number + tipePick))};

    img.onerror = function(){
        number = klPict
        $picture.setAttribute('src', (mailPick + number + tipePick))
    };
    
})

$right.addEventListener('click', function() {
    number++
    img.src = mailPick + number + tipePick

    img.onload = function(){$picture.setAttribute('src', (mailPick + number + tipePick))};

    img.onerror = function(){
        number = 1
        $picture.setAttribute('src', (mailPick + number + tipePick))
    };

})
